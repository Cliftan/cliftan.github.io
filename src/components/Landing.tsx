import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const RotatingText = () => {
  const roles = [
    { text: "designer", emoji: "🎨" },
    { text: "gamer", emoji: "🎮" },
    { text: "tech enthusiast", emoji: "🚀" },
    { text: "frontend developer", emoji: "💻" },
    { text: "apiring full-stack dev", emoji: "🌐" },
    { text: "matcha addict", emoji: "🍵" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRoleText = roles[currentIndex]?.text || "";
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayedText.length < currentRoleText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentRoleText.slice(0, displayedText.length + 1));
      }, 100);
    } else if (!isDeleting && displayedText.length === currentRoleText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1));
      }, 50);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentIndex]);

  useEffect(() => {
    // Ensure current index changes
    setCurrentIndex((prev) => prev);
  }, [currentIndex]);

  return (
    <span
      className="flex items-baseline gap-2 overflow-visible"
      style={{ lineHeight: 1.4, paddingBottom: "0.25em" }} // extra padding prevents cutting
    >
      <span style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
        {roles[currentIndex].emoji}
      </span>
      <span
        className="text-gradient font-bold overflow-visible"
        style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
      >
        {displayedText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="inline-block ml-1"
        >
          |
        </motion.span>
      </span>
    </span>
  );
};

const Landing = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Cliftan", label: "GitHub" },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/cliftan",
      label: "LinkedIn",
    },
    { icon: FaEnvelope, href: "mailto:cht14@sfu.ca", label: "Email" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-x-hidden pt-20 px-4 sm:px-6 lg:px-8"
    >
      <div
        ref={ref}
        className="max-w-5xl w-full mx-auto py-20 text-center overflow-visible"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Welcome */}
          <motion.div variants={itemVariants} className="mb-6">
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
              }
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.3, type: "spring", duration: 0.6 }}
              className="inline-block px-3 sm:px-4 py-2 rounded-full glass text-sm sm:text-base font-medium mb-4"
            >
              👋 Welcome to my Portfolio
            </motion.span>
          </motion.div>

          {/* Hero Title: Two Lines */}
          <motion.div variants={itemVariants} className="mb-6 overflow-visible">
            <motion.h1
              className="font-bold flex flex-col items-center justify-center gap-4 px-2 sm:px-4 text-center max-w-full overflow-visible"
              style={{ lineHeight: 1.4, paddingBottom: "0.25em" }} // extra padding prevents cut
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
                My name is <span className="text-gradient">Clifton</span>.
              </span>

              <span
                className="flex items-baseline gap-2 justify-center overflow-visible"
                style={{ lineHeight: 1.4, paddingBottom: "0.25em" }}
              >
                <span style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
                  I'm a
                </span>
                <RotatingText />
              </span>
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto break-words overflow-visible"
          >
            Building modern web applications with React, Node.js, and
            cutting-edge technologies
          </motion.p>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass flex items-center justify-center text-white hover:text-blue-400 transition-colors"
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center flex-wrap"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full glass text-white font-semibold hover:bg-white/20 transition-colors"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Down */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
          >
            <span className="mb-2 text-sm sm:text-base">Scroll Down</span>
            <FaArrowDown className="animate-bounce text-lg sm:text-xl" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
