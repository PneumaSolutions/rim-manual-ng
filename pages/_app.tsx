import { appWithTranslation } from 'next-i18next';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { SearchDialog } from '@/components/SearchDialog'
import Image from 'next/image'
import Link from 'next/link'
import  Navigation from '@/components/Navigation.jsx'

import { PlatformProvider, PlatformSwitcher } from '../components/platform'

export default function app({ Component, pageProps }: AppProps) {
  return (
<PlatformProvider>
<Navigation />
<SearchDialog />
      <PlatformSwitcher />
        <Component {...pageProps} />
      <PlatformSwitcher />
    </PlatformProvider>
  )
}
