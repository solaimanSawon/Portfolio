import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Code2, Sparkles, MapPin, CheckCircle2, Terminal, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedButton } from '../ui/AnimatedButton';
import { personalInfo } from '../../lib/data';
import { FadeIn } from '../animations/FadeIn';
import myPhoto from '../../../assets/image/photo_2026-08-01_00-34-33.jpg';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const roles = [
    "CSE Student",
    "Machine Learning Explorer",
    "Competitive Programmer",
    "Problem Solver"
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else if (isDeleting) {
      timeout = setTimeout(
        () => setDisplayText(currentRole.slice(0, displayText.length - 1)),
        40
      );
    } else {
      timeout = setTimeout(
        () => setDisplayText(currentRole.slice(0, displayText.length + 1)),
        70
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: personalInfo.github, label: 'GitHub', color: 'hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800' },
    { icon: <Linkedin className="w-5 h-5" />, href: personalInfo.linkedin, label: 'LinkedIn', color: 'hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-500/10' },
    { icon: <Code2 className="w-5 h-5 text-cyan-500 animate-pulse" />, href: personalInfo.codeforces, label: 'Codeforces', color: 'hover:text-cyan-500 hover:bg-cyan-500/10' },
    { icon: <Mail className="w-5 h-5" />, href: `mailto:${personalInfo.email}`, label: 'Email', color: 'hover:text-rose-500 hover:bg-rose-500/10' },
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-transparent">
      
      {/* Floating Left Social Sidebar (lg only) */}
      <div className="hidden lg:flex flex-col gap-4 absolute left-8 top-1/2 -translate-y-1/2 z-20">
        {socialLinks.map((link, idx) => (
          <motion.a
            key={idx}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
            className={`w-11 h-11 rounded-full bg-white/60 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/50 flex items-center justify-center hover:scale-110 transition-all duration-200 backdrop-blur-md shadow-md ${link.color}`}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full lg:pl-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">

            {/* Status Pill */}
            <FadeIn direction="down" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs sm:text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span>{personalInfo.status}</span>
                <Sparkles className="w-3.5 h-3.5 ml-1 text-amber-400" />
              </div>
            </FadeIn>

            {/* Name Heading */}
            <FadeIn direction="up" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Hello, I'm <br />
                <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
            </FadeIn>

            {/* Tagline / Subtitle with Typing Animation */}
            <FadeIn direction="up" delay={0.3}>
              <div className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300 font-mono flex items-center gap-2 min-h-[40px]">
                <Terminal className="w-6 h-6 text-cyan-500 shrink-0" />
                <span>I'm a <span className="text-cyan-500 font-extrabold">{displayText}</span></span>
                <span className="w-1.5 h-5 bg-cyan-500 animate-pulse ml-0.5 inline-block" />
              </div>
            </FadeIn>

            {/* Bio summary */}
            <FadeIn direction="up" delay={0.4}>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                4th-year Computer Science student at <strong className="text-slate-900 dark:text-slate-200">Daffodil International University</strong>. Passionate problem solver on Codeforces (<span className="text-cyan-500 font-mono font-semibold">sawon_777</span>) with practical expertise in Machine Learning, Deep Learning (CNN, NLP), and Cyber Security.
              </p>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn direction="up" delay={0.5}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <AnimatedButton
                  href="#contact"
                  size="lg"
                  variant="primary"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Contact Me
                </AnimatedButton>

                <AnimatedButton
                  onClick={onOpenResumeModal}
                  size="lg"
                  variant="outline"
                  icon={<Download className="w-4 h-4" />}
                  iconPosition="left"
                >
                  View / Save Resume
                </AnimatedButton>

                <AnimatedButton
                  href="#projects"
                  size="lg"
                  variant="ghost"
                >
                  Explore Projects
                </AnimatedButton>
              </div>
            </FadeIn>

            {/* Social Links & Quick Tags (visible on mobile / fallback for lg) */}
            <FadeIn direction="up" delay={0.6}>
              <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-slate-700 dark:text-slate-300 lg:hidden">Connect:</span>
                  <div className="flex items-center gap-3 lg:hidden">
                    {socialLinks.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
                        aria-label={link.label}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                  <a
                    href={personalInfo.codeforces}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden lg:flex p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-cyan-500/10 transition-all items-center gap-1 font-mono font-bold"
                    aria-label="Codeforces Profile"
                  >
                    <Code2 className="w-4 h-4 text-cyan-500" />
                    <span>sawon_777</span>
                  </a>
                </div>

                <div className="flex items-center gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                  <span>{personalInfo.address}</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Morphing Profile Blob & Floating Info Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[460px] py-10 lg:py-0">

            {/* Ambient Background Glow behind the blob */}
            <div className="absolute w-[350px] h-[350px] bg-purple-600/10 dark:bg-purple-600/15 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute w-[250px] h-[250px] bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-[60px] pointer-events-none" />

            {/* The Main Blob Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-[280px] h-[320px] sm:w-[320px] sm:h-[370px] lg:w-[340px] lg:h-[390px] p-[2.5px] bg-gradient-to-tr from-cyan-400 via-pink-500 to-purple-600 shadow-2xl dark:shadow-purple-500/5 animate-morph-blob"
              style={{
                borderRadius: '48% 52% 52% 48% / 55% 48% 52% 45%'
              }}
            >
              {/* Inner wrapper with solid dark background */}
              <div
                className="w-full h-full bg-slate-900 dark:bg-slate-950 overflow-hidden relative animate-morph-blob"
                style={{
                  borderRadius: 'inherit'
                }}
              >
                {/* User Photo */}
                <img
                  src={myPhoto}
                  alt="Solaiman Molla"
                  className="w-full h-full object-cover object-center scale-[1.08] translate-y-[2%] select-none pointer-events-none"
                />
              </div>

              {/* Floating Card 1: Fresher (Left Side) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-[-20px] sm:left-[-35px] top-[55%] -translate-y-1/2 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-xl z-20"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 shrink-0">
                  <Sparkles className="w-4.5 h-4.5" />
                </div>
                <div className="text-left min-w-[100px]">
                  <p className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white leading-tight">Fresher</p>
                  <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">Enthusiastic Learner</p>
                </div>
              </motion.div>

              {/* Floating Card 2: 120+ Problem Solving (Top Right) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                className="absolute right-[-20px] sm:right-[-35px] top-[8%] flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-xl z-20"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 shrink-0">
                  <CheckCircle2 className="w-4.5 h-4.5" />
                </div>
                <div className="text-left min-w-[100px]">
                  <p className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white leading-tight">120+</p>
                  <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">Problem Solving</p>
                </div>
              </motion.div>

              {/* Floating Card 3: 20+ Finished Projects (Bottom Right) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                className="absolute right-[-20px] sm:right-[-35px] bottom-[8%] flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-xl z-20"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 shrink-0">
                  <Briefcase className="w-4.5 h-4.5" />
                </div>
                <div className="text-left min-w-[100px]">
                  <p className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white leading-tight">20+</p>
                  <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">Finished Projects</p>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
