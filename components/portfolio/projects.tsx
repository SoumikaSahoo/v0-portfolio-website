"use client"

import { ExternalLink, FolderOpen } from "lucide-react"

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
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Projects</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <FolderOpen className="w-10 h-10 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-muted-foreground text-sm font-mono">{project.year}</span>
                  </div>
                </div>
                <button
                  className="text-muted-foreground hover:text-primary transition-colors p-2"
                  aria-label={`View ${project.title} project`}
                >
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs font-mono rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
