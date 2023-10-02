// language redirection

import { useEffect } from 'react';
import { useRouter } from 'next/router';
// Let's define our included languages
const supportedLocales = ['en', 'es', 'fr', 'it', 'de', 'sv', 'pt'];

const getBrowserLocale = () => {
  const [lang] = (navigator.language || navigator.userLanguage).split('-');
  return supportedLocales.includes(lang) ? lang : 'en'; // default to 'en' if the locale isn't included
};

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const locale = getBrowserLocale();
    router.replace(`/${locale}`);
  }, [router]);

  return null; // because the redirect is near instantaneous, we really don't need to be showing anything here.
}

