import React from 'react';
import { motion } from 'motion/react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  glow = false,
  onClick
}) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : undefined}
      onClick={onClick}
      className={`relative rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 p-6 sm:p-8 transition-all duration-300 ${
        glow ? 'hover:border-cyan-500/50 hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/15' : ''
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Decorative top gradient bar */}
      <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent rounded-full opacity-0 hover:opacity-100 transition-opacity" />
      {children}
    </motion.div>
  );
};
