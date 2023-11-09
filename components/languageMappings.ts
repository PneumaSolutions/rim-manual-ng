interface LanguageMapping {
  homePath: string
  homeText: string
  homeTitleText: string
  specsPath: string
  specsText: string
  specsTitleText: string
  instPath: string
  instText: string
  instTitleText: string
  gcPath: string
  gcText: string
  gcTitleText: string
  wwsPath: string
  wwsText: string
  wwsTitleText: string
  dashPath: string
  dashText: string
  dashTitleText: string
  faqPath: string
  faqText: string
  faqTitleText: string
  planPath: string
  planText: string
  planTitleText: string
  clPath: string
  clText: string
  clTitleText: string
  langChangeText: string
}

const languageMappings: Record<string, LanguageMapping> = {
  en: {
    homePath: "/en",
    homeText: "Welcome",
    homeTitleText: "Welcome - Remote Incident Manager Documentation",
    specsPath: "/en/systemspecs",
    specsText: "System Requirements",
    specsTitleText:
      "System Requirements - Remote Incident Manager Documentation",
    instPath: "/en/installation",
    instText: "Installation",
    instTitleText: "Installation - Remote Incident Manager Documentation",
    gcPath: "/en/gettingconnected",
    gcText: "Getting Connected",
    gcTitleText: "Getting Connected - Remote Incident Manager Documentation",
    wwsPath: "/en/workingwithsessions",
    wwsText: "Working within a Session",
    wwsTitleText:
      "Working within a Session - Remote Incident Manager Documentation",
    dashPath: "/en/dashboard",
    dashText: "The Rim Management Dashboard",
    dashTitleText:
      "The RIM Management Dashboard - Remote Incident Manager Documentation",
    faqPath: "/en/faq",
    faqText: "Frequently Asked Questions",
    faqTitleText:
      "Frequently Asked Questions - Remote Incident Manager Documentation",
    planPath: "/en/plans",
    planText: "Plans and Purchasing",
    planTitleText:
      "Plans and Purchasing - Remote Incident Manager Documentation",
    clPath: "/en/changelog",
    clText: "Change Log",
    clTitleText: "Change Log - Remote Incident Manager Documentation",
    langChangeText: "Language:",
  },
  es: {
    homePath: "/es",
    homeText: "Bienvenido",
    homeTitleText: "Bienvenido - Documentación de Remote Incident Manager",
    specsPath: "/es/systemspecs",
    specsText: "Requisitos del sistema",
    specsTitleText:
      "Requisitos del sistema - Documentación de Remote Incident Manager",
    instPath: "/es/installation",
    instText: "Instalación",
    instTitleText: "Instalación - Documentación de Remote Incident Manager",
    gcPath: "/es/gettingconnected",
    gcText: "Conectarse",
    gcTitleText: "Conectarse - Documentación de Remote Incident Manager",
    wwsPath: "/es/workingwithsessions",
    wwsText: "Trabajar en una sesión",
    wwsTitleText:
      "Trabajar dentro de una sesión - Documentación de Remote Incident Manager",
    dashPath: "/es/dashboard",
    dashText: "El cuadro de mandos de la gestión de llantas",
    dashTitleText:
      "The RIM Management Cuadro de mandos - Documentación de Remote Incident Manager",
    faqPath: "/es/faq",
    faqText: "Preguntas frecuentes",
    faqTitleText:
      "Preguntas frecuentes - Documentación de Remote Incident Manager",
    planPath: "/es/plans",
    planText: "Planes y compras",
    planTitleText:
      "Planes y compras - Documentación de Remote Incident Manager",
    clPath: "/es/changelog",
    clText: "Registro de cambios",
    clTitleText:
      "Registro de cambios - Documentation de Remote Incident Manager",
    langChangeText: "Idioma:",
  },
  fr: {
    homePath: "/fr",
    homeText: "Bienvenue",
    homeTitleText:
      "Bienvenue - Documentation sur le gestionnaire d'incidents à distance",
    specsPath: "/fr/systemspecs",
    specsText: "Configuration requise",
    specsTitleText:
      "Configuration requise - Documentation sur le gestionnaire d'incidents à distance",
    instPath: "/fr/installation",
    instText: "Installation",
    instTitleText: "Installation - Remote Incident Manager Documentation",
    gcPath: "/fr/gettingconnected",
    gcText: "Se connecter",
    gcTitleText:
      "Se connecter - Documentation sur le gestionnaire d'incidents à distance",
    wwsPath: "/fr/workingwithsessions",
    wwsText: "Travailler au sein d'une session",
    wwsTitleText:
      "Travailler dans une session - Remote Incident Manager Documentation",
    dashPath: "/fr/dashboard",
    dashText: "Le tableau de bord de la gestion des rives",
    dashTitleText:
      "Le tableau de bord de gestion du RIM - Documentation sur le gestionnaire d'incidents à distance",
    faqPath: "/fr/faq",
    faqText: "Questions fréquemment posées",
    faqTitleText:
      "Foire aux questions - Documentation sur le gestionnaire d'incidents à distance",
    planPath: "/fr/plans",
    planText: "Plans et achats",
    planTitleText:
      "Plans et achats - Documentation du gestionnaire d'incidents à distance",
    clPath: "/fr/changelog",
    clText: "Journal des modifications",
    clTitleText: "Change Log - Remote Incident Manager Documentation",
    langChangeText: "Langue:",
  },
  it: {
    homePath: "/it",
    homeText: "Benvenuti",
    homeTitleText: "Benvenuti - Documentazione di Remote Incident Manager",
    specsPath: "/it/systemspecs",
    specsText: "Requisiti di sistema",
    specsTitleText:
      "Requisiti di sistema - Documentazione di Remote Incident Manager",
    instPath: "/it/installation",
    instText: "Installazione",
    instTitleText: "Installazione - Documentazione di Remote Incident Manager",
    gcPath: "/it/gettingconnected",
    gcText: "Connettersi",
    gcTitleText: "Connettersi - Documentazione di Remote Incident Manager",
    wwsPath: "/it/workingwithsessions",
    wwsText: "Lavorare all'interno di una sessione",
    wwsTitleText:
      "Lavorare all'interno di una sessione - Documentazione di Remote Incident Manager",
    dashPath: "/it/dashboard",
    dashText: "Il cruscotto di gestione del cerchio",
    dashTitleText:
      "Il cruscotto di gestione RIM - Documentazione su Remote Incident Manager",
    faqPath: "/it/faq",
    faqText: "Domande frequenti",
    faqTitleText:
      "Domande frequenti - Documentazione di Remote Incident Manager",
    planPath: "/it/plans",
    planText: "Piani e acquisti",
    planTitleText:
      "Piani e acquisti - Documentazione di Remote Incident Manager",
    clPath: "/it/changelog",
    clText: "Registro delle modifiche",
    clTitleText:
      "Registro delle modifiche - Documentazione di Remote Incident Manager",
    langChangeText: "Lingua:",
  },
  de: {
    homePath: "/de",
    homeText: "Willkommen",
    homeTitleText: "Willkommen - Remote Incident Manager Dokumentation",
    specsPath: "/de/systemspecs",
    specsText: "Systemanforderungen",
    specsTitleText:
      "Systemanforderungen - Remote Incident Manager Dokumentation",
    instPath: "/de/installation",
    instText: "Einrichtung",
    instTitleText: "Einrichtung - Remote Incident Manager Dokumentation",
    gcPath: "/de/gettingconnected",
    gcText: "Verbunden werden",
    gcTitleText:
      "Verbindung herstellen - Remote Incident Manager Dokumentation",
    wwsPath: "/de/workingwithsessions",
    wwsText: "Arbeiten innerhalb einer Sitzung",
    wwsTitleText:
      "Arbeiten innerhalb einer Sitzung - Remote Incident Manager Dokumentation",
    dashPath: "/de/dashboard",
    dashText: "Das Rim Management Dashboard",
    dashTitleText:
      "Das RIM Management Dashboard - Remote Incident Manager Dokumentation",
    faqPath: "/de/faq",
    faqText: "Häufig gestellte Fragen",
    faqTitleText:
      "Häufig gestellte Fragen - Remote Incident Manager Dokumentation",
    planPath: "/de/plans",
    planText: "Planen und Kaufeng",
    planTitleText:
      "Pläne und Beschaffung - Remote Incident Manager Dokumentation",
    clPath: "/de/changelog",
    clText: "Änderungsprotokoll",
    clTitleText: "Change Log - Remote Incident Manager Dokumentation",
    langChangeText: "Sprache:",
  },
  sv: {
    homePath: "/sv",
    homeText: "Välkommen till",
    homeTitleText: "Välkommen - Dokumentation för Remote Incident Manager",
    specsPath: "/sv/systemspecs",
    specsText: "Systemkrav",
    specsTitleText: "Systemkrav - Dokumentation för Remote Incident Manager",
    instPath: "/sv/installation",
    instText: "Installation",
    instTitleText: "Installation - Dokumentation för Remote Incident Manager",
    gcPath: "/sv/gettingconnected",
    gcText: "Att bli uppkopplad",
    gcTitleText: "Ansluta - Dokumentation för Remote Incident Manager",
    wwsPath: "/sv/workingwithsessions",
    wwsText: "Arbeta inom en session",
    wwsTitleText:
      "Arbeta inom en session - Dokumentation för Remote Incident Manager",
    dashPath: "/sv/dashboard",
    dashText: "Instrumentpanelen för Rim Management",
    dashTitleText:
      "RIM Management Dashboard - Dokumentation för Remote Incident Manager",
    faqPath: "/sv/faq",
    faqText: "Vanliga frågor och svar",
    faqTitleText: "Vanliga frågor - Dokumentation för Remote Incident Manager",
    planPath: "/sv/plans",
    planText: "Planer och inköp",
    planTitleText:
      "Planer och inköp - Dokumentation för Remote Incident Manager",
    clPath: "/sv/changelog",
    clText: "Ändra logg",
    clTitleText:
      "Ändringslogg - Dokumentation för hantering av fjärrincidenter",
    langChangeText: "Språk:",
  },
  pt: {
    homePath: "/pt",
    homeText: "Bem-vindo",
    homeTitleText: "Bem-vindo - Documentação do Remote Incident Manager",
    specsPath: "/pt/systemspecs",
    specsText: "Requisitos do sistema",
    specsTitleText:
      "Requisitos do sistema - Documentação do Remote Incident Manager",
    instPath: "/pt/installation",
    instText: "Instalação",
    instTitleText: "Instalação - Documentação do Remote Incident Manager",
    gcPath: "/pt/gettingconnected",
    gcText: "Como se conectar",
    gcTitleText: "Como se conectar - Documentação do Remote Incident Manager",
    wwsPath: "/pt/workingwithsessions",
    wwsText: "Trabalhando em uma sessão",
    wwsTitleText:
      "Trabalhando em uma sessão - Documentação do Remote Incident Manager",
    dashPath: "/pt/dashboard",
    dashText: "O painel de controle do Rim Management",
    dashTitleText:
      "Painel de gerenciamento do RIM - Documentação do Remote Incident Manager",
    faqPath: "/pt/faq",
    faqText: "Perguntas frequentes",
    faqTitleText:
      "Perguntas frequentes - Documentação do Remote Incident Manager",
    planPath: "/pt/plans",
    planText: "Planos e compras",
    planTitleText:
      "Planos e compras - Documentação do Remote Incident Manager",
    clPath: "/pt/changelog",
    clText: "Registro de alterações",
    clTitleText:
      "Registro de alterações - Documentação do Remote Incident Manager",
    langChangeText: "Idioma:",
  },
}

export default languageMappings
