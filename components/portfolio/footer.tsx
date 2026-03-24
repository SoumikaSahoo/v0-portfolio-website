"use client"

import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border bg-card/50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-muted-foreground text-sm font-mono flex items-center justify-center gap-2">
          Designed & Built with <Heart className="w-4 h-4 text-accent fill-accent" /> by Soumika Sahoo
        </p>
        <p className="text-muted-foreground/60 text-xs mt-2">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
