import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaExternalLinkAlt, FaTimes, FaGithub } from "react-icons/fa";
import Poster from "../assets/CMPT310_Poster.png";

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [modalOpen, setModalOpen] = useState(false);

  const projects = [
    {
      title: "SquadUp",
      description:
        "AI Powered Event Planner that suggests events based on your interests and location",
      tech: ["React", "Node.js", "Gemini API", "Ticketmaster API"],
      github:
        "https://github.com/CMPT-276-SPRING-2025/final-project-18-flowers",
      demo: "",
      image: "📅",
    },
    {
      title: "AI In Competitive Play",
      description:
        "An adaptive AI combat bot built in Godot that combines real-time pathfinding and reinforcement learning to simulate competitive gameplay",
      tech: [
        "Godot",
        "GDScript",
        "Python",
        "Reinforcement Learning",
        "A* Search",
      ],
      github: "", // No GitHub button
      demo: "poster", // Use poster modal
      image: "🎮",
    },
    {
      title: "AI Consent Form Fairmont Obstetrics & Gynecology",
      description:
        "A website for patients at Fairmont Obstetrics & Gynecology to fill out a consent form",
      tech: ["React", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Fairmont-OBGYN/AI-Consent-Form",
      demo: "",
      image: "🚑",
    },
    {
      title: "Amazon Web Scraper",
      description:
        "A web scraper that scrapes the Amazon website and saves the data to a Excel file",
      tech: ["Python", "BeautifulSoup", "Pandas", "Selenium"],
      github: "https://github.com/Cliftan/Amazon-Webscrape",
      demo: "",
      image: "💻",
    },
  ];

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
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </motion.h2>

          <motion.div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />

          <motion.p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects showcasing my skills
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass rounded-2xl overflow-hidden group"
            >
              <div className="p-8">
                <div className="text-6xl mb-4">{project.image}</div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  {/* Only show GitHub button if github link exists */}
                  {project.github && project.github !== "" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <FaGithub /> <span>Code</span>
                    </a>
                  )}

                  {/* Demo / Poster */}
                  {project.demo ? (
                    project.demo === "poster" ? (
                      <button
                        onClick={() => setModalOpen(true)}
                        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                      >
                        <FaExternalLinkAlt /> <span>Poster</span>
                      </button>
                    ) : (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                      >
                        <FaExternalLinkAlt /> <span>Website</span>
                      </a>
                    )
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-4xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {/* Modern Close Button */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
              >
                <FaTimes />
              </button>

              <img
                src={Poster}
                alt="CMPT 310 Poster"
                className="w-full h-auto object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
