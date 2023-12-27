import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
import svelte from "@astrojs/svelte";
import vercel from '@astrojs/vercel/serverless';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), svelte(), sitemap()],
  output: 'hybrid',
  adapter: vercel(),
  site: 'https://tmgranata.com'
});