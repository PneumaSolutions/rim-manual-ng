import { z, defineCollection } from "astro:content"

const docs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
})

export const collections = {
  docs,
}

export function createIsLangEntry(lang: string) {
  return (entry: CollectionEntry<"docs">): boolean =>
    entry.slug.startsWith(lang + "/")
}

export const isEnglishEntry = createIsLangEntry("en")
