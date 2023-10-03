// components/TOCNav.jsx

import { useRouter } from 'next/router';
import Link from 'next/link';
import languageMappings from '@/components/languageMappings'; // translation dictionary

function TOCNav() {
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

  return (
    <div class="navbar navbar-default" role="navigation">
      <div class="container-fluid">
      <div class="row flex-nowrap">
      <div id="sidebar" class="collapse show collapse-horizontal" aria-expanded="true">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0" id="navList">

      <li class="nav-item"><Link href={homePath}>{homeText}</Link></li>
      <li class="nav-item"><Link href={specsPath}>{specsText}</Link></li>
      <li class="nav-item"><Link href={instPath}>{instText}</Link></li>
      <li class="nav-item"><Link href={gcPath}>{gcText}</Link></li>
      <li class="nav-item"><Link href={wwsPath}>{wwsText}</Link></li>
      <li class="nav-item"><Link href={dashPath}>{dashText}</Link></li>
      <li class="nav-item"><Link href={faqPath}>{faqText}</Link></li>
      <li class="nav-item"><Link href={planPath}>{planText}</Link></li>
      <li class="nav-item"><Link href={clPath}>{clText}</Link></li>
</ul>
    </div>
    </div>
    </div>
    </div>
  );
}

export default TOCNav;
