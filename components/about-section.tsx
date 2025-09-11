"use client"

import { motion } from "framer-motion"
import { Globe, Heart, Users, Crown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const AboutSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const features = [
    {
      icon: Heart,
      title: "Purpose-Led Mission",
      description: "Beauty with a cause. We champion leadership, sustainability, equality, and social impact.",
    },
    {
      icon: Globe,
      title: "Global Representation",
      description: "Contestants from 100+ countries united on one international stage.",
    },
    {
      icon: Users,
      title: "Empowerment & Growth",
      description: "Personal development, media exposure, advocacy training, and global networking.",
    },
    {
      icon: Crown,
      title: "Legacy of Unity",
      description: "Rooted in the belief that 'when women unite, the world transforms.'",
    },
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-blue-900/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Miss Unite</span>
            <br />
            <span className="text-white">International</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Miss Unite International isn't just a pageant — it's a global movement celebrating purpose-driven beauty,
            cultural unity, and social change.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-serif text-3xl font-bold text-white mb-6">A Global Movement of Change</h3>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Held in India for its first offline edition in 2026, this prestigious platform brings together delegates
                from across the globe to crown not only outer beauty but also inner strength, leadership, and vision.
              </p>
              <p>
                We believe that when women unite, the world listens — and the world transforms. Our contestants become
                global ambassadors for change, leaders in their communities, and voices on international platforms.
              </p>
              <p>
                This is Miss Unite International — where confidence meets compassion, and culture walks hand-in-hand
                with change.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Logo */}
          {/*<motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-full blur-2xl" />
              <Image
                src=""
                alt="Miss Glorifique India"
                width={350}
                height={350}
                className="relative z-10 golden-glow"
              />
            </div>
          </motion.div>*/}
        </div>

        {/* Features Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="glass-effect border-white/20 h-full hover:border-yellow-400/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 golden-glow">
                    <feature.icon className="w-8 h-8 text-black" />
                  </div>
                  <h4 className="font-serif text-xl font-semibold text-white mb-3">{feature.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
