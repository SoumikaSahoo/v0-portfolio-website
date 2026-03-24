"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-lg shadow-lg border-b border-border/50" 
          : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-4">
        <Link
          href="/"
          className="text-primary font-bold text-2xl hover:scale-110 transition-transform duration-300"
        >
          SS
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group relative text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <span className="text-primary font-mono text-xs mr-1">0{index + 1}.</span>
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/SoumikaSahoo_resume.pdf"
              target="_blank"
              className="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-medium"
            >
              Resume
            </Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            className="text-foreground p-2 hover:bg-secondary rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-card/95 backdrop-blur-lg border-t border-border">
          <ul className="flex flex-col py-4">
            {navItems.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-6 py-3 text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-all duration-200"
                >
                  <span className="text-primary font-mono text-xs mr-2">0{index + 1}.</span>
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="px-6 py-3">
              <Link
                href="/SoumikaSahoo_resume.pdf"
                target="_blank"
                className="inline-block px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-medium"
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
