import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { educationList } from '../../lib/data';
import { FadeIn, StaggerContainer, StaggerItem } from '../animations/FadeIn';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Academic Background"
          title="Education History"
          subtitle="A solid academic journey spanning Computer Science & Engineering, Higher Secondary Science distinction, and Secondary Foundation."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-500/20 -translate-x-1/2 hidden sm:block" />

          <StaggerContainer className="space-y-8 sm:space-y-12">
            {educationList.map((edu, index) => {
              const isEven = index % 2 === 0;

              return (
                <StaggerItem key={edu.id} className="relative">
                  <div className={`flex flex-col sm:flex-row items-center ${isEven ? 'sm:flex-row-reverse' : ''}`}>
                    
                    {/* Timeline Node Dot */}
                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white dark:bg-slate-900 border-2 border-cyan-500 flex items-center justify-center text-cyan-500 shadow-md z-10 hidden sm:flex">
                      {edu.current ? (
                        <span className="w-3 h-3 rounded-full bg-cyan-500 animate-ping" />
                      ) : (
                        <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                      )}
                    </div>

                    {/* Timeline Card */}
                    <div className="w-full sm:w-[calc(50%-2.5rem)]">
                      <Card glow className="relative space-y-3">
                        {edu.current && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                            Current Institution
                          </span>
                        )}

                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                            {edu.degree}
                          </h3>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-medium">
                          <span className="flex items-center gap-1 text-cyan-600 dark:text-cyan-400 font-semibold">
                            <BookOpen className="w-3.5 h-3.5" />
                            {edu.institution}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1 font-mono">
                            <Calendar className="w-3.5 h-3.5" />
                            {edu.year}
                          </span>
                        </div>

                        {edu.grade && (
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-bold font-mono">
                            <Award className="w-3.5 h-3.5" />
                            <span>{edu.grade}</span>
                          </div>
                        )}

                        {edu.description && (
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                            {edu.description}
                          </p>
                        )}
                      </Card>
                    </div>

                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

      </div>
    </section>
  );
};
