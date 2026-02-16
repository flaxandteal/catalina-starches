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
import { execSync } from 'child_process';
import * as os from 'os';

// ESM equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const PROJECT_ROOT = path.resolve(__dirname, '..');

// Environment
const BLOB_BASE_URL = process.env.BLOB_BASE_URL;
const SKIP_BLOB_FETCH = process.env.SKIP_BLOB_FETCH === 'true';

/**
 * Fetch a URL and return the content as a string
 */
async function fetchUrl(url: string): Promise<Buffer | null> {
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
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', () => resolve(null));
    }).on('error', () => resolve(null));
  });
}

/**
 * Fetch a single content file from blob
 */
async function fetchPrebuild(filename: string): Promise<void> {
  const blobUrl = `${BLOB_BASE_URL}/content/prebuild/${filename}`;
  const tmpFile = path.join(os.tmpdir(), filename);

  console.log(`\nProcessing: ${filename}`);
  console.log(`  Fetching from: ${blobUrl}`);
  console.log(`  Destination: ${PROJECT_ROOT}`);

  const prebuild = await fetchUrl(blobUrl);

  if (prebuild) {
    fs.writeFileSync(tmpFile, prebuild);
    execSync(`tar -xzf ${tmpFile} -C ${PROJECT_ROOT}`);
    fs.unlinkSync(tmpFile);
    console.log(`  ✓ Downloaded and extracted`);
  } else {
    console.log(`  - Not found in blob, no prebuild downloaded`);
  }
}

/**
 * Main function
 */
async function main(): Promise<void> {
  console.log('=== Fetch Prebuild ===');

  if (SKIP_BLOB_FETCH) {
    console.log('\nSKIP_BLOB_FETCH is set - prebuild folder not being fetched');
    return;
  }

  if (!BLOB_BASE_URL) {
    console.log('\nBLOB_BASE_URL not set - prebuild folder not being fetched');
    return;
  }

  await fetchPrebuild('prebuild.tgz');

  console.log('\n=== Prebuild fetch complete ===');
  process.exit(0);
}

// Run
main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
