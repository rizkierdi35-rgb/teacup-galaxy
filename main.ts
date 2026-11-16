// ai-excited-01 entry for @rizki-erdi.
//
// The artwork lives beside this file as entry.png: a colossal glowing koi
// bursting out of a tiny teacup, its splash turning into a galaxy, while a
// startled kitten watches from the corner of the desk. This program's only
// job is to place that exact image where the grader looks for it.
//
// It runs on Node 22 with the standard library alone, takes no network,
// and writes the same bytes on every run, because it never re-encodes
// anything: the file is read once and written once, byte for byte.
//
// Local check:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const picture = readFileSync(join(here, "entry.png"));

// Fail loudly instead of shipping a broken file: a JPEG always opens
// with FF D8 FF, and the gate refuses anything else in this entry.
if (picture[0] !== 0xff || picture[1] !== 0xd8 || picture[2] !== 0xff) {
  throw new Error("entry.png is not the JPEG image this entry ships");
}
if (picture.length > 1048576) {
  throw new Error(`entry.png is ${picture.length} bytes, over the 1 MiB cap`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.png"), picture);
