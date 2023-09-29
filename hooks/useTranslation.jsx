// hooks/useTranslation.jsx

import { useRouter } from "next/router";
import en from "../public/static/locales/en";
import es from "../public/static/locales/es";

const TRANSLATIONS = { en, es };

export default function useTranslation() {
  const router = useRouter();
  const { locale, asPath } = router;

  const setLocale = (locale) => router.push(asPath, asPath, { locale });

  const t = (keyString) => TRANSLATIONS[locale][keyString];

  return { t, locale, setLocale };
}