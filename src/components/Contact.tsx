import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaFileDownload } from 'react-icons/fa';
import resume from "../assets/Resume.pdf";

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [result, setResult] = useState('');

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult('Sending...');

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('message', formData.message);
    data.append('access_key', 'eedfe497-69b8-4ea4-ad81-60cc111a5865'); // Web3Forms access key

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const json = await response.json();
      if (json.success) {
        setResult('Form submitted successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResult(`Error: ${json.message}`);
      }
    } catch (error) {
      setResult('Something went wrong. Please try again.');
      console.error(error);
    }
  };

  // Contact info cards
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'cht14@sfu.ca',
      href: 'mailto:cht14@sfu.ca',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/Cliftan',
      href: 'https://linkedin.com/in/Cliftan',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/Cliftan',
      href: 'https://github.com/Cliftan',
    },
    {
      icon: FaFileDownload,
      label: 'Resume',
      value: 'Download',
      href: resume,
      download: true,
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />
          <motion.p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? Let's talk!
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div className="space-y-6">
            <motion.h3 className="text-2xl font-bold mb-6">Contact Information</motion.h3>
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={`${info.label}-${index}`}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={info.download || false}
                  className="flex items-center space-x-4 glass rounded-xl p-6 hover:bg-white/15 transition-all group"
                >
                  <motion.div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="text-white" />
                  </motion.div>
                  <motion.div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-semibold">{info.value}</p>
                  </motion.div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                placeholder="Your Message"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
              <FaPaperPlane />
            </motion.button>

            {result && <p className="mt-4 text-center text-white">{result}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
