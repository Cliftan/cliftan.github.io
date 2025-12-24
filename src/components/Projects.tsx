import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'SquadUp',
      description: 'AI Powered Event Planner that suggests events based on your interests and location',
      tech: ['React', 'Node.js', 'Gemini API', 'Ticketmaster API'],
      github: 'https://github.com/CMPT-276-SPRING-2025/final-project-18-flowers',
      demo: 'https://cmpt-276-spring-2025.github.io/final-project-18-flowers/',
      image: '📅',
    },
    {
      title: 'AI In Competitive Play',
      description: 'An adaptive AI combat bot built in Godot that combines real-time pathfinding and reinforcement learning to simulate competitive gameplay',
      tech: ['Godot', 'GDScript', 'Python', 'Reinforcement Learning', 'A*   Search'],
      github: 'https://github.com/ama309/CMPT310-Project',
      demo: '',
      image: '🎮',
    },
    {
      title: 'AI Consent Form Fairmont Obstetrics & Gynecology',
      description: 'A website for patients at Fairmont Obstetrics & Gynecology to fill out a consent form',
      tech: ['React', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Fairmont-OBGYN/AI-Consent-Form',
      demo: '',
      image: '🚑',
    },
    {
      title: 'Amazon Web Scraper',
      description: 'A web scraper that scrapes the Amazon website and saves the data to a Excel file',
      tech: ['Python', 'BeautifulSoup', 'Pandas', 'Selenium'],
      github: 'https://github.com/Cliftan/Amazon-Webscrape',
      demo: '',
      image: '💻',
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
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
            My <span className="text-gradient">Projects</span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : { width: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
          />

          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Here are some of my recent projects showcasing my skills in full-stack development
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.95 }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass rounded-2xl overflow-hidden group"
            >
              <div className="p-8">
                <motion.div
                  className="text-6xl mb-4"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ delay: index * 0.15 + 0.2, duration: 0.5, type: 'spring' }}
                >
                  {project.image}
                </motion.div>

                <motion.h3
                  className="text-2xl font-bold mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className="text-gray-400 mb-6"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.15 + 0.4, duration: 0.6 }}
                >
                  {project.description}
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-2 mb-6"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
                >
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{
                        delay: index * 0.15 + 0.5 + techIndex * 0.1,
                        duration: 0.3,
                        type: 'spring',
                      }}
                      className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Links */}
                <motion.div
                  className="flex space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.15 + 0.7, duration: 0.5 }}
                >
                  {/* Code Link (always left) */}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </motion.a>

                  {/* Demo Link (conditionally rendered) */}
                  {project.demo ? (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <FaExternalLinkAlt />
                      <span>Website</span>
                    </motion.a>
                  ) : (
                    <span className="w-0" aria-hidden="true" />
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
