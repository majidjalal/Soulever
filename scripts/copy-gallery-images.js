/**
 * Resizes Soulever gallery images in src/assets for web optimization.
 * Run: node scripts/copy-gallery-images.js
 * Resizes to max 1920px width. Use after adding new gallery images.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcAssets = path.join(__dirname, "../src/assets");
const MAX_WIDTH = 1920;

const galleryFiles = [
  "gallery-hero.png",
  "gallery-bathroom.png",
  "gallery-bedroom.png",
  "gallery-pool-deck.png",
  "gallery-pool-side.png",
  "gallery-spa.png",
  "gallery-treatment.png",
];

async function run() {
  let processed = 0;
  for (const file of galleryFiles) {
    const filePath = path.join(srcAssets, file);
    if (fs.existsSync(filePath)) {
      const tempPath = path.join(srcAssets, `.tmp-${file}`);
      await sharp(filePath)
        .resize(MAX_WIDTH, null, { withoutEnlargement: true })
        .png({ compressionLevel: 6 })
        .toFile(tempPath);
      fs.renameSync(tempPath, filePath);
      console.log(`Resized: ${file}`);
      processed++;
    }
  }
  console.log(`Done. Processed ${processed} images.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
