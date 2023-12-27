import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
import svelte from "@astrojs/svelte";
import vercel from '@astrojs/vercel/edge';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), svelte(), sitemap()],
  output: 'server',
  adapter: vercel(),
  site: 'https://tmgranata.com'
});