import { marked, Token, Tokens } from 'marked';
import dompurify from 'dompurify';
import * as params from '@params';
import * as Handlebars from 'handlebars';
import { Map as MLMap } from 'maplibre-gl';
import { AlizarinModel, client, RDM, graphManager, staticStore, staticTypes, viewModels, renderers, wasmReady, slugify } from 'alizarin/inline';
import { addMarkerImage } from 'map-tools';
import {
  getSearchUrlWithContext,
  getNavigation,
  hasSearchContext,
  getAssetUrlWithContext,
  getSearchParams as getSearchContextParams,
  updateBreadcrumbs
} from './searchContext';
import { debug, debugError } from './debug';
import { IAssetManager, AssetMetadata, resolveAssetManagerWith } from './managers';
import { loadTemplate, getPrecompiledTemplate } from 'handlebar-utils';
import { loadTreegrid } from './w3c-treegrid';

// Types and interfaces
interface AssetUrlParams {
  model: string;
  publicView: boolean;
}

interface Asset {
  asset: AlizarinModel<any>;
  meta: AssetMetadata;
}

interface Dialog {
  title: string;
  body: string;
}

interface ModelFileConfig {
  graph: string;
  template?: string;
}

// Configuration
const MODEL_FILES: Record<string, ModelFileConfig> = {
  "076f9381-7b00-11e9-8d6b-80000b44d1d9": {
    graph: "Heritage Asset.json",
    template: '/templates/heritage-asset-public-hb.md'
  },
  "8d41e49e-a250-11e9-9eab-00224800b26d": {
    graph: "Consultation.json",
    template: '/templates/heritage-asset-public-hb.md'
  },
  "b9e0701e-5463-11e9-b5f5-000d3ab1e588": {
    graph: "Activity.json",
    template: '/templates/activity.md'
  },
  "49bac32e-5464-11e9-a6e2-000d3ab1e588": {
    graph: "Maritime Vessel.json",
    template: '/templates/maritime-vessel-public-hb.md'
  },
  "22477f01-1a44-11e9-b0a9-000d3ab1e588": {
    graph: "Person.json",
  },
  "3a6ce8b9-0357-4a72-b9a9-d8fdced04360": {
    graph: "Registry.json",
  }
};

declare global {
  interface Window {
    archesUrl?: string;
    alizarinAsset?: Asset;
    showDialog?: (dialogId: string) => void;
  }
}

// Alizarin-specific setup (Handlebars helpers are registered in static/js/handlebars-helpers.js)
function initializeAlizarinConfig(): void {
  viewModels.CUSTOM_DATATYPES.set("tm65centrepoint", "non-localized-string");
  // Arches 7 'reference' datatype — map to non-localized-string so values render as text
  viewModels.CUSTOM_DATATYPES.set("reference", "non-localized-string");
}

// URL parameter parsing (distinct from search context params)
function parseAssetUrlParams(): AssetUrlParams {
  const urlParams = new URLSearchParams(window.location.search);
  const model = urlParams.get("model");

  if (!model) {
    debug("No model provided in URL");
  } else if (model !== slugify(model)) {
    debug("Slug does not match slugified form:", model, "->", slugify(model));
  }

  return {
    model: model || '',
    publicView: urlParams.get("full") === "true"
  };
}

// Alizarin initialization
async function initializeAlizarin(): Promise<typeof graphManager> {
  await wasmReady;

  const archesClient = new client.ArchesClientRemoteStatic('', {
    allGraphFile: () => "definitions/graphs/_all.json",
    graphToGraphFile: (graph: staticTypes.StaticGraphMeta) =>
      `definitions/graphs/resource_models/${graph.name.toString()}.json`,
    graphIdToResourcesFiles: (graphId: staticTypes.StaticGraphMeta) =>
      [`definitions/business_data/_${graphId.toString()}.json`],
    resourceIdToFile: (resourceId: string) =>
      `definitions/business_data/${resourceId}.json`,
    collectionIdToFile: (collectionId: string) =>
      `definitions/reference_data/collections/${collectionId}.json`
  });

  graphManager.archesClient = archesClient;
  staticStore.archesClient = archesClient;
  RDM.archesClient = archesClient;

  await graphManager.initialize({ graphs: null, defaultAllowAllNodegroups: true });
  return graphManager;
}

// Asset loading
async function loadAssetList(model: string, gm: typeof graphManager): Promise<Asset> {
  const rmvm = await gm.loadGraph(model);
  console.log('Loaded rmvm');
  const assets = await rmvm.allSummaries();
  console.log('Loaded asset from graph manager');
  return Promise.all(assets.map((asset) => getAssetMetadata(asset).then(meta => { return { asset, meta }; })));
}

async function fetchTemplate(asset: AlizarinModel<any>): Promise<HandlebarsTemplateDelegate | undefined> {
  const graphId = asset.__.wkrm.graphId;
  const config = MODEL_FILES[graphId];
  if (config?.template) {
    // Use precompiled template if available
    try {
      return getPrecompiledTemplate(config.template);
    } catch (e) {
      console.warn(`Precompiled template not found for ${config.template}, falling back to runtime compilation`);
      const response = await fetch(config.template);
      return Handlebars.compile(await response.text());
    }
  }
}

async function getAssetMetadata(asset: AlizarinModel<any>): Promise<AssetMetadata> {
  let location: [number, number] | null = null;
  let geometry: any = null;

  return {
    resourceinstanceid: `${await asset.id}`,
    geometry,
    location,
    title: await asset.getName(true),
  };
}

function extractCentrePoint(geometry: any): [number, number] | null {
  if (!geometry?.features?.[0]?.geometry?.coordinates) {
    return null;
  }

  const coordinates = geometry.features[0].geometry.coordinates;

  // If it's already a point, return coordinates directly
  if (!Array.isArray(coordinates[0])) {
    return coordinates as [number, number];
  }

  // Handle polygon - calculate centroid
  let polygons = coordinates[0];
  if (Array.isArray(polygons[0]?.[0])) {
    polygons = polygons.flat();
  }

  const centre = polygons.reduce(
    (c: [number, number], p: [number, number]) => {
      c[0] += p[0] / polygons.length;
      c[1] += p[1] / polygons.length;
      return c;
    },
    [0, 0] as [number, number]
  );

  return centre;
}

// Shared renderer options (URLs disabled for now)
const RENDERER_OPTIONS = {
  conceptValueToUrl: async () => null,
  domainValueToUrl: async () => null,
  resourceReferenceToUrl: async () => null
};

function createGovukMarkedRenderer(
  nodes: Map<string, any>,
  options: { showNodeDetails?: boolean } = {}
) {
  return {
    link(token: { href?: string; title?: string; text: string }) {
      if (token.href?.startsWith("@")) {
        const alias = token.href.substring(1);
        const node = nodes.get(alias);

        if (!node) {
          debugError(`${alias} not found in nodes`);
          return `<span>${token.text}</span>`;
        }

        const detailsContent = options.showNodeDetails
          ? `<strong>Alias: ${node.alias}</strong><br/>
             <strong>Type: ${node.datatype}</strong><br/>
             <p>Description: ${node.description}</p>`
          : `<p>${node.description || node.name}</p>`;

        return `
          <details class="govuk-details">
            <summary class="govuk-details__summary">
              <span class="govuk-details__summary-text">${token.text}</span>
            </summary>
            <div class="govuk-details__text${options.showNodeDetails ? ' node-description' : ''}">
              ${detailsContent}
            </div>
          </details>
        `;
      }
      return `<a title="${token.title || ''}" href="${token.href}">${token.text}</a>`;
    },

    hr() {
      return '<hr class="govuk-section-break govuk-section-break--visible">';
    },

    table(this: { parser: { parseInline: (tokens: any[]) => string } }, token: { header: any[]; rows: any[][] }) {
      const headers = token.header
        .map((header: { tokens: any[] }) =>
          `<th scope="col" class="govuk-table__header">${this.parser.parseInline(header.tokens)}</th>`
        )
        .join('\n');

      const rows = token.rows
        .map((row: { tokens: any[] }[]) => {
          const cells = row
            .map((col: { tokens: any[] }) =>
              `<td class="govuk-table__cell">${this.parser.parseInline(col.tokens)}</td>`
            )
            .join('\n');
          return `<tr class="govuk-table__row">${cells}</tr>`;
        })
        .join('\n');

      return `
        <table class="govuk-table">
          <thead class="govuk-table__head">
            <tr class="govuk-table__row">${headers}</tr>
          </thead>
          <tbody class="govuk-table__body">${rows}</tbody>
        </table>
      `;
    }
  };
}

// Return type for sectioned HTML output
interface SectionedHtml {
  [sectionId: string]: string;
}

async function renderToHtml(markdown: string, nodes: Map<string, any>, showNodeDetails = false): Promise<SectionedHtml> {
  const nodeTemplate = await loadTemplate('/templates/asset-nodegroup-template.html', true) as HandlebarsTemplateDelegate;

  // Custom token type for nodeBlock
  interface NodeBlockField {
    alias: string;      // The node alias (from @alias)
    label: string;      // Display label
    value: string;      // The value after the colon
    slug?: string;      // The url slug for the related resource
    node?: any;         // Looked up node data
  }

  interface NodeBlockToken {
    type: 'nodeBlock';
    raw: string;
    title: string;
    icon?: string;
    body: string;
    fields: NodeBlockField[];
    tokens: Token[];
    initiallyCollapsed: boolean;
    sectionId?: string;
  }

  interface SectionToken {
    type: 'section';
    raw: string;
    sectionId: string;
    tokens: Token[];
  }

  // Track sections and their content
  const sections: SectionedHtml = {};
  let currentSectionId: string = 'default';
  sections[currentSectionId] = '';

  // Register extensions for sections and nodeBlocks
  marked.use({
    extensions: [
      {
        name: 'section',
        level: 'block',
        start(src: string) {
          return src.match(/^<!--section:/)?.index;
        },
        tokenizer(this: any, src: string): SectionToken | undefined {
          // Match <!--section:id--> followed by content until next section or end
          const match = src.match(/^<!--section:([\w-]+)-->\n?([\s\S]*?)(?=<!--section:|\s*$)/);
          if (match) {
            const sectionId = match[1];
            const content = match[2];

            currentSectionId = sectionId;

            const token: SectionToken = {
              type: 'section',
              raw: match[0],
              sectionId: sectionId,
              tokens: []
            };

            // Tokenize the inner content
            this.lexer.blockTokens(content, token.tokens);

            return token;
          }
        },
        renderer(this: any, token: SectionToken) {
          const innerHtml = this.parser.parse(token.tokens);
          // Store in sections map and return with marker for later extraction
          return `<!--section:${token.sectionId}-->${innerHtml}`;
        }
      },
      // NodeBlock extension
      {
        name: 'nodeBlock',
        level: 'block',
        start(src: string) {
          return src.match(/^::/)?.index;
        },
        tokenizer(src: string): NodeBlockToken | undefined {
          // Match ::Title{icon}::\n...content...\n::end:: (icon is optional)
          const match = src.match(/^::([^:{]+)(?:\{([^}]+)\})?::\n([\s\S]*?)::end::/);
          if (match) {
            const title = match[1].trim();
            const icon = match[2]?.trim();
            let body = match[3].trim();
            const id = `${slugify(title)}-${currentSectionId}`;
            let initiallyCollapsed = params.node_config?.collapsednodes?.includes(id);

            // Parse fields - capture multi-line values until next [field] or end
            // Use multiline mode with ^ to only match [label] at start of line
            const fields: NodeBlockField[] = [];
            const fieldPattern = /^\[([^\]]+)\][ \t]+([\s\S]*?)(?=\n\[|$)/gm;
            let fieldMatch: RegExpExecArray | null;
            let hadFieldMarkers = false;

            while ((fieldMatch = fieldPattern.exec(body)) !== null) {
              hadFieldMarkers = true;
              const label = fieldMatch[1].trim();
              const value = fieldMatch[2].trim();

              // Check if it's a node reference (starts with @)
              const isNodeRef = label.startsWith('@');
              const alias = isNodeRef ? label.substring(1) : null;
              const node = alias ? nodes.get(alias) : null;

              // Extract data-id from alizarin-resource-instance spans to build slug
              const dataIdMatch = value.match(/data-id=['"]([^'"]+)['"]/);
              const resourceId = dataIdMatch ? dataIdMatch[1] : null;
              const slug = resourceId ? `?slug=${resourceId}` : null

              // Skip fields with empty/nan values
              if (value.trim() === '' || value.trim().toLowerCase() === 'nan') continue;

              fields.push({
                alias: alias || '',
                label: isNodeRef ? (node?.name || alias) : label,
                value,
                slug,
                node
              });
            }

            if (!body || (hadFieldMarkers && fields.length === 0)) {
              body = '<p><strong>No data available</strong></p>';
            }

            const token: NodeBlockToken = {
              type: 'nodeBlock',
              raw: match[0],
              title,
              icon,
              body,
              fields,
              tokens: [],
              initiallyCollapsed,
              sectionId: currentSectionId
            };

            return token;
          }
        },
        renderer(token) {
          const nodeToken = token as NodeBlockToken;
          const titleId = slugify(nodeToken.title);
          const sectionId = nodeToken.sectionId || 'default';
          const id = `${titleId}-${sectionId}`;

          return nodeTemplate({
            title: nodeToken.title,
            icon: nodeToken.icon,
            fields: nodeToken.fields,
            body: nodeToken.body,
            id: id,
            initiallyExpanded: !nodeToken.initiallyCollapsed,
            sectionId: sectionId
          });
        }
      }
    ]
  });

  const renderer = createGovukMarkedRenderer(nodes, { showNodeDetails }) as Parameters<typeof marked.use>[0]['renderer'];
  marked.use({ renderer });

  const parsed = await marked.parse(markdown);

  // Split the parsed output by section markers and collect into sections object
  const sectionPattern = /<!--section:([\w-]+)-->/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let activeSectionId = 'default';

  while ((match = sectionPattern.exec(parsed)) !== null) {
    // Add content before this marker to the active section
    const content = parsed.slice(lastIndex, match.index);
    if (content.trim()) {
      sections[activeSectionId] = (sections[activeSectionId] || '') + content;
    }
    // Switch to new section
    activeSectionId = match[1];
    if (!sections[activeSectionId]) {
      sections[activeSectionId] = '';
    }
    lastIndex = match.index + match[0].length;
  }

  // Add remaining content to the last active section
  const remainingContent = parsed.slice(lastIndex);
  if (remainingContent.trim()) {
    sections[activeSectionId] = (sections[activeSectionId] || '') + remainingContent;
  }

  // Sanitize each section
  for (const sectionId of Object.keys(sections)) {
    sections[sectionId] = dompurify.sanitize(sections[sectionId]);
  }

  // Remove empty default section if other sections exist
  if (sections['default']?.trim() === '' && Object.keys(sections).length > 1) {
    delete sections['default'];
  }

  return sections;
}

// Helper to inject sectioned HTML into the DOM
function injectSections(sections: SectionedHtml): void {
  for (const [sectionId, html] of Object.entries(sections)) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.innerHTML = html;
    } else {
      // Fallback: if no matching element, append to 'asset-overview' element
      const assetElement = document.getElementById('asset-overview');
      if (assetElement) {
        assetElement.innerHTML += html;
      }
    }
  }
}

// Rendering functions
async function renderAssetForDebug(asset: Asset): Promise<Record<string, Dialog>> {
  const alizarinRenderer = new renderers.MarkdownRenderer({
    ...RENDERER_OPTIONS,
    nodeToUrl: (node: staticTypes.StaticNode) => `@${node.alias}`
  });

  let markdown = await alizarinRenderer.render(asset.asset);

  if (Array.isArray(markdown)) {
    markdown = markdown.join("\n\n");
  }

  const treegridElt = document.createElement('tree-grid');
  document.getElementById('asset-overview').appendChild(treegridElt);
  const nodes = asset.asset.__.getNodeObjectsByAlias();

  setupDialogLinks();

  const nodeObjectsByAlias = asset.asset.__.getNodeObjectsByAlias();
  loadTreegrid(markdown, treegridElt, nodeObjectsByAlias);

  return buildImageDialogs([], asset.meta.title);
}

interface ImageRef {
  image: any;
  index: number;
}

async function renderAssets(assetList: AssetList, template: HandlebarsTemplateDelegate): Promise<Record<string, Dialog>> {
  const groups = new Map();
  for (const { asset, meta } of assetList) {
    const modelName = asset.__.wkrm.modelName;
    if (!groups.has(modelName)) {
      groups.set(modelName, []);
    }

    groups.get(modelName).push(
      [
        meta.title,
        `<li><a href='../asset/?slug=${await asset.getSlug()}&full=true'>${await asset.getName()}</a></li>`
      ]
    );
  }

  const assetElement = document.getElementById('asset-overview');
  for (const [ modelName, rows ] of groups.entries()) {
    assetElement.innerHTML += `
    <h1>${modelName}</h1>
    <ul>
    ${rows.sort(([a, a2], [b, b2]) => a && a.localeCompare(b)).map(a => a[1]).join('\n')}
    </ul>
    `;
  }
}

function categorizeExternalReferences(nonstaticAsset: any): {
  images: ImageRef[];
  files: any[];
  otherEcrs: any[];
} {
  const images: ImageRef[] = [];
  const files: any[] = [];
  const otherEcrs: any[] = [];

  const ecrs = nonstaticAsset.external_cross_references;
  if (!ecrs?.length) {
    return { images, files, otherEcrs };
  }

  ecrs.forEach((ecr: any, index: number) => {
    const type = ecr.external_cross_reference_notes?.external_cross_reference_description?.toLowerCase();

    // Skip ECR items with no meaningful data
    if (!ecr.external_cross_reference && !ecr.url && !ecr.external_cross_reference_source) {
      return;
    }

    if (ecr.url && type === 'image') {
      images.push({ image: ecr, index });
    } else if (ecr.url && ['pdf', 'doc', 'docx'].includes(type)) {
      files.push(ecr);
    } else {
      otherEcrs.push(ecr);
    }
  });

  return { images, files, otherEcrs };
}

function setupDialogLinks(): void {
  const dialogLinks = document.getElementsByClassName("dialog-link");
  for (const link of dialogLinks) {
    link.addEventListener("click", function(this: HTMLElement) {
      const dialogId = this.getAttribute("data-dialog-id");
      if (dialogId) {
        window.showDialog?.(dialogId);
      }
    });
  }
}

async function buildImageDialogs(images: ImageRef[], assetTitle: string): Promise<Record<string, Dialog>> {
  const dialogs: Record<string, Dialog> = {};

  for (const { image, index } of images) {
    dialogs[`image_${index}`] = {
      title: `<h3>Image for ${assetTitle}</h3>\n<h4>${await image.external_cross_reference}</h4>`,
      body: `<img src='${image.url.__clean}' />`
    };
  }

  return dialogs;
}

function addAssetToMap(asset: Asset) {
  const mapEl = document.getElementById('map');
  if (!mapEl) {
    debug('No #map element found on page — skipping map render');
    return;
  }

  const location = asset.meta.location;
  if (!location) {
    mapEl.classList.add('map-hidden');
    return;
  }

  try {
    const centre = location;
    const zoom = 16;
    const map = new MLMap({
      style: 'https://tiles.openfreemap.org/styles/bright',
      pitch: 20,
      bearing: 0,
      container: mapEl,
      center: centre,
      zoom: zoom
    });
    map.on('load', async () => {
      try {
        await addMarkerImage(map as any);
        map.addSource('assets', {
          type: 'geojson',
          data: asset.meta.geometry,
        });
        map.addSource('assets-marker', {
          type: 'geojson',
          data: {
            type: "Feature",
            properties: {},
            geometry: {
              "type": "Point",
              "coordinates": asset.meta.location,
            }
          }
        });
        let paint: {
          'fill-color': string,
          'fill-opacity': number,
          'fill-outline-color'?: string | null
        } = {
          'fill-color': '#a88',
          'fill-opacity': 0.8,
        };
        if (asset.meta.geometry.type === "FeatureCollection" && asset.meta.geometry.features.length == 1) {
          const feature = asset.meta.geometry.features[0];
          if (feature.properties && feature.properties.type === 'Grid Square') {
            paint = {
              'fill-color': 'rgba(255, 255, 255, 0.1)',
              'fill-outline-color': '#aa4444',
              'fill-opacity': 0.4
            }
          }
        }
        // Only add 3d-buildings layer if the style source exists
        if (map.getSource('openmaptiles')) {
          map.addLayer({
            'id': '3d-buildings',
            'source': 'openmaptiles',
            'source-layer': 'building',
            'filter': [
              "!",
              ["to-boolean",
                ["get", "hide_3d"]
              ]
            ],
            'type': 'fill-extrusion',
            'minzoom': 13,
            'paint': {
              'fill-extrusion-color': 'lightgray',
              'fill-extrusion-opacity': 0.5,
              'fill-extrusion-height': [
                'interpolate',
                ['linear'],
                ['zoom'],
                13,
                0,
                16,
                ['get', 'render_height']
              ],
              'fill-extrusion-base': ['case',
                ['>=', ['get', 'zoom'], 16],
                ['get', 'render_min_height'], 0
              ]
            }
          });
        }
        map.addLayer({
          'id': 'asset-boundaries',
          'type': 'fill',
          'source': 'assets',
          'paint': paint,
          'filter': ['==', '$type', 'Polygon']
        });
        map.addLayer({
          'id': 'assets-marker',
          'type': 'symbol',
          'source': 'assets-marker',
          'layout': {
            'icon-image': 'marker-new',
            'text-offset': [0, 1.25],
            'text-anchor': 'top'
          },
          'filter': ['==', '$type', 'Point']
        });
      } catch (layerError) {
        debugError('Error adding map layers:', layerError);
      }
    });
    map.on('error', (e: any) => {
      debugError('MapLibre error:', e.error?.message || e);
    });
  } catch (mapError) {
    debugError('Failed to initialize map:', mapError);
    mapEl.classList.add('map-hidden');
  }
}

// Asset page manager
class AssetManager implements IAssetManager {
  private graphManager: typeof graphManager | null = null;
  private assetList: Asset | null = null;
  private dialogs: Record<string, Dialog> = {};
  private _model: string = '';
  private _publicView: boolean = true;

  async initialize(): Promise<void> {
    initializeAlizarinConfig();
    this.graphManager = await initializeAlizarin();
    debug("Alizarin initialized");
  }

  getGraphManager(): typeof graphManager | null {
    return this.graphManager;
  }

  setUrlParams(model: string, publicView: boolean): void {
    this._model = model;
    this._publicView = publicView;
  }

  async loadAssetsFromUrl(): Promise<Asset> {
    const model = this._model;
    debug("Loading asset:", model, "publicView:", this._publicView);

    if (!model) {
      throw new Error("No model provided - add ?model=<model-id> to the URL");
    }

    if (!this.graphManager) {
      throw new Error("AssetManager not initialized");
    }

    this.assetList = await loadAssetList(model, this.graphManager);

    debug("Assets loaded");

    return this.assetList;
  }

  async render(publicView: boolean): Promise<void> {
    if (!this.assetList) {
      throw new Error("No assets loaded");
    }

    renderAssets(this.assetList);

    // const template = await fetchTemplate(this.asset.asset);

    // this.dialogs = (publicView && template)
    //   ? await renderAsset(this.asset, template)
    //   : await renderAssetForDebug(this.asset);

    // this.setupShowDialog();
    // debug("Dialogs configured:", Object.keys(this.dialogs));
  }

  private setupShowDialog(): void {
    window.showDialog = (dialogId: string) => {
      const dialog = this.dialogs[dialogId];
      if (!dialog) {
        throw new Error(`Could not find dialog: ${dialogId}`);
      }

      const headingEl = document.getElementById("map-dialog__heading");
      const contentEl = document.getElementById("map-dialog__content");
      const dialogEl = document.getElementById("map-dialog") as HTMLDialogElement | null;

      if (headingEl) headingEl.innerHTML = dialog.title;
      if (contentEl) contentEl.innerHTML = dialog.body;
      dialogEl?.showModal();
    };
  }

  getAssetList(): Asset | null {
    return this.assetList;
  }
}

async function setupResourceModelInfo(gm: typeof graphManager): Promise<void> {
  const dfcRegistryElement = document.getElementById('resource-models');
  if (!dfcRegistryElement) return;
  let innerHtml = "<ul>";
  for (const [modelClassName, wkrm] of gm.wkrms) {
    innerHtml += `<li><a href="?model=${wkrm.graphId}">${modelClassName}</a></li>`;
  }
  innerHtml += "</ul>";
  dfcRegistryElement.innerHTML = innerHtml;
}

async function setupRegistryInfo(asset: Asset): Promise<void> {
  const dfcRegistryElement = document.getElementById('dfc-registry');
  if (!dfcRegistryElement) return;

  const name = asset.asset.__.wkrm.modelName;
  if (await asset.asset.__has('record_and_registry_membership')) {
    const memberships = await asset.asset.record_and_registry_membership;
    if (memberships) {
      const items = await Promise.all(
        memberships.map(async (membership: any) => {
          const registry = await membership.record_or_registry;
          const json = await registry.forJson();
          return `<li>${"Heritage Place"}</li>`;
        })
      );
    }
    dfcRegistryElement.innerHTML = `<ul><li>${name}</li></ul>`;
  } else {
    dfcRegistryElement.innerHTML = `<ul><li>${name}</li></ul>`;
  }
}

function formatTimeElements(): void {
  document.querySelectorAll<HTMLTimeElement>('time').forEach(elt => {
    const date = new Date(elt.dateTime);
    elt.innerHTML = date.toLocaleDateString();
  });
}

// Main entry point
window.addEventListener('DOMContentLoaded', async () => {
  const assetManagerInstance = new AssetManager();

  await assetManagerInstance.initialize();
  resolveAssetManagerWith(assetManagerInstance);

  const { model, publicView } = parseAssetUrlParams();
  assetManagerInstance.setUrlParams(model, publicView);
  const assetList = await assetManagerInstance.loadAssetsFromUrl();

  // Run UI setup tasks concurrently where possible
  // Render content and set up map separately so a render error doesn't block the map
  const renderResult = Promise.all([
    assetManagerInstance.render(publicView),
    setupResourceModelInfo(assetManagerInstance.getGraphManager())
  ]);

  await renderResult;

  formatTimeElements();

  // Store current model for browser back button focus behavior
  sessionStorage.setItem('lastViewedModel', model);

  history.pushState({}, "", `?model=${model}&full=${!publicView}`);
}, { once: true });
