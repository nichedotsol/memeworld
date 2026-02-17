'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-8 text-black"
        >
          Contact Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 mb-8"
        >
          Get in touch with us
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <a
            href="mailto:admin@memeworld.com"
            className="inline-block px-8 py-4 bg-black text-white font-serif uppercase tracking-wide hover:opacity-80 transition-opacity"
          >
            Email Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}
