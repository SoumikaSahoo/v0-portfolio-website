"use client"

import { Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-primary font-mono text-sm">05. What&apos;s Next?</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
          Get In Touch
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-10">
          I am currently looking for internship opportunities and am open to collaborating 
          on interesting projects. Whether you have a question, want to discuss technology, 
          or just want to say hi, feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="mailto:sahoosoumika247@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-medium"
          >
            <Mail className="w-4 h-4" />
            Say Hello
          </Link>
          <Link
            href="tel:+918141541980"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-foreground hover:border-primary hover:text-primary transition-colors font-medium"
          >
            <Phone className="w-4 h-4" />
            +91-8141541980
          </Link>
        </div>

        <div className="flex items-center justify-center gap-8">
          <Link
            href="mailto:sahoosoumika247@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </Link>
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
