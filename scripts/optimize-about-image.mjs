import { promises as fs } from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Input and output directories
const inputDir = path.join(__dirname, '../src/assets');
const outputDir = path.join(__dirname, '../public/images/optimized');
const imageName = 'about-hero.jpg';

// Target widths for responsive images
const widths = [320, 640, 960, 1280, 1920];

async function optimizeImage() {
  try {
    // Create output directory if it doesn't exist
    await fs.mkdir(outputDir, { recursive: true });

    // Process each width
    for (const width of widths) {
      const outputFilename = `about-${width}w`;
      const inputPath = path.join(inputDir, imageName);
      
      // Generate WebP
      await sharp(inputPath)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 80, effort: 6 })
        .toFile(path.join(outputDir, `${outputFilename}.webp`));
      
      // Generate fallback JPEG
      await sharp(inputPath)
        .resize({ width, withoutEnlargement: true })
        .jpeg({ quality: 80, mozjpeg: true })
        .toFile(path.join(outputDir, `${outputFilename}.jpg`));
      
      console.log(`Generated: ${outputFilename}.webp and ${outputFilename}.jpg`);
    }
    
    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error optimizing images:', error);
    process.exit(1);
  }
}

optimizeImage();
