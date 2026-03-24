"use client"

import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce web application with admin and user roles. Features include product listing, cart functionality, order management, and role-based access control with MySQL database integration.",
    tech: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "HTML", "CSS", "JavaScript"],
    image: "/images/ecommerce-project.jpg",
    year: "2026",
    github: "#",
    live: "#",
  },
  {
    title: "Fitness Microservices Application",
    description:
      "A microservices-based fitness application using Spring Boot with independent services for user management and workout tracking. Built with modular architecture for improved scalability and maintainability.",
    tech: ["Java", "Spring Boot", "Microservices", "REST APIs"],
    image: "/images/fitness-project.jpg",
    year: "2026",
    github: "#",
    live: "#",
  },
  {
    title: "Pizza Delivery Load Balancer",
    description:
      "A web-based load balancing system using Python and Flask to distribute pizza delivery requests across multiple drivers. Implements least-load distribution algorithm for efficient order assignment with concurrent delivery simulation.",
    tech: ["Python", "Flask", "Threading", "HTML", "CSS", "Load Balancing"],
    image: "/images/pizza-project.jpg",
    year: "2025",
    github: "#",
    live: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fadeUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A selection of projects I&apos;ve built to solve real-world problems
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} animation="fadeUp" delay={index * 150}>
              <article className="group h-full flex flex-col rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 flex gap-2">
                    <a
                      href={project.github}
                      className="p-2 rounded-lg bg-background/80 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.live}
                      className="p-2 rounded-lg bg-background/80 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label={`View ${project.title} live`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2 py-1 text-xs font-mono bg-primary/90 text-primary-foreground rounded">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex-1 p-6 flex flex-col">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 bg-secondary text-muted-foreground text-xs rounded-md">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
