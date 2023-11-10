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

const filenames = fs.readdirSync(path.join("./src/content/docs/en/"))
const data = filenames.map((filename) => {
  try {
    const markdownWithMeta = fs.readFileSync(
      "./src/content/docs/en/" + filename
    )
    const { data: frontmatter, content } = matter(markdownWithMeta)
    const baseFilename = path.basename(filename, ".mdx")
    return {
      id: baseFilename,
      title: frontmatter.title,
      content: removeMd(content).replace(/\n/g, ""),
    }
  } catch (e) {
    console.error(`Error processing file ${filename}:`, e.message)
    return null // or a default object
  }
})
// 2. Send the dataset in JSON format
client
  .index("rim-manual-en")
  .addDocuments(JSON.parse(JSON.stringify(data)))
  .then((res) => console.log(res)) //show the result
