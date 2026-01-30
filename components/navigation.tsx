"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import { TerrariaIcon } from "@/components/terraria-icon"

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/95 backdrop-blur-sm border-b-4 border-border terraria-shadow" : "bg-card/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo - Terraria style */}
        <a
          href="#"
          className="text-sm md:text-base font-bold text-primary hover:text-accent transition-colors terraria-button px-4 py-2 flex items-center gap-2"
        >
          <TerrariaIcon type="chest" className="w-4 h-4" />
          Portfolio
        </a>

        {/* Navigation Links - Game menu style */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#about"
            className="text-xs text-muted-foreground hover:text-primary transition-colors px-3 py-2 terraria-button"
          >
            About
          </a>
          <a
            href="#experience"
            className="text-xs text-muted-foreground hover:text-primary transition-colors px-3 py-2 terraria-button"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-xs text-muted-foreground hover:text-primary transition-colors px-3 py-2 terraria-button"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-xs text-muted-foreground hover:text-primary transition-colors px-3 py-2 terraria-button"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-xs text-muted-foreground hover:text-primary transition-colors px-3 py-2 terraria-button"
          >
            Contact
          </a>
        </div>

        {/* Social Icons - Inventory style */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/scotthnguyen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors terraria-button p-2"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/scottnguyencodes/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors terraria-button p-2"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:scottowandmore@gmail.com"
            className="text-muted-foreground hover:text-destructive transition-colors terraria-button p-2"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  )
}
