"use client"

import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-4xl">
        <p className="text-primary font-mono text-sm mb-4 tracking-wide">
          Hi, my name is
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-balance">
          Soumika Sahoo
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6 text-balance">
          I build things for the web.
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
          I am a Computer Science student at{" "}
          <span className="text-primary">Nitte Meenakshi Institute of Technology</span>, Bengaluru, 
          passionate about crafting scalable backend systems and intuitive user interfaces. 
          Currently exploring microservices architecture and cloud technologies.
        </p>
        
        <div className="flex items-center gap-2 text-muted-foreground mb-8">
          <MapPin className="w-4 h-4 text-primary" />
          <span>Bengaluru, India</span>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="mailto:sahoosoumika247@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </Link>
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </Link>
          <Link
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  )
}
