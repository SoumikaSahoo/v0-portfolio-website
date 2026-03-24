"use client"

import { AnimatedSection } from "./animated-section"
import { Code2, Database, Globe, Cloud, Palette, Cpu } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Java", level: 9 },
      { name: "Python", level: 8 },
      { name: "JavaScript", level: 7 },
      { name: "SQL", level: 8 },
    ],
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: [
      { name: "Spring Boot", level: 9 },
      { name: "REST APIs", level: 8 },
      { name: "Flask", level: 7 },
      { name: "Thymeleaf", level: 7 },
    ],
  },
  {
    title: "Frontend Development",
    icon: Globe,
    skills: [
      { name: "React", level: 7 },
      { name: "Angular", level: 6 },
      { name: "HTML/CSS", level: 8 },
      { name: "Tailwind CSS", level: 7 },
    ],
  },
  {
    title: "Database & Storage",
    icon: Cpu,
    skills: [
      { name: "MySQL", level: 8 },
      { name: "PostgreSQL", level: 7 },
      { name: "MongoDB", level: 6 },
      { name: "Redis", level: 5 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "Google Cloud", level: 7 },
      { name: "Docker", level: 6 },
      { name: "Git/GitHub", level: 9 },
      { name: "Linux", level: 7 },
    ],
  },
  {
    title: "Tools & Design",
    icon: Palette,
    skills: [
      { name: "VS Code", level: 9 },
      { name: "IntelliJ IDEA", level: 8 },
      { name: "Figma", level: 6 },
      { name: "Postman", level: 8 },
    ],
  },
]

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground font-mono">{level}/10</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level * 10}%` }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fadeUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection
              key={category.title}
              animation="fadeUp"
              delay={categoryIndex * 100}
            >
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="scale" delay={600}>
          <div className="mt-12 p-6 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 transition-all duration-500">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-4">
                <span className="text-primary font-mono text-4xl font-bold">150+</span>
                <span className="text-foreground font-semibold text-lg">DSA Problems Solved on LeetCode</span>
              </div>
              <div className="sm:ml-auto flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-muted-foreground text-sm">Actively practicing</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
