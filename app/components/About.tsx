'use client'

import { motion } from 'framer-motion'

const values = [
  {
    title: 'Creators First',
    description: 'We always remember that we back creators. It is their platform and we are part of the support team.',
  },
  {
    title: 'Bias to Action',
    description: 'Done is better than perfect. Speed matters. We leave everything on the field. We like to GSD.',
  },
  {
    title: 'Community Driven',
    description: 'We create safe spaces for our creators and community. We thrive on collaboration and support.',
  },
  {
    title: 'Force for Good',
    description: 'We believe that memes are a force for good in the world. We back creators who are changing the world.',
  },
  {
    title: 'Long-term Games',
    description: 'Building a platform is a long game. We play long term games with long term people.',
  },
  {
    title: 'Crazy Ideas',
    description: 'Many of the world\'s most impactful memes sounded crazy at first. We support bold, creative ideas.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-16 text-center"
        >
          About
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
