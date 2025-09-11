"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"

const ApplyNowButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const handleApplyClick = () => {
    window.open("https://forms.gle/hifLb79pG1HaSHif6", "_blank", "noopener,noreferrer")
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            onClick={handleApplyClick}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold px-6 py-3 rounded-full golden-glow shadow-2xl border-2 border-yellow-300/50 hover:border-yellow-200 transition-all duration-300"
          >
            <div className="flex items-center space-x-2">
              <Crown className="w-5 h-5" />
              <span className="text-sm font-bold">APPLY NOW</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </Button>

          {/* Floating animation particles */}
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-400 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ApplyNowButton
