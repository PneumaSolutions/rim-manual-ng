import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { SearchDialog } from '@/components/SearchDialog'
import Image from 'next/image'
import Link from 'next/link'

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
<h1>Bienvenue !</h1>
Copyright © 2023 <a href="https://pneumasolutions.com">Pneuma Solutions</a>
<p><em>Remote Incident Manager</em> (RIM) est une application de bureau à distance puissante, multiplateforme et entièrement accessible, utilisée pour fournir une assistance technique, une formation et une administration de système aux clients, qu'ils soient malvoyants ou voyants. En plus de fournir une expérience de bureau à distance rationalisée, RIM possède quelques qualités uniques qui n'ont jamais été vues dans d'autres applications de bureau à distance.</p>
<h2>Pourquoi RIM ?</h2>
<p>Si vous avez déjà utilisé des applications de bureau à distance ou des outils d'assistance basés sur des lecteurs d'écran, vous constaterez que RIM rationalise considérablement votre flux de travail.</p>
<h3>Une conception inclusive</h3>
<p>Remote Incident Manager est véritablement une première en son genre. Il s'agit de la première solution d'assistance à distance <em>entièrement accessible</em> qui peut être utilisée par les professionnels de l'assistance et les utilisateurs finaux, qu'ils soient aveugles ou voyants. Ainsi, RIM peut remplacer entièrement une solution existante, car il offre tout ce que l'on peut attendre d'une solution d'assistance à distance sécurisée, en plus d'une accessibilité totale.</p>
<h3>Facile à installer et à déployer</h3>
<p>Dans une situation individuelle, l'installation ne pourrait pas être plus simple. L'installation instantanée en un clic permet à l'utilisateur final de configurer son ordinateur pour recevoir de l'aide rapidement et sans douleur. De plus, le processus d'installation lance RIM dès qu'il est terminé, de sorte que l'utilisateur est immédiatement prêt à se connecter.
Les techniciens peuvent facilement gérer leurs machines via une interface web conviviale. Les utilisateurs en entreprise peuvent utiliser ce tableau de bord pour déployer RIM sur les machines de leur lieu de travail. Des installateurs prêts à l'emploi peuvent être envoyés aux utilisateurs finaux en quelques secondes. Le programme d'installation lui-même peut être personnalisé par le biais d'arguments de ligne de commande qui peuvent être utilisés dans le cadre d'un déploiement automatisé.</p>
<h3>Session partagée</h3>
<p>Contrairement à Windows Remote Desktop ou à d'autres applications similaires, une session à distance n'est pas créée ; vous verrez ce que fait la machine de l'utilisateur final. Cela signifie que vous pouvez facilement résoudre un problème qu'il rencontre tout en conservant sa configuration existante. Vous pouvez également voir un utilisateur final exécuter un processus qui mène à un problème. Cela vous permet également de travailler en collaboration sur un projet, d'envoyer et de recevoir des fichiers via le presse-papiers, etc.</p>
<h3>Connexions rapides et stables</h3>
<p>Comme RIM utilise les dernières avancées en matière de connexions directes d'ordinateur à ordinateur, la réactivité est nettement supérieure à celle des autres solutions. Le service central de RIM initie la connexion, mais il s'efface une fois que la connexion est établie. Tout cela sans qu'il soit nécessaire d'apporter des modifications lourdes et invasives à la configuration du réseau.</p>
<h3>Audio de haute qualité</h3>
<p>RIM utilise les dernières avancées en matière de technologie de codage audio en temps réel pour fournir un son stéréo extrêmement réactif et de haute fidélité. Vous entendrez tout ce qui se passe sur l'ordinateur de l'utilisateur final pendant la session.</p>
<h3>Sortie visuelle de haute qualité</h3>
<p>Encore une fois, Remote Incident Manager est une solution complète conçue pour remplacer les infrastructures précédentes, plutôt que d'être utilisée en même temps qu'elles. C'est pourquoi la sortie écran de RIM est tout aussi réactive et stable. L'utilisation de la souris est également entièrement prise en charge.</p>
<h3>Communication vocale</h3>
<p>Fini le temps où il fallait passer un appel téléphonique ou organiser une conférence web en même temps que la session à distance. RIM offre une communication vocale claire et à faible latence au sein même de votre session.</p>
<h3>Accessible dans <em>tous les</em> cas d'utilisation</h3>
<p>RIM est la première solution d'accès à distance qui offre une accessibilité inégalée, quel que soit le lecteur d'écran (ou l'absence de lecteur d'écran) utilisé par l'une ou l'autre des parties.</p>
<h4>les différences dans les lecteurs d'écran sont désormais hors de propos</h4>
<p>Avant RIM, il était difficile d'aider quelqu'un qui utilisait un lecteur d'écran différent du sien. Avec RIM, ce problème appartient désormais au passé. RIM ne se préoccupe pas du lecteur d'écran utilisé par l'une ou l'autre des parties. Vous pouvez utiliser JAWS tandis que la personne que vous assistez peut utiliser NVDA ou même VoiceOver ; avec RIM, rien de tout cela n'a d'importance. Non seulement vous pourrez entendre la voix de l'utilisateur final, quel que soit son lecteur d'écran, mais la gestion du clavier de RIM sera stable et fiable, quelle que soit la configuration du lecteur d'écran. Il s'agit là d'un avantage important d'une solution indépendante du lecteur d'écran.</p>
<h4>Pas de lecteur d'écran ? Pas de problème !</h4>
<p>Un professionnel de l'informatique aveugle peut désormais aider facilement un utilisateur final voyant, même si ce dernier n'a pas de lecteur d'écran installé sur son ordinateur. En l'absence de lecteur d'écran sur l'ordinateur distant, RIM veillera à ce que vous puissiez toujours obtenir la parole si vous utilisez le <a href="https://nvaccess.org">lecteur d'écran</a> gratuit <a href="https://nvaccess.org">NVDA</a> ou VoiceOver sur Mac OS. Remote incident Manager lancera son module d'accessibilité qui vous permettra de contrôler l'ordinateur du client par la parole comme s'il disposait d'un lecteur d'écran. Non seulement l'utilisateur final n'a pas à se préoccuper de l'installation d'un lecteur d'écran, mais il n'entend même pas la parole que vous entendez maintenant lorsque vous contrôlez son ordinateur.</p>
<h2>Conventions de documentation et terminologie</h2>
<ul>
<li>Remote Incident Manager étant une application multiplateforme, de nombreuses sections de cette documentation adapteront leur contenu au système d'exploitation que vous utilisez.</li>
	<ul>
    <li>Dans la plupart des cas, le manuel reconnaît si vous utilisez Windows ou Mac et adapte le contenu en conséquence.</li>
    <li>Si la reconnaissance de la plate-forme échoue ou si vous lisez la documentation sur un autre appareil, tel qu'un téléphone ou une tablette, vous trouverez un bouton ou une série de boutons sur la page pour afficher le contenu correspondant à la plate-forme que vous utilisez.</li>
</ul>
<li>Les connexions RIM s'établissent entre un ordinateur cible et un contrôleur.</li>
	<ul>
	<li>L'ordinateur cible est l'ordinateur qui bénéficiera de l'assistance à distance.</li>
    <li>Un contrôleur se connecte à un ordinateur cible pour l'assistance à distance.</li>
	</ul>
</ul>
      </main>
    </>
  )
}
