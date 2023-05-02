import { Nunito } from 'next/font/google'

import Navbar from "@/components/navbar";
import About from '@/components/about';
import Skills from '@/components/skills';
import Experience from '@/components/experience';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import Head from 'next/head';

const nunito = Nunito({ subsets: ['latin'] })

export default function Home() {
  return (

    <div className={`${nunito.className} flex flex-col`}>

      <Head>
        <title>Arlwin</title>
      </Head>

      <header>
        <Navbar/>
      </header>

      <main className="flex flex-col items-stretch md:px-48 px-10">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

    </div>
 

  )
}