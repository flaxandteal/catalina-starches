#!/usr/bin/env npx ts-node
/**
 * Fetch content files from blob storage.
 *
 * This script:
 * 1. Downloads markdown content files from blob storage
 * 2. Falls back to content-defaults/ if blob file is missing
 * 3. Writes to content/ directory
 *
 * Usage: npx ts-node utils/fetch-content.ts
 *
 * Environment variables:
 *   BLOB_BASE_URL     - Base URL for blob storage (required)
 *   BLOB_CONTENT_PATH - Path to content in blob (default: content/)
 *   SKIP_BLOB_FETCH   - Set to 'true' to skip fetching (use defaults)
 */

import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import * as http from 'http';

// Paths
const PROJECT_ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(PROJECT_ROOT, 'content');
const DEFAULTS_DIR = path.join(PROJECT_ROOT, 'content-defaults');

// Environment
const BLOB_BASE_URL = process.env.BLOB_BASE_URL;
const BLOB_CONTENT_PATH = process.env.BLOB_CONTENT_PATH || 'content/';
const SKIP_BLOB_FETCH = process.env.SKIP_BLOB_FETCH === 'true';

// Content files to fetch from blob (these contain client-specific content)
const CONTENT_FILES = [
  '_index.md',
  'faq.md',
  'feedback.md',
  // 'cookies.md',  // Optional - uncomment if client needs custom cookie policy
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

      // Not found - return null to use default
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
 * Read a default content file if it exists
 */
function readDefault(filename: string): string | null {
  const defaultPath = path.join(DEFAULTS_DIR, filename);
  if (fs.existsSync(defaultPath)) {
    return fs.readFileSync(defaultPath, 'utf-8');
  }
  return null;
}

/**
 * Fetch a single content file
 */
async function fetchContentFile(filename: string): Promise<void> {
  const blobUrl = `${BLOB_BASE_URL}/${BLOB_CONTENT_PATH}${filename}`;
  const localPath = path.join(CONTENT_DIR, filename);

  console.log(`\nProcessing: ${filename}`);

  let content: string | null = null;

  // Try to fetch from blob
  if (!SKIP_BLOB_FETCH && BLOB_BASE_URL) {
    console.log(`  Fetching from: ${blobUrl}`);
    content = await fetchUrl(blobUrl);

    if (content) {
      console.log(`  Downloaded from blob`);
    } else {
      console.log(`  Not found in blob, checking defaults...`);
    }
  }

  // Fall back to defaults if not in blob
  if (!content) {
    content = readDefault(filename);
    if (content) {
      console.log(`  Using default from content-defaults/`);
    } else {
      console.log(`  No default found, skipping`);
      return;
    }
  }

  // Write to content directory
  fs.writeFileSync(localPath, content);
  console.log(`  Wrote: ${localPath}`);
}

/**
 * Main function
 */
async function main(): Promise<void> {
  console.log('=== Fetch Content ===');

  if (SKIP_BLOB_FETCH) {
    console.log('\nSKIP_BLOB_FETCH is set - using default content files');
  } else if (!BLOB_BASE_URL) {
    console.log('\nBLOB_BASE_URL not set - using default content files');
  }

  // Ensure content directory exists
  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
  }

  // Process each content file
  for (const filename of CONTENT_FILES) {
    await fetchContentFile(filename);
  }

  console.log('\n=== Content fetch complete ===');
}

// Run
main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
