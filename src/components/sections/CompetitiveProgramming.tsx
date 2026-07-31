import React, { useState, useEffect } from 'react';
import { Code2, ArrowUpRight, Trophy, Zap, Terminal, CheckCircle2, RefreshCw, Cpu } from 'lucide-react';
import { motion } from 'motion/react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { AnimatedButton } from '../ui/AnimatedButton';
import { competitiveProgrammingInfo, personalInfo } from '../../lib/data';
import { FadeIn, StaggerContainer, StaggerItem } from '../animations/FadeIn';

interface CodeforcesUserInfo {
  handle: string;
  rating?: number;
  maxRating?: number;
  rank?: string;
  maxRank?: string;
}

export const CompetitiveProgramming: React.FC = () => {
  const [userInfo, setUserInfo] = useState<CodeforcesUserInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const fetchCodeforcesInfo = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(`https://codeforces.com/api/user.info?handles=${competitiveProgrammingInfo.handle}`);
      const data = await res.json();
      if (data.status === 'OK' && data.result?.[0]) {
        setUserInfo(data.result[0]);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCodeforcesInfo();
  }, []);

  return (
    <section id="cp" className="py-20 relative bg-slate-50/50 dark:bg-slate-950/50 border-t border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Problem Solving Journey"
          title="Competitive Programming"
          subtitle="Active algorithmic problem solver on Codeforces using C++ to build optimal time & space complexity solutions."
        />

        {/* Codeforces Hero Banner Card */}
        <div className="mb-12">
          <Card glow className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white p-8 border-cyan-500/30">
            
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5 text-amber-400" />
                    Codeforces Profile
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">
                    C++ 17 / C++ 20
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg">
                    <Code2 className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-white flex items-center gap-2">
                      <span>{competitiveProgrammingInfo.handle}</span>
                      <a
                        href={competitiveProgrammingInfo.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded-lg hover:bg-slate-800 text-cyan-400 transition-colors"
                        aria-label="Codeforces External Link"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      Handle: <span className="text-cyan-400 font-bold">sawon_777</span>
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                  {competitiveProgrammingInfo.bio}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <AnimatedButton
                    href={competitiveProgrammingInfo.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                    variant="primary"
                    icon={<ArrowUpRight className="w-4 h-4" />}
                  >
                    Visit Codeforces Profile
                  </AnimatedButton>

                  <button
                    onClick={fetchCodeforcesInfo}
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono flex items-center gap-1.5 transition-colors border border-slate-700"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
                    <span>Sync Live Data</span>
                  </button>
                </div>
              </div>

              {/* Right Live / Simulated Stats Card */}
              <div className="lg:col-span-4 bg-slate-900/90 rounded-2xl p-5 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs font-mono text-slate-400 font-bold uppercase">Platform Stats</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                {loading ? (
                  <div className="py-6 text-center text-xs text-slate-400 font-mono animate-pulse">
                    Connecting to Codeforces API...
                  </div>
                ) : userInfo ? (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Current Rank:</span>
                      <span className="font-bold text-cyan-400 capitalize">{userInfo.rank || 'Pupil'}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Rating:</span>
                      <span className="font-bold text-amber-400">{userInfo.rating || '---'}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Max Rating:</span>
                      <span className="font-bold text-emerald-400">{userInfo.maxRating || '---'}</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Active Handle:</span>
                      <span className="font-bold text-cyan-400">sawon_777</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Primary Language:</span>
                      <span className="font-bold text-amber-400">C++ (GCC 11+)</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                      <span className="text-slate-400">Solved Problems:</span>
                      <span className="font-bold text-emerald-400">150+ Solutions</span>
                    </div>
                  </div>
                )}

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400 font-mono">
                  💡 Regularly participating in Div. 2 / Div. 3 contests to refine algorithm execution time.
                </div>
              </div>

            </div>

          </Card>
        </div>

        {/* Algorithmic Focus Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {competitiveProgrammingInfo.highlights.map((item, idx) => (
            <StaggerItem key={idx}>
              <Card className="h-full space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};
