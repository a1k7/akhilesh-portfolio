import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { FOUNDER_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090a0f] py-24 sm:py-32 relative text-slate-400 font-mono text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Huge Closing Statement */}
        <div className="max-w-4xl mb-24">
          <div className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight uppercase leading-[1.05] mb-6">
            "AI WILL NOT STAY IN THE CHAT BOX."
          </div>

          <div className="text-xl sm:text-3xl text-cyan-300 font-mono font-medium leading-relaxed">
            "It will act.<br />
            I'm working on what happens next."
          </div>
        </div>

        {/* Footer Identity Bar */}
        <div className="pt-10 border-t border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          <div>
            <div className="text-white font-bold text-base tracking-wider">
              AKHILESH WARIK
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              AI AGENT SECURITY · RUNTIME SYSTEMS · AI AGENTS
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center space-x-4">
            <a
              href={FOUNDER_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-200 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-slate-500" />
            </a>

            <a
              href={FOUNDER_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-200 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-slate-500" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-400 hover:text-white transition-colors"
              aria-label="Back to top"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
