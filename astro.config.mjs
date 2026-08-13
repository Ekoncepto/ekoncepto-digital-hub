import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// Carrega variáveis de ambiente (do .env) explicitamente e injeta no Vite
// client via `define`. Em projetos Astro com output:'static', o
// `import.meta.env.VITE_*` em módulos importados por .astro E .tsx pode não
// ser substituído estaticamente no bundle do browser. O `define` garante que
// o valor esteja disponível em runtime no client.
const env = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), 'VITE_');

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'static',
  vite: {
    define: {
      'import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL': JSON.stringify(
        env.VITE_GOOGLE_SHEETS_WEBHOOK_URL || ''
      ),
      'import.meta.env.VITE_GA_MEASUREMENT_ID': JSON.stringify(
        env.VITE_GA_MEASUREMENT_ID || ''
      ),
    },
  },
});
