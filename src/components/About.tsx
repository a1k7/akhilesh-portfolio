import React from 'react';
import { ArrowUpRight, GraduationCap } from 'lucide-react';
import { FOUNDER_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#0c0d12] border-b border-subtle relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="font-mono text-xs text-cyan-400 mb-3 uppercase tracking-wider">
          // SECTION 07 — CONTEXT
        </div>

        <h2 className="font-display text-4xl sm:text-6xl font-bold text-white tracking-tight uppercase mb-12">
          ABOUT
        </h2>

        {/* Narrative Box */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#11131a] border border-white/[0.08] mb-12">
          
          <div className="space-y-6 text-slate-200 text-lg sm:text-xl font-normal leading-relaxed">
            <p>
              I’m a B.Tech Computer Science student at VIT Bhopal.
            </p>

            <p>
              I spend most of my time building and breaking systems around AI agents.
            </p>

            <div className="py-2">
              <span className="font-mono text-xs text-slate-400 uppercase tracking-widest block mb-2 font-bold">
                MY CURRENT OBSESSION IS SIMPLE:
              </span>
              <p className="text-cyan-300 font-mono text-base sm:text-xl font-medium border-l-2 border-cyan-400 pl-4 py-1 leading-snug">
                "{FOUNDER_INFO.aboutCopy.obsession}"
              </p>
            </div>

            <p className="text-white font-medium">
              "{FOUNDER_INFO.aboutCopy.bias}"
            </p>
          </div>

          {/* Education & Links Footer */}
          <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-6 font-mono text-xs text-slate-400">
            <div className="flex items-center space-x-2.5">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>VIT Bhopal · B.Tech Computer Science · Expected 2029</span>
            </div>

            <div className="flex items-center space-x-5">
              <a
                href={FOUNDER_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-cyan-400 flex items-center space-x-1.5 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub @a1k7</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>

              <a
                href={FOUNDER_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-cyan-400 flex items-center space-x-1.5 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
