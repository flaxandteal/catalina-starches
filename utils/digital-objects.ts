import * as fs from "fs";
import path from 'path';
import * as pagefind from "pagefind";
import Flatbush from "flatbush";
import Handlebars from 'handlebars'
import { spawn } from 'node:child_process';
import { WKRM, ResourceModelWrapper } from 'alizarin';

import { Asset } from './types.ts';
import { NON_PUBLIC, slugify } from './utils.ts';
import { assetFunctions } from '../prebuild/functions.ts';
import { type FeatureCollection, type Feature } from 'geojson';
import { serialize as fgbSerialize } from 'flatgeobuf/lib/mjs/geojson.js';
import { groupByCounty } from './counties.ts';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

Handlebars.registerHelper("replace", (base, fm, to) => base ? base.replace(fm, to) : "");
Handlebars.registerHelper("await", (val) => val);
Handlebars.registerHelper("default", function (a, b) {return a === undefined || a === null || a === '' ? b : a;});

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const FOR_ARCHES = process.argv.includes('--for-arches');
const PUBLIC_FOLDER = FOR_ARCHES ? 'export' : 'docs';
const DEFAULT_LANGUAGE = 'en';
const CHUNK_SIZE_CHARS = 10000000;
const STARCHES_UTILS_BIN = `${SCRIPT_DIR}/../starches-rs`;
console.log(STARCHES_UTILS_BIN );

const REGISTRIES: string[] = [];

let next = false;

const PUBLIC_MODELS = [
    "HeritageAsset",
    "MaritimeVessel",
    "Registry"
];

async function extractDigitalObjects(files: string[] | null) {
    const { index } = await pagefind.createIndex();
    if (!index) {
      throw Error("Could not create pagefind index");
    }
    await index.addDirectory({
        path: "docs"
    });
    console.log("loading", files ? `${files.length} files` : 'all');

    const language = DEFAULT_LANGUAGE ?? "en";
    const registriesSet: Set<string> = new Set();
    for (let asset of assetMetadata) {
        if (NON_PUBLIC || PUBLIC_MODELS.includes(asset.type)) {
            const registries = asset.meta.registries ? JSON.parse(asset.meta.registries) : [];
            for (const registry of registries) {
                registriesSet.add(registry);
            }
            const designations = asset.meta.designations ? JSON.parse(asset.meta.designations) : [];
            const regcode = registriesToRegcode(registries);
            await index.addCustomRecord({
                url: `/asset/?slug=${asset.meta.slug}`,
                // Only taking a bit of the plaintext for now... RMV
                content: asset.content,
                language: language,
                regcode: regcode,
                filters: {
                    tags: registries,
                    designations: designations
                },
                meta: asset.meta
            });
        }
    }
    for (const registry of registriesSet) {
        const slug = slugify(registry);
        if (!REGISTRIES.includes(slug)) {
            REGISTRIES.push(slug);
        }
    }

    console.log(`Indexed ${assetMetadata.length} assets in pagefind`);

    await fs.promises.rm(`${PUBLIC_FOLDER}/pagefind`, { recursive: true, force: true });
    await index.writeFiles({
        outputPath: `${PUBLIC_FOLDER}/pagefind`
    });

    return { index, assetMetadata };
}

const files = [];
let loading = false;
for (const arg of process.argv) {
  if (loading) {
    if (arg.startsWith('-')) {
        loading = false;
    } else {
        files.push(arg);
    }
  }
  if (arg === '-a') {
    loading = true;
  }
}
if (files.length) {
    console.log("Loading only", files);
}
await extractDigitalObjects(files.length ? files : null);
