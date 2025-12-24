"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Zap, Users } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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

  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code that follows best practices",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency to deliver the best user experience",
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Designing with accessibility and usability in mind to create inclusive experiences",
    },
  ]

  return (
    <section ref={sectionRef} id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">About Me</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-16 max-w-3xl leading-relaxed">
            I'm a passionate software engineer with expertise in building modern web applications. I specialize in
            React, Next.js, and TypeScript, creating seamless digital experiences that combine beautiful design with
            robust engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`group p-8 bg-card rounded-xl border border-border hover:border-primary transition-all duration-500 hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
