"use client"

import Link from "next/link"
import Image from "next/image"
import { useTilt } from "@/hooks/use-tilt"
import { TerrariaIcon } from "@/components/terraria-icon"

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
    <section id="experience" className="min-h-screen py-32 px-6 scroll-mt-28 relative flex items-center">
      {/* Ocean Biome Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
             style={{ backgroundImage: 'url(/ocean.png)', opacity: 0.5 }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-transparent" />
      </div>
      <div className="mx-auto max-w-6xl relative z-10">
        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-12 flex items-center gap-3">
          <TerrariaIcon type="gem" className="w-6 h-6" />
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
                  {/* Logo tile - Terraria item frame style */}
                  <div 
                    ref={tilt.ref}
                    onMouseMove={tilt.handleMouseMove}
                    onMouseLeave={tilt.handleMouseLeave}
                    className="relative h-44 w-44 overflow-hidden bg-card border-4 border-border shadow-sm transition-all duration-300 group-hover:border-primary terraria-shadow hover:translate-y-[-4px]"
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
                <p className="text-xs font-semibold text-foreground leading-snug">
                  {item.name}
                </p>
                <p className="mt-2 text-[0.65rem] text-muted-foreground leading-snug">
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
