import React, { useState } from 'react';
import { ExternalLink, Github, Brain, Cpu, Sparkles, CheckCircle, Search, Layers, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { AnimatedButton } from '../ui/AnimatedButton';
import { projectsList } from '../../lib/data';
import { Project } from '../../types';
import { GithubProjects } from './GithubProjects';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Interactive model test states inside modal
  const [fakeNewsInput, setFakeNewsInput] = useState('');
  const [fakeNewsResult, setFakeNewsResult] = useState<{ label: 'REAL' | 'FAKE'; confidence: number } | null>(null);
  const [analyzingFakeNews, setAnalyzingFakeNews] = useState(false);

  const [leafDiseaseResult, setLeafDiseaseResult] = useState<string | null>(null);

  const handleTestFakeNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fakeNewsInput.trim()) return;
    setAnalyzingFakeNews(true);
    setFakeNewsResult(null);

    setTimeout(() => {
      const lower = fakeNewsInput.toLowerCase();
      // Simple NLP heuristic for demo simulation
      const isFake = lower.includes('secret') || lower.includes('shocking') || lower.includes('aliens') || lower.includes('free money') || lower.includes('miracle');
      setFakeNewsResult({
        label: isFake ? 'FAKE' : 'REAL',
        confidence: isFake ? 96.8 : 94.2
      });
      setAnalyzingFakeNews(false);
    }, 600);
  };

  return (
    <section id="projects" className="py-20 relative bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Featured Portfolio Work"
          title="Machine Learning & Deep Learning Projects"
          subtitle="Applied artificial intelligence projects utilizing Python, TensorFlow, PyTorch, Scikit-learn, CNNs, and NLP techniques."
        />

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsList.map((project) => (
            <Card key={project.id} glow className="flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                {/* Category & Featured Badge */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    {project.category === 'Machine Learning' ? <Brain className="w-3.5 h-3.5" /> : <Cpu className="w-3.5 h-3.5" />}
                    {project.category}
                  </span>

                  <span className="text-xs font-mono text-slate-400 font-medium">
                    Python • NLP & Vision
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 leading-snug">
                  {project.tagline}
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Feature Bullet Points */}
                <ul className="space-y-2 pt-2">
                  {project.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Metrics */}
                {project.metrics && (
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-center">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="text-xs text-slate-500 font-medium">{m.label}</p>
                        <p className="text-sm font-bold text-cyan-600 dark:text-cyan-400 font-mono">{m.value}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Tech Stack Tags & Actions */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <AnimatedButton
                    onClick={() => {
                      setSelectedProject(project);
                      setFakeNewsResult(null);
                      setFakeNewsInput('');
                      setLeafDiseaseResult(null);
                    }}
                    size="sm"
                    variant="primary"
                    icon={<Play className="w-3.5 h-3.5" />}
                  >
                    Interactive Demo & Architecture
                  </AnimatedButton>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 hover:bg-cyan-500/10 transition-all border border-slate-200 dark:border-slate-700"
                      aria-label="View Source on GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </Card>
          ))}
        </div>

        {/* Dynamic GitHub Repositories Section */}
        <GithubProjects />

      </div>

      {/* Project Detail & Interactive Model Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6 my-8 max-h-[90vh] overflow-y-auto"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white"
              >
                ✕
              </button>

              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* Interactive Model Simulation Sandbox */}
              <div className="p-5 rounded-2xl bg-slate-950 text-white border border-slate-800 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider pb-2 border-b border-slate-800">
                  <Sparkles className="w-4 h-4" />
                  <span>Live Model Inference Simulator</span>
                </div>

                {selectedProject.id === 'fake-news-detection' ? (
                  <div className="space-y-3">
                    <p className="text-xs text-slate-300">
                      Test the NLP classification pipeline: Type any sample news headline or sentence to see predicted authenticity score.
                    </p>
                    <form onSubmit={handleTestFakeNews} className="space-y-3">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={fakeNewsInput}
                          onChange={(e) => setFakeNewsInput(e.target.value)}
                          placeholder="e.g. Breaking: Scientists discover water on Mars..."
                          className="flex-1 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500"
                        />
                        <button
                          type="submit"
                          disabled={analyzingFakeNews || !fakeNewsInput.trim()}
                          className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold text-xs disabled:opacity-50"
                        >
                          {analyzingFakeNews ? 'Analyzing...' : 'Predict'}
                        </button>
                      </div>
                    </form>

                    {fakeNewsResult && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-3 rounded-xl border flex items-center justify-between text-xs font-mono ${
                          fakeNewsResult.label === 'REAL'
                            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                            : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
                        }`}
                      >
                        <span>Model Output: <strong>{fakeNewsResult.label} NEWS</strong></span>
                        <span>Confidence: {fakeNewsResult.confidence}%</span>
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-3">
                    <p className="text-xs text-slate-300">
                      Simulate CNN image classification: Click a sample leaf image condition to test neural network prediction.
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: 'Early Blight Leaf', result: 'Early Blight Disease Detected (Confidence: 97.4%)', color: 'border-amber-500/50' },
                        { label: 'Late Blight Leaf', result: 'Late Blight Disease Detected (Confidence: 98.1%)', color: 'border-rose-500/50' },
                        { label: 'Healthy Leaf', result: 'Healthy Potato Leaf (Confidence: 99.2%)', color: 'border-emerald-500/50' },
                      ].map((sample) => (
                        <button
                          key={sample.label}
                          onClick={() => setLeafDiseaseResult(sample.result)}
                          className={`p-2.5 rounded-xl bg-slate-900 border ${sample.color} hover:bg-slate-800 text-xs font-semibold text-center transition-all`}
                        >
                          {sample.label}
                        </button>
                      ))}
                    </div>

                    {leafDiseaseResult && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono text-center"
                      >
                        {leafDiseaseResult}
                      </motion.div>
                    )}
                  </div>
                )}
              </div>

              {/* Full Features & Tech Specs */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Technical System Features
                </h4>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  {selectedProject.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                <AnimatedButton
                  onClick={() => setSelectedProject(null)}
                  variant="secondary"
                  size="sm"
                >
                  Close Modal
                </AnimatedButton>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
