/**
 * Generates app/favicon.ico from public/icon.svg (dark rect with "84").
 * Uses @resvg/resvg-js and sharp. Run: node scripts/generate-favicon.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const svgPath = join(root, 'public', 'icon.svg');
const outPath = join(root, 'app', 'favicon.ico');

const svg = readFileSync(svgPath);

async function main() {
  let png48;
  try {
    png48 = await sharp(svg).resize(48, 48).png().toBuffer();
  } catch (e) {
    const { Resvg } = await import('@resvg/resvg-js');
    const resvg = new Resvg(svg);
    const png100 = resvg.render().asPng();
    png48 = await sharp(png100).resize(48, 48).png().toBuffer();
  }

  const pngLen = png48.length;
  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0);
  icoHeader.writeUInt16LE(1, 2);
  icoHeader.writeUInt16LE(1, 4);

  const icoEntry = Buffer.alloc(16);
  icoEntry[0] = 48;
  icoEntry[1] = 48;
  icoEntry[2] = 0;
  icoEntry[3] = 0;
  icoEntry.writeUInt16LE(1, 4);
  icoEntry.writeUInt16LE(32, 6);
  icoEntry.writeUInt32LE(pngLen, 8);
  icoEntry.writeUInt32LE(22, 12);

  const ico = Buffer.concat([icoHeader, icoEntry, png48]);
  mkdirSync(join(root, 'app'), { recursive: true });
  writeFileSync(outPath, ico);
  console.log('Created', outPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
