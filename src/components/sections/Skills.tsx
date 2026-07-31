import React, { useState } from 'react';
import { 
  Code2, BrainCircuit, ShieldAlert, Wrench, Sparkles, Check, 
  Terminal, Globe, FileCode, Cpu, Layers, Network, 
  MessageSquareCode, KeyRound, Lock, GitBranch, Laptop, Trophy 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { skillCategories } from '../../lib/data';
import { FadeIn } from '../animations/FadeIn';

// Map of specific icons for each tech skill to make them feel branded
const skillIcons: Record<string, React.ComponentType<any>> = {
  'C++': Code2,
  'Python': Terminal,
  'JavaScript': Globe,
  'HTML & CSS': FileCode,
  'TensorFlow': BrainCircuit,
  'PyTorch': Cpu,
  'Scikit-learn': Layers,
  'CNN (Convolutional Neural Nets)': Network,
  'NLP (Natural Language Processing)': MessageSquareCode,
  'Burp Suite': ShieldAlert,
  'Ghidra': KeyRound,
  'Web Security Basics': Lock,
  'Git & GitHub': GitBranch,
  'Linux': Terminal,
  'VS Code': Laptop,
  'Codeforces Platform': Trophy
};

// Skill color systems (border and ambient background glows) based on brand/tech category
const categoryTheme: Record<string, { border: string, text: string, bg: string, glow: string }> = {
  languages: {
    border: 'border-cyan-500/20 hover:border-cyan-500/40',
    text: 'text-cyan-600 dark:text-cyan-400',
    bg: 'bg-cyan-500/10 dark:bg-cyan-500/5',
    glow: 'group-hover:shadow-cyan-500/5'
  },
  'ml-dl': {
    border: 'border-blue-500/20 hover:border-blue-500/40',
    text: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-500/10 dark:bg-blue-500/5',
    glow: 'group-hover:shadow-blue-500/5'
  },
  'cyber-sec': {
    border: 'border-purple-500/20 hover:border-purple-500/40',
    text: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-500/10 dark:bg-purple-500/5',
    glow: 'group-hover:shadow-purple-500/5'
  },
  tools: {
    border: 'border-emerald-500/20 hover:border-emerald-500/40',
    text: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-500/10 dark:bg-emerald-500/5',
    glow: 'group-hover:shadow-emerald-500/5'
  }
};

const categoryIcons: Record<string, React.ReactNode> = {
  languages: <Code2 className="w-5 h-5 text-cyan-500" />,
  'ml-dl': <BrainCircuit className="w-5 h-5 text-blue-500" />,
  'cyber-sec': <ShieldAlert className="w-5 h-5 text-purple-500" />,
  tools: <Wrench className="w-5 h-5 text-emerald-500" />
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Tech Stack' },
    { id: 'languages', label: 'Languages' },
    { id: 'ml-dl', label: 'ML & Deep Learning' },
    { id: 'cyber-sec', label: 'Cyber Security' },
    { id: 'tools', label: 'Developer Tools' }
  ];

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === selectedCategory);

  const getProficiencyLabel = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    return 'Intermediate';
  };

  return (
    <section id="skills" className="py-20 relative bg-transparent border-t border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Technical Competencies"
          title="Skills & Technologies"
          subtitle="Categorized proficiency in algorithm implementation, machine learning architecture, security analysis, and software engineering tools."
        />

        {/* Custom Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`relative px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-2xl transition-all duration-300 backdrop-blur-md cursor-pointer ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/20 border border-transparent'
                    : 'bg-white/60 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 hover:border-cyan-500/50'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Skill grid rendering */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-12"
          >
            {filteredCategories.map((category) => {
              const theme = categoryTheme[category.id] || categoryTheme.languages;
              return (
                <div key={category.id} className="space-y-6">
                  {/* Category Banner Title */}
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl border ${theme.border} ${theme.bg}`}>
                      {categoryIcons[category.id] || <Sparkles className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.skills.map((skill) => {
                      const Icon = skillIcons[skill.name] || Check;
                      return (
                        <div
                          key={skill.name}
                          className={`group relative p-5 rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border ${theme.border} shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-[160px] overflow-hidden ${theme.glow}`}
                        >
                          {/* Inner ambient blur glow inside card */}
                          <div className={`absolute top-0 right-0 w-24 h-24 rounded-full ${theme.bg} blur-2xl group-hover:scale-150 transition-transform duration-300 opacity-50`} />

                          <div className="space-y-3 z-10 relative">
                            {/* Skill Header */}
                            <div className="flex items-center justify-between">
                              <div className={`p-2 rounded-lg ${theme.bg} ${theme.text}`}>
                                <Icon className="w-4 h-4 shrink-0" />
                              </div>
                              <span className="text-[10px] font-bold tracking-wider uppercase font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-800">
                                {getProficiencyLabel(skill.level)}
                              </span>
                            </div>

                            {/* Skill Name */}
                            <h4 className="text-sm sm:text-base font-extrabold text-slate-800 dark:text-slate-200 group-hover:text-cyan-500 transition-colors">
                              {skill.name}
                            </h4>

                            {/* Skill Description */}
                            {skill.description && (
                              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal line-clamp-2">
                                {skill.description}
                              </p>
                            )}
                          </div>

                          {/* Skill Level details at the bottom of the card */}
                          <div className="z-10 relative space-y-1 pt-2">
                            <div className="flex justify-between items-center text-[10px] font-bold font-mono text-slate-400">
                              <span>Level</span>
                              <span>{skill.level}%</span>
                            </div>
                            <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

