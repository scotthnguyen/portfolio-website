"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, MessageSquare, Send, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { TerrariaIcon } from "@/components/terraria-icon"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [copied, setCopied] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const copyEmail = () => {
    navigator.clipboard.writeText("scottowandmore@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary flex items-center gap-3 justify-center">
            <TerrariaIcon type="heart" className="w-6 h-6" />
            Let's Work Together
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground max-w-2xl mx-auto leading-loose">
            Have a project in mind? I'd love to hear about it. Reach out through email or connect with me on LinkedIn
          </p>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="relative group">
            <a
              href="mailto:scottowandmore@gmail.com"
              className="flex items-center gap-4 p-6 bg-card border-4 border-border hover:border-primary transition-all hover:translate-y-[-4px] terraria-shadow"
            >
              <div className="p-3 bg-primary/20 border-2 border-primary/40">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold mb-1 text-sm">Email</h3>
                <p className="text-xs text-muted-foreground">scottowandmore@gmail.com</p>
              </div>
            </a>
            <button
              onClick={copyEmail}
              className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm border-2 border-border hover:border-primary transition-all hover:scale-110 opacity-0 group-hover:opacity-100"
              aria-label="Copy email"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <Copy className="w-4 h-4 text-muted-foreground" />
              )}
            </button>
          </div>

          <a
            href="https://www.linkedin.com/in/scottnguyencodes/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-card border-4 border-border hover:border-accent transition-all hover:translate-y-[-4px] terraria-shadow"
          >
            <div className="p-3 bg-accent/20 border-2 border-accent/40">
              <MessageSquare className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="font-bold mb-1 text-sm">LinkedIn</h3>
              <p className="text-xs text-muted-foreground">Connect with me</p>
            </div>
          </a>
        </div>

        <footer className="mt-20 pt-8 border-t-4 border-border text-center text-xs text-muted-foreground">
          <p>© 2025 Portfolio. Built with Next.js & Terraria vibes ⛏️</p>
        </footer>
      </div>
    </section>
  )
}
