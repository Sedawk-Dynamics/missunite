import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Miss Unite International - Where Grace Meets Greatness",
  description:
    "Miss Unite International - A global movement celebrating purpose-driven beauty, cultural unity, and social change. Empowering women to unite nations and ignite change.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} antialiased`}>
      <body className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">{children}</body>
    </html>
  )
}
