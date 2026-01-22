"use client"

import Link from "next/link"
import Image from "next/image"
import { useTilt } from "@/hooks/use-tilt"

type ExperienceItem = {
  name: string
  role: string
  url: string
  logo: string // path in /public
}

const items: ExperienceItem[] = [
  {
    name: "UCSB ITS Internship",
    role: "Software Engineer",
    url: "https://it.ucsb.edu/internship",
    logo: "/ucsb.png",
  },
  {
    name: "Benioff Ocean Science",
    role: "Software Engineer",
    url: "https://bosl.ucsb.edu/",
    logo: "/logo-bosl-01.svg",
  },
  {
    name: "Eash & Associates",
    role: "Software Engineer",
    url: "https://taxeash.com/",
    logo: "/eash.png",
  },
  {
    name: "Poppy General Co",
    role: "Software Engineer",
    url: "https://www.poppygc.com/",
    logo: "/poppy.png",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 scroll-mt-28">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12">
          Experience
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
          {items.map((item) => {
            const ExperienceCard = () => {
              const tilt = useTilt()
              return (
                <Link
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center text-center"
                >
                  {/* Logo tile */}
                  <div 
                    ref={tilt.ref}
                    onMouseMove={tilt.handleMouseMove}
                    onMouseLeave={tilt.handleMouseLeave}
                    className="relative h-44 w-44 rounded-3xl overflow-hidden bg-card border border-border shadow-sm transition-all duration-300 group-hover:border-primary"
                    style={{
                      transform: tilt.transform,
                      transition: tilt.transform ? 'transform 0.1s ease-out' : 'all 0.3s ease-out'
                    }}
                  >
                <Image
                  src={item.logo}
                  alt={`${item.name} logo`}
                  fill
                  className="object-contain p-8"
                  sizes="176px"
                />
              </div>

              {/* Text */}
              <div className="mt-6 max-w-[220px]">
                <p className="text-base font-semibold text-foreground leading-snug">
                  {item.name}
                </p>
                <p className="mt-2 text-sm text-muted-foreground leading-snug">
                  {item.role}
                </p>
              </div>
                </Link>
              )
            }
            return <ExperienceCard key={item.name} />
          })}
        </div>
      </div>
    </section>
  )
}
