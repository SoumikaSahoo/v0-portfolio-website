"use client"

import { Palette } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="fadeUp">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">01.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">About Me</h2>
            <div className="h-px bg-gradient-to-r from-border to-transparent flex-1 max-w-xs" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4">
            <AnimatedSection animation="fadeUp" delay={100}>
              <p className="text-muted-foreground leading-relaxed">
                Hello! I am Soumika, a Computer Science and Business Systems student with a passion 
                for building software that makes a difference. My journey in tech started with curiosity 
                about how things work, and has evolved into a deep interest in{" "}
                <span className="text-primary font-medium">full-stack development</span> and{" "}
                <span className="text-primary font-medium">distributed systems</span>.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={200}>
              <p className="text-muted-foreground leading-relaxed">
                Currently maintaining a <span className="text-primary font-medium">CGPA of 9.16</span>, I balance 
                academics with hands-on project work and active participation in tech communities. 
                As a <span className="text-primary font-medium">Design Lead at SOLVIFY Club</span> and 
                Tech Core Member at CIPHER Club, I enjoy mentoring peers and organizing events.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={300}>
              <p className="text-muted-foreground leading-relaxed">
                I have solved <span className="text-primary font-medium">150+ DSA problems</span> on LeetCode 
                and hold certifications from Oracle and Reliance Foundation. When I am not coding, 
                you will find me exploring my creative side through painting.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={400}>
              <div className="flex items-center gap-3 pt-4 p-4 rounded-lg bg-accent/10 border border-accent/20">
                <Palette className="w-5 h-5 text-accent" />
                <span className="text-sm text-foreground">I love painting in my free time</span>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fadeRight" delay={300}>
            <div className="space-y-6">
              <div>
                <h3 className="text-foreground font-semibold mb-4">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4 py-2 hover:bg-primary/5 transition-colors rounded-r-lg">
                    <p className="text-foreground font-medium text-sm">BE in CS & Business Systems</p>
                    <p className="text-muted-foreground text-sm">NMIT, Bengaluru</p>
                    <p className="text-primary text-xs font-mono mt-1">2023 - 2027 | CGPA: 9.16</p>
                  </div>
                  <div className="border-l-2 border-border hover:border-primary pl-4 py-2 hover:bg-primary/5 transition-all rounded-r-lg">
                    <p className="text-foreground font-medium text-sm">Intermediate (PCM)</p>
                    <p className="text-muted-foreground text-sm">Sanskruthi Global School</p>
                    <p className="text-muted-foreground text-xs font-mono mt-1">90%</p>
                  </div>
                  <div className="border-l-2 border-border hover:border-primary pl-4 py-2 hover:bg-primary/5 transition-all rounded-r-lg">
                    <p className="text-foreground font-medium text-sm">Matriculation</p>
                    <p className="text-muted-foreground text-sm">Sanskruthi Global School</p>
                    <p className="text-muted-foreground text-xs font-mono mt-1">92.2%</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
