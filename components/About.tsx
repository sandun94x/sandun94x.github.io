'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white text-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto text-center"
        >
          I'm a passionate AI and Machine Learning engineer with 2+ years of experience in developing cutting-edge solutions. 
          My expertise lies in natural language processing, computer vision, and predictive analytics. 
          I thrive on solving complex problems and pushing the boundaries of what's possible with AI.
        </motion.p>
      </div>
    </section>
  )
}

