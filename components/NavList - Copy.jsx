// components/NavList.jsx

import { useRouter } from 'next/router';
import Link from 'next/link';

function NavList() {
  const router = useRouter();
  // Let's define our default path/text sets
  let specsPath="/en/systemspecs";
  let specsText = "System Requirements";
  let instPath="/en/installation";
  let instText="Installation";
  let gcPath="/en/gettingconnected";
  let gcText="Getting Connected";
  let wwsPath="/en/workingwithsessions";
  let wwsText="Working within a Session";
  let dashPath="/en/dashboard";
  let dashText="The RIM Management Dashboard";
  let faqPath = "/en/faq";
  let faqText="Frequently Asked Questions";
  let planPath = "/en/plans";
  let planText="Plans and Purchasing";
  let clPath="/en/changelog";
  let clText = "Change Log";
  
  // Check which language path the URL contains '/en', '/es', etc.
  if (router.asPath.includes('/es')) {
    specsPath="/es/systemspecs";
    specsText = 'Requisitos del sistema';
    instPath="/es/installation";
    instText="Instalación";
    gcPath="/es/gettingconnected";
    gcText="Conectarse";
    wwsPath="/es/workingwithsessions";
    wwsText="Trabajar en una sesión";
    dashPath="/es/dashboard";
    dashText="El panel de gestión de RIM";
    faqPath = "/es/faq";
    faqText="Preguntas frecuentes";
    planPath = "/es/plans";
    planText="Planes y compras";
    clPath="/es/changelog";
    clText = "Registro de cambios";
 
  }
  if (router.asPath.includes('/fr')) {
    specsPath="/fr/systemspecs";
    specsText = 'Configuration requise';
    instPath="/fr/installation";
    instText="l'installation";
    gcPath="/fr/gettingconnected";
    gcText="Se connecter";
    wwsPath="/fr/workingwithsessions";
    wwsText="Travailler au sein d'une session";
    dashPath="/fr/dashboard";
    dashText="Le tableau de bord de gestion du RIM";
    faqPath = "/fr/faq";
    faqText="Questions fréquemment posées";
    planPath = "/fr/plans";
    planText="Plans et achats";
    clPath="/fr/changelog";
    clText = "Journal des modifications";
  }
  if (router.asPath.includes('/it')) {
    specsPath="/it/systemspecs";
    specsText = 'Requisiti di sistema';
    instPath="/it/installation";
    instText="Installazione";
    gcPath="/it/gettingconnected";
    gcText="Connettersi";
    wwsPath="/it/workingwithsessions";
    wwsText="Lavorare all'interno di una sessione";
    dashPath="/it/dashboard";
    dashText="Il cruscotto di gestione RIM";
    faqPath = "/it/faq";
    faqText="Domande frequenti";
    planPath = "/it/plans";
    planText="Piani e acquisti";
    clPath="/it/changelog";
    clText = "Registro delle modifiche";
  }
  if (router.asPath.includes('/sv')) {
    specsPath="/sv/systemspecs";
    specsText = 'Systemkrav';
    instPath="/sv/installation";
    instText="Installation";
    gcPath="/sv/gettingconnected";
    gcText="Att bli uppkopplad";
    wwsPath="/sv/workingwithsessions";
    wwsText="Arbeta inom en session";
    dashPath="/sv/dashboard";
    dashText="Instrumentpanel för RIM-hantering";
    faqPath = "/sv/faq";
    faqText="Vanliga frågor och svar";
    planPath = "/sv/plans";
    planText="Planer och inköp";
    clPath="/sv/changelog";
    clText = "Ändra logg";
  }
  if (router.asPath.includes('/de')) {
    specsPath="/de/systemspecs";
    specsText = 'Systemanforderungen';
    instPath="/de/installation";
    instText="Einrichtung";
    gcPath="/de/gettingconnected";
    gcText="Verbunden werden";
    wwsPath="/de/workingwithsessions";
    wwsText="Arbeiten innerhalb einer Sitzung";
    dashPath="/de/dashboard";
    dashText="Das RIM Management Dashboard";
    faqPath = "/de/faq";
    faqText="Häufig gestellte Fragen";
    planPath = "/de/plans";
    planText="Planen und Einkaufen";
    clPath="/de/changelog";
    clText = "Änderungsprotokoll";
  }
  if (router.asPath.includes('/pt')) {
    specsPath="/pt/systemspecs";
    specsText = 'Requisitos do sistema';
    instPath="/pt/installation";
    instText="Instalação";
    gcPath="/pt/gettingconnected";
    gcText="Como se conectar";
    wwsPath="/pt/workingwithsessions";
    wwsText="Trabalhando em uma sessão";
    dashPath="/pt/dashboard";
    dashText="O painel de gerenciamento da RIM";
    faqPath = "/pt/faq";
    faqText="Perguntas frequentes";
    planPath = "/pt/plans";
    planText="Planos e compras";
    clPath="/pt/changelog";
    clText = "Registro de alterações";
  }

  return (
    <nav>
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
