import { Navigation } from "@/components/portfolio/navigation"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Skills } from "@/components/portfolio/skills"
import { Projects } from "@/components/portfolio/projects"
import { Certifications } from "@/components/portfolio/certifications"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}
