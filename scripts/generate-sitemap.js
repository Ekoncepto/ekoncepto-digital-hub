import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- Helper function to extract routes from a file ---
function extractRoutesFromFile(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const routeRegex = /<Route\s+(?:[^>]*?\s+)?path="([^"]+)"/g;
    const matches = fileContent.matchAll(routeRegex);
    const routes = [];
    for (const match of matches) {
      const route = match[1];
      // Filter out unwanted routes
      if (route !== '*' && !route.includes(':') && route !== '/conteudo') {
        routes.push(route);
      }
    }
    return routes;
  } catch (error) {
    console.error(`Error reading or parsing file: ${filePath}`, error);
    return [];
  }
}

// --- Define paths to route files ---
const appRoutesPath = path.resolve(__dirname, '../src/App.tsx');
const landingRoutesPath = path.resolve(__dirname, '../src/pages/landing/routes.tsx');

// --- Extract routes ---
const appRoutes = extractRoutesFromFile(appRoutesPath);
const landingRoutes = extractRoutesFromFile(landingRoutesPath);
const allDynamicRoutes = [...new Set([...appRoutes, ...landingRoutes])];

// --- Static and high-priority routes ---
const staticRoutes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/#servicos', changefreq: 'weekly', priority: 0.9 },
  { url: '/#sobre', changefreq: 'weekly', priority: 0.8 },
  { url: '/#contato', changefreq: 'weekly', priority: 0.8 },
];

// --- Combine static and dynamic routes ---
const combinedRoutes = [
  ...staticRoutes,
  ...allDynamicRoutes.map(route => ({
    url: route,
    changefreq: 'monthly',
    priority: 0.7,
  })),
];

// --- Remove duplicates, keeping the first occurrence (which are the static ones with higher priority) ---
const uniqueRoutes = combinedRoutes.filter(
  (route, index, self) => index === self.findIndex(r => r.url === route.url)
);


// --- Create sitemap ---
async function generateSitemap() {
  try {
    const smStream = new SitemapStream({
      hostname: 'https://ekoncepto.com',
      lastmodDateOnly: true,
    });

    const sitemap = await streamToPromise(Readable.from(uniqueRoutes).pipe(smStream)).then(data =>
      data.toString()
    );

    // --- Write sitemap to public directory ---
    const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemap);

    console.log(`Sitemap generated successfully at ${sitemapPath}`);
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

generateSitemap();
