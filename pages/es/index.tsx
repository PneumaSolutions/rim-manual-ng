import { MDXProvider } from '@mdx-js/react'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { SearchDialog } from '@/components/SearchDialog'
import Image from 'next/image'
import Link from 'next/link'
import Welcome from './welcome.mdx'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Remote Incident Manager Documentation</title>
        <meta
          name="description"
          content="Documentation for Remote Incident Manager"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <MDXProvider>
<Welcome />
      </MDXProvider>
      </main>
    </>
  )
}
