"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Instagram, Heart } from "lucide-react"
import Image from "next/image"

const Footer = () => {
  const socialLinks = [
    {
      icon: Instagram,
      label: "@missuniteinternational_",
      href: "https://instagram.com/missuniteinternational_",
    },
    {
      icon: Instagram,
      label: "@glorifiquealliancellp",
      href: "https://instagram.com/glorifiquealliancellp",
    },
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Competition", href: "#competition" },
    { name: "Winners", href: "#winners" },
    { name: "Contact", href: "#contact" },
  ]

  const contactInfo = [
    {
      icon: Mail,
      text: "glorifiquealliancellp@gmail.com",
      href: "mailto:glorifiquealliancellp@gmail.com",
    },
    {
      icon: Mail,
      text: "missuniteinternational@gmail.com",
      href: "mailto:missuniteinternational@gmail.com",
    },
    {
      icon: Phone,
      text: "+91-7750871227",
      href: "tel:+917750871227",
    },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-black border-t border-white/10">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/20 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i,
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Logo and Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-4 mb-6">
              <Image
                src="/images/miss-unite-logo.png"
                alt="Miss Unite International"
                width={60}
                height={60}
                className="golden-glow rounded-full"
              />
              <div>
                <h3 className="font-serif text-2xl font-bold gradient-text">Miss Unite International</h3>
                <p className="text-gray-400 text-sm">Where Unity Meets Equality</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              A global movement celebrating purpose-driven beauty, cultural unity, and social change. Empowering women
              to unite nations and ignite change across the world.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>for global sisterhood</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="font-serif text-xl font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 block"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="font-serif text-xl font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <motion.a
                    href={contact.href}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-3 text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                  >
                    <contact.icon className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{contact.text}</span>
                  </motion.a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-8">
              <h5 className="font-semibold text-white mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center golden-glow hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5 text-black" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-t border-white/10 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Miss Unite International. All rights reserved. | Glorifique Alliance LLP
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <motion.span whileHover={{ color: "#fbbf24" }} className="cursor-pointer">
                Privacy Policy
              </motion.span>
              <motion.span whileHover={{ color: "#fbbf24" }} className="cursor-pointer">
                Terms of Service
              </motion.span>
              <motion.span whileHover={{ color: "#fbbf24" }} className="cursor-pointer">
                Cookie Policy
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
