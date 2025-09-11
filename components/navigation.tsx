"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Competition", href: "#competition" },
    { name: "Winners", href: "#winners" },
    { name: "Contact", href: "#contact" },
  ]

  const handleNavClick = (href: string) => {
    console.log("[v0] Navigation clicked:", href)

    // Close mobile menu first
    setIsOpen(false)

    // Small delay to ensure menu closes before scrolling
    setTimeout(() => {
      const element = document.querySelector(href)
      console.log("[v0] Found element:", element)

      if (element) {
        // Calculate offset for fixed navigation
        const navHeight = 80 // Height of the fixed navigation
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - navHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
        console.log("[v0] Scrolling to:", offsetPosition)
      } else {
        console.log("[v0] Element not found for:", href)
      }
    }, 100)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-effect" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
            <Image
              src="/images/miss-unite-logo.png"
              alt="Miss Unite International"
              width={50}
              height={50}
              className="golden-glow rounded-full"
            />
            <div className="hidden sm:block">
              <h1 className="font-serif text-xl font-bold gradient-text">Miss Unite International</h1>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-white hover:text-yellow-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </motion.button>
            ))}
            <Button
              onClick={() => handleNavClick("#contact")}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold px-6 py-2 rounded-full"
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect border-t border-white/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="block text-white hover:text-yellow-400 transition-colors duration-200 font-medium py-2 w-full text-left"
                >
                  {item.name}
                </motion.button>
              ))}
              <Button
                onClick={() => handleNavClick("#contact")}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold py-2 rounded-full mt-4"
              >
                Apply Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation
