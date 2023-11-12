import { getCollection, type CollectionEntry } from "astro:content"
import { createIsLangEntry, isEnglishEntry } from "./content/config"

const isSpanishEntry = createIsLangEntry("es")

export const allPages = await getCollection("docs", (entry) => {
  if (import.meta.env.PUBLIC_TWO_LANG) {
    // Build for two languages only to speed up Astro's smoke tests
    return isEnglishEntry(entry) || isSpanishEntry(entry)
  } else {
    return true
  }
})

export const pagesByPath = (() => {
  let result: Record<string, CollectionEntry<"docs">> = {}
  for (let entry of allPages) {
    result[entry.slug] = entry
  }
  return result
})()

export const englishPages = allPages.filter(isEnglishEntry)

export const pageOrder: string[] = [
  "welcome",
  "systemspecs",
  "installation",
  "gettingconnected",
  "workingwithsessions",
  "dashboard",
  "localization",
  "faq",
  "plans",
  "changelog",
]
