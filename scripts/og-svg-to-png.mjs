/**
 * Converts public/images/og-image.svg to public/images/og-image.png (1200x630)
 * for Open Graph / social preview. Run: node scripts/og-svg-to-png.mjs
 */
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const svgPath = join(root, 'public', 'images', 'og-image.svg');
const pngPath = join(root, 'public', 'images', 'og-image.png');

const svg = readFileSync(svgPath);

try {
  await sharp(svg)
    .resize(1200, 630)
    .png()
    .toFile(pngPath);
  console.log('Created', pngPath);
} catch (err) {
  if (err.message && err.message.includes('SVG')) {
    console.error('Sharp does not support SVG on this build. Install @resvg/resvg-js and use scripts/og-svg-to-png-resvg.mjs instead.');
  }
  throw err;
}
