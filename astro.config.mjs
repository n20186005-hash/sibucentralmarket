// @ts-check
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

const SITE_URL = 'https://sibucentralmarket.com';

const integrations = [tailwind({ applyBaseStyles: false })];

if (SITE_URL) {
  integrations.push(
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
    })
  );
}

export default defineConfig({
  site: SITE_URL || undefined,
  output: 'static',
  session: false,
  adapter: cloudflare({
    imageService: 'passthrough',
  }),
  integrations,
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  },
});
