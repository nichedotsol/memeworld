'use client'

import { motion } from 'framer-motion'

const teamMembers = [
  {
    name: 'Team Member 1',
    role: 'Founder & CEO',
    bio: 'Building the future of meme culture.',
  },
  {
    name: 'Team Member 2',
    role: 'CTO',
    bio: 'Engineering amazing experiences.',
  },
  {
    name: 'Team Member 3',
    role: 'Head of Community',
    bio: 'Connecting creators worldwide.',
  },
  {
    name: 'Team Member 4',
    role: 'Head of Design',
    bio: 'Making memes beautiful.',
  },
]

export default function Team() {
  return (
    <section id="team" className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-16 text-center"
        >
          Team
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-red-400 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <p className="text-sm text-gray-500">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
