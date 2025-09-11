"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mic, Globe, Music, Crown, MessageCircle, Heart, Camera, Users } from "lucide-react"

const CompetitionSection = () => {
  const categories = [
    {
      icon: Mic,
      title: "Advocacy Presentation",
      subtitle: "Voice for a Cause",
      description:
        "Contestants highlight a social issue they support, judged on passion, clarity, and their ability to inspire meaningful change.",
      color: "from-pink-400 to-rose-500",
    },
    {
      icon: Globe,
      title: "Cultural Representation",
      subtitle: "Pride in Tradition",
      description:
        "Delegates celebrate their heritage through attire and storytelling, fostering cultural unity, pride, and global respect.",
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: Music,
      title: "Talent Showcase",
      subtitle: "Creativity Unleashed",
      description:
        "Contestants express unique talents dance, design, or poetry showcasing creativity as a powerful tool for identity and impact.",
      color: "from-purple-400 to-violet-500",
    },
    {
      icon: Crown,
      title: "Elegance & Confidence",
      subtitle: "Confidence in Motion",
      description:
        "Contestants showcase stage presence, grace, and personality celebrating confidence, authenticity, charm, and self-belief.",
      color: "from-yellow-400 to-amber-500",
    },
    {
      icon: MessageCircle,
      title: "Personal Interview",
      subtitle: "Strength of Mind and Mission",
      description:
        "In one-on-one talks, contestants share their journey, values, and vision—revealing true inner strength.",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Heart,
      title: "Social Impact Score",
      subtitle: "Work Beyond the Crown",
      description:
        "Recognizing ongoing social or community work—showing that real impact goes beyond titles through eco-activity.",
      color: "from-red-400 to-pink-500",
    },
    {
      icon: Camera,
      title: "Top Model",
      subtitle: "Confidence Runway",
      description:
        "Contestants showcase poise, elegance, and flair—reflecting confidence, professionalism, and global fashion presence.",
      color: "from-teal-400 to-cyan-500",
    },
    {
      icon: Users,
      title: "Unite Talk",
      subtitle: "Showcase Speaking Skills",
      description:
        "Delegates deliver speeches or stories, showcasing clarity, expression, and the power to inspire and engage.",
      color: "from-orange-400 to-red-500",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="competition" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-indigo-900/50" />

      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

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
            <span className="gradient-text">Competition</span>
            <br />
            <span className="text-white">Categories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Eight distinct categories designed to celebrate every aspect of modern womanhood - from advocacy to
            artistry, from cultural pride to global impact.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="group"
            >
              <Card className="glass-effect border-white/20 h-full hover:border-yellow-400/50 transition-all duration-500 group-hover:shadow-2xl">
                <CardContent className="p-6 text-center h-full flex flex-col">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 golden-glow group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {category.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-yellow-400 font-medium text-sm mb-4">{category.subtitle}</p>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed flex-grow">{category.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Eligibility Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="glass-effect border-white/20 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="font-serif text-3xl font-bold text-white mb-4">Eligibility Criteria</h3>
              <p className="text-gray-300 text-lg">Join the Global Sisterhood</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: "Age", value: "18–35 years" },
                { label: "Representation", value: "Must represent a cause or social issue" },
                { label: "Status", value: "Biological Unmarried Women" },
                { label: "Physical Requirements", value: "No height and weight limits" },
                { label: "Application", value: "Via National Director or Online" },
                { label: "Mission", value: "Purpose-driven dreamers welcome" },
              ].map((criteria, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-4 rounded-lg bg-white/5 border border-white/10"
                >
                  <div className="text-yellow-400 font-semibold mb-1">{criteria.label}</div>
                  <div className="text-white text-sm">{criteria.value}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CompetitionSection
