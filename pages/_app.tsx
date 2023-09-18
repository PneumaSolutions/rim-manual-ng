import { appWithTranslation } from 'next-i18next';
import { useTranslation } from 'next-i18next'
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

export default function App({ Component, pageProps }: AppProps) {
  const { t } = useTranslation();
    return (
<PlatformProvider>
<NavList />
<SearchDialog />
      <PlatformSwitcher />
        <Component {...pageProps} />
      <PlatformSwitcher />
    </PlatformProvider>
  )
}
