import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Hi, I'm</span>
            <br />
            <span className="text-green-400 font-mono">Developer</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Full Stack Developer & Creative Technologist
            <br />
            Building the future with code
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-6 mb-12"
          >
            <a
              href="/resume.pdf"
              download="Developer_Resume.pdf"
              className="flex items-center space-x-2 bg-green-400 text-black px-8 py-3 rounded-lg font-medium hover:bg-green-300 transition-colors duration-300 hover:scale-105 transform"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>
            <a
              href="#projects"
              className="border border-green-400 text-green-400 px-8 py-3 rounded-lg font-medium hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-105 transform"
            >
              View Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="https://github.com"
              className="text-gray-400 hover:text-green-400 transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-green-400 transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:hello@example.com"
              className="text-gray-400 hover:text-green-400 transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="text-green-400 animate-bounce" size={32} />
      </motion.div>
    </section>
  );
};

export default Home;