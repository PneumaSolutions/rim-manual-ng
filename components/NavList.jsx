// components/NavList.jsx

import { useRouter } from 'next/router';
import Link from 'next/link';
import languageMappings from '@/components/languageMappings'; // translation dictionary

function NavList() {
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

  return (
    <nav>
      <Link href={homePath}>{homeText}</Link>
      <Link href={specsPath}>{specsText}</Link>
      <Link href={instPath}>{instText}</Link>
      <Link href={gcPath}>{gcText}</Link>
      <Link href={wwsPath}>{wwsText}</Link>
      <Link href={dashPath}>{dashText}</Link>
      <Link href={faqPath}>{faqText}</Link>
      <Link href={planPath}>{planText}</Link>
      <Link href={clPath}>{clText}</Link>

    </nav>
    
  );
}

export default NavList;
