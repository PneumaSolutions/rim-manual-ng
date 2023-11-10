import type { FunctionComponent } from "preact"
import { useState } from "preact/hooks"

import languages from "~/i18n/languages"

function switchLang(lang: string, slug: string) {
  document.location.href = `/${lang}/${slug}/`
}

interface LanguageSwitcherProps {
  origLang: string
  slug: string
  languageLabel: string
  switchLanguageLabel: string
}

export const LanguageSwitcher: FunctionComponent<LanguageSwitcherProps> = ({
  origLang,
  slug,
  languageLabel,
  switchLanguageLabel,
}) => {
  const [lang, setLang] = useState(origLang)

  return (
    <details>
      <summary>{languageLabel} (BETA)</summary>
      <select
        aria-label={languageLabel}
        value={lang}
        onInput={(evt) => setLang((evt.target as HTMLSelectElement).value)}
      >
        <option value="en">{languages.en}</option>
        <option value="de">{languages.de}</option>
        <option value="es">{languages.es}</option>
        <option value="fr">{languages.fr}</option>
        <option value="it">{languages.it}</option>
        <option value="pt">{languages.pt}</option>
        <option value="sv">{languages.sv}</option>
      </select>
      <button
        type="button"
        onClick={() => switchLang(lang, slug)}
        disabled={lang === origLang}
      >
        {switchLanguageLabel}
      </button>
    </details>
  )
}
