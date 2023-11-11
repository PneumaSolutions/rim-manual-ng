import * as dotenv from "dotenv"
dotenv.config()

import { MeiliSearch } from "meilisearch"
const client = new MeiliSearch({
  host: process.env.MEILISEARCH_HOST,
  apiKey: process.env.MEILISEARCH_MASTER_KEY,
})

// 1. Build a dataset
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import removeMd from "remove-markdown"

function buildIndex(lang) {
  const filenames = fs.readdirSync(path.join(`./src/content/docs/${lang}/`))
  const data = filenames.map((filename) => {
    try {
      const markdownWithMeta = fs.readFileSync(
        `./src/content/docs/${lang}/${filename}`
      )
      let { data: frontmatter, content } = matter(markdownWithMeta)
      content = content.trim()
      while (content.startsWith("import ")) {
        let i = content.indexOf("\n")
        content = content.substring(i + 1).trim()
      }
      const baseFilename = path.basename(filename, ".mdx")
      return {
        id: baseFilename,
        title: frontmatter.title,
        content: removeMd(content).replace(/\n/g, " "),
      }
    } catch (e) {
      console.error(`Error processing file ${filename}:`, e.message)
      return null // or a default object
    }
  })
  // 2. Send the dataset in JSON format
  client
    .index(`rim-manual-${lang}`)
    .addDocuments(JSON.parse(JSON.stringify(data)))
    .then((res) => console.log(res)) //show the result
}

for (let lang of ["de", "en", "es", "fr", "it", "pt", "sv"]) {
  buildIndex(lang)
}
