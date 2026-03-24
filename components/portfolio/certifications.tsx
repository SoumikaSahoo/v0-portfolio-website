"use client"

import { Award, Trophy, Users } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle University",
  },
  {
    title: "AI-DevOps Engineer Certificate Programme",
    issuer: "Reliance Foundation Skilling Academy",
  },
]

const achievements = [
  {
    title: "Smart India Hackathon 2025",
    description: "Led team to top 45 out of 168 teams in the internal round",
    org: "AICTE & Ministry of Education",
  },
  {
    title: "1st Runner-Up - THINKATHON",
    description: "Technical problem-solving competition",
    org: "CloudZilla GeekMayhem, NMIT",
  },
  {
    title: "Finalist - Verbal Clash 2025",
    description: "Debate Competition",
    org: "Literary Forum, NMIT",
  },
]

const leadership = [
  {
    role: "Design Lead",
    org: "SOLVIFY Club",
  },
  {
    role: "Tech Core Member",
    org: "CIPHER Club",
  },
  {
    role: "Design Team Member",
    org: "GDG NMIT",
  },
]

export function Certifications() {
  return (
    <section id="achievements" className="py-24 px-6 md:px-12 lg:px-24 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="fadeUp">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-sm">04.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Certifications & Achievements</h2>
            <div className="h-px bg-gradient-to-r from-border to-transparent flex-1 max-w-xs" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <AnimatedSection animation="fadeLeft" delay={100}>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={cert.title}
                    className="p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-300"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <p className="text-foreground font-medium text-sm">{cert.title}</p>
                    <p className="text-primary text-xs mt-2 font-mono">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Achievements */}
          <AnimatedSection animation="fadeRight" delay={200}>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Trophy className="w-5 h-5 text-accent" />
                </div>
                Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={achievement.title}
                    className="p-4 rounded-xl border border-border bg-card hover:border-accent/50 hover:shadow-md transition-all duration-300"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <p className="text-foreground font-medium text-sm">{achievement.title}</p>
                    <p className="text-muted-foreground text-xs mt-1">{achievement.description}</p>
                    <p className="text-accent text-xs mt-2 font-mono">{achievement.org}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Leadership */}
        <AnimatedSection animation="fadeUp" delay={400}>
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <Users className="w-5 h-5 text-primary" />
              </div>
              Leadership & Activities
            </h3>
            <div className="flex flex-wrap gap-4">
              {leadership.map((item, index) => (
                <div
                  key={item.role}
                  className="px-5 py-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-300 hover:scale-105"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <p className="text-primary font-semibold text-sm">{item.role}</p>
                  <p className="text-muted-foreground text-xs mt-1">{item.org}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
