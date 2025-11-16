// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import db from '@astrojs/db';

// import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), db()],
  output: 'server', // Necesario para Cloudflare Pages
  adapter: cloudflare(),
  vite: {
    ssr: {
      // ⚠️ IMPORTANTE: Añadir 'picocolors' a la lista
      // Esto fuerza a Vite a hacer el bundling de picocolors para SSR
      noExternal: ['picocolors'],
    },
    // Opcional: Si el paso anterior no funciona, intenta solo con external.
    // build: {
    //   rollupOptions: {
    //     external: ['picocolors'],
    //   },
    // },
  },
});