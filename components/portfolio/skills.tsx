"use client"

import { AnimatedSection } from "./animated-section"

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "SQL"],
  },
  {
    title: "Backend & Frameworks",
    skills: ["Spring Boot", "REST APIs", "Thymeleaf", "Flask"],
  },
  {
    title: "Frontend",
    skills: ["React", "Angular", "HTML", "CSS"],
  },
  {
    title: "Database",
    skills: ["MySQL"],
  },
  {
    title: "Core Concepts",
    skills: ["DSA", "OOPs", "DBMS", "OS", "Computer Networks"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "IntelliJ IDEA", "VS Code", "Docker", "Linux", "Google Cloud"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="fadeUp">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">02.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Skills & Technologies</h2>
            <div className="h-px bg-gradient-to-r from-border to-transparent flex-1 max-w-xs" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection 
              key={category.title} 
              animation="fadeUp" 
              delay={categoryIndex * 100}
            >
              <div className="space-y-3 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300">
                <h3 className="text-primary font-semibold text-sm uppercase tracking-wider">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-lg border border-border hover:border-primary hover:text-primary hover:scale-105 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="scale" delay={600}>
          <div className="mt-12 p-6 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 transition-all duration-500">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-primary font-mono text-4xl font-bold">150+</span>
              <span className="text-foreground font-semibold text-lg">DSA Problems Solved on LeetCode</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Continuously improving problem-solving skills through consistent practice
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
