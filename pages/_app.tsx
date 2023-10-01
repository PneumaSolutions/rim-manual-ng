// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { SearchDialog } from '@/components/SearchDialog'
import Image from 'next/image'
import Link from 'next/link'
// @ts-ignore  
import  NavList from '@/components/NavList'
// @ts-ignore  
import  FooterNav from '@/components/FooterNav'
import { PlatformProvider, PlatformSwitcher } from '../components/platform'
import LanguageSwitcher from '@/components/LanguageSwitcher';
// import { MDXLayout } from '@/components/MDXLayout';
//function app({ Component, pageProps }: AppProps) {
  export default function App({ Component, pageProps }: AppProps) {

    const { t } = useTranslation();
    return (

<PlatformProvider>
<Head>
  <title>{pageProps.mdxTitle || 'Default Title'}</title>
</Head>
<NavList />
<SearchDialog />
      <PlatformSwitcher />
        <Component {...pageProps} />
      <PlatformSwitcher />
      <LanguageSwitcher />
  <FooterNav />
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
      // ...(await serverSideTranslations(locale, ['common'])),

    },
  }
}

