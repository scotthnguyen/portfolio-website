"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
        >
          Portfolio
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </a>
          <a
            href="#experience"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/scotthnguyen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/scottnguyencodes/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:scottowandmore@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  )
}
