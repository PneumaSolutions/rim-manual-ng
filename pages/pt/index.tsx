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
<h1>Seja bem-vindo!</h1>
Direitos autorais © 2023 <a href="https://pneumasolutions.com">Pneuma Solutions</a>
<p>O<em>Remote Incident Manager</em> (RIM) é um aplicativo de área de trabalho remota poderoso, multiplataforma e totalmente acessível, usado para fornecer suporte técnico, treinamento e administração de sistemas a clientes com e sem deficiência visual. Além de proporcionar uma experiência de área de trabalho remota simplificada, o RIM tem algumas qualidades exclusivas que nunca foram vistas em outros aplicativos de área de trabalho remota.</p>
<h2>Por que o RIM?</h2>
<p>Se você vem de aplicativos anteriores de área de trabalho remota ou de ferramentas de assistência baseadas em leitores de tela, verá que o RIM agiliza significativamente o seu fluxo de trabalho.</p>
<h3>Design inclusivo</h3>
<p>O Remote Incident Manager é realmente o primeiro de seu tipo. É a primeira solução de suporte remoto <em>totalmente acessível</em> que pode ser usada por profissionais de suporte e usuários finais cegos e com visão. Assim, o RIM pode substituir totalmente uma solução existente, pois oferece tudo o que se pode pedir em uma solução de suporte remoto seguro, além de acessibilidade completa.</p>
<h3>Fácil de instalar e implantar</h3>
<p>Em uma situação individual, a instalação não poderia ser mais simples. A instalação instantânea com um clique garante que o processo de configuração da máquina do usuário final para receber assistência seja rápido e indolor. Além disso, o processo de instalação inicia a RIM após a conclusão, de modo que o usuário estará instantaneamente pronto para se conectar.
Os técnicos podem gerenciar facilmente suas máquinas por meio de uma interface baseada na Web fácil de usar. Os usuários corporativos podem usar esse painel para implementar a RIM em máquinas no local de trabalho. Instaladores prontos podem ser enviados aos usuários finais em segundos. O próprio instalador pode ser ainda mais personalizado por meio de argumentos de linha de comando que, por sua vez, podem ser utilizados em uma implementação automatizada.</p>
<h3>Sessão compartilhada</h3>
<p>Ao contrário da Área de Trabalho Remota do Windows ou de outros aplicativos semelhantes, não é criada uma sandbox de sessão remota; o que a máquina do usuário final está fazendo é o que você verá. Isso significa que você pode solucionar facilmente um problema que ele esteja tendo, mantendo intacta a configuração existente. Além disso, você pode ver um usuário final executar um processo que ele está realizando e que leva a um problema. Isso também permite que você trabalhe de forma colaborativa em um projeto, envie arquivos de e para a área de transferência, etc.</p>
<h3>Conexões rápidas e estáveis</h3>
<p>Como a RIM usa os mais recentes avanços em conexões diretas entre computadores, a capacidade de resposta é muito superior à de outras soluções. Embora o serviço central da RIM inicie a conexão, ele sai do seu caminho depois que a conexão é estabelecida. Tudo isso sem a necessidade de fazer alterações incômodas e invasivas nas configurações de rede.</p>
<h3>Áudio de alta qualidade</h3>
<p>A RIM usa os mais recentes avanços na tecnologia de codificação de áudio em tempo real para fornecer áudio estéreo de alta fidelidade e extremamente responsivo. Você ouvirá todo e qualquer áudio que estiver sendo reproduzido no computador do usuário final durante a sessão.</p>
<h3>Saída visual de alta qualidade</h3>
<p>Mais uma vez, o Remote Incident Manager é uma solução completa projetada para substituir infraestruturas anteriores, em vez de ser usada junto com elas. Por isso, a saída de tela do RIM é igualmente ágil e estável. O uso do mouse também é totalmente compatível.</p>
<h3>Comunicação por voz</h3>
<p>Já se foram os dias em que era necessário fazer uma chamada telefônica ou uma conferência pela Web separada junto com a sessão remota. A RIM oferece comunicação de voz cristalina e de baixa latência diretamente em sua sessão.</p>
<h3>Acessível em <em>todos os</em> casos de uso</h3>
<p>A RIM é a primeira solução de acesso remoto que oferece acessibilidade inigualável, independentemente do leitor de tela (ou da falta dele) que uma das partes esteja usando.</p>
<h4>as diferenças nos leitores de tela agora são irrelevantes</h4>
<p>Antes da RIM, costumava ser difícil ajudar alguém que usava um leitor de tela diferente do seu. Com a RIM, isso agora é coisa do passado. A RIM não se importa com o que as partes estão usando. Você pode estar usando o JAWS, enquanto a pessoa que você está ajudando pode estar usando o NVDA ou até mesmo o VoiceOver; com a RIM, nada disso importa. Além de poder ouvir a fala do usuário final independentemente do leitor de tela, o manuseio do teclado da RIM será estável e confiável, independentemente da configuração do leitor de tela. Essa é uma vantagem significativa de uma solução independente de leitor de tela.</p>
<h4>Não tem leitor de tela? Não há problema!</h4>
<p>Um profissional de TI cego agora pode ajudar facilmente um usuário final com visão, mesmo que ele não tenha um leitor de tela instalado no computador. Na ausência de um leitor de tela no computador remoto, a RIM cuidará para que você ainda consiga falar, desde que esteja usando o <a href="https://nvaccess.org">leitor de tela</a> gratuito <a href="https://nvaccess.org">NVDA</a> ou o VoiceOver no Mac OS. O Remote incident Manager iniciará seu módulo de acessibilidade, que permite controlar a máquina do cliente com a fala, como se ele tivesse um leitor de tela. O usuário final não só não precisa se preocupar em instalar um leitor de tela, como também não ouve a fala que você está ouvindo enquanto controla o computador.</p>
<h2>Convenções e terminologia da documentação</h2>
<ul>
<li>Como o Remote Incident Manager é multiplataforma, muitas seções desta documentação adaptarão seu conteúdo ao sistema operacional que você está executando.</li>
	<ul>
    <li>Na maioria dos casos, o manual reconhecerá se você está executando o Windows ou o Mac e ajustará o conteúdo de acordo.</li>
    <li>Caso o reconhecimento da plataforma falhe ou você esteja lendo a documentação em um dispositivo diferente, como um telefone ou tablet, você encontrará um botão ou conjunto de botões na página para mostrar o conteúdo da plataforma que você usa.</li>
</ul>
<li>As conexões RIM ocorrem entre um alvo e um controlador.</li>
	<ul>
	<li>Um computador de destino é o computador que estará recebendo suporte remoto.</li>
    <li>Um controlador se conecta a um computador de destino para obter suporte remoto.</li>
	</ul>
</ul>
      </main>
    </>
  )
}
