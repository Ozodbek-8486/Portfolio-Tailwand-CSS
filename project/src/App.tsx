import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loading from './components/Loading';
import Navigation from './components/Navigation';
import MouseFollower from './components/MouseFollower';
import ThreeBackground from './components/ThreeBackground';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loading onLoadingComplete={handleLoadingComplete} />
        ) : (
          <>
            <ThreeBackground />
            <MouseFollower />
            <Navigation />
            <main className="relative z-10">
              <Home />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>
            <footer className="relative z-10 bg-black/80 border-t border-green-400/20 py-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-gray-400">
                  © 2024 Developer Portfolio. Built with React, TypeScript, and Three.js
                </p>
              </div>
            </footer>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;