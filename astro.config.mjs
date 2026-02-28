import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import netlify from "@astrojs/netlify"
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections"
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers"
import tailwindcss from "@tailwindcss/vite"
import expressiveCode from "astro-expressive-code"
import { defineConfig } from "astro/config"

import robotsTxt from "astro-robots-txt"

// 检查是否为生产环境
const isProduction = process.env.NODE_ENV === 'production'

// https://astro.build/config
export default defineConfig({
  output: isProduction ? "server" : "static",
  prefetch: true,
  site: "https://maojunzc.github.io",
  // 生产环境中使用Netlify适配器，开发环境中不使用
  adapter: isProduction ? netlify() : undefined,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sitemap(),
    expressiveCode({
      plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
      themes: ["material-theme-lighter", "material-theme-darker"],
      defaultProps: {
        showLineNumbers: true,
      },
    }),
    mdx(),
    robotsTxt(),
  ],
})