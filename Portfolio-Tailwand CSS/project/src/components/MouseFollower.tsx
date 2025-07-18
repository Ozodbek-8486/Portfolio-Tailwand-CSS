import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MouseFollower: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [explosions, setExplosions] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      const newExplosion = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setExplosions((prev) => [...prev, newExplosion]);
      
      setTimeout(() => {
        setExplosions((prev) => prev.filter((exp) => exp.id !== newExplosion.id));
      }, 1000);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          scale: isClicking ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      >
        <div className="w-5 h-5 bg-green-400 rounded-full opacity-80" />
      </motion.div>
      
      <motion.div
        className="fixed pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
      >
        <div className="w-10 h-10 border border-green-400 rounded-full opacity-40" />
      </motion.div>

      {explosions.map((explosion) => (
        <motion.div
          key={explosion.id}
          className="fixed pointer-events-none z-40"
          initial={{
            x: explosion.x - 25,
            y: explosion.y - 25,
            scale: 0,
            opacity: 1,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [1, 0.5, 0],
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-12 h-12 border-2 border-green-400 rounded-full">
            <div className="w-full h-full bg-green-400 rounded-full opacity-20" />
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default MouseFollower;