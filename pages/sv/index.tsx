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
<h1>Välkommen till oss!</h1>
Copyright © 2023 <a href="https://pneumasolutions.com">Pneuma Solutions</a>
<p><em>Remote Incident Manager</em> (RIM) är en kraftfull, plattformsoberoende och fullt tillgänglig fjärrskrivbordsapplikation som används för att ge teknisk support, utbildning och systemadministration till både synskadade och seende kunder. Förutom att ge en strömlinjeformad upplevelse av fjärrskrivbord, har RIM några unika egenskaper som tidigare inte setts i andra fjärrskrivbordsapplikationer.</p>
<h2>Varför RIM?</h2>
<p>Om du kommer från tidigare fjärrskrivbordsapplikationer eller skärmläsarbaserade hjälpverktyg kommer du att upptäcka att RIM effektiviserar ditt arbetsflöde avsevärt.</p>
<h3>Inkluderande design</h3>
<p>Remote Incident Manager är verkligen först i sitt slag. Det är den första <em>helt tillgängliga</em> fjärrsupportlösningen som kan användas av både blinda och seende supportproffs och slutanvändare. RIM kan därför helt ersätta en befintlig lösning, eftersom den erbjuder allt du kan begära av en säker fjärrsupportlösning, plus fullständig tillgänglighet.</p>
<h3>Lätt att installera och driftsätta</h3>
<p>I en en-till-en-situation kan installationen inte vara enklare. En omedelbar installation med ett klick säkerställer att slutanvändarens process för att ställa in sin maskin för att få hjälp blir snabb och smärtfri. Dessutom startar installationsprocessen RIM efter att den är klar, så att de omedelbart är redo att ansluta.
Teknikerna kan enkelt hantera sina maskiner via ett lättanvänt webbaserat gränssnitt. Företagsanvändare kan använda denna instrumentpanel för att distribuera RIM till maskiner på sin arbetsplats. Färdiga installationsprogram kan skickas ut till slutanvändare på några sekunder. Själva installationsprogrammet kan anpassas ytterligare via kommandoradsargument som i sin tur kan användas i en automatiserad driftsättning.</p>
<h3>Delad session</h3>
<p>Till skillnad från Windows Fjärrskrivbord eller andra liknande program skapas ingen sandlåda för fjärrsessionen; det du ser är vad slutanvändaren gör på sin maskin. Det innebär att du enkelt kan felsöka ett problem som användaren har och samtidigt behålla den befintliga konfigurationen intakt. Du kan vidare se en slutanvändare köra igenom en process som de tar som leder upp till ett problem. Detta gör att du kan samarbeta i ett projekt, skicka filer till och från via klippbordet etc.</p>
<h3>Snabba och stabila anslutningar</h3>
<p>Eftersom RIM använder de senaste framstegen inom direktanslutningar mellan datorer, är svarstiden mycket högre än för andra lösningar. RIM:s centrala tjänst initierar anslutningen, men när anslutningen väl är upprättad går den ur vägen. Allt detta utan att du behöver göra besvärliga och invasiva ändringar i nätverkskonfigurationerna.</p>
<h3>Ljud av hög kvalitet</h3>
<p>RIM använder de senaste framstegen inom kodningsteknik för realtidsljud för att ge extremt responsivt stereoljud med hög kvalitet. Du kommer att höra allt ljud som spelas upp på slutanvändarens dator under sessionen.</p>
<h3>Visuellt resultat av hög kvalitet</h3>
<p>Även Remote Incident Manager är en heltäckande lösning som är utformad för att ersätta tidigare infrastrukturer, snarare än att användas tillsammans med dem. Därför är RIM:s skärmbild lika responsiv och stabil. Att använda musen stöds också fullt ut.</p>
<h3>Röstkommunikation</h3>
<p>Det är slut med att behöva ringa ett separat telefonsamtal eller hålla en webbkonferens vid sidan av fjärrsessionen. RIM ger kristallklar röstkommunikation med låg latens direkt i sessionen.</p>
<h3>Tillgänglig i <em>alla</em> användningsfall</h3>
<p>RIM är den första fjärråtkomstlösningen som ger oöverträffad tillgänglighet, oavsett vilken skärmläsare (eller avsaknad av skärmläsare) som någon av parterna använder.</p>
<h4>skillnader i Skärmläsare är nu irrelevanta</h4>
<p>Före RIM var det svårt att hjälpa någon som körde en annan skärmläsare än din egen. Med RIM hör detta nu till det förflutna. RIM bryr sig inte om vad någon av parterna kör. Du kan köra JAWS medan personen du hjälper kan köra NVDA eller till och med VoiceOver; med RIM spelar inget av det någon roll. Du kommer inte bara att kunna höra slutanvändarens tal oavsett skärmläsare, RIM:s tangentbordshantering kommer att vara stabil och tillförlitlig oavsett skärmläsarkonfiguration. Detta är en stor fördel med en lösning som är oberoende av skärmläsare.</p>
<h4>Ingen skärmläsare? Inga problem!</h4>
<p>En blind IT-specialist kan nu enkelt hjälpa en seende slutanvändare, även om de inte har en skärmläsare installerad på sin dator. Om det inte finns någon skärmläsare på fjärrdatorn kommer RIM att se till att du fortfarande kan få tal förutsatt att du använder antingen den kostnadsfria <a href="https://nvaccess.org">NVDA-skärmläsaren</a> eller VoiceOver på Mac OS. Remote Incident Manager startar sin tillgänglighetsmodul som gör att du kan styra klientens dator med tal som om de hade en skärmläsare. Slutanvändaren behöver inte oroa sig för att installera en skärmläsare och hör inte heller det tal som du nu hör när du styr deras dator.</p>
<h2>Konventioner och terminologi för dokumentation</h2>
<ul>
<li>Eftersom Remote Incident Manager är plattformsoberoende kommer många avsnitt i den här dokumentationen att anpassa innehållet efter det operativsystem som du kör.</li>
	<ul>
    <li>I de flesta fall känner manualen av om du kör Windows eller Mac och anpassar innehållet därefter.</li>
    <li>Om plattformsigenkänningen misslyckas eller om du läser dokumentationen på en annan enhet, t.ex. en telefon eller surfplatta, hittar du en knapp eller en uppsättning knappar på sidan som visar innehållet för den plattform du använder.</li>
</ul>
<li>RIM-anslutningar sker mellan en måldator och en styrenhet.</li>
	<ul>
	<li>En måldator är den dator som kommer att ta emot fjärrsupport.</li>
    <li>En styrenhet ansluter till en måldator för fjärrsupport.</li>
	</ul>
</ul>
      </main>
    </>
  )
}
