'use client'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'AI-Powered Chatbot',
    description: 'Developed a state-of-the-art chatbot using GPT-3 for customer support.',
    tech: ['Python', 'TensorFlow', 'NLP']
  },
  {
    title: 'Image Recognition System',
    description: 'Built a deep learning model for real-time object detection in video streams.',
    tech: ['PyTorch', 'OpenCV', 'Computer Vision']
  },
  {
    title: 'Predictive Maintenance',
    description: 'Created a machine learning system to predict equipment failures in manufacturing.',
    tech: ['Scikit-learn', 'Time Series Analysis', 'IoT']
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white text-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-black text-white text-sm rounded-full px-3 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

