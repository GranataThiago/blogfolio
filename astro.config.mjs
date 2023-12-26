import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), svelte(), sitemap()],
  output: 'server',
  adapter: netlify(),
  site: 'https://tmgranata.com'
});