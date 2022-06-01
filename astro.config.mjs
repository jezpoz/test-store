import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import turbolinks from "@astrojs/turbolinks";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // No integrations are needed for AlpineJS support, just use Astro components!
  integrations: [tailwind(), turbolinks(), partytown(), sitemap()]
});