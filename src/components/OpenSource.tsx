import React from 'react';
import { GitPullRequest, ArrowUpRight, Check, Code } from 'lucide-react';
import { FOUNDER_INFO, PROJECTS } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export const OpenSource: React.FC = () => {
  return (
    <section id="opensource" className="py-24 sm:py-32 bg-[#0c0d12] border-b border-subtle relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="font-mono text-xs text-cyan-400 mb-3 uppercase tracking-wider">
          // SECTION 03 — PUBLIC CONTRIBUTIONS
        </div>

        <h2 className="font-display text-4xl sm:text-6xl font-bold text-white tracking-tight uppercase mb-16">
          I BUILD IN PUBLIC.
        </h2>

        {/* Prominent Upstream Merged PR Banner */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#11131a] border border-cyan-500/40 relative overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-mono text-xs mb-4">
                <Check className="w-3.5 h-3.5" />
                <span>UPSTREAM CONTRIBUTION MERGED</span>
              </div>

              <div className="font-display text-3xl sm:text-4xl font-bold text-white mb-2">
                AGENTTRUST · PR #5
              </div>

              <div className="font-mono text-xs text-slate-400 mb-6">
                Contributor: <span className="text-white font-semibold">Akhilesh Warik</span> (<a href={FOUNDER_INFO.githubUrl} className="text-cyan-400 hover:underline">@a1k7</a>)
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-mono">
                "I contributed a runtime enforcement integration to the AgentTrust ecosystem, including delegation escalation detection, risk scoring and enforcement decisions."
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-4">
              <a
                href={FOUNDER_INFO.agentTrustPrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded bg-cyan-400 hover:bg-cyan-300 text-black font-mono text-xs font-bold transition-colors"
              >
                <GitPullRequest className="w-4 h-4" />
                <span>VIEW MERGED PR →</span>
              </a>

              <span className="font-mono text-[11px] text-slate-500">
                agentrust-io / integrations #5
              </span>
            </div>

          </div>
        </div>

        {/* GitHub Repositories Section */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/[0.06] mb-8 gap-2">
            <div>
              <div className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                GITHUB PROFILE
              </div>
              <div className="font-display text-xl sm:text-2xl font-bold text-white flex items-center space-x-2 mt-0.5">
                <GithubIcon className="w-5 h-5 text-white" />
                <span>@a1k7</span>
              </div>
            </div>

            <a
              href={FOUNDER_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors self-start sm:self-auto"
            >
              <span>EXPLORE ALL CODE ON GITHUB</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Genuine Repository Cards (NO invented stats) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROJECTS.map((repo) => (
              <a
                key={repo.id}
                href={repo.prUrl || repo.githubUrl || FOUNDER_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-[#11131a] border border-white/[0.08] hover:border-cyan-500/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-slate-500 mb-2">
                    <Code className="w-4 h-4 text-cyan-400" />
                    <span className="font-mono text-[10px] text-slate-500">a1k7</span>
                  </div>

                  <div className="font-mono text-sm font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                    {repo.title}
                  </div>

                  <p className="text-slate-400 text-xs line-clamp-3 leading-relaxed">
                    {repo.description}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-white/[0.04] flex items-center justify-between font-mono text-[10px] text-slate-500">
                  <span>{repo.tags[0]}</span>
                  <span className="text-slate-400 group-hover:text-white flex items-center space-x-1">
                    <span>source</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
