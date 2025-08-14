import sharp from 'sharp';
import path from 'path';
import fs from 'fs/promises';

const sourceImagePath = path.resolve('public/images/ekoncepto-logo.svg');
const outputDir = path.resolve('public/images/optimized');

const sizes = [
  {
    format: 'webp',
    width: 245,
    height: 32,
    filename: 'ekoncepto-logo.webp',
  },
  {
    format: 'png',
    width: 245,
    height: 32,
    filename: 'ekoncepto-logo.png',
  },
];

async function optimizeLcpImage() {
  try {
    await fs.mkdir(outputDir, { recursive: true });

    for (const size of sizes) {
      const outputPath = path.join(outputDir, size.filename);
      await sharp(sourceImagePath)
        .resize(size.width, size.height)
        .toFormat(size.format)
        .toFile(outputPath);

      console.log(`Generated ${outputPath}`);
    }

    console.log('LCP image optimization complete.');
  } catch (error) {
    console.error('Error optimizing LCP image:', error);
  }
}

optimizeLcpImage();
