import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { FOUNDER_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('runtime');

  const nodes = [
    { id: 'agent', label: 'AI AGENT', detail: 'Autonomous model forming intent and tools' },
    { id: 'authority', label: 'AUTHORITY', detail: 'Initial static token and role scope' },
    { id: 'runtime', label: 'RUNTIME', detail: 'Dynamic context, temporal validity, active policy' },
    { id: 'action', label: 'ACTION', detail: 'Consequential external side effect' }
  ];

  return (
    <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 subtle-grid border-b border-subtle overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-8">
            
            {/* Small Metadata Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-8 font-mono text-[11px] text-slate-400">
              <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-slate-300">
                {FOUNDER_INFO.education}
              </span>
              <span className="px-2.5 py-1 rounded bg-cyan-950/40 border border-cyan-500/30 text-cyan-300">
                {FOUNDER_INFO.subRole1}
              </span>
              <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-slate-300">
                {FOUNDER_INFO.subRole2}
              </span>
            </div>

            {/* Large Editorial Name */}
            <h1 className="font-display text-6xl sm:text-8xl font-bold tracking-tight text-white uppercase leading-[0.92] mb-6">
              <span className="block text-slate-100">AKHILESH</span>
              <span className="block text-slate-400">WARIK</span>
            </h1>

            {/* Headline Subtitle */}
            <div className="text-xl sm:text-2xl font-normal text-slate-300 mb-6 font-display">
              {FOUNDER_INFO.headline}
            </div>

            {/* Primary Sentence */}
            <p className="text-xl sm:text-2xl text-cyan-300/90 font-medium font-mono leading-relaxed mb-6 max-w-2xl">
              "{FOUNDER_INFO.primarySentence}"
            </p>

            {/* Secondary Sentence */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mb-10 font-mono">
              {FOUNDER_INFO.secondarySentence}
            </p>

            {/* Hero Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              <a
                href="#work"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded bg-white text-black font-semibold hover:bg-slate-200 transition-colors"
              >
                <span>VIEW MY WORK</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href={FOUNDER_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-3 rounded bg-[#13151f] hover:bg-[#1a1d2b] border border-white/[0.08] text-slate-200 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-slate-400" />
                <span>GITHUB</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>

              <a
                href={FOUNDER_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-3 rounded bg-[#13151f] hover:bg-[#1a1d2b] border border-white/[0.08] text-slate-200 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-slate-400" />
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>

          </div>

          {/* Subtle Conceptual Visual Column */}
          <div className="lg:col-span-4 lg:pt-4">
            <div className="p-6 rounded-xl bg-[#11131a] border border-white/[0.08]">
              
              <div className="font-mono text-[11px] text-slate-400 uppercase tracking-wider mb-4 pb-2 border-b border-white/[0.06] flex items-center justify-between">
                <span>EXECUTION LIFECYCLE</span>
                <span className="text-cyan-400/80 text-[10px]">CONCEPT</span>
              </div>

              {/* Vertical Stack: AI AGENT -> AUTHORITY -> RUNTIME -> ACTION */}
              <div className="space-y-3 font-mono">
                {nodes.map((node, i) => {
                  const isCurrent = activeNode === node.id;
                  const isRuntime = node.id === 'runtime';

                  return (
                    <div key={node.id} className="relative">
                      <button
                        onClick={() => setActiveNode(node.id)}
                        className={`w-full text-left p-3 rounded border transition-all text-xs ${
                          isCurrent
                            ? isRuntime
                              ? 'bg-cyan-950/40 border-cyan-400/70 text-cyan-200'
                              : 'bg-white/[0.06] border-white/20 text-white'
                            : 'bg-black/30 border-white/[0.04] text-slate-400 hover:text-slate-200 hover:border-white/10'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold tracking-wider">{node.label}</span>
                          <span className="text-[10px] text-slate-500">0{i + 1}</span>
                        </div>
                        {isCurrent && (
                          <div className="mt-1 text-[11px] text-slate-300 font-sans">
                            {node.detail}
                          </div>
                        )}
                      </button>

                      {i < nodes.length - 1 && (
                        <div className="flex justify-center py-1 text-slate-600">
                          <ArrowDown className="w-3 h-3 text-slate-600" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 pt-3 border-t border-white/[0.06] text-[11px] font-mono text-slate-500 leading-relaxed">
                Click any stage to examine the boundary assumption. Most traditional security checks stop at <strong>AUTHORITY</strong>.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
