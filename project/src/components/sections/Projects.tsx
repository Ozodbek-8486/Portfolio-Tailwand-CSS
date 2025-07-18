import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Zap, Palette, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with modern design and seamless user experience',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://example.com',
      icon: <Code className="text-green-400" size={24} />
    },
    {
      title: '3D Portfolio Website',
      description: 'Interactive portfolio with stunning 3D animations and smooth transitions',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Three.js', 'Framer Motion', 'TypeScript'],
      github: 'https://github.com',
      demo: 'https://example.com',
      icon: <Palette className="text-green-400" size={24} />
    },
    {
      title: 'Real-time Chat App',
      description: 'Modern chat application with real-time messaging and file sharing',
      image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Socket.io', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://example.com',
      icon: <Zap className="text-green-400" size={24} />
    },
    {
      title: 'AI Dashboard',
      description: 'Machine learning dashboard with data visualization and analytics',
      image: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Python', 'TensorFlow', 'D3.js'],
      github: 'https://github.com',
      demo: 'https://example.com',
      icon: <Code className="text-green-400" size={24} />
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with modern UI/UX design',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React Native', 'Firebase', 'Redux', 'Node.js'],
      github: 'https://github.com',
      demo: 'https://example.com',
      icon: <Palette className="text-green-400" size={24} />
    },
    {
      title: 'Blockchain Explorer',
      description: 'Cryptocurrency blockchain explorer with real-time transaction tracking',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Web3.js', 'Ethereum', 'Node.js'],
      github: 'https://github.com',
      demo: 'https://example.com',
      icon: <Zap className="text-green-400" size={24} />
    }
  ];

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-green-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-black/50 rounded-xl border border-green-400/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 right-4">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-green-400/20 text-green-400 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 px-4 py-2 bg-green-400 text-black rounded-lg hover:bg-green-300 transition-all duration-300 hover:scale-105"
                  >
                    <Github size={16} />
                    <span className="text-sm font-medium">Preview</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">View</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;