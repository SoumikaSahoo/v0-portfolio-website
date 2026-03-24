"use client"

import { Award, Trophy } from "lucide-react"

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
    <section id="achievements" className="py-24 px-6 md:px-12 lg:px-24 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">04.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Certifications & Achievements</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
                >
                  <p className="text-foreground font-medium text-sm">{cert.title}</p>
                  <p className="text-muted-foreground text-xs mt-1">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-primary" />
              Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.title}
                  className="p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
                >
                  <p className="text-foreground font-medium text-sm">{achievement.title}</p>
                  <p className="text-muted-foreground text-xs mt-1">{achievement.description}</p>
                  <p className="text-primary text-xs mt-1 font-mono">{achievement.org}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-foreground mb-6">Leadership & Activities</h3>
          <div className="flex flex-wrap gap-4">
            {leadership.map((item) => (
              <div
                key={item.role}
                className="px-4 py-3 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
              >
                <p className="text-primary font-medium text-sm">{item.role}</p>
                <p className="text-muted-foreground text-xs">{item.org}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
