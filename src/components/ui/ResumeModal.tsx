import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Github, Linkedin, Award, ExternalLink, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo, educationList, skillCategories, projectsList, competitiveProgrammingInfo } from '../../lib/data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col"
        >
          {/* Header Action Bar */}
          <div className="px-6 py-4 bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-cyan-500" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Solaiman Molla — Official Curriculum Vitae
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Content */}
          <div className="p-8 sm:p-10 overflow-y-auto space-y-8 font-sans text-slate-800 dark:text-slate-200 print:text-black print:bg-white print:p-0">
            
            {/* Header / Info */}
            <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                    {personalInfo.name}
                  </h1>
                  <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 font-mono mt-0.5">
                    {personalInfo.title}
                  </p>
                </div>

                <div className="text-xs space-y-1 font-mono text-slate-600 dark:text-slate-400">
                  <p className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-cyan-500" /> {personalInfo.address}</p>
                  <p className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-cyan-500" /> {personalInfo.phone}</p>
                  <p className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-cyan-500" /> {personalInfo.email}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-xs font-mono pt-2 text-cyan-600 dark:text-cyan-400">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  <Github className="w-3.5 h-3.5" /> GitHub
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                </a>
                <a href={personalInfo.codeforces} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  <Code2 className="w-3.5 h-3.5" /> Codeforces: sawon_777
                </a>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-cyan-500 border-b border-slate-200 dark:border-slate-800 pb-1">
                Executive Summary
              </h2>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {personalInfo.bio}
              </p>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-cyan-500 border-b border-slate-200 dark:border-slate-800 pb-1">
                Education
              </h2>
              <div className="space-y-4">
                {educationList.map((edu) => (
                  <div key={edu.id} className="flex justify-between items-start text-xs">
                    <div>
                      <p className="font-bold text-sm text-slate-900 dark:text-white">{edu.degree}</p>
                      <p className="text-slate-600 dark:text-slate-400">{edu.institution}</p>
                      {edu.grade && <p className="font-mono text-cyan-600 dark:text-cyan-400 font-semibold">{edu.grade}</p>}
                    </div>
                    <span className="font-mono text-slate-500">{edu.year}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-cyan-500 border-b border-slate-200 dark:border-slate-800 pb-1">
                Key Machine Learning Projects
              </h2>
              <div className="space-y-4">
                {projectsList.map((p) => (
                  <div key={p.id} className="space-y-1 text-xs">
                    <div className="flex justify-between items-center font-bold text-slate-900 dark:text-white">
                      <span>{p.title} ({p.category})</span>
                      <span className="font-mono text-[10px] text-cyan-500">{p.techStack.join(', ')}</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-cyan-500 border-b border-slate-200 dark:border-slate-800 pb-1">
                Technical Skills
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                {skillCategories.map((sc) => (
                  <div key={sc.id} className="space-y-1">
                    <p className="font-bold text-slate-900 dark:text-white">{sc.title}</p>
                    <p className="text-slate-500 font-mono text-[11px]">{sc.skills.map(s => s.name).join(', ')}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-cyan-500 border-b border-slate-200 dark:border-slate-800 pb-1">
                Languages Spoken
              </h2>
              <p className="text-xs text-slate-700 dark:text-slate-300">
                <strong>Bangla</strong> (Native) • <strong>English</strong> (Professional Working Proficiency)
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
