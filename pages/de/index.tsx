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
<h1>Herzlich willkommen!</h1>
Urheberrecht © 2023 [Pneuma Solutions](https://www.pneumasolutions.com)  
<p><em>Remote Incident Manager</em> (RIM) ist eine leistungsstarke, plattformübergreifende, vollständig zugängliche Remote-Desktop-Anwendung, die sowohl sehbehinderten als auch sehenden Kunden technischen Support, Schulungen und Systemadministration bietet. RIM bietet nicht nur eine optimierte Remote-Desktop-Erfahrung, sondern verfügt auch über einige einzigartige Eigenschaften, die bisher in anderen Remote-Desktop-Anwendungen nicht zu finden waren.</p>
<h2>Warum RIM?</h2>
<p>Wenn Sie von früheren Remote-Desktop-Anwendungen oder Screenreader-basierten Hilfsprogrammen kommen, werden Sie feststellen, dass RIM Ihren Arbeitsablauf erheblich rationalisiert.</p>
<h3>Inklusive Design</h3>
<p>Remote Incident Manager ist wahrlich eine Premiere in seiner Art. Es ist die erste <em>vollständig zugängliche</em> Fernsupportlösung, die sowohl von blinden als auch von sehenden Supportmitarbeitern und Endbenutzern verwendet werden kann. Somit kann RIM eine bestehende Lösung vollständig ersetzen, da es alles bietet, was man sich von einer sicheren Fernsupportlösung wünschen kann, und darüber hinaus vollständig zugänglich ist.</p>
<h3>Einfach zu installieren und bereitzustellen</h3>
<p>In einer Eins-zu-Eins-Situation könnte die Installation nicht einfacher sein. Die Sofortinstallation mit nur einem Klick sorgt dafür, dass der Endbenutzer seinen Rechner schnell und problemlos für die Unterstützung einrichten kann. Darüber hinaus wird RIM nach Abschluss des Installationsvorgangs gestartet, so dass die Geräte sofort für die Verbindung bereit sind.
Techniker können ihre Geräte über eine einfach zu bedienende webbasierte Schnittstelle verwalten. Unternehmensanwender können dieses Dashboard nutzen, um RIM auf den Rechnern an ihrem Arbeitsplatz einzusetzen. Vorgefertigte Installationsprogramme können in Sekundenschnelle an Endbenutzer ausgegeben werden. Das Installationsprogramm selbst kann über Befehlszeilenargumente weiter angepasst werden, die wiederum für eine automatisierte Bereitstellung verwendet werden können.</p>
<h3>Gemeinsame Sitzung</h3>
<p>Im Gegensatz zu Windows Remote Desktop oder anderen ähnlichen Anwendungen wird keine Sandbox für eine Remote-Sitzung erstellt; was der Rechner des Endbenutzers tut, ist das, was Sie sehen. Das bedeutet, dass Sie ein Problem leicht beheben können, während die bestehende Konfiguration intakt bleibt. Außerdem können Sie sehen, wie ein Endbenutzer einen Prozess durchläuft, der zu einem Problem führt. Außerdem können Sie gemeinsam an einem Projekt arbeiten, Dateien über die Zwischenablage senden und empfangen usw.</p>
<h3>Schnelle und stabile Verbindungen</h3>
<p>Da RIM die neuesten Entwicklungen im Bereich der direkten Computer-zu-Computer-Verbindungen nutzt, ist die Reaktionsfähigkeit anderen Lösungen haushoch überlegen. Der zentrale Dienst von RIM initiiert zwar die Verbindung, ist aber nicht mehr im Weg, sobald die Verbindung hergestellt ist. Und das alles, ohne umständliche und invasive Änderungen an den Netzwerkkonfigurationen vornehmen zu müssen.</p>
<h3>Hohe Audioqualität</h3>
<p>RIM verwendet die neuesten Entwicklungen in der Echtzeit-Audiocodierungstechnologie, um eine extrem reaktionsschnelle und hochwertige Stereo-Audioqualität zu gewährleisten. Sie hören alle Audiodaten, die während der Sitzung auf dem Computer des Endbenutzers abgespielt werden.</p>
<h3>Visuelle Ausgabe in hoher Qualität</h3>
<p>Auch hier handelt es sich bei Remote Incident Manager um eine Komplettlösung, die nicht als Ergänzung, sondern als Ersatz für bisherige Infrastrukturen gedacht ist. Daher ist die Bildschirmausgabe von RIM ebenso reaktionsschnell und stabil. Auch die Verwendung der Maus wird vollständig unterstützt.</p>
<h3>Sprachkommunikation</h3>
<p>Vorbei sind die Zeiten, in denen Sie neben der Fernsitzung einen separaten Telefonanruf oder eine Webkonferenz führen mussten. RIM bietet kristallklare Sprachkommunikation mit geringer Latenz direkt in der Sitzung.</p>
<h3>Erreichbar in <em>allen</em> Anwendungsfällen</h3>
<p>RIM ist die erste Fernzugriffslösung, die unabhängig vom verwendeten Bildschirmlesegerät (oder dem Fehlen eines solchen) eine beispiellose Zugänglichkeit bietet.</p>
<h4>unterschiede bei Bildschirmlesegeräten sind jetzt irrelevant</h4>
<p>Vor RIM war es schwierig, jemandem zu helfen, der einen anderen Screenreader als den eigenen verwendete. Mit RIM gehört dies nun der Vergangenheit an. RIM kümmert sich nicht darum, was die andere Partei benutzt. Sie können JAWS verwenden, während die Person, der Sie helfen, NVDA oder sogar VoiceOver verwendet; mit RIM spielt das alles keine Rolle mehr. Sie werden nicht nur in der Lage sein, die Sprache des Endbenutzers unabhängig von seinem Bildschirmlesegerät zu hören, sondern auch die Tastaturbedienung von RIM ist unabhängig von der Konfiguration des Bildschirmlesegeräts stabil und zuverlässig. Dies ist ein wesentlicher Vorteil einer Screenreader-unabhängigen Lösung.</p>
<h4>Kein Screenreader? Kein Problem!</h4>
<p>Ein blinder IT-Fachmann kann jetzt einem sehenden Endbenutzer helfen, auch wenn dieser keinen Screenreader auf seinem Computer installiert hat. Wenn auf dem entfernten Computer kein Bildschirmlesegerät installiert ist, sorgt RIM dafür, dass Sie trotzdem Sprache empfangen können, sofern Sie entweder das kostenlose <a href="https://nvaccess.org">Bildschirmlesegerät NVDA</a> oder VoiceOver unter Mac OS verwenden. Der Remote Incident Manager startet sein Zugänglichkeitsmodul, das es Ihnen ermöglicht, den Rechner des Kunden mit Sprache zu steuern, als ob er ein Bildschirmlesegerät hätte. Der Endbenutzer muss sich nicht nur keine Gedanken über die Installation eines Bildschirmlesegeräts machen, er hört auch nicht die Sprache, die Sie jetzt hören, während Sie seinen Computer steuern.</p>
<h2>Dokumentationskonventionen und Terminologie</h2>
<ul>
<li>Da Remote Incident Manager plattformübergreifend ist, werden viele Abschnitte dieser Dokumentation auf das von Ihnen verwendete Betriebssystem zugeschnitten.</li>
	<ul>
    <li>In den meisten Fällen erkennt das Handbuch, ob Sie mit Windows oder Mac arbeiten, und passt den Inhalt entsprechend an.</li>
    <li>Für den Fall, dass die Plattformerkennung fehlschlägt oder Sie die Dokumentation auf einem anderen Gerät wie einem Telefon oder Tablet lesen, finden Sie auf der Seite eine Schaltfläche oder eine Reihe von Schaltflächen, die den Inhalt für die von Ihnen verwendete Plattform anzeigen.</li>
</ul>
<li>RIM-Verbindungen werden zwischen einem Ziel und einem Controller hergestellt.</li>
	<ul>
	<li>Ein Zielcomputer ist der Computer, der Fernunterstützung erhält.</li>
    <li>Ein Controller stellt eine Verbindung zu einem Zielcomputer für den Fernsupport her.</li>
	</ul>
</ul>
      </main>
    </>
  )
}
