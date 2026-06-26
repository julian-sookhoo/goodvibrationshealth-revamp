import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

// @astrojs/sitemap removed temporarily — crashes on build due to a bug in v3.1.x
// Add back once site is on production domain and a stable version is available.
// npm install @astrojs/sitemap@latest && re-add to integrations array.

export default defineConfig({
  site: 'https://goodvibrationshealth.ca',
  trailingSlash: 'always',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
})
