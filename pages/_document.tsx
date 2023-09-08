import { Html, Head, Main, NextScript } from 'next/document'

import { PlatformProvider, PlatformSwitcher } from '../components/platform'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <PlatformProvider>
          <Main />
          <PlatformSwitcher />
        </PlatformProvider>
        <NextScript />
      </body>
    </Html>
  )
}
