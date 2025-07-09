import { Inter } from "next/font/google"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Achievements from "./components/Achievements"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className={`${inter.className} min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300`}>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
