import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PAGES_DIR = path.resolve(__dirname, '../src/pages');
const SITEMAP_PATH = path.resolve(__dirname, '../public/sitemap.xml');
const SITE_URL = 'https://ekoncepto.com';

async function generateSitemap() {
  const links = [];
  const files = fs.readdirSync(PAGES_DIR, { recursive: true });

  for (const file of files) {
    if (file.endsWith('.astro')) {
      const pagePath = path.join(PAGES_DIR, file);
      let url = path.relative(PAGES_DIR, pagePath).replace(/\\/g, '/');

      // Remove the file extension
      url = url.substring(0, url.lastIndexOf('.'));

      // Handle index pages
      if (url.endsWith('index')) {
        url = url.substring(0, url.lastIndexOf('index'));
      }

      // Ensure the URL is a relative path from the root
      url = `/${url}`;

      // Skip the 404 page
      if (url === '/404') {
        continue;
      }

      links.push({
        url: url,
        changefreq: 'daily',
        priority: 0.7,
      });
    }
  }

  const stream = new SitemapStream({ hostname: SITE_URL });
  const xml = await streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
    data.toString()
  );

  fs.writeFileSync(SITEMAP_PATH, xml);
  console.log(`Sitemap generated at ${SITEMAP_PATH}`);
}

generateSitemap();
