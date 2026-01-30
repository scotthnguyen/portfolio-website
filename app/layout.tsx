import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Press_Start_2P } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const pressStart = Press_Start_2P({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start"
})

export const metadata: Metadata = {
  title: "Scott Nguyen - Terraria Portfolio",
  description: "Pixel-perfect portfolio showcasing software engineering in Terraria style",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${pressStart.variable} antialiased bg-background`} style={{ fontFamily: 'var(--font-press-start), monospace' }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
