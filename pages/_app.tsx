// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/general.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { SearchDialog } from '@/components/SearchDialog'
import Image from 'next/image'
import Link from 'next/link'
// @ts-ignore  
import  TOCNav from '@/components/TOCNav'
// @ts-ignore  
import  FooterNav from '@/components/FooterNav'
import { PlatformProvider, PlatformSwitcher } from '../components/platform'
import { useRouter } from 'next/router';
import languageMappings from '@/components/languageMappings'; // translation dictionary

// import { MDXLayout } from '@/components/MDXLayout';
//function app({ Component, pageProps }: AppProps) {
  export default function App({ Component, pageProps }: AppProps) {
        const router = useRouter();
    const currentLang = (router.asPath.match(/\/(en|es|fr|it|sv|de|pt)(\/|$)/) || [])[1] || 'en';
    // Let's define our default path/text sets
    const {
      homePath,
      homeText,
      homeTitleText,
      specsPath,
      specsText,
      specsTitleText,
      instPath,
      instText,
      instTitleText,
      gcPath,
      gcText,
      gcTitleText,
      wwsPath,
      wwsText,
      wwsTitleText,
      dashPath,
      dashText,
      dashTitleText,
      faqPath,
      faqText,
      faqTitleText,
      planPath,
      planText,
      planTitleText,
      clPath,
      clText,
      clTitleText,
    } = languageMappings[currentLang];  
  let titleText = pageProps.frontMatter?.title || "";
  // Let's define our titles per page for when we can't get the frontmatter, or there is none.
  if (!titleText) {
      if (router.asPath.match(/^\/(en|es|fr|it|sv|de|pt)\/?$/)) {
    titleText = homeTitleText;
  }
  if (router.asPath.includes('/systemspecs')) {
    titleText = specsTitleText;
  }
  if (router.asPath.includes('/installation')) {
    titleText = instTitleText;
  }
  if (router.asPath.includes('/gettingconnected')) {
    titleText = gcTitleText;
  }
  if (router.asPath.includes('/workingwithsessions')) {
    titleText = wwsTitleText;
  }
  if (router.asPath.includes('/dashboard')) {
    titleText = dashTitleText;
  }
  if (router.asPath.includes('/faq')) {
    titleText = faqTitleText;
  }
  if (router.asPath.includes('/plans')) {
    titleText = planTitleText;
  }
  if (router.asPath.includes('/changelog')) {
    titleText = clTitleText;
  }
}
    return (

<PlatformProvider>
<Head>
  <title>{titleText}</title>
</Head>
<div>
<h2>Remote Incident Manager (RIM)</h2>
<PlatformSwitcher />
</div>
<div className="container-fluid">
  <div className="sidebar">
  <TOCNav />
  <div className="search">
  <SearchDialog />
  </div>
  </div>
<main className="col ps-md-2 pt-2">
<div className="page-header pt-3">
<Component {...pageProps} />
console.log(pageProps);
</div>
<FooterNav />

</main>
</div>
</PlatformProvider>
  )
}
// @ts-ignore  
//export async function getStaticProps(context) {
  // extract the locale identifier from the URL
//  const { locale } = context;

//  return {
//    props: {
      // pass the translation props to the page component
      // ...(await serverSideTranslations(locale, ['common'])),

//    },
//  }
//}

