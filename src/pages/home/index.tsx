import { Nunito } from 'next/font/google'

import Navbar from "@/components/navbar";
import About from '@/components/about';
import Skills from '@/components/skills';
import Experience from '@/components/experience';
import Projects from '@/components/projects';
import Contact from '@/components/contact';

const nunito = Nunito({ subsets: ['latin'] })

export default function Home() {
  return (

    <div className={`${nunito.className}`}>
      <Navbar/>

      <main className="flex flex-col items-stretch px-48">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

    </div>
 

  )
}