import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
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
  // 开发环境中不使用适配器，避免权限问题
  adapter: isProduction ? undefined : undefined,
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