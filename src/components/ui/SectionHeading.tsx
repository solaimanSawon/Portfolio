import React from 'react';
import { FadeIn } from '../animations/FadeIn';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  badge,
  align = 'center',
  className = ''
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignmentClasses[align]} ${className}`}>
      {badge && (
        <FadeIn direction="down" delay={0.1}>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-500 dark:text-cyan-400 bg-cyan-500/10 dark:bg-cyan-400/10 border border-cyan-500/20 rounded-full mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            {badge}
          </span>
        </FadeIn>
      )}

      <FadeIn direction="up" delay={0.2}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {title.split(' ').map((word, idx) => {
            // Highlight specific keywords or last word with gradient
            if (idx === title.split(' ').length - 1) {
              return (
                <span key={idx} className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  {' '}{word}
                </span>
              );
            }
            return idx === 0 ? word : ` ${word}`;
          })}
        </h2>
      </FadeIn>

      {subtitle && (
        <FadeIn direction="up" delay={0.3}>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        </FadeIn>
      )}

      <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-4" />
    </div>
  );
};
