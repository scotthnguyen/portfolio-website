"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "ClassMates",
      description: "App that connects students within the same classes for collaboration, study groups, and resource sharing.",
      image: "/classmates.png",
      tags: ["Node.js", "TypeScript", "React", "Tesseract.js"],
      github: "https://github.com/kennedynguyen1/ucsb-class-chat",
      live: "https://drive.google.com/drive/folders/1mewC0iotdOfKw9t4YzdqYa2krFvvlsMt?usp=sharing",
    },
    {
      title: "Computer Vision Model Shark Game",
      description: "Interactive minigames which simulate training computer vision models to help young users better understand machine learning concepts. It was presented  at the UN Ocean Conference 2025. There is another version that is a story game found on my LinkedIn.",
      image: "/UN-Ocean-Conference.jpeg",
      tags: ["React", "TypeScript"],
      github: "https://github.com/scotthnguyen/bubble-vision-bliss",
      live: "https://drive.google.com/drive/folders/1ArV7HOjYdIGuTBo_sfTULqzCRIq_0ef5?usp=drive_link",
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualization platform with interactive charts, real-time updates, and export functionality",
      image: "/analytics-dashboard.png",
      tags: ["Next.js", "D3.js", "Tailwind", "Redis"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Social Media Manager",
      description: "Social media scheduling tool with multi-platform support, analytics, and content calendar",
      image: "/social-media-dashboard.png",
      tags: ["React", "Express", "MongoDB", "AWS"],
      github: "https://github.com",
      live: "https://example.com",
    },
  ]

  return (
    <section ref={sectionRef} id="projects" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Featured Projects</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            A collection of my recent work showcasing various technologies and problem-solving approaches
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-card rounded-xl border border-border overflow-hidden hover:border-primary transition-all duration-500 hover:scale-[1.02] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
