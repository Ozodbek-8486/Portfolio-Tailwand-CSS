import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingProps {
  onLoadingComplete: () => void;
}

const Loading: React.FC<LoadingProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
    >
      <div className="relative w-full h-full">
        <iframe
          src="https://my.spline.design/reactiveorb-sxcOhvD1iaCaDoCjrZ3GfStU/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="absolute inset-0"
        />
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-green-400 font-mono text-sm mb-2">
            Loading Portfolio...
          </div>
          <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-green-400 to-green-600"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <div className="text-green-400 font-mono text-xs mt-1">
            {progress}%
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Loading;