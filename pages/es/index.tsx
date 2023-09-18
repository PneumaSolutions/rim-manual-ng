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
<h1>Bienvenido</h1>
Copyright © 2023 <a href="https://pneumasolutions.com">Pneuma Solutions</a>
<p><em>Remote Incident Manager</em> (RIM) es una potente aplicación de escritorio remoto multiplataforma totalmente accesible que se utiliza para proporcionar soporte técnico, formación y administración de sistemas a clientes tanto con discapacidad visual como videntes. Además de proporcionar una experiencia de escritorio remoto optimizada, RIM tiene algunas cualidades únicas nunca vistas en otras aplicaciones de escritorio remoto.</p>
<h2>¿Por qué RIM?</h2>
<p>Si viene de aplicaciones de escritorio remoto anteriores o de herramientas de asistencia basadas en lectores de pantalla, descubrirá que RIM agiliza considerablemente su flujo de trabajo.</p>
<h3>Diseño inclusivo</h3>
<p>Remote Incident Manager es realmente único en su género. Es la primera solución de asistencia remota <em>totalmente accesible</em> que puede ser utilizada tanto por profesionales de la asistencia como por usuarios finales ciegos o videntes. Por lo tanto, RIM puede sustituir completamente a una solución existente, ya que ofrece todo lo que se puede pedir a una solución de asistencia remota segura, además de una accesibilidad total.</p>
<h3>Fácil de instalar e implantar</h3>
<p>En una situación de uno a uno, la instalación no podría ser más sencilla. Una instalación instantánea con un solo clic garantiza que el proceso del usuario final para configurar su máquina para recibir asistencia será rápido e indoloro. Es más, el proceso de instalación inicia RIM una vez finalizado, por lo que estarán listos al instante para conectarse.
Los técnicos pueden gestionar fácilmente sus máquinas a través de una interfaz web fácil de usar. Los usuarios de empresa pueden utilizar este panel para desplegar RIM en las máquinas de su lugar de trabajo. Los usuarios finales pueden recibir instaladores listos en cuestión de segundos. El propio instalador se puede personalizar mediante argumentos de línea de comandos que, a su vez, se pueden utilizar en un despliegue automatizado.</p>
<h3>Sesión compartida</h3>
<p>A diferencia del Escritorio Remoto de Windows u otras aplicaciones similares, no se crea un sandbox de sesión remota; lo que la máquina del usuario final está haciendo es lo que usted verá. Esto significa que usted puede solucionar fácilmente un problema que están teniendo, manteniendo su configuración existente intacta. Además, puede ver cómo un usuario final ejecuta un proceso que le lleva a tener un problema. Esto también le permite trabajar en colaboración en un proyecto, enviar archivos desde y hacia el portapapeles, etc.</p>
<h3>Conexiones rápidas y estables</h3>
<p>Como RIM utiliza los últimos avances en conexiones directas de ordenador a ordenador, la capacidad de respuesta está muy por encima de otras soluciones. Aunque el servicio central de RIM inicia la conexión, se aparta de tu camino una vez establecida. Todo ello sin necesidad de realizar engorrosos e invasivos cambios en las configuraciones de red.</p>
<h3>Audio de alta calidad</h3>
<p>RIM utiliza los últimos avances en tecnología de codificación de audio en tiempo real para proporcionar un audio estéreo de alta fidelidad y gran capacidad de respuesta. Escucharás todo el audio que se esté reproduciendo en el equipo del usuario final durante la sesión.</p>
<h3>Salida visual de alta calidad</h3>
<p>Una vez más, Remote Incident Manager es una solución integral diseñada para sustituir infraestructuras anteriores, en lugar de utilizarse junto a ellas. Como tal, la salida en pantalla de RIM es igualmente sensible y estable. El uso del ratón también es totalmente compatible.</p>
<h3>Comunicación por voz</h3>
<p>Se acabaron los días en los que había que realizar una llamada telefónica o una conferencia web aparte de la sesión remota. RIM proporciona una comunicación de voz nítida y de baja latencia directamente dentro de la sesión.</p>
<h3>Accesible en <em>todos los</em> casos de uso</h3>
<p>RIM es la primera solución de acceso remoto que proporciona una accesibilidad sin precedentes, independientemente del lector de pantalla (o de la falta del mismo) que utilice cualquiera de las partes.</p>
<h4>las diferencias en los lectores de pantalla son ahora irrelevantes</h4>
<p>Antes de RIM, solía ser difícil ayudar a alguien que utilizaba un lector de pantalla distinto al tuyo. Con RIM, esto ya es cosa del pasado. A RIM le da igual lo que esté ejecutando cada uno. Tú podrías estar ejecutando JAWS mientras que la persona a la que estás ayudando podría estar ejecutando NVDA o incluso VoiceOver; con RIM, nada de eso importa. No sólo podrás oír la voz del usuario final independientemente de su lector de pantalla, sino que el manejo del teclado de RIM será estable y fiable independientemente de la configuración del lector de pantalla. Esta es una ventaja significativa de una solución independiente del lector de pantalla.</p>
<h4>¿No tienes lector de pantalla? No hay problema</h4>
<p>Ahora, un profesional de TI ciego puede ayudar fácilmente a un usuario final vidente, aunque no tenga instalado un lector de pantalla en su ordenador. En ausencia de un lector de pantalla en el ordenador remoto, RIM se encargará de que puedas seguir hablando siempre que utilices el <a href="https://nvaccess.org">lector de pantalla</a> gratuito <a href="https://nvaccess.org">NVDA</a> o VoiceOver en Mac OS. Remote incident Manager iniciará su módulo de accesibilidad, que te permitirá controlar el equipo del cliente con voz, como si tuviera un lector de pantalla. El usuario final no sólo no tiene que preocuparse de instalar un lector de pantalla, sino que ni siquiera oye el habla que ahora tú oyes mientras controlas su ordenador.</p>
<h2>Convenciones de documentación y terminología</h2>
<ul>
<li>Dado que Remote Incident Manager es multiplataforma, muchas secciones de esta documentación adaptarán su contenido al sistema operativo que esté ejecutando.</li>
	<ul>
    <li>En la mayoría de los casos, el manual reconocerá si está ejecutando Windows o Mac, y ajustará el contenido en consecuencia.</li>
    <li>En caso de que falle el reconocimiento de la plataforma o de que esté leyendo la documentación en un dispositivo diferente, como un teléfono o una tableta, encontrará un botón o un conjunto de botones en la página para mostrar el contenido para la plataforma que utilice.</li>
</ul>
<li>Las conexiones RIM se producen entre un ordenador de destino y un controlador.</li>
	<ul>
	<li>Un ordenador de destino es el ordenador que recibirá asistencia remota.</li>
    <li>Un controlador se conecta a un ordenador de destino para recibir asistencia remota.</li>
	</ul>
</ul>
      </main>
    </>
  )
}
