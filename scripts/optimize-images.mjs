import { promises as fs } from 'fs';
import fsSync from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const config = {
  // Input directories to search for images
  inputDirs: [path.join(__dirname, '../public/images'), path.join(__dirname, '../src/assets')],
  // Output directory for optimized images
  outputDir: path.join(__dirname, '../public/images/optimized'),
  // Process all image files in the images directory
  includePatterns: [/\.(png|jpg|jpeg|webp)$/i],
  // Target widths for responsive images
  widths: [320, 640, 960, 1280, 1920],
  // Quality settings
  quality: {
    webp: 80,
    jpeg: 80,
    png: 80,
  },
  // Whether to create WebP versions
  createWebP: true,
  // Whether to create original format as fallback
  createOriginalFormat: true,
};

async function findImageFiles() {
  const imageFiles = [];

  for (const dir of config.inputDirs) {
    try {
      const files = await fs.readdir(dir);

      for (const file of files) {
        // Skip files in the optimized directory
        if (dir.includes('optimized')) continue;

        // Check if file matches any of the include patterns
        if (config.includePatterns.some(pattern => pattern.test(file))) {
          imageFiles.push({
            name: path.basename(file, path.extname(file)),
            ext: path.extname(file).toLowerCase(),
            path: path.join(dir, file),
          });
        }
      }
    } catch (error) {
      if (error.code !== 'ENOENT') {
        console.warn(`Error reading directory ${dir}:`, error.message);
      }
    }
  }

  return imageFiles;
}

async function optimizeImage(inputPath, outputPath, width, format) {
  const sharpInstance = sharp(inputPath);

  // Get image metadata
  const metadata = await sharpInstance.metadata();

  // Skip if the requested width is larger than the original
  if (width > metadata.width) {
    return false;
  }

  // Set up the optimization pipeline
  let pipeline = sharpInstance.resize({
    width,
    withoutEnlargement: true,
    fit: 'inside',
  });

  // Apply format-specific optimizations
  switch (format) {
    case 'webp':
      pipeline = pipeline.webp({
        quality: config.quality.webp,
        effort: 6,
      });
      break;

    case 'jpeg':
    case 'jpg':
      pipeline = pipeline.jpeg({
        quality: config.quality.jpeg,
        mozjpeg: true,
        progressive: true,
      });
      break;

    case 'png':
      pipeline = pipeline.png({
        quality: config.quality.png,
        compressionLevel: 9,
        progressive: true,
      });
      break;
  }

  // Write the optimized image
  await pipeline.toFile(outputPath);
  return true;
}

async function clearOptimizedDirectory() {
  try {
    if (fsSync.existsSync(config.outputDir)) {
      console.log(`\nCleaning up optimized directory: ${config.outputDir}`);
      const files = await fs.readdir(config.outputDir);

      for (const file of files) {
        // Don't delete .gitkeep if it exists
        if (file === '.gitkeep') continue;

        const filePath = path.join(config.outputDir, file);
        await fs.unlink(filePath);
      }
      console.log('Optimized directory cleaned up.\n');
    } else {
      // Create the directory if it doesn't exist
      await fs.mkdir(config.outputDir, { recursive: true });
    }
  } catch (error) {
    console.error('Error cleaning up optimized directory:', error);
    process.exit(1);
  }
}

async function processImage(img) {
  console.log(`\nProcessing: ${img.name}${img.ext}`);

  // Process each width
  for (const width of config.widths) {
    const baseName = `${img.name}-${width}w`;
    let processed = false;

    // Generate WebP version if enabled
    if (config.createWebP) {
      const webpPath = path.join(config.outputDir, `${baseName}.webp`);
      const success = await optimizeImage(img.path, webpPath, width, 'webp');
      if (success) {
        console.log(`  ✓ Created: ${path.basename(webpPath)}`);
        processed = true;
      }
    }

    // Generate original format version if enabled
    if (config.createOriginalFormat) {
      const format = img.ext.replace('.', '');
      const outputPath = path.join(config.outputDir, `${baseName}${img.ext}`);
      const success = await optimizeImage(img.path, outputPath, width, format);
      if (success) {
        console.log(`  ✓ Created: ${path.basename(outputPath)}`);
        processed = true;
      }
    }

    if (!processed) {
      console.log(`  ℹ️  Skipped width ${width}px (larger than original)`);
    }
  }

  // Copy original to optimized folder as fallback if it doesn't exist
  const originalInOutput = path.join(config.outputDir, path.basename(img.path));
  try {
    await fs.access(originalInOutput);
  } catch {
    await fs.copyFile(img.path, originalInOutput);
    console.log(`  ✓ Copied original: ${path.basename(originalInOutput)}`);
  }
}

async function optimizeImages() {
  try {
    // Clear the optimized directory before starting
    await clearOptimizedDirectory();

    // Find all image files to process
    const imageFiles = await findImageFiles();

    if (imageFiles.length === 0) {
      console.log('No images found matching the patterns.');
      return;
    }

    console.log(`\nFound ${imageFiles.length} images to optimize:`);
    imageFiles.forEach(img => console.log(`- ${path.basename(img.path)}`));

    // Process each image
    for (const img of imageFiles) {
      await processImage(img);
    }

    console.log('\nImage optimization complete!');
  } catch (error) {
    console.error('Error optimizing images:', error);
    process.exit(1);
  }
}

// Run the optimization
optimizeImages();
