import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Palette, Rocket, Zap } from 'lucide-react';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: <Code className="text-green-400" size={32} />,
      title: 'Clean Code',
      description: 'Writing maintainable, efficient, and scalable code'
    },
    {
      icon: <Palette className="text-green-400" size={32} />,
      title: 'Creative Design',
      description: 'Bringing innovative ideas to life with stunning visuals'
    },
    {
      icon: <Rocket className="text-green-400" size={32} />,
      title: 'Fast Performance',
      description: 'Optimized solutions for lightning-fast user experiences'
    },
    {
      icon: <Zap className="text-green-400" size={32} />,
      title: 'Modern Tech',
      description: 'Using cutting-edge technologies and frameworks'
    }
  ];

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-green-400">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate developer who loves creating digital experiences that make a difference. 
            With expertise in modern web technologies, I transform ideas into reality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-green-400/10 to-green-600/10 p-8 rounded-2xl border border-green-400/20">
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 mb-6">
                Started coding at age 16, I've been on an incredible journey of continuous learning 
                and growth. From building simple websites to complex applications, I've always 
                been driven by the desire to create something meaningful.
              </p>
              <p className="text-gray-300 mb-6">
                I specialize in full-stack development with a focus on React, Node.js, and modern 
                web technologies. I'm passionate about clean code, user experience, and staying 
                up-to-date with the latest industry trends.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js', 'Three.js', 'Python', 'AWS'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-black/50 p-6 rounded-xl border border-green-400/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4">{feature.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;