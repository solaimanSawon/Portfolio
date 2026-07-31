import React from 'react';
import { motion } from 'motion/react';
import { User, Code, Brain, Shield, Languages, GraduationCap, Award, MapPin } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { personalInfo } from '../../lib/data';
import { FadeIn, StaggerContainer, StaggerItem } from '../animations/FadeIn';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-slate-50/50 dark:bg-slate-950/50 border-t border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Profile Overview"
          title="About Solaiman Molla"
          subtitle="A passionate Computer Science student who loves dissecting algorithms, building intelligent Machine Learning models, and exploring security vectors."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Profile Summary Card */}
          <div className="lg:col-span-7 space-y-6">
            <Card glow className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-500">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Personal Profile & Career Vision
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Daffodil International University • CSE Department
                  </p>
                </div>
              </div>

              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
                {personalInfo.bio}
              </p>

              {/* Core Focus Triad */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                  <Code className="w-5 h-5 text-cyan-500 mb-2" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Problem Solving</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    C++ competitive programming on Codeforces (sawon_777)
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                  <Brain className="w-5 h-5 text-blue-500 mb-2" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">ML & Deep Learning</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    TensorFlow, PyTorch, CNNs for vision & NLP
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                  <Shield className="w-5 h-5 text-indigo-500 mb-2" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Cyber Security</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Burp Suite web auditing & Ghidra binary analysis
                  </p>
                </div>
              </div>
            </Card>

            {/* Quick Stat Counter Cards */}
            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <StaggerItem>
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-1 shadow-sm">
                  <GraduationCap className="w-6 h-6 text-cyan-500 mx-auto" />
                  <p className="text-2xl font-black text-slate-900 dark:text-white">4th Year</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">B.Sc. CSE Ongoing</p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-1 shadow-sm">
                  <Award className="w-6 h-6 text-amber-500 mx-auto" />
                  <p className="text-2xl font-black text-slate-900 dark:text-white">5.00 GPA</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">HSC Distinction</p>
                </div>
              </StaggerItem>

              <StaggerItem className="col-span-2 sm:col-span-1">
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-1 shadow-sm">
                  <Code className="w-6 h-6 text-emerald-500 mx-auto" />
                  <p className="text-2xl font-black text-slate-900 dark:text-white">150+</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Algorithmic Problems</p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* Right Column: Languages Spoken & Personal Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Languages Spoken Card */}
            <Card glow className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
                  <Languages className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Languages Spoken
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Communication & Technical Proficiency
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-1">
                {personalInfo.languages.map((lang) => (
                  <div key={lang.language} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-semibold">
                      <span className="text-slate-800 dark:text-slate-200 flex items-center gap-2">
                        {lang.language}
                        {lang.native && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                            Native
                          </span>
                        )}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400 font-mono">
                        {lang.proficiency}
                      </span>
                    </div>

                    <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Details Card */}
            <Card className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-500" />
                <span>Base Location & Details</span>
              </h3>

              <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-200/60 dark:border-slate-800/60">
                  <span className="text-xs text-slate-500">Location</span>
                  <span className="font-medium text-slate-900 dark:text-slate-200">{personalInfo.address}</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-slate-200/60 dark:border-slate-800/60">
                  <span className="text-xs text-slate-500">University</span>
                  <span className="font-medium text-slate-900 dark:text-slate-200 text-right">{personalInfo.university}</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-slate-200/60 dark:border-slate-800/60">
                  <span className="text-xs text-slate-500">Academic Year</span>
                  <span className="font-medium text-cyan-600 dark:text-cyan-400">{personalInfo.academicYear}</span>
                </div>

                <div className="flex items-center justify-between py-1.5">
                  <span className="text-xs text-slate-500">Relocation / Remote</span>
                  <span className="font-medium text-emerald-600 dark:text-emerald-400">Open to Offers</span>
                </div>
              </div>
            </Card>

          </div>

        </div>
      </div>
    </section>
  );
};
