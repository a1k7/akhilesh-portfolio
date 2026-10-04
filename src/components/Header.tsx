import React, { useState, useEffect } from 'react';
import { FOUNDER_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      scrolled 
        ? 'bg-[#0c0d12]/95 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Akhilesh Warik Brand */}
          <a href="#" className="flex items-center space-x-3 group">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
            <div className="flex flex-col">
              <span className="font-mono text-sm sm:text-base font-bold tracking-wider text-white group-hover:text-cyan-400 transition-colors">
                AKHILESH WARIK
              </span>
              <span className="font-mono text-[10px] text-slate-400 tracking-wider">
                BUILDER · RUNTIME SYSTEMS
              </span>
            </div>
          </a>

          {/* Editorial Navigation */}
          <nav className="hidden md:flex items-center space-x-7 font-mono text-xs text-slate-300">
            <a href="#why" className="hover:text-cyan-400 transition-colors">
              // WHY THIS
            </a>
            <a href="#work" className="hover:text-cyan-400 transition-colors">
              // WHAT I'VE BUILT
            </a>
            <a href="#opensource" className="hover:text-cyan-400 transition-colors text-cyan-300">
              // OPEN SOURCE
            </a>
            <a href="#failure-lab" className="hover:text-cyan-400 transition-colors">
              // FAILURE LAB
            </a>
            <a href="#boundary" className="hover:text-cyan-400 transition-colors">
              // THE BOUNDARY
            </a>
            <a href="#timeline" className="hover:text-cyan-400 transition-colors">
              // TIMELINE
            </a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              // ABOUT
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex items-center space-x-3">
            <a
              href={FOUNDER_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white transition-colors"
              aria-label="GitHub profile"
              title="GitHub: @a1k7"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={FOUNDER_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white transition-colors"
              aria-label="LinkedIn profile"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};
