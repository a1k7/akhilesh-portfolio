import React from 'react';
import { TIMELINE } from '../data/portfolioData';

export const FounderTimeline: React.FC = () => {
  return (
    <section id="timeline" className="py-24 sm:py-32 bg-[#0a0b10] border-b border-subtle relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="font-mono text-xs text-cyan-400 mb-3 uppercase tracking-wider">
          // SECTION 06 — CHRONOLOGY
        </div>

        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase mb-4">
          THE BUILDING SO FAR
        </h2>
        <p className="text-slate-400 font-mono text-sm max-w-xl mb-16">
          A focused trajectory from initial formulation of the admissibility gap to upstream runtime controls and pre-production testbeds.
        </p>

        {/* Editorial Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/[0.1] space-y-12">
          {TIMELINE.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Dot */}
              <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                item.isMilestone
                  ? 'bg-cyan-400 border-cyan-300 ring-4 ring-cyan-500/20'
                  : 'bg-[#0a0b10] border-slate-500 group-hover:border-cyan-400'
              } transition-colors`} />

              <div className="p-6 rounded-xl bg-[#11131a] border border-white/[0.08] hover:border-white/[0.18] transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs text-cyan-400 font-bold tracking-wider">
                    {item.period}
                  </span>
                  {item.isMilestone && (
                    <span className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-[10px]">
                      UPSTREAM PR MERGED
                    </span>
                  )}
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed font-mono">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
