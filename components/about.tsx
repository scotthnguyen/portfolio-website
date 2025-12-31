"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Code2, Zap, Users } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
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
        {/* Top section */}
        <div
          className={`grid md:grid-cols-[280px_1fr] gap-6 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          {/* Profile Image */}
          <div className="flex justify-start">
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden border border-border shadow-lg">
              <Image
                src="/profile.png"
                alt="Profile picture"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              About Me
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I'm a passionate software engineer with expertise in databases. My 
              experiences have honed my skills in Software Engineering, Data Engineering , Web Development, Machine Learning, and AI. I love building
              efficient, scalable solutions that solve real-world problems and continuously
              learning new technologies.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
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
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
