import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const AnimatedBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Create ambient moving background elements
  const particles = Array.from({ length: 12 }).map((_, i) => {
    const size = Math.floor(Math.random() * 180) + 120; // 120px to 300px blur circles
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    const duration = Math.floor(Math.random() * 25) + 25; // 25s to 50s
    const delay = Math.floor(Math.random() * -30);
    const colors = [
      'bg-cyan-500/10 dark:bg-cyan-500/5',
      'bg-blue-500/8 dark:bg-blue-500/4',
      'bg-purple-500/10 dark:bg-purple-500/5',
      'bg-indigo-500/8 dark:bg-indigo-500/4'
    ];
    return {
      id: i,
      size,
      x,
      y,
      duration,
      delay,
      color: colors[i % colors.length]
    };
  });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Radial soft background ambient glow */}
      <div className="absolute top-[-10%] left-[-15%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-cyan-400/10 via-blue-500/5 to-transparent blur-[120px] dark:from-cyan-900/10 dark:via-blue-900/5 dark:to-transparent pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-15%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-bl from-purple-500/10 via-indigo-500/5 to-transparent blur-[130px] dark:from-purple-900/10 dark:via-indigo-900/5 dark:to-transparent pointer-events-none" />

      {/* Floating blur shapes */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full blur-[60px] ${p.color}`}
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            x: [0, Math.random() * 60 - 30, Math.random() * 60 - 30, 0],
            y: [0, Math.random() * 60 - 30, Math.random() * 60 - 30, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};
