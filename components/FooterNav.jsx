// components/FooterNav.jsx

import { useRouter } from 'next/router';
import Link from 'next/link';
import languageMappings from '@/components/languageMappings'; // translation dictionary
import { useState } from 'react';
function FooterNav() {
  const router = useRouter();
  const [selectedLang, setSelectedLang] = useState('en'); // <-- New state
  const currentLang = (router.asPath.match(/\/(en|es|fr|it|sv|de|pt)(\/|$)/) || [])[1] || 'en';
  const handleLanguageChange = (event) => {
    setSelectedLang(event.target.value);
  };

  const handleGoClick = () => {
    router.push('/' + selectedLang);
  };

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
    langChangeText,
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
      <div className="languageSelector">
        <label htmlFor="langChange">{langChangeText}</label>
        <select id="langChange" value={selectedLang} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="sv">Swedish</option>
          <option value="pt">Portuguese</option>
        </select>
        <button onClick={handleGoClick}>Go</button>
      </div>
    </footer>
    
  );
}

export default FooterNav;
