import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getLangFromUrl, useTranslations } from '@/i18n/utils';
import { languages } from '@/i18n/ui';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { SearchDialog } from '@/components/SearchDialog'
import Image from 'next/image'
import Link from 'next/link'
// @ts-ignore  
import  NavList from '@/components/NavList'
import { PlatformProvider, PlatformSwitcher } from '../components/platform'
import LanguageSwitcher from '@/components/LanguageSwitcher';
function App({ Component, pageProps }: AppProps) {
  const { t } = useTranslations();
    return (
<PlatformProvider>
<NavList />
<SearchDialog />
      <PlatformSwitcher />
        <Component {...pageProps} />
      <PlatformSwitcher />
      <LanguageSwitcher />
    </PlatformProvider>
  )
}
// @ts-ignore  
export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context;

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

