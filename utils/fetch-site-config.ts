#!/usr/bin/env npx ts-node
/**
 * Fetch site configuration (params.yaml) from blob storage.
 *
 * This script downloads params.yaml from blob storage and saves it
 * to config/_default/params.yaml for Hugo to use.
 *
 * Usage: npx ts-node utils/fetch-site-config.ts
 *
 * Environment variables:
 *   BLOB_BASE_URL    - Base URL for blob storage (required)
 *   BLOB_CONFIG_FILE - Config filename (default: params.yaml)
 *   SKIP_BLOB_FETCH  - Set to 'true' to skip fetching (use local files)
 */

import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import * as http from 'http';
import { fileURLToPath } from 'url';

// ESM equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const PROJECT_ROOT = path.resolve(__dirname, '..');
const CONFIG_DIR = path.join(PROJECT_ROOT, 'config', '_default');

// Environment
const BLOB_BASE_URL = process.env.BLOB_BASE_URL;
const BLOB_CONFIG_FILE = process.env.BLOB_CONFIG_FILE || 'params.yaml';
const SKIP_BLOB_FETCH = process.env.SKIP_BLOB_FETCH === 'true';

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

  let configData: Buffer;

  try {
    configData = await fetchUrl(configUrl);
    console.log(`Downloaded ${configData.length} bytes`);
  } catch (error) {
    console.error(`Failed to fetch config: ${error}`);
    console.log('\nEnsure params.yaml exists in blob storage at:');
    console.log(`  ${configUrl}`);
    process.exit(1);
  }

  // Ensure config directory exists
  if (!fs.existsSync(CONFIG_DIR)) {
    fs.mkdirSync(CONFIG_DIR, { recursive: true });
  }

  // Save params.yaml
  const paramsPath = path.join(CONFIG_DIR, 'params.yaml');
  fs.writeFileSync(paramsPath, configData);
  console.log(`\nWrote config to: ${paramsPath}`);

  console.log('\n=== Config fetch complete ===');
  process.exit(0);
}

// Run
main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
