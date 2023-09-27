import { useTranslation } from 'next-i18next'
import { makeStaticProps } from '@/lib/getStatic'
import { Redirect } from '../lib/redirect'
import { MDXProvider } from '@mdx-js/react'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { SearchDialog } from '@/components/SearchDialog'
import Image from 'next/image'
import Link from 'next/link'
// @ts-ignore  
import Welcome from './welcome.mdx'
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('home_title')}</title>
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
const getStaticProps = makeStaticProps(['common'])
export { getStaticProps }
