// utils/precompile-templates.ts
import Handlebars from 'handlebars';
import { writeFileSync, mkdirSync, readFileSync } from 'fs';
import { join } from 'path';

const CDN_BASE = 'https://cdn.jsdelivr.net/npm/@qld-gov-au/qgds-bootstrap5@2.0.9/dist/assets/components/bs5/';

const COMPONENTS = [
  { name: 'header', partials: ['headerBrand'] }
];

// Local templates to precompile (from themes/hugo-theme-qld-design-system/static/templates/ and static/templates/)
const LOCAL_HTML_TEMPLATES = [
  'result-card-template.html',
  'filter-list-template.html',
  'asset-nodegroup-template.html',
  // 'map-dialog-template.html'
];

const LOCAL_MD_TEMPLATES = [
  'heritage-asset-public-hb.md',
  // 'activity.md',
  // 'maritime-vessel-public-hb.md'
];

async function fetchTemplate(name: string, dir: string): Promise<string> {
  const url = `${CDN_BASE}${dir}/${name}.hbs`;
  console.log(`Fetching template: ${url}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return await res.text();
}

function loadLocalHTMLTemplate(filename: string): string {
  // Try multiple locations for templates
  const possiblePaths = [
    join(process.cwd(), 'themes', 'hugo-theme-qld-design-system', 'static', 'templates', filename),
    join(process.cwd(), 'themes', 'hugo-theme-qld-design-system', filename),
    join(process.cwd(), 'static', 'templates', filename),
  ];

  for (const path of possiblePaths) {
    try {
      console.log(`Trying local HTML template: ${path}`);
      return readFileSync(path, 'utf-8');
    } catch (e) {
      // Continue to next path
    }
  }

  throw new Error(`Template ${filename} not found in any of the following locations:\n${possiblePaths.join('\n')}`);
}

function loadLocalMDTemplate(filename: string): string {
  const path = join(process.cwd(), 'static', 'templates', filename);
  console.log(`Loading local MD template: ${path}`);
  return readFileSync(path, 'utf-8');
}

async function precompileTemplates() {
  const output: Record<string, { template?: string; partials?: Record<string, string> }> = {};

  // Precompile CDN components
  for (const comp of COMPONENTS) {
    console.log(`Processing component: ${comp.name}`);
    output[comp.name] = {};

    // Precompile partials
    if (comp.partials) {
      output[comp.name].partials = {};
      for (const partial of comp.partials) {
        const txt = await fetchTemplate(partial, comp.name);
        const compiled = Handlebars.precompile(txt) as unknown as string;
        output[comp.name].partials![partial] = compiled;
      }
    }

    // Precompile main template
    const tplText = await fetchTemplate(comp.name, comp.name);
    const compiled = Handlebars.precompile(tplText) as unknown as string;
    output[comp.name].template = compiled;
  }

  // Precompile local HTML templates
  for (const templateFile of LOCAL_HTML_TEMPLATES) {
    const templateName = templateFile.replace('.html', '');
    console.log(`Processing local HTML template: ${templateName}`);
    const txt = loadLocalHTMLTemplate(templateFile);
    const compiled = Handlebars.precompile(txt) as unknown as string;
    output[templateName] = { template: compiled };
  }

  // Precompile local MD templates
  for (const templateFile of LOCAL_MD_TEMPLATES) {
    const templateName = templateFile.replace('.md', '');
    console.log(`Processing local MD template: ${templateName}`);
    const txt = loadLocalMDTemplate(templateFile);
    const compiled = Handlebars.precompile(txt) as unknown as string;
    output[templateName] = { template: compiled };
  }

  // Ensure output directory exists
  mkdirSync(join(process.cwd(), 'static', 'js'), { recursive: true });

  // Write precompiled templates as executable JavaScript (not JSON)
  const outputPath = join(process.cwd(), 'static', 'js', 'precompiled-templates.js');

  let jsContent = '// Auto-generated precompiled Handlebars templates\n';
  jsContent += 'window.__PRECOMPILED_TEMPLATES = {};\n\n';

  for (const [compName, compData] of Object.entries(output)) {
    jsContent += `// Component: ${compName}\n`;
    jsContent += `window.__PRECOMPILED_TEMPLATES['${compName}'] = {};\n`;

    if (compData.partials) {
      jsContent += `window.__PRECOMPILED_TEMPLATES['${compName}'].partials = {};\n`;
      for (const [partialName, compiledCode] of Object.entries(compData.partials)) {
        jsContent += `window.__PRECOMPILED_TEMPLATES['${compName}'].partials['${partialName}'] = Handlebars.template(${compiledCode});\n`;
      }
    }

    if (compData.template) {
      jsContent += `window.__PRECOMPILED_TEMPLATES['${compName}'].template = Handlebars.template(${compData.template});\n`;
    }
    jsContent += '\n';
  }

  writeFileSync(outputPath, jsContent, 'utf-8');
  console.log(`✅ Precompiled templates written to ${outputPath}`);
}

precompileTemplates().catch(console.error);
