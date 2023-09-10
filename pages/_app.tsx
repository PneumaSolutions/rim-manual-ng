import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { SearchDialog } from '@/components/SearchDialog'
import Image from 'next/image'
import Link from 'next/link'

import { PlatformProvider, PlatformSwitcher } from '../components/platform'

export default function App({ Component, pageProps }: AppProps) {
  return (
<PlatformProvider>
      <PlatformSwitcher />
        <Component {...pageProps} />
      <PlatformSwitcher />
    </PlatformProvider>
  )
}
