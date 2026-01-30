"use client"

import { useEffect, useRef, useState } from "react"
import { TerrariaIcon } from "@/components/terraria-icon"

export default function Skills() {
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

  const skillCategories = [
  {
    category: "Frontend",
    icon: "eye" as const,
    skills: [
      { name: "React / Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "HTML & CSS", level: 90 },
      { name: "UI State & Animations", level: 80 },
    ],
  },
  {
    category: "Backend & APIs",
    icon: "moon-lord" as const,
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Python", level: 85 },
      { name: "REST APIs", level: 80 },
      { name: "Cloudflare Workers", level: 80 },
    ],
  },
  {
    category: "Analytics & Data",
    icon: "plantera" as const,
    skills: [
      { name: "Power BI", level: 85 },
      { name: "Data Modeling & DAX", level: 80 },
      { name: "SQL", level: 75 },
      { name: "Data Visualization", level: 85 },
    ],
  },
  {
    category: "Cloud & Tools",
    icon: "dungeon-guardian" as const,
    skills: [
      { name: "Durable Objects (State)", level: 75 },
      { name: "Workers AI / LLM Integration", level: 80 },
      { name: "Git & GitHub", level: 85 },
      { name: "Debugging & Testing", level: 80 },
    ],
  },
]


  return (
    <section ref={sectionRef} id="skills" className="min-h-screen py-32 px-6 relative bg-background flex items-center">
      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary flex items-center gap-3">
            <TerrariaIcon type="pickaxe" className="w-6 h-6" />
            Skills & Expertise
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground max-w-3xl leading-loose">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-base font-bold mb-4 text-accent flex items-center gap-2">
                <TerrariaIcon type={category.icon} className="w-4 h-4" />
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="transition-all duration-500"
                    style={{ transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-4 bg-secondary border-2 border-border overflow-hidden relative">
                      <div
                        className={`h-full bg-primary transition-all duration-1000 ease-out relative ${
                          isVisible ? "" : "w-0"
                        }`}
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`,
                          boxShadow: 'inset -2px -2px 0 rgba(0,0,0,0.3), inset 2px 2px 0 rgba(255,255,255,0.3)'
                        }}
                      >
                        {/* Terraria-style shine effect */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-white/30" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
