import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of all routes in your application
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/#servicos', changefreq: 'weekly', priority: 0.9 },
  { url: '/#sobre', changefreq: 'weekly', priority: 0.8 },
  { url: '/#contato', changefreq: 'weekly', priority: 0.8 },
];

// Create sitemap
async function generateSitemap() {
  const smStream = new SitemapStream({
    hostname: 'https://ekoncepto.com',
    lastmodDateOnly: true,
  });

  const sitemap = await streamToPromise(Readable.from(routes).pipe(smStream)).then(data =>
    data.toString()
  );

  // Write sitemap to public directory
  fs.writeFileSync(path.resolve(__dirname, '../public/sitemap.xml'), sitemap);

  console.log('Sitemap generated successfully!');
}

generateSitemap().catch(console.error);
