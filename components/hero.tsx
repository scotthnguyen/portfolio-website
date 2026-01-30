"use client"

import { useEffect, useRef } from "react"
import { ArrowDown } from "lucide-react"
import { TerrariaIcon } from "@/components/terraria-icon"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Terraria-style particles: stars, coins, and fallen stars
    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      type: 'star' | 'coin' | 'gel'
      color: string
      rotation: number
    }> = []

    const colors = {
      star: ['#ffff80', '#ffffa0', '#ffffcc'],
      coin: ['#ff9f40', '#ffb060', '#ffc080'],
      gel: ['#60b030', '#70c040', '#80d050']
    }

    for (let i = 0; i < 40; i++) {
      const type = Math.random() < 0.4 ? 'star' : (Math.random() < 0.5 ? 'coin' : 'gel')
      const colorArray = colors[type]
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 2,
        speedX: Math.random() * 0.8 - 0.4,
        speedY: Math.random() * 0.8 - 0.4,
        type,
        color: colorArray[Math.floor(Math.random() * colorArray.length)],
        rotation: Math.random() * Math.PI * 2
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.save()
        ctx.translate(particle.x, particle.y)
        ctx.rotate(particle.rotation)
        
        if (particle.type === 'star') {
          // Draw pixelated star
          ctx.fillStyle = particle.color
          ctx.fillRect(-particle.size, 0, particle.size * 2, 1)
          ctx.fillRect(0, -particle.size, 1, particle.size * 2)
          ctx.fillRect(-particle.size/2, -particle.size/2, particle.size, particle.size)
        } else if (particle.type === 'coin') {
          // Draw pixelated coin
          ctx.fillStyle = particle.color
          ctx.fillRect(-particle.size/2, -particle.size, particle.size, particle.size * 2)
        } else {
          // Draw gel blob (rounded square)
          ctx.fillStyle = particle.color
          ctx.fillRect(-particle.size/2, -particle.size/2, particle.size, particle.size)
        }
        
        ctx.restore()

        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.rotation += 0.02

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Underworld Biome Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
             style={{ backgroundImage: 'url(/underworld.png)', opacity: 0.6 }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent" />
      </div>
      
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />

      {/* Floating Terraria Items - Hearts, Stars, and Mana */}
      <div className="absolute top-[5%] left-[3%] animate-twinkle opacity-50">
        <TerrariaIcon type="heart" className="w-6 h-6" />
      </div>
      <div className="absolute top-[8%] right-[5%] animate-float opacity-40" style={{ animationDelay: '1s' }}>
        <TerrariaIcon type="star" className="w-5 h-5" />
      </div>
      <div className="absolute top-[12%] left-[88%] animate-twinkle opacity-60" style={{ animationDelay: '0.5s' }}>
        <TerrariaIcon type="mana" className="w-5 h-5" />
      </div>
      <div className="absolute top-[18%] left-[15%] animate-float opacity-55" style={{ animationDelay: '2s' }}>
        <TerrariaIcon type="star" className="w-6 h-6" />
      </div>
      <div className="absolute top-[22%] right-[12%] animate-twinkle opacity-45" style={{ animationDelay: '1.5s' }}>
        <TerrariaIcon type="heart" className="w-5 h-5" />
      </div>
      <div className="absolute top-[28%] left-[25%] animate-float opacity-50" style={{ animationDelay: '2.8s' }}>
        <TerrariaIcon type="mana" className="w-6 h-6" />
      </div>
      <div className="absolute top-[32%] right-[28%] animate-twinkle opacity-55" style={{ animationDelay: '2.5s' }}>
        <TerrariaIcon type="star" className="w-7 h-7" />
      </div>
      <div className="absolute top-[38%] left-[8%] animate-float opacity-50" style={{ animationDelay: '3s' }}>
        <TerrariaIcon type="heart" className="w-6 h-6" />
      </div>
      <div className="absolute top-[42%] right-[8%] animate-twinkle opacity-40" style={{ animationDelay: '1.2s' }}>
        <TerrariaIcon type="mana" className="w-5 h-5" />
      </div>
      <div className="absolute top-[48%] left-[35%] animate-float opacity-45" style={{ animationDelay: '0.8s' }}>
        <TerrariaIcon type="star" className="w-6 h-6" />
      </div>
      <div className="absolute top-[52%] right-[35%] animate-twinkle opacity-60" style={{ animationDelay: '0.8s' }}>
        <TerrariaIcon type="heart" className="w-7 h-7" />
      </div>
      <div className="absolute top-[58%] left-[18%] animate-float opacity-50" style={{ animationDelay: '2.2s' }}>
        <TerrariaIcon type="mana" className="w-6 h-6" />
      </div>
      <div className="absolute top-[62%] right-[22%] animate-twinkle opacity-55" style={{ animationDelay: '1.8s' }}>
        <TerrariaIcon type="star" className="w-6 h-6" />
      </div>
      <div className="absolute top-[68%] left-[12%] animate-float opacity-45" style={{ animationDelay: '1.8s' }}>
        <TerrariaIcon type="heart" className="w-5 h-5" />
      </div>
      <div className="absolute top-[72%] right-[18%] animate-twinkle opacity-55" style={{ animationDelay: '2.8s' }}>
        <TerrariaIcon type="mana" className="w-6 h-6" />
      </div>
      <div className="absolute top-[76%] left-[28%] animate-float opacity-40" style={{ animationDelay: '1.5s' }}>
        <TerrariaIcon type="star" className="w-6 h-6" />
      </div>
      <div className="absolute top-[82%] right-[15%] animate-twinkle opacity-50" style={{ animationDelay: '3.2s' }}>
        <TerrariaIcon type="heart" className="w-5 h-5" />
      </div>
      <div className="absolute top-[85%] left-[22%] animate-float opacity-45" style={{ animationDelay: '2.5s' }}>
        <TerrariaIcon type="mana" className="w-5 h-5" />
      </div>
      <div className="absolute top-[25%] left-[78%] animate-twinkle opacity-55" style={{ animationDelay: '2.5s' }}>
        <TerrariaIcon type="heart" className="w-6 h-6" />
      </div>
      <div className="absolute top-[45%] left-[85%] animate-float opacity-45" style={{ animationDelay: '1.8s' }}>
        <TerrariaIcon type="star" className="w-7 h-7" />
      </div>
      <div className="absolute top-[65%] left-[82%] animate-twinkle opacity-50" style={{ animationDelay: '1.2s' }}>
        <TerrariaIcon type="mana" className="w-6 h-6" />
      </div>
      <div className="absolute top-[15%] left-[48%] animate-float opacity-40" style={{ animationDelay: '3.5s' }}>
        <TerrariaIcon type="star" className="w-5 h-5" />
      </div>
      <div className="absolute top-[55%] left-[52%] animate-twinkle opacity-35" style={{ animationDelay: '2.8s' }}>
        <TerrariaIcon type="heart" className="w-5 h-5" />
      </div>
      <div className="absolute top-[75%] left-[58%] animate-float opacity-45" style={{ animationDelay: '1.5s' }}>
        <TerrariaIcon type="mana" className="w-5 h-5" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-slide-up opacity-0 [animation-delay:200ms]">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance leading-tight">
            Software Engineer
            <span className="block text-primary mt-4">Scott Nguyen</span>
          </h1>
        </div>

        <div className="animate-slide-up opacity-0 [animation-delay:400ms]">
          <p className="text-xs md:text-sm text-muted-foreground mb-12 max-w-2xl mx-auto text-balance leading-loose">
            Crafting beautiful, performant, and accessible web applications with modern technologies
          </p>
        </div>

        <div className="animate-slide-up opacity-0 [animation-delay:600ms] flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 text-xs md:text-sm bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:scale-105 terraria-button"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 text-xs md:text-sm bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-all hover:scale-105 terraria-button"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary">
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  )
}
