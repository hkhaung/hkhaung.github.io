import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: 'static',
  site: "https://hkhaung.github.io",
  integrations: [mdx(), sitemap(), tailwind()],
});
