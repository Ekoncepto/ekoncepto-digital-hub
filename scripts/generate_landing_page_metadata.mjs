import fs from 'fs/promises';
import path from 'path';

const landingPagesDir = path.resolve(process.cwd(), 'src/pages/landing');
const metadataFilePath = path.resolve(process.cwd(), 'src/config/landing-pages-metadata.ts');

async function generateMetadata() {
  try {
    const files = await fs.readdir(landingPagesDir);
    const metadata = [];

    for (const file of files) {
      if (file.endsWith('.tsx') && file !== 'LandingPage.tsx' && file !== 'routes.tsx') {
        const filePath = path.join(landingPagesDir, file);
        const content = await fs.readFile(filePath, 'utf-8');

        const titleMatch = content.match(/title="([^"]*)"/);
        const descriptionMatch = content.match(/description="([^"]*)"/);
        const slugMatch = content.match(/slug="([^"]*)"/);

        if (titleMatch && descriptionMatch && slugMatch) {
          metadata.push({
            title: titleMatch[1],
            description: descriptionMatch[1],
            slug: slugMatch[1],
            componentName: file.replace('.tsx', ''),
          });
        }
      }
    }

    const metadataContent = `export const landingPagesMetadata = ${JSON.stringify(metadata, null, 2)};\n`;
    await fs.writeFile(metadataFilePath, metadataContent, 'utf-8');
    console.log('Landing page metadata generated successfully.');

  } catch (error) {
    console.error('Error generating landing page metadata:', error);
  }
}

generateMetadata();
