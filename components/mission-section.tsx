"use client"

import { motion } from "framer-motion"
import { Target, Eye, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const MissionSection = () => {
  const beliefs = [
    "We believe in crowns that stand for climate action, mental health, human rights, and education for all.",
    "We believe in mentorship, media, and moments that elevate voices that matter.",
    "We believe that when women unite, the world listens — and the world transforms.",
  ]

  const highlights = [
    {
      year: "2026",
      title: "India Edition",
      description: "First offline edition in India — a land of heritage, diversity, and transformation",
    },
    {
      year: "100+",
      title: "Countries",
      description: "Global representation from delegates across continents",
    },
    {
      year: "3rd",
      title: "Edition",
      description: "Building on the success of previous international competitions",
    },
  ]

  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-indigo-900/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Target className="w-12 h-12 text-yellow-400 mr-4" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold gradient-text">Our Mission</h2>
          </div>
          <p className="text-2xl text-white font-light mb-8 max-w-4xl mx-auto leading-relaxed">
            "Purpose Crowned. Nations United. Change Ignited."
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            To redefine beauty by empowering women with the tools to lead, inspire, and make a positive impact—locally
            and globally.
          </p>
        </motion.div>

        {/* What We Believe */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Eye className="w-10 h-10 text-yellow-400 mr-3" />
              <h3 className="font-serif text-3xl font-bold text-white">What We Believe</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {beliefs.map((belief, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="glass-effect border-white/20 h-full hover:border-yellow-400/50 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-6 golden-glow">
                      <Sparkles className="w-6 h-6 text-black" />
                    </div>
                    <p className="text-gray-300 leading-relaxed italic">"{belief}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 2026 Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl font-bold text-white mb-4">2026 Highlights</h3>
            <p className="text-lg text-gray-300">Theme: "Uniting Nations, Igniting Change"</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="glass-effect border-white/20 rounded-2xl p-8 hover:border-yellow-400/50 transition-all duration-300">
                  <div className="text-4xl font-bold gradient-text mb-2">{highlight.year}</div>
                  <h4 className="font-serif text-xl font-semibold text-white mb-3">{highlight.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{highlight.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MissionSection
