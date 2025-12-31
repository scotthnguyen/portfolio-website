"use client"

import { useEffect, useRef } from "react"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
    }> = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.fillStyle = "rgba(100, 200, 200, 0.5)"
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        particle.x += particle.speedX
        particle.y += particle.speedY

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
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-slide-up opacity-0 [animation-delay:200ms]">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance">
            Software Engineer
            <span className="block text-primary mt-2">Scott Nguyen</span>
          </h1>
        </div>

        <div className="animate-slide-up opacity-0 [animation-delay:400ms]">
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance leading-relaxed">
            Crafting beautiful, performant, and accessible web applications with modern technologies and attention to
            detail
          </p>
        </div>

        <div className="animate-slide-up opacity-0 [animation-delay:600ms] flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-all hover:scale-105"
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
