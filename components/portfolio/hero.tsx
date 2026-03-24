"use client"

import { Github, Linkedin, Mail, MapPin, ChevronDown } from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "./animated-section"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl">
        <AnimatedSection animation="fadeUp" delay={0}>
          <p className="text-primary font-mono text-sm mb-4 tracking-wide">
            Hi, my name is
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={100}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-balance">
            Soumika Sahoo
          </h1>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={200}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6 text-balance">
            I build things for the web.
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={300}>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
            I am a Computer Science student at{" "}
            <span className="text-primary font-medium">Nitte Meenakshi Institute of Technology</span>, Bengaluru, 
            passionate about crafting scalable backend systems and intuitive user interfaces. 
            Currently exploring microservices architecture and cloud technologies.
          </p>
        </AnimatedSection>
        
        <AnimatedSection animation="fadeUp" delay={400}>
          <div className="flex items-center gap-2 text-muted-foreground mb-8">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Bengaluru, India</span>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={500}>
          <div className="flex items-center gap-6">
            <Link
              href="mailto:sahoosoumika247@gmail.com"
              className="group p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
            <Link
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
            <Link
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          </div>
        </AnimatedSection>
      </div>

      {/* Scroll indicator */}
      <AnimatedSection animation="fade" delay={1000} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Link
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs font-mono">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </Link>
      </AnimatedSection>
    </section>
  )
}
