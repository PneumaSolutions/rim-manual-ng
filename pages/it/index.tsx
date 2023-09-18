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
<h1>Benvenuti!</h1>
Copyright © 2023 <a href="https://pneumasolutions.com">Pneuma Solutions</a>
<p><em>Remote Incident Manager</em> (RIM) è una potente applicazione desktop remota multipiattaforma completamente accessibile, utilizzata per fornire assistenza tecnica, formazione e amministrazione di sistema a clienti sia ipovedenti che vedenti. Oltre a fornire un'esperienza di desktop remoto semplificata, RIM ha alcune qualità uniche, mai viste prima in altre applicazioni di desktop remoto.</p>
<h2>Perché RIM?</h2>
<p>Se provenite da precedenti applicazioni di desktop remoto o da strumenti di assistenza basati su screen reader, scoprirete che RIM semplifica notevolmente il vostro flusso di lavoro.</p>
<h3>Design inclusivo</h3>
<p>Remote Incident Manager è una vera novità nel suo genere. È la prima soluzione di assistenza remota <em>completamente accessibile</em> che può essere utilizzata da professionisti dell'assistenza e utenti finali sia ciechi che vedenti. RIM può quindi sostituire completamente una soluzione esistente, poiché offre tutto ciò che si può chiedere a una soluzione di assistenza remota sicura, oltre alla completa accessibilità.</p>
<h3>Facile da installare e distribuire</h3>
<p>In una situazione one-to-one, l'installazione non potrebbe essere più semplice. L'installazione istantanea con un solo clic garantisce all'utente finale un processo di configurazione del computer per ricevere assistenza rapido e indolore. Inoltre, il processo di installazione avvia RIM al termine, in modo che l'utente sia immediatamente pronto a connettersi.
I tecnici possono gestire facilmente le loro macchine tramite un'interfaccia basata sul web. Gli utenti aziendali possono utilizzare questa dashboard per distribuire RIM sulle macchine del loro posto di lavoro. Gli installatori già pronti possono essere distribuiti agli utenti finali in pochi secondi. Il programma di installazione stesso può essere ulteriormente personalizzato tramite argomenti della riga di comando che possono a loro volta essere utilizzati in una distribuzione automatizzata.</p>
<h3>Sessione condivisa</h3>
<p>A differenza di Windows Remote Desktop o di altre applicazioni simili, non viene creata una sandbox per la sessione remota; ciò che il computer dell'utente finale sta facendo è ciò che vedrete. Ciò significa che è possibile risolvere facilmente un problema, mantenendo intatta la configurazione esistente. È inoltre possibile vedere l'utente finale mentre esegue un processo che porta a un problema. Ciò consente inoltre di lavorare in modo collaborativo su un progetto, di inviare file da e verso la clipboard, ecc.</p>
<h3>Connessioni veloci e stabili</h3>
<p>Poiché RIM utilizza i più recenti progressi nelle connessioni dirette da computer a computer, la reattività è superiore a quella di altre soluzioni. Il servizio centrale di RIM avvia la connessione, ma una volta stabilita si toglie di mezzo. Tutto questo senza dover apportare modifiche complesse e invasive alle configurazioni di rete.</p>
<h3>Audio di alta qualità</h3>
<p>RIM utilizza i più recenti progressi nella tecnologia di codifica audio in tempo reale per fornire un audio stereo estremamente reattivo e ad alta fedeltà. Si sentirà tutto l'audio in riproduzione sul computer dell'utente finale durante la sessione.</p>
<h3>Output visivo di alta qualità</h3>
<p>Anche in questo caso, Remote Incident Manager è una soluzione completa progettata per sostituire le infrastrutture precedenti, piuttosto che per affiancarle. Per questo motivo, l'output su schermo di RIM è altrettanto reattivo e stabile. Anche l'uso del mouse è pienamente supportato.</p>
<h3>Comunicazione vocale</h3>
<p>Sono finiti i tempi in cui bisognava effettuare una chiamata telefonica o una conferenza web separata accanto alla sessione remota. RIM offre una comunicazione vocale cristallina e a bassa latenza direttamente all'interno della sessione.</p>
<h3>Accessibile in <em>tutti i</em> casi d'uso</h3>
<p>RIM è la prima soluzione di accesso remoto che offre un'accessibilità senza pari, indipendentemente dallo screen reader (o dalla sua mancanza) utilizzato da entrambe le parti.</p>
<h4>le differenze nei lettori di schermo sono ormai irrilevanti</h4>
<p>Prima di RIM, era difficile assistere qualcuno che utilizzava uno screen reader diverso dal proprio. Con RIM, questo è ormai un ricordo del passato. RIM non si preoccupa di quale sia il lettore in uso da entrambe le parti. Voi potreste utilizzare JAWS, mentre la persona che state assistendo potrebbe utilizzare NVDA o persino VoiceOver; con RIM, tutto questo non ha importanza. Non solo sarete in grado di ascoltare il discorso dell'utente finale indipendentemente dal suo screen reader, ma la gestione della tastiera di RIM sarà stabile e affidabile indipendentemente dalla configurazione dello screen reader. Questo è un vantaggio significativo di una soluzione indipendente dallo screen reader.</p>
<h4>Niente lettore di schermo? Nessun problema!</h4>
<p>Un professionista IT non vedente può ora aiutare facilmente un utente finale vedente, anche se non ha un lettore di schermo installato sul proprio computer. In assenza di un lettore di schermo sul computer remoto, RIM farà in modo che l'utente sia comunque in grado di parlare, a condizione che utilizzi il <a href="https://nvaccess.org">lettore di schermo</a> gratuito <a href="https://nvaccess.org">NVDA</a> o VoiceOver su Mac OS. Remote incident Manager avvierà il modulo di accessibilità che consente di controllare il computer del cliente con la voce come se avesse uno screen reader. L'utente finale non solo non deve preoccuparsi di installare un lettore di schermo, ma non sente nemmeno il parlato che voi ora sentite mentre controllate il suo computer.</p>
<h2>Convenzioni e terminologia della documentazione</h2>
<ul>
<li>Poiché Remote Incident Manager è multipiattaforma, molte sezioni di questa documentazione si adattano al sistema operativo in uso.</li>
	<ul>
    <li>Nella maggior parte dei casi, il manuale riconosce se si sta utilizzando Windows o Mac e adatta il contenuto di conseguenza.</li>
    <li>Nel caso in cui il riconoscimento della piattaforma non avvenga o si stia leggendo la documentazione su un dispositivo diverso, come un telefono o un tablet, nella pagina si troverà un pulsante o una serie di pulsanti che mostreranno il contenuto per la piattaforma utilizzata.</li>
</ul>
<li>Le connessioni RIM avvengono tra una destinazione e un controller.</li>
	<ul>
	<li>Il computer di destinazione è il computer che riceverà l'assistenza remota.</li>
    <li>Un controller si collega a un computer di destinazione per l'assistenza remota.</li>
	</ul>
</ul>
      </main>
    </>
  )
}
