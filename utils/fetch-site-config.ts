#!/usr/bin/env npx ts-node
/**
 * Fetch site configuration from blob storage and prepare for Hugo build.
 *
 * This script:
 * 1. Downloads site-config.yaml from blob storage
 * 2. Converts asset paths to full blob URLs (no downloading)
 * 3. Generates config/_default/params.yaml for Hugo
 * 4. Generates data/siteConfig.yaml for template access
 *
 * Usage: npx ts-node utils/fetch-site-config.ts
 *
 * Environment variables:
 *   BLOB_BASE_URL    - Base URL for blob storage (required)
 *   BLOB_CONFIG_FILE - Config filename (default: site-config.yaml)
 *   SKIP_BLOB_FETCH  - Set to 'true' to skip fetching (use local files)
 */

import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import * as http from 'http';
import * as yaml from 'yaml';

// Paths
const PROJECT_ROOT = path.resolve(__dirname, '..');
const CONFIG_DIR = path.join(PROJECT_ROOT, 'config', '_default');
const DATA_DIR = path.join(PROJECT_ROOT, 'data');

// Environment
const BLOB_BASE_URL = process.env.BLOB_BASE_URL;
const BLOB_CONFIG_FILE = process.env.BLOB_CONFIG_FILE || 'site-config.yaml';
const SKIP_BLOB_FETCH = process.env.SKIP_BLOB_FETCH === 'true';

interface SiteConfig {
  version: string;
  site: {
    title: string;
    sitename: string;
    baseURL?: string;
    languageCode?: string;
  };
  branding: {
    logo?: { src: string; altText: string };
    footerLogo?: { src: string; altText: string };
    favicon?: string;
    variantClass?: string;
  };
  location: {
    defaultCenter: [number, number];
    defaultZoom: number;
    bounds?: [[number, number], [number, number]];
  };
  header: Record<string, unknown>;
  navbar: Record<string, unknown>;
  footer: Record<string, unknown>;
  analytics?: {
    ga4token?: string;
    ga4gtag?: string;
  };
  features?: Record<string, unknown>;
  externalLinks?: Record<string, unknown>;
  params?: Record<string, unknown>;
}

/**
 * Fetch a URL and return the content as a Buffer
 */
async function fetchUrl(url: string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;

    client.get(url, (res) => {
      // Follow redirects
      if (res.statusCode === 301 || res.statusCode === 302) {
        const redirectUrl = res.headers.location;
        if (redirectUrl) {
          fetchUrl(redirectUrl).then(resolve).catch(reject);
          return;
        }
      }

      if (res.statusCode !== 200) {
        reject(new Error(`Failed to fetch ${url}: HTTP ${res.statusCode}`));
        return;
      }

      const chunks: Buffer[] = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

/**
 * Convert relative asset path to full blob URL
 * If already a full URL, return as-is
 */
function toFullUrl(assetPath: string): string {
  if (!assetPath) return assetPath;

  // Already a full URL
  if (assetPath.startsWith('http://') || assetPath.startsWith('https://')) {
    return assetPath;
  }

  // Relative path - convert to blob URL
  return `${BLOB_BASE_URL}/${assetPath}`;
}

/**
 * Process image references in config - convert to full blob URLs
 */
function processImageUrls(config: SiteConfig): SiteConfig {
  const processedConfig = JSON.parse(JSON.stringify(config)) as SiteConfig;

  // Process branding images
  if (processedConfig.branding) {
    if (processedConfig.branding.logo?.src) {
      processedConfig.branding.logo.src = toFullUrl(processedConfig.branding.logo.src);
      console.log(`  Logo: ${processedConfig.branding.logo.src}`);
    }

    if (processedConfig.branding.footerLogo?.src) {
      processedConfig.branding.footerLogo.src = toFullUrl(processedConfig.branding.footerLogo.src);
      console.log(`  Footer logo: ${processedConfig.branding.footerLogo.src}`);
    }

    if (processedConfig.branding.favicon) {
      processedConfig.branding.favicon = toFullUrl(processedConfig.branding.favicon);
      console.log(`  Favicon: ${processedConfig.branding.favicon}`);
    }
  }

  // Process header logo if different from branding
  const mainContent = processedConfig.header?.mainContent as Record<string, unknown> | undefined;
  if (mainContent?.logo) {
    const logo = mainContent.logo as { src?: string };
    if (logo.src) {
      logo.src = toFullUrl(logo.src);
      console.log(`  Header logo: ${logo.src}`);
    }
  }

  // Process footer logo if specified separately
  const footerLogo = processedConfig.footer?.footerLogo as { src?: string } | undefined;
  if (footerLogo?.src) {
    footerLogo.src = toFullUrl(footerLogo.src);
  }

  return processedConfig;
}

/**
 * Convert site-config.yaml to Hugo params.yaml format
 */
function generateParamsYaml(config: SiteConfig): string {
  const headerConfig = config.header as Record<string, unknown>;
  const params: Record<string, unknown> = {
    // Top-level params
    sitename: config.site.sitename,
    variantClass: config.branding?.variantClass || 'dark',

    // Analytics
    ga4token: config.analytics?.ga4token || '',
    ga4gtag: config.analytics?.ga4gtag || '',

    // Features as params
    ...(config.features || {}),

    // Additional params
    ...(config.params || {}),

    // External links
    archesurl: (config.externalLinks as Record<string, unknown>)?.archesInstance || '',
    feedbackurl: config.params?.feedbackurl || '/feedback/',
    cookies: config.params?.cookies || '/cookies/',
    product: (config.externalLinks as Record<string, unknown>)?.product || config.site.sitename,

    // Header config
    header: {
      ...headerConfig,
      mainContent: {
        ...(headerConfig?.mainContent as Record<string, unknown> || {}),
        siteTitle: headerConfig?.siteTitle || config.site.title,
        subline: headerConfig?.subline || '',
        logo: config.branding?.logo,
      },
    },

    // Footer config
    footer: {
      ...config.footer,
      footerLogo: config.branding?.footerLogo
        ? { ...config.branding.footerLogo, show: true }
        : undefined,
    },

    // Navbar config
    navbar: config.navbar,

    // Location for map pages
    location: config.location,
  };

  const header = `# Client-Specific Parameters
# ==========================
# THIS FILE IS AUTO-GENERATED from blob storage by fetch-site-config.ts
# DO NOT EDIT MANUALLY - changes will be overwritten
#
# Generated: ${new Date().toISOString()}
# Source: ${BLOB_BASE_URL}/${BLOB_CONFIG_FILE}

`;

  return header + yaml.stringify(params);
}

/**
 * Main function
 */
async function main(): Promise<void> {
  console.log('=== Fetch Site Config ===\n');

  if (SKIP_BLOB_FETCH) {
    console.log('SKIP_BLOB_FETCH is set - using local config files');
    return;
  }

  if (!BLOB_BASE_URL) {
    console.error('Error: BLOB_BASE_URL environment variable is not set');
    console.log('\nTo use local config only, set SKIP_BLOB_FETCH=true');
    console.log('Or set BLOB_BASE_URL to your blob storage URL');
    process.exit(1);
  }

  const configUrl = `${BLOB_BASE_URL}/${BLOB_CONFIG_FILE}`;
  console.log(`Fetching config from: ${configUrl}\n`);

  let config: SiteConfig;

  try {
    const data = await fetchUrl(configUrl);
    config = yaml.parse(data.toString('utf-8'));
    console.log(`Loaded config version: ${config.version || 'unknown'}\n`);
  } catch (error) {
    console.error(`Failed to fetch config: ${error}`);
    console.log('\nTo create a new config:');
    console.log('  1. Copy site-config.example.yaml to your blob storage');
    console.log('  2. Customize for your deployment');
    console.log('  3. Run this script again');
    process.exit(1);
  }

  // Convert asset paths to full blob URLs
  console.log('Processing asset URLs...');
  config = processImageUrls(config);

  // Ensure directories exist
  if (!fs.existsSync(CONFIG_DIR)) {
    fs.mkdirSync(CONFIG_DIR, { recursive: true });
  }
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  // Generate params.yaml for Hugo
  const paramsYaml = generateParamsYaml(config);
  const paramsPath = path.join(CONFIG_DIR, 'params.yaml');
  fs.writeFileSync(paramsPath, paramsYaml);
  console.log(`\nWrote Hugo params: ${paramsPath}`);

  // Write full config to data directory for template access
  const dataPath = path.join(DATA_DIR, 'siteConfig.yaml');
  const dataContent = `# Site Configuration Data
# =======================
# THIS FILE IS AUTO-GENERATED - DO NOT EDIT
# Generated: ${new Date().toISOString()}

${yaml.stringify(config)}`;
  fs.writeFileSync(dataPath, dataContent);
  console.log(`Wrote data file: ${dataPath}`);

  console.log('\n=== Config fetch complete ===');
}

// Run
main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
