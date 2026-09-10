import { MotionConfig } from 'motion/react'
import { Navbar } from '@/components/Navbar/Navbar'
import { Hero } from '@/components/Hero/Hero'
import { About } from '@/components/About/About'
import { Experience } from '@/components/Experience/Experience'
import { Projects } from '@/components/Projects/Projects'
import { Skills } from '@/components/Skills/Skills'
import { Education } from '@/components/Education/Education'
import { Contact } from '@/components/Contact/Contact'
import { Footer } from '@/components/Footer/Footer'
import { BackToTop } from '@/components/UI/BackToTop'

function App() {
  return (
    // reducedMotion="user" makes every Motion animation in the tree defer
    // to the OS-level prefers-reduced-motion setting automatically.
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="fixed left-4 top-4 z-[60] -translate-y-20 rounded-full bg-ink-50 px-4 py-2 text-sm font-medium text-ink-950 transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </MotionConfig>
  )
}

export default App
