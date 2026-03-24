"use client"

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
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Skills & Technologies</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-3">
              <h3 className="text-foreground font-semibold text-sm uppercase tracking-wider">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-md border border-border hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-lg border border-border bg-card">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-primary font-mono text-2xl font-bold">150+</span>
            <span className="text-foreground font-medium">DSA Problems Solved on LeetCode</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Continuously improving problem-solving skills through consistent practice
          </p>
        </div>
      </div>
    </section>
  )
}
