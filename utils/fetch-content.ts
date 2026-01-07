#!/usr/bin/env npx ts-node
/**
 * Fetch content files from blob storage.
 *
 * This script downloads markdown content files from blob storage
 * and overwrites the local content/ files. If a file is not found
 * in blob storage, the existing local file is kept as-is.
 *
 * Usage: npx ts-node utils/fetch-content.ts
 *
 * Environment variables:
 *   BLOB_BASE_URL     - Base URL for blob storage (required)
 *   BLOB_CONTENT_PATH - Path to content in blob (default: build/content/)
 *   SKIP_BLOB_FETCH   - Set to 'true' to skip fetching (keep local files)
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
const CONTENT_DIR = path.join(PROJECT_ROOT, 'content');
const CONFIG_DIR = path.join(PROJECT_ROOT, 'config', '_default');

// Environment
const BLOB_BASE_URL = process.env.BLOB_BASE_URL;
const SKIP_BLOB_FETCH = process.env.SKIP_BLOB_FETCH === 'true';

// Content files to fetch from blob (these contain client-specific content)
// Map of blob filename -> local destination directory
const CONTENT_FILES: { filename: string; destDir: string }[] = [
  { filename: '_index.md', destDir: CONTENT_DIR },
  { filename: 'map.md', destDir: CONTENT_DIR },
  { filename: 'asset.md', destDir: CONTENT_DIR },
  { filename: 'params.yaml', destDir: CONFIG_DIR },
  // { filename: 'cookies.md', destDir: CONTENT_DIR },  // Optional - uncomment if client needs custom cookie policy
];

/**
 * Fetch a URL and return the content as a string
 */
async function fetchUrl(url: string): Promise<string | null> {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;

    client.get(url, (res) => {
      // Follow redirects
      if (res.statusCode === 301 || res.statusCode === 302) {
        const redirectUrl = res.headers.location;
        if (redirectUrl) {
          fetchUrl(redirectUrl).then(resolve);
          return;
        }
      }

      // Not found - return null to keep existing file
      if (res.statusCode === 404) {
        resolve(null);
        return;
      }

      if (res.statusCode !== 200) {
        console.warn(`  Warning: HTTP ${res.statusCode} for ${url}`);
        resolve(null);
        return;
      }

      const chunks: Buffer[] = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')));
      res.on('error', () => resolve(null));
    }).on('error', () => resolve(null));
  });
}

/**
 * Fetch a single content file from blob
 */
async function fetchContentFile(filename: string, destDir: string): Promise<void> {
  const blobUrl = `${BLOB_BASE_URL}/content/config/${filename}`;
  const localPath = path.join(destDir, filename);

  console.log(`\nProcessing: ${filename}`);
  console.log(`  Fetching from: ${blobUrl}`);
  console.log(`  Destination: ${localPath}`);

  // Ensure destination directory exists
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const content = await fetchUrl(blobUrl);

  if (content) {
    fs.writeFileSync(localPath, content);
    console.log(`  ✓ Downloaded and saved`);
  } else {
    console.log(`  - Not found in blob, keeping existing local file`);
  }
}

/**
 * Main function
 */
async function main(): Promise<void> {
  console.log('=== Fetch Content ===');

  if (SKIP_BLOB_FETCH) {
    console.log('\nSKIP_BLOB_FETCH is set - keeping local content files');
    return;
  }

  if (!BLOB_BASE_URL) {
    console.log('\nBLOB_BASE_URL not set - keeping local content files');
    return;
  }

  // Ensure content directory exists
  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
  }

  // Process each content file
  for (const { filename, destDir } of CONTENT_FILES) {
    await fetchContentFile(filename, destDir);
  }

  console.log('\n=== Content fetch complete ===');
  process.exit(0);
}

// Run
main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
