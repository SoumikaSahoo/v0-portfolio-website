"use client"

import { Palette } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">01.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">About Me</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Hello! I am Soumika, a Computer Science and Business Systems student with a passion 
              for building software that makes a difference. My journey in tech started with curiosity 
              about how things work, and has evolved into a deep interest in{" "}
              <span className="text-primary">full-stack development</span> and{" "}
              <span className="text-primary">distributed systems</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently maintaining a <span className="text-primary">CGPA of 9.16</span>, I balance 
              academics with hands-on project work and active participation in tech communities. 
              As a <span className="text-primary">Design Lead at SOLVIFY Club</span> and 
              Tech Core Member at CIPHER Club, I enjoy mentoring peers and organizing events.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I have solved <span className="text-primary">150+ DSA problems</span> on LeetCode 
              and hold certifications from Oracle and Reliance Foundation. When I am not coding, 
              you will find me exploring my creative side through painting.
            </p>

            <div className="flex items-center gap-2 pt-4 text-muted-foreground">
              <Palette className="w-5 h-5 text-primary" />
              <span className="text-sm">I love painting in my free time</span>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-foreground font-semibold mb-3">Education</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-foreground font-medium text-sm">BE in CS & Business Systems</p>
                  <p className="text-muted-foreground text-sm">NMIT, Bengaluru</p>
                  <p className="text-primary text-xs font-mono">2023 - 2027 | CGPA: 9.16</p>
                </div>
                <div className="border-l-2 border-border pl-4">
                  <p className="text-foreground font-medium text-sm">Intermediate (PCM)</p>
                  <p className="text-muted-foreground text-sm">Sanskruthi Global School</p>
                  <p className="text-muted-foreground text-xs font-mono">90%</p>
                </div>
                <div className="border-l-2 border-border pl-4">
                  <p className="text-foreground font-medium text-sm">Matriculation</p>
                  <p className="text-muted-foreground text-sm">Sanskruthi Global School</p>
                  <p className="text-muted-foreground text-xs font-mono">92.2%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
