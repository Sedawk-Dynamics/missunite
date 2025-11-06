"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Crown, Users, Award, Briefcase } from "lucide-react"

const LeadershipSection = () => {
  const leaders = [
    {
      name: "Mrs. Meenakshi Manohar",
      title: "CEO",
      location: "Tamil Nadu",
      description:
        "A visionary CEO from Tamil Nadu, she leads Miss Unite International with purpose, redefining beauty through empowerment, culture, and global impact—creating changemakers beyond the crown.",
      icon: Crown,
    },
    {
      name: "Mr. Sudhanshu Mishra",
      title: "Chairman and Founder",
      location: "India",
      description:
        "Mr. Mishra, Chairman and Founder of Miss Unite International, is the driving force behind its creation and global expansion—leading with a transformative vision that celebrates empowerment, inclusivity, and purpose-driven leadership.",
      icon: Users,
    },
    {
      name: "Mr. Manas Sahoo",
      title: "Vice-Chairman and Managing Director",
      location: "India",
      description:
        "Mr. Sahoo, Vice-Chairman and Managing Director of Miss Unite International, oversees strategic operations and execution, upholding world-class standards while fostering unity and professionalism across all global platforms.",
      icon: Award,
    },
    {
      name: "Mr. Jagdeep Singh",
      title: "Operational Director",
      location: "India",
      description:
        "Mr. Singh, Operational Director of Miss Unite International, ensures seamless coordination and execution across all divisions, bringing efficiency, precision, and dedication to every facet of the organization’s global operations.",
      icon: Briefcase,
    },
  ]

  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/30 to-slate-900/30" />

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
            <span className="gradient-text">Our Leadership</span>
            <br />
            <span className="text-white">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Visionary leaders driving global change through empowerment, diversity, and purposeful pageantry.
          </p>
        </motion.div>

        {/* Leadership Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Card className="glass-effect border-white/20 h-full hover:border-yellow-400/50 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 golden-glow group-hover:scale-110 transition-transform duration-300">
                    <leader.icon className="w-10 h-10 text-black" />
                  </div>

                  {/* Name and Title */}
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">{leader.name}</h3>
                  <div className="text-yellow-400 font-semibold mb-1">{leader.title}</div>
                  <div className="text-gray-400 text-sm mb-6">{leader.location}</div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed">{leader.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass-effect border-white/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-serif text-2xl font-bold text-white mb-4">Join Our Global Movement</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              By becoming a National Director for Miss Unite International 2026, you are not just acquiring a franchise—
              you are stepping into a role of leadership, influence, and prestige on an international stage.
            </p>
            <p className="text-yellow-400 font-semibold">
              We welcome you to be a part of this journey where beauty meets purpose, and where together, we inspire the
              world.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LeadershipSection
