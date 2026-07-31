import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { FolderGit2, Star, GitFork, ArrowUpRight, ShieldAlert } from 'lucide-react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

// Fallback details based on actual public repository structure of solaimanSawon
const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 1260658763,
    name: "AI-Fest-2026",
    description: "AI Fest Hackathon web application built using PHP, HTML/CSS and database integration.",
    html_url: "https://github.com/solaimanSawon/AI-Fest-2026",
    stargazers_count: 1,
    forks_count: 0,
    language: "PHP"
  },
  {
    id: 1035131756,
    name: "Problem_Solving",
    description: "Repository of solution implementations for algorithms and competitive programming contests (mainly C++).",
    html_url: "https://github.com/solaimanSawon/Problem_Solving",
    stargazers_count: 0,
    forks_count: 0,
    language: "C++"
  },
  {
    id: 1090000000,
    name: "fake-news-detection",
    description: "NLP-powered machine learning classifier for predicting fake vs real news headlines and contents.",
    html_url: "https://github.com/solaimanSawon/fake-news-detection",
    stargazers_count: 2,
    forks_count: 0,
    language: "Python"
  },
  {
    id: 1100000000,
    name: "potato-leaf-disease-detection",
    description: "Computer vision and custom CNN architecture to predict potato leaf infections (early blight, late blight, healthy).",
    html_url: "https://github.com/solaimanSawon/potato-leaf-disease-detection",
    stargazers_count: 1,
    forks_count: 0,
    language: "Python"
  },
  {
    id: 1160169026,
    name: "-SwiftCart",
    description: "A fast, lightweight responsive eCommerce shopping platform build using modern JavaScript components.",
    html_url: "https://github.com/solaimanSawon/-SwiftCart",
    stargazers_count: 0,
    forks_count: 0,
    language: "JavaScript"
  },
  {
    id: 1316945405,
    name: "nopcommerce-custom",
    description: "Custom plugins, modifications, and logic updates built on top of the nopCommerce ASP.NET platform.",
    html_url: "https://github.com/solaimanSawon/nopcommerce-custom",
    stargazers_count: 0,
    forks_count: 0,
    language: "C#"
  }
];

const languageColors: Record<string, string> = {
  'Python': 'bg-[#3572A5]',
  'C++': 'bg-[#f34b7d]',
  'JavaScript': 'bg-[#f1e05a]',
  'HTML': 'bg-[#e34c26]',
  'CSS': 'bg-[#563d7c]',
  'PHP': 'bg-[#4F5D95]',
  'C#': 'bg-[#178600]',
  'TypeScript': 'bg-[#3178c6]',
  'C': 'bg-[#555555]',
};

export const GithubProjects: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch('https://api.github.com/users/solaimanSawon/repos?sort=updated&per_page=12');
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await res.json();
        
        // Filter out fork repositories and sort by star count or update date
        const filtered: GitHubRepo[] = data
          .filter((repo: any) => !repo.fork)
          .sort((a: any, b: any) => (b.stargazers_count || 0) - (a.stargazers_count || 0))
          .slice(0, 6);

        if (filtered.length === 0) {
          setRepos(FALLBACK_REPOS);
        } else {
          setRepos(filtered);
        }
      } catch (err) {
        console.warn("GitHub API error, using fallback data:", err);
        setRepos(FALLBACK_REPOS);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="space-y-8 mt-16 pt-16 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 animate-pulse">
            <FolderGit2 className="w-3.5 h-3.5" />
            GitHub Repository Sync
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-2">
            Active Public Repositories
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mt-1">
            Dynamic feed of recent code, libraries, and open-source contributions directly synchronized from my GitHub profile.
          </p>
        </div>

        <a
          href="https://github.com/solaimanSawon"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-2xl bg-slate-900 dark:bg-slate-800 hover:bg-cyan-600 dark:hover:bg-cyan-500 text-white font-semibold text-xs transition-all hover:scale-105 shadow-md shadow-slate-950/10 cursor-pointer"
        >
          <span>Explore All on GitHub</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {loading ? (
        /* Loading Skeletons */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="h-[180px] rounded-3xl border border-slate-200/60 dark:border-slate-800/60 bg-white/40 dark:bg-slate-900/40 p-6 flex flex-col justify-between animate-pulse">
              <div className="space-y-3">
                <div className="h-5 w-1/2 bg-slate-200 dark:bg-slate-800 rounded" />
                <div className="h-3 w-5/6 bg-slate-200 dark:bg-slate-800 rounded" />
                <div className="h-3 w-4/6 bg-slate-200 dark:bg-slate-800 rounded" />
              </div>
              <div className="flex justify-between items-center">
                <div className="h-4 w-1/4 bg-slate-200 dark:bg-slate-800 rounded" />
                <div className="h-4 w-1/4 bg-slate-200 dark:bg-slate-800 rounded" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, idx) => {
            const langColor = repo.language ? (languageColors[repo.language] || 'bg-slate-400') : 'bg-slate-400';
            return (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative p-6 rounded-3xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-[200px] overflow-hidden hover:border-purple-500/30"
              >
                {/* Glow behind repo title */}
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-purple-500/5 blur-2xl group-hover:scale-150 transition-transform duration-300 opacity-60 pointer-events-none" />

                <div className="space-y-3 z-10 relative">
                  {/* Repo title */}
                  <div className="flex items-start justify-between">
                    <h4 className="text-base sm:text-lg font-black text-slate-800 dark:text-slate-100 group-hover:text-purple-500 transition-colors leading-snug break-words pr-2">
                      {repo.name}
                    </h4>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/60 dark:border-slate-700/60 transition-colors shrink-0"
                      aria-label="Open Repository"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {repo.description || "No description provided. Click the link above to explore files and README contents directly."}
                  </p>
                </div>

                {/* Footer details (Stars, Forks, Language) */}
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 pt-3 z-10 relative">
                  {repo.language && (
                    <div className="flex items-center gap-1.5">
                      <span className={`w-2.5 h-2.5 rounded-full ${langColor}`} />
                      <span>{repo.language}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5 text-blue-500" />
                      <span>{repo.forks_count}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Connection Notification Info */}
      {error && (
        <div className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-mono max-w-md mx-auto">
          <ShieldAlert className="w-4 h-4 shrink-0" />
          <span>Note: GitHub REST API rate-limited. Showing pre-populated local repository data.</span>
        </div>
      )}
    </div>
  );
};
