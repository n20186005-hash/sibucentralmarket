// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

const SITE_URL = 'https://sibucentralmarket.com';

const integrations = [tailwind({ applyBaseStyles: false })];

if (SITE_URL) {
  integrations.push(
    sitemap({
      changefreq: 'monthly',
      filter: page => !/\/404(?:\.html|\/)?$/.test(page),
      serialize(item) { item.links=[{lang:'ms-MY',url:SITE_URL+'/'},{lang:'en',url:SITE_URL+'/en/'},{lang:'zh-Hans',url:SITE_URL+'/zh/'},{lang:'x-default',url:SITE_URL+'/'}]; return item; },
      priority: 0.7,
      // 三语站点：在 sitemap-index 中为每种语言输出 xhtml:link 互指
      i18n: {
        defaultLocale: 'ms',
        locales: {
          ms: 'ms-MY',
          en: 'en',
          zh: 'zh-Hans',
        },
      },
    })
  );
}

export default defineConfig({
  site: SITE_URL || undefined,
  output: 'static',
  i18n: {
    defaultLocale: 'ms',
    locales: ['ms', 'en', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
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
