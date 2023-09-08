import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { PlatformProvider, PlatformSwitcher } from '../components/platform'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlatformProvider>
      <Component {...pageProps} />
      <PlatformSwitcher />
    </PlatformProvider>
  )
}
