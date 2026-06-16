// One-off: web-optimize the workshop-presentation photos for the gallery.
// Resizes to max 800px wide, auto-orients via EXIF, writes webp q80.
// Run: node scripts/optimize-fotos.mjs
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { homedir } from 'node:os';
import { join } from 'node:path';

const DL = join(homedir(), 'Downloads');
const OUT = join(process.cwd(), 'public/assets/img/fotos');
const MAX_W = 800;
const QUALITY = 80;

// [sourceFile, outSlug] — DOM order interleaves orientations so columns balance.
const jobs = [
  ['WhatsApp Image 2026-06-15 at 18.37.22.jpeg', 'live-band'],
  ['WhatsApp Image 2026-06-15 at 18.43.41 (3).jpeg', 'ensemble-buehne'],
  ['WhatsApp Image 2026-06-15 at 18.40.14.jpeg', 'kostuemprobe'],
  ['WhatsApp Image 2026-06-15 at 18.43.41.jpeg', 'begruessung'],
  ['WhatsApp Image 2026-06-15 at 18.37.24.jpeg', 'ensemble-lesung'],
  ['WhatsApp Image 2026-06-15 at 18.43.41 (1).jpeg', 'team-selfie'],
  ['WhatsApp Image 2026-06-15 at 18.37.26.jpeg', 'backstage-schlagzeug'],
  ['WhatsApp Image 2026-06-15 at 18.43.41 (4).jpeg', 'ensemble-gruppe'],
  ['WhatsApp Image 2026-06-15 at 18.37.19.jpeg', 'kuenstler-backstage'],
  ['WhatsApp Image 2026-06-15 at 18.44.33.jpeg', 'textbuch'],
];

await mkdir(OUT, { recursive: true });

for (const [src, slug] of jobs) {
  const info = await sharp(join(DL, src))
    .rotate() // honour EXIF orientation, then strip the tag
    .resize({ width: MAX_W, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(join(OUT, `${slug}.webp`));
  console.log(`${slug}.webp\t${info.width}x${info.height}\t${(info.size / 1024).toFixed(0)}KB`);
}
