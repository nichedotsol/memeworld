'use client'

import { motion } from 'framer-motion'

const portfolioItems = [
  { name: 'Meme Generator', category: 'Tools', featured: true },
  { name: 'Trend Tracker', category: 'Analytics' },
  { name: 'Community Hub', category: 'Social' },
  { name: 'Creator Studio', category: 'Tools' },
  { name: 'Marketplace', category: 'Commerce' },
  { name: 'API Platform', category: 'Developer' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-16 text-center"
        >
          Portfolio
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <h3 className="text-2xl font-bold mb-2 group-hover:text-red-600 transition-colors">
                {item.name}
              </h3>
              <p className="text-gray-600">{item.category}</p>
              {item.featured && (
                <span className="inline-block mt-2 px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold">
                  FEATURED
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
