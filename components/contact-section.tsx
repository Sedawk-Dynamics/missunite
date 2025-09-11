"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Instagram, Calendar, Users, Handshake, ExternalLink } from "lucide-react"

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "General Inquiries",
      details: ["glorifiquealliancellp@gmail.com", "missuniteinternational@gmail.com"],
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Phone,
      title: "Phone Support",
      details: ["+91-7750871227"],
      color: "from-green-400 to-green-600",
    },
    {
      icon: Instagram,
      title: "Social Media",
      details: ["@missuniteinternational_", "@glorifiquealliancellp"],
      color: "from-pink-400 to-pink-600",
    },
  ]

  const keyDates = [
    {
      icon: Calendar,
      title: "Application Open",
      date: "1st August 2025",
      description: "National Director Franchise licence Open",
    },
    {
      icon: Users,
      title: "Application Closes",
      date: "31st July 2026",
      description: "Tentative end date for national auditions",
    },
    {
      icon: Calendar,
      title: "Grand Finale",
      date: "December 2026",
      description: "Tentative date for the international competition in India",
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
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
            <span className="gradient-text">Contact &</span>
            <br />
            <span className="text-white">Apply</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to join the global movement? Get in touch with us or submit your application to become part of Miss
            Unite International 2026.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info & Key Dates */}
          <div className="space-y-12">
            {/* Contact Information */}
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h3 className="font-serif text-2xl font-bold text-white mb-8 text-center lg:text-left">Get In Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="glass-effect border-white/20 hover:border-yellow-400/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-full flex items-center justify-center golden-glow flex-shrink-0`}
                          >
                            <contact.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-semibold text-white mb-2">{contact.title}</h4>
                            {contact.details.map((detail, idx) => (
                              <p key={idx} className="text-gray-300 text-sm mb-1">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Key Dates */}
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h3 className="font-serif text-2xl font-bold text-white mb-8 text-center lg:text-left">Key Dates</h3>
              <div className="space-y-6">
                {keyDates.map((date, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="glass-effect border-white/20 hover:border-yellow-400/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center golden-glow flex-shrink-0">
                            <date.icon className="w-6 h-6 text-black" />
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-semibold text-white mb-1">{date.title}</h4>
                            <p className="text-yellow-400 font-medium mb-2">{date.date}</p>
                            <p className="text-gray-300 text-sm">{date.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Application Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass-effect border-white/20 h-fit">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold text-white mb-6 text-center">Apply Now</h3>

                {/* Official Application Link */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mb-8">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold py-4 rounded-full text-lg golden-glow"
                  >
                    <a
                      href="https://forms.gle/hifLb79pG1HaSHif6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <span>Official Application Form</span>
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </Button>
                </motion.div>

                <div className="text-center mb-6">
                  <p className="text-gray-300 text-sm">Or send us a message below</p>
                </div>

                {/* Contact Form */}
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="First Name"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-yellow-400"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Last Name"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-yellow-400"
                      />
                    </div>
                  </div>

                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-yellow-400"
                    />
                  </div>

                  <div>
                    <Input
                      placeholder="Country"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-yellow-400"
                    />
                  </div>

                  <div>
                    <Input
                      placeholder="Phone Number"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-yellow-400"
                    />
                  </div>

                  <div>
                    <Textarea
                      placeholder="Tell us about yourself and why you want to participate in Miss Unite International..."
                      rows={4}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-yellow-400 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 rounded-full"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Partnership Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <Card className="glass-effect border-white/20">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 golden-glow">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-white mb-4">Partner With Us</h3>
              <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
                We invite brands, mentors, media houses, and changemakers to join hands with Miss Unite International in
                our mission to empower women and uplift communities.
              </p>
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                {["Brand Visibility", "CSR Engagement", "Audience Reach", "Cultural Promotion"].map(
                  (benefit, index) => (
                    <div key={index} className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="text-yellow-400 font-semibold">{benefit}</div>
                    </div>
                  ),
                )}
              </div>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-semibold px-8 py-3 rounded-full"
              >
                Explore Partnership
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
