import React, { useEffect, useState } from 'react';
import useTranslation from "@/hooks/useTranslation";
import { makeStaticProps } from '@/lib/getStatic'
import { Redirect } from '../lib/redirect'
import { MDXProvider } from '@mdx-js/react'
import Head from 'next/head'
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { SearchDialog } from '@/components/SearchDialog'
import Image from 'next/image'
import Link from 'next/link'
// @ts-ignore  
// import Systemspecs from './systemspecs.mdx'
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = router;

    const mdxPath = locale === 'es' ? '/es/systemspecs.mdx' : '/en/systemspecs.mdx';
  // Use dynamic import to load the appropriate MDX file
  const Systemspecs = dynamic(() => import(`@/pages${mdxPath}`));

  return (
    <>
      <Head>
        <title>{t('specs_title')}</title>
        <meta
          name="description"
          content="Documentation for Remote Incident Manager"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <MDXProvider>
    <Systemspecs />
      </MDXProvider>
      </main>
    </>
  )
}
const getStaticProps = makeStaticProps(['common'])
export { getStaticProps }
