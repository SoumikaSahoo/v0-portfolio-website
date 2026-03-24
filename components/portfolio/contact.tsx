"use client"

import { Github, Linkedin, Mail, Phone, Send } from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "./animated-section"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto text-center">
        <AnimatedSection animation="fadeUp">
          <span className="text-primary font-mono text-sm">05. What&apos;s Next?</span>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={100}>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Get In Touch
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={200}>
          <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
            I am currently looking for internship opportunities and am open to collaborating 
            on interesting projects. Whether you have a question, want to discuss technology, 
            or just want to say hi, feel free to reach out!
          </p>
        </AnimatedSection>

        <AnimatedSection animation="scale" delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="mailto:sahoosoumika247@gmail.com"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
            >
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              Say Hello
            </Link>
            <Link
              href="tel:+918141541980"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              +91-8141541980
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={400}>
          <div className="flex items-center justify-center gap-6">
            <Link
              href="mailto:sahoosoumika247@gmail.com"
              className="group p-4 rounded-xl border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
            <Link
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
            <Link
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
