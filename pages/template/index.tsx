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
<h1>Welcome!</h1>
Copyright © 2023 [Pneuma Solutions](https://www.pneumasolutions.com)  
<p><em>Remote Incident Manager</em> (RIM) is a powerful, cross-platform fully accessible remote desktop application used to provide technical support, training, and system administration to clients both visually impaired and sighted alike. In addition to providing a streamlined remote desktop experience, RIM has a few unique qualities previously unseen in other remote desktop applications.</p>
<h2>Why RIM?</h2>
<p>If you are coming from previous remote desktop applications or screen reader-based assistance tools, you will find that RIM significantly streamlines your workflow.</p>
<h3>Inclusive Design</h3>
<p>Remote Incident Manager is truly a first of its kind. It is the first <em>fully accessible</em> remote support solution that can be used by both blind and sighted support pros and end users. Thus, RIM can fully replace an existing solution, as it provides everything you could ask for in a secure remote support solution, plus complete accessibility.</p>
<h3>Easy to Install and Deploy</h3>
<p>In a one-to-one situation, the installation could not be simpler. A one-click instant install ensures that the end user's process for setting up their machine to receive assistance will be quick and painless. What's more, the installation process launches RIM after it finishes, so they will be instantly ready to connect.
Technicians can easily manage their machines via an easy to use web-based interface. Enterprise users can use this dashboard to deploy RIM to machines in their workplace. Ready-made installers can be issued to end users in seconds. The installer itself can be further customized via command line arguments which can in turn be utilized in an automated deployment.</p>
<h3>Shared Session</h3>
<p>Unlike Windows Remote Desktop or other similar applications, a remote session sandbox is not created; what the end user's machine is doing is what you'll be seeing. This means that you can easily troubleshoot a problem they are having while keeping their existing configuration intact. You can further see an end user run through a process that they're taking that leads up to an issue. This further allows you to work collaboratively on a project, send files to and from via the clipboard, etc.</p>
<h3>Fast and stable connections</h3>
<p>Because RIM uses the latest advancements in direct computer-to-computer connections, the responsiveness is head and shoulders above other solutions. While RIM's central service initiates the connection, it gets out of your way once the connection is established. All this without the need to make cumbersome and invasive changes to network configurations.</p>
<h3>High Quality Audio</h3>
<p>RIM uses the latest advancements in real-time audio encoding technology to provide extremely responsive, high-fidelity stereo audio. You will hear any and all audio that is playing on the end user's machine during the session.</p>
<h3>High-Quality Visual Output</h3>
<p>Again, Remote Incident Manager is an all-inclusive solution designed to replace previous infrastructures, rather than be used alongside them. As such, RIM's screen output is equally as responsive and stable. Using the mouse is fully supported as well.</p>
<h3>Voice Communication</h3>
<p>Gone are the days of having to place a separate phone call or web conference alongside the remote session. RIM provides crystal clear, low-latency voice communication right inside your session.</p>
<h3>Accessible in <em>all</em> Use Cases</h3>
<p>RIM is the first remote access solution that provides unparalleled accessibility, irrespective of the screen reader (or lack thereof) that either party is using.</p>
<h4>differences in Screen Readers are now Irrelevant</h4>
<p>Before RIM, it used to be difficult to assist someone running a different screen reader than your own. With RIM, this is now a thing of the past. RIM doesn't care what either party is running. You could be running JAWS while the person you're assisting could be running NVDA or even VoiceOver; with RIM, none of that matters. Not only will you be able to hear the end user's speech irrespective of their screen reader, RIM's keyboard handling will be stable and reliable irrespective of screen reader configuration. This is a significant advantage of a screen reader-independent solution.</p>
<h4>No Screen Reader? No Problem!</h4>
<p>A blind IT professional can now easily help a sighted end user, even if they do not have a screen reader installed on their computer. In the absence of a screen reader on the remote computer, RIM will see to it that you will still be able to get speech provided you are using either the free <a href="https://nvaccess.org">NVDA screen reader</a> or VoiceOver on Mac OS. Remote incident Manager will initiate its accessibility module which allows you to control the client's machine with speech as if they had a screen reader. Not only does the end user not have to worry about installing a screen reader, they don't even hear the speech that you're now hearing while you control their computer.</p>
<h2>Documentation Conventions and Terminology</h2>
<ul>
<li>Because Remote Incident Manager is cross-platform, many sections of this documentation will tailor their contents to the operating system that you are running.</li>
	<ul>
    <li>In most cases, the manual will recognize whether you are running Windows or Mac, and adjust the content accordingly.</li>
    <li>In the event the platform recognition fails or you are reading the documentation on a different device such as a phone or tablet, you will find a button or set of buttons on the page to show the content for the platform you use.</li>
</ul>
<li>RIM connections occur between a target and a controller.</li>
	<ul>
	<li>A target computer is the computer that will be receiving remote support.</li>
    <li>A controller connects to a target computer for remote support.</li>
	</ul>
</ul>
      </main>
    </>
  )
}
