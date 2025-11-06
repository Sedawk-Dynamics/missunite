"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Crown, Trophy, Star, Award } from "lucide-react"
import Image from "next/image"

const WinnersSection = () => {
  const winners2024 = [
    {
      name: "Sophia Weisz",
      country: "Netherlands",
      title: "Miss Unite International 2024",
      position: "Winner",
      icon: Crown,
      rank: 1,
    },
    {
      name: "Bellah Sthabile",
      country: "South Africa",
      title: "1st Runner Up 2024",
      position: "1st Runner Up",
      icon: Trophy,
      rank: 2,
    },
    {
      name: "Vanessa Stegling",
      country: "Botswana",
      title: "2nd Runner Up 2024",
      position: "2nd Runner Up",
      icon: Award,
      rank: 3,
    },
  ]

  const winners2025 = [
    {
      name: "Marte Kasara Wawa",
      country: "Kenya",
      title: "Miss Unite International 2025",
      position: "Winner",
      icon: Crown,
      rank: 1,
      image: "/images/Marte-Kasara-Wawa.jpeg",
    },
    {
      name: "Rachel Aaij",
      country: "Netherlands",
      title: "1st Runner Up 2025",
      position: "1st Runner Up",
      icon: Trophy,
      rank: 2,
      image: "/images/Rachel Aaij.jpeg",
    },
    {
      name: "Joubert Pauline",
      country: "France",
      title: "3rd Runner Up 2025",
      position: "3rd Runner Up",
      icon: Star,
      rank: 3,
      image: "/images/Joubert Pauline.jpeg",
    },
    {
      name: "Jamilatu Aziz Abu",
      country: "Ghana",
      title: "Miss Unite International 2nd Runner Up",
      position: "2nd Runner Up",
      icon: Award,
      rank: 4,
      image: "/images/Jamilatu Aziz Abu.jpeg",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const WinnerCard = ({ winner, index }: { winner: any; index: number }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      className="group"
    >
      <Card className="glass-effect border-white/20 h-full hover:border-yellow-400/50 transition-all duration-500 group-hover:shadow-2xl overflow-hidden">
        <CardContent className="p-0">
          {/* Winner Image */}
          <div className="relative h-64 overflow-hidden">
            <Image
              src={
                winner.image
                  ? winner.image
                  : `/placeholder.svg?height=300&width=250&query=elegant pageant winner from ${winner.country}`
              }
              alt={`${winner.name} - ${winner.title}`}
              width={250}
              height={300}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Crown/Trophy Icon */}
            <div className="absolute top-4 right-4">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center golden-glow ${
                  winner.rank === 1
                    ? "bg-gradient-to-r from-yellow-400 to-yellow-600"
                    : winner.rank === 2
                    ? "bg-gradient-to-r from-gray-300 to-gray-500"
                    : "bg-gradient-to-r from-amber-600 to-amber-800"
                }`}
              >
                <winner.icon className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Position Badge */}
            <div className="absolute bottom-4 left-4">
              <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="text-yellow-400 font-semibold text-sm">{winner.position}</span>
              </div>
            </div>
          </div>

          {/* Winner Info */}
          <div className="p-6">
            <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
              {winner.name}
            </h3>
            <p className="text-yellow-400 font-medium mb-2">{winner.country}</p>
            <p className="text-gray-300 text-sm">{winner.title}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )

  return (
    <section id="winners" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/30 to-slate-900/50" />

      {/* Floating Crown Icons */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Crown className="w-4 h-4 text-yellow-400/10" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Past</span>
            <br />
            <span className="text-white">Winners</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Celebrating the remarkable women who have worn the crown and represented the values of Miss Unite
            International across the globe.
          </p>
        </motion.div>

        {/* 2025 Winners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl font-bold text-white mb-4">Miss Unite International 2025</h3>
            <p className="text-gray-300">Our most recent champions who continue to inspire change worldwide</p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {winners2025.map((winner, index) => (
              <WinnerCard key={`2025-${index}`} winner={winner} index={index} />
            ))}
          </motion.div>
        </motion.div>

        {/* 2024 Winners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl font-bold text-white mb-4">Miss Unite International 2024</h3>
            <p className="text-gray-300">The inaugural champions who set the foundation for excellence</p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {winners2024.map((winner, index) => (
              <WinnerCard key={`2024-${index}`} winner={winner} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default WinnersSection
