import { defineConfig } from "astro/config"

import mdx from "@astrojs/mdx"
import preact from "@astrojs/preact"
import vercel from "@astrojs/vercel/serverless"

export default defineConfig({
  output: "hybrid",
  adapter: vercel(),
  integrations: [preact({ compat: true }), mdx()],
  server: {
    port: 3000,
  },
})
