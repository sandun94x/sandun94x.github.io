'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-black">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Sandun K</h1>
          <h2 className="text-2xl md:text-4xl text-gray-400 mb-8">
            AI & Machine Learning Engineer
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="#contact"
              className="bg-white text-black hover:bg-gray-200 font-bold py-3 px-6 rounded-full transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2"
        >
          <Image
        
            src="/image.jpg"
            alt="John Doe"
            width={500}
            height={500}
            className="rounded-full mx-auto md:ml-auto md:mr-0 grayscale"
          />
        </motion.div>
      </div>
    </section>
  )
}

