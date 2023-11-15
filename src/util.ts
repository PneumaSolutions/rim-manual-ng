import type { CollectionEntry } from "astro:content"

import languages from "~/i18n/languages"

export function getLanguageFromURL(pathname: string) {
  const langCodeMatch = pathname.match(/\/([a-z]{2}-?[a-z]{0,2})\//)
  return langCodeMatch ? langCodeMatch[1] : "en"
}

export type Platform = "windows" | "macos"

export function getPlatformFromURL(pathname: string): Platform {
  const platformMatch = pathname.match(/^\/[-a-zA-Z]+\/(windows|macos)\//)
  if (!platformMatch) {
    throw new Error("can't get platform from URL")
  }
  return platformMatch[1] as Platform
}

/** Remove \ and / from beginning of string */
export function removeLeadingSlash(path: string) {
  return path.replace(/^[/\\]+/, "")
}

/** Remove \ and / from end of string */
export function removeTrailingSlash(path: string) {
  return path.replace(/[/\\]+$/, "")
}

/** Get a page’s slug, without the language prefix (e.g. `'en/migrate'` => `'migrate'`). */
export const stripLangFromSlug = (slug: CollectionEntry<"docs">["slug"]) =>
  slug.split("/").slice(1).join("/")

/** Get a page’s lang tag from its slug (e.g. `'en/migrate'` => `'en'`). */
export const getLangFromSlug = (slug: CollectionEntry<"docs">["slug"]) =>
  slug.split("/")[0]

export function getLanguageFromRequest(request: Request) {
  const acceptLang = request.headers.get("accept-language")
  if (acceptLang) {
    const preferredLang = acceptLang.substring(0, 2)
    if (languages[preferredLang]) {
      return preferredLang
    }
  }
  return "en"
}

export function getPlatformFromRequest(request: Request): Platform {
  let ua = request.headers.get("user-agent")
  if (ua) {
    ua = ua.toLowerCase()
    if (ua.indexOf("win") != -1) {
      return "windows"
    }
    if (ua.indexOf("mac") != -1) {
      return "macos"
    }
  }
  return "windows"
}
