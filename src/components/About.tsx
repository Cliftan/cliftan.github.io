import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 relative">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          />

          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            A brief overview of who I am and what I enjoy building.
          </motion.p>
        </motion.div>

        {/* About Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-2xl mx-auto max-w-2xl p-6"
        >
          <motion.div
            className="space-y-4 text-gray-300 text-base leading-relaxed"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <p className="text-center md:text-left">
              I’m a third-year Computing Science student at Simon Fraser University with a strong interest in building thoughtful, user-focused technology.
            </p>

            <p className="text-center md:text-left">
              I enjoy turning ideas into functional products through clean design and well-structured code, with experience in Python, C, HTML, CSS, and JavaScript.
            </p>

            <p className="text-center md:text-left">
              I’m especially interested in web development, software engineering, and emerging technologies like augmented reality.
            </p>

            <p className="text-center md:text-left">
              Outside of coursework, I build personal projects to sharpen my skills and explore new ideas.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
