"use client"

import { ExternalLink, FolderOpen, Github } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce web application with admin and user roles. Features include product listing, cart functionality, order management, and role-based access control with MySQL database integration.",
    tech: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "HTML", "CSS", "JavaScript"],
    year: "2026",
  },
  {
    title: "Fitness Microservices Application",
    description:
      "A microservices-based fitness application using Spring Boot with independent services for user management and workout tracking. Built with modular architecture for improved scalability and maintainability.",
    tech: ["Java", "Spring Boot", "Microservices", "REST APIs"],
    year: "2026",
  },
  {
    title: "Pizza Delivery Load Balancer",
    description:
      "A web-based load balancing system using Python and Flask to distribute pizza delivery requests across multiple drivers. Implements least-load distribution algorithm for efficient order assignment with concurrent delivery simulation.",
    tech: ["Python", "Flask", "Threading", "HTML", "CSS", "Load Balancing"],
    year: "2025",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="fadeUp">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">03.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Projects</h2>
            <div className="h-px bg-gradient-to-r from-border to-transparent flex-1 max-w-xs" />
          </div>
        </AnimatedSection>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} animation="fadeUp" delay={index * 150}>
              <article
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <FolderOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-muted-foreground text-sm font-mono">{project.year}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-5 h-5" />
                    </button>
                    <button
                      className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg"
                      aria-label={`View ${project.title} live`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
