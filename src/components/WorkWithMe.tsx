import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FOUNDER_INFO, WORK_AREAS } from '../data/portfolioData';
import { LinkedinIcon } from './Icons';

export const WorkWithMe: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0a0b10] border-b border-subtle relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="font-mono text-xs text-cyan-400 mb-3 uppercase tracking-wider">
          // SECTION 08 — COLLABORATION
        </div>

        <div className="p-8 sm:p-12 rounded-2xl bg-[#11131a] border border-white/[0.08]">
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight uppercase mb-4">
            BUILDING SOMETHING THAT CAN ACT?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-mono">
            "If you're building AI agents that can take consequential actions, I'm interested in the hard security problems around them."
          </p>

          {/* Small List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 font-mono text-xs">
            {WORK_AREAS.map((area) => (
              <div key={area} className="p-3 rounded bg-black/40 border border-white/[0.04] text-slate-300 flex items-center space-x-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>{area}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="font-mono text-xs text-slate-400">
              Open to technical conversations, research collaborations, and advisory.
            </span>

            <a
              href={FOUNDER_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded bg-white hover:bg-slate-200 text-black font-mono text-xs font-bold transition-colors self-start sm:self-auto"
            >
              <LinkedinIcon className="w-4 h-4 text-black" />
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
