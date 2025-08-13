import sharp from 'sharp';
import { mkdir, readdir, copyFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/optimized');
const sizes = [320, 640, 960, 1280, 1920];

export async function generateResponsiveImages() {
  try {
    // Create optimized directory if it doesn't exist
    await mkdir(outputDir, { recursive: true });

    // Get all image files
    const files = (await readdir(inputDir)).filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file));

    for (const file of files) {
      const inputPath = path.join(inputDir, file);
      const ext = path.extname(file);
      const name = path.basename(file, ext);

      // Process each size
      for (const size of sizes) {
        const outputFile = `${name}-${size}w${ext}`;
        const outputPath = path.join(outputDir, outputFile);

        // Resize and optimize the image
        await sharp(inputPath)
          .resize({ width: size, withoutEnlargement: true })
          .toFormat(ext.replace('.', ''), {
            quality: 80,
            progressive: true,
            compressionLevel: 9,
          })
          .toFile(outputPath);

        console.log(`Generated: ${outputFile}`);
      }

      // Copy original to optimized folder as fallback
      await copyFile(inputPath, path.join(outputDir, file));
    }

    console.log('All images processed successfully!');
  } catch (error) {
    console.error('Error processing images:', error);
    process.exit(1);
  }
}

// Run the function
generateResponsiveImages();
