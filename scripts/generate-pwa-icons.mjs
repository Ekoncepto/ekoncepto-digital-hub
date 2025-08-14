import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputIcon = path.join(__dirname, '../public/images/logo-icon.png');
const outputDir = path.join(__dirname, '../public/images');

const iconsToGenerate = [
  { name: 'apple-touch-icon.png', size: 192 },
  { name: 'icon-192x192.png', size: 192 },
  { name: 'icon-512x512.png', size: 512 },
  { name: 'maskable_icon.png', size: 192 }, // For maskable, we'll just resize for now
];

async function generatePwaIcons() {
  console.log('Generating PWA icons...');
  try {
    for (const icon of iconsToGenerate) {
      const outputPath = path.join(outputDir, icon.name);
      await sharp(inputIcon)
        .resize(icon.size, icon.size)
        .toFile(outputPath);
      console.log(`✓ Created: ${icon.name}`);
    }
    console.log('\nAll PWA icons generated successfully!');
  } catch (error) {
    console.error('Error generating PWA icons:', error);
    process.exit(1);
  }
}

generatePwaIcons();
