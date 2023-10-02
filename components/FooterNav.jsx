// components/FooterNav.jsx

import { useRouter } from 'next/router';
import Link from 'next/link';
import languageMappings from '@/components/languageMappings'; // translation dictionary

function FooterNav() {
  const router = useRouter();
  const currentLang = (router.asPath.match(/\/(en|es|fr|it|sv|de|pt)(\/|$)/) || [])[1] || 'en';
    // Let's define our default path/text sets
  const {
    homePath,
    homeText,
    specsPath,
    specsText,
    instPath,
    instText,
    gcPath,
    gcText,
    wwsPath,
    wwsText,
    dashPath,
    dashText,
    faqPath,
    faqText,
    planPath,
    planText,
    clPath,
    clText,
  } = languageMappings[currentLang];  

let prevPath="/";  
let prevText="Previous Section";
let nextPath="/";
let nextText="Next Section";
if (router.asPath.match(/^\/(en|es|fr|it|sv|de|pt)\/?$/)) {
  prevPath=null;
  nextPath=specsPath;
}
if (router.asPath.includes('/systemspecs')) {
    prevPath = homePath;
    nextPath= instPath;
  }
    if (router.asPath.includes('/installation')) {
    prevPath=specsPath;
    nextPath= gcPath;
  }
    if (router.asPath.includes('/gettingconnected')) {
    prevPath = instPath;
    nextPath= wwsPath;
  }
    if (router.asPath.includes('/workingwithsessions')) {
    prevPath = gcPath;
    nextPath= dashPath;
  }
    if (router.asPath.includes('/dashboard')) {
    prevPath = wwsPath;
    nextPath= faqPath;
  }
    if (router.asPath.includes('/faq')) {
    prevPath = dashPath;
    nextPath= planPath;
  }
    if (router.asPath.includes('/plans')) {
    prevPath = faqPath;
    nextPath= clPath;
  }
    if (router.asPath.includes('/changelog')) {
    prevPath = planPath;
    nextPath= "/";
  }
  
  return (
    <footer>
      {router.asPath.match(/^\/(en|es|fr|it|sv|de|pt)\/?$/) ? null : <Link role="button" href={prevPath}>{prevText}</Link>}
      {router.asPath.includes('/changelog') ? null : <Link role="button" href={nextPath}>{nextText}</Link>}
    </footer>
    
  );
}

export default FooterNav;
