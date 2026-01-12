#!/usr/bin/env npx ts-node
/**
 * Fetch image files from blob storage.
 *
 * This script downloads image files from blob storage
 * and saves them to the local static/img/ directory.
 * If a file is not found in blob storage, it is skipped.
 *
 * Usage: npx ts-node utils/fetch-images.ts
 *
 * Environment variables:
 *   BLOB_BASE_URL     - Base URL for blob storage (required)
 *   BLOB_IMAGES_PATH  - Path to images in blob (default: build/images/)
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
const STATIC_IMG_DIR = path.join(PROJECT_ROOT, 'static', 'img');

// Environment
const BLOB_BASE_URL = process.env.BLOB_BASE_URL;
const BLOB_IMAGES_PATH = process.env.BLOB_IMAGES_PATH || 'build/images/';
const SKIP_BLOB_FETCH = process.env.SKIP_BLOB_FETCH === 'true';

// Image files to fetch from blob
// Add image filenames here as needed
const IMAGE_FILES = [
  // Header/branding images
  'header-logo-qgov--dark.svg',
  '600209 - Old Museum Building - 20090612 from E 010s_web.jpg',
  '600242 - Home - 20240510_121923_web.jpg',
  '600432 - Raine Island Beacon - (EHP) - l.rai.90.205.11.7s_web.jpg',
  '600432_Raine Island Beacon (2015)_085_web.jpg',
  '600432_Raine Island Beacon (2015)_101_web.jpg',
  '600458 - Carcory Homestead Ruins (2016) -020_web.jpg',
  '602825 Oribin Studio streetscape views (2012) - Explorer_web.jpg',
  '645612 - Mount Elliott Mining Complex - 3_web.jpg',
  '645612 - Mount Elliott Mining Complex - Smelter precinct_web.jpg',
  '650004 - Maroon State School - Teaching Blg looking SE_2015_1_public_SQUARE_web.jpg',
];

/**
 * Fetch a URL and return the content as a Buffer (for binary files)
 */
async function fetchBinary(url: string): Promise<Buffer | null> {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;

    client.get(url, (res) => {
      // Follow redirects
      if (res.statusCode === 301 || res.statusCode === 302) {
        const redirectUrl = res.headers.location;
        if (redirectUrl) {
          fetchBinary(redirectUrl).then(resolve);
          return;
        }
      }

      // Not found - return null
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
 * Fetch a single image file from blob
 */
async function fetchImageFile(filename: string): Promise<boolean> {
  const blobUrl = `${BLOB_BASE_URL}/${BLOB_IMAGES_PATH}${filename}`;
  const localPath = path.join(STATIC_IMG_DIR, filename);

  console.log(`\nProcessing: ${filename}`);
  console.log(`  Fetching from: ${blobUrl}`);

  const content = await fetchBinary(blobUrl);

  if (content) {
    // Ensure subdirectories exist if filename contains path
    const dir = path.dirname(localPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(localPath, content);
    console.log(`  ✓ Downloaded and saved (${content.length} bytes)`);
    return true;
  } else {
    console.log(`  - Not found in blob, skipping`);
    return false;
  }
}

/**
 * Main function
 */
async function main(): Promise<void> {
  console.log('=== Fetch Images ===');

  if (SKIP_BLOB_FETCH) {
    console.log('\nSKIP_BLOB_FETCH is set - skipping image fetch');
    return;
  }

  if (!BLOB_BASE_URL) {
    console.log('\nBLOB_BASE_URL not set - skipping image fetch');
    return;
  }

  // Ensure static/img directory exists
  if (!fs.existsSync(STATIC_IMG_DIR)) {
    fs.mkdirSync(STATIC_IMG_DIR, { recursive: true });
  }

  let downloaded = 0;
  let skipped = 0;

  // Process each image file
  for (const filename of IMAGE_FILES) {
    if (!filename){
      continue;
    }
    const success = await fetchImageFile(filename);
    if (success) {
      downloaded++;
    } else {
      skipped++;
    }
  }

  console.log(`\n=== Image fetch complete ===`);
  console.log(`  Downloaded: ${downloaded}`);
  console.log(`  Skipped: ${skipped}`);
  process.exit(0);
}

// Run
main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
