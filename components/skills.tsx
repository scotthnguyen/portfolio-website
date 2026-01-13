"use client"

import { useEffect, useRef, useState } from "react"

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
    skills: [
      { name: "React / Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "HTML & CSS", level: 90 },
      { name: "UI State & Animations", level: 80 },
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Python", level: 85 },
      { name: "REST APIs", level: 80 },
      { name: "Cloudflare Workers", level: 80 },
    ],
  },
  {
    category: "Analytics & Data",
    skills: [
      { name: "Power BI", level: 85 },
      { name: "Data Modeling & DAX", level: 80 },
      { name: "SQL", level: 75 },
      { name: "Data Visualization", level: 85 },
    ],
  },
  {
    category: "Cloud & Tools",
    skills: [
      { name: "Durable Objects (State)", level: 75 },
      { name: "Workers AI / LLM Integration", level: 80 },
      { name: "Git & GitHub", level: 85 },
      { name: "Debugging & Testing", level: 80 },
    ],
  },
]


  return (
    <section ref={sectionRef} id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Skills & Expertise</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
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
              <h3 className="text-2xl font-bold mb-6 text-accent">{category.category}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="transition-all duration-500"
                    style={{ transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-primary rounded-full transition-all duration-1000 ease-out ${
                          isVisible ? "" : "w-0"
                        }`}
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`,
                        }}
                      />
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
