import React, { useState } from 'react';
import { FAILURE_EXPERIMENTS } from '../data/portfolioData';
import type { FailureExperiment } from '../types';

export const FailureLab: React.FC = () => {
  const [selectedExp, setSelectedExp] = useState<FailureExperiment>(FAILURE_EXPERIMENTS[0]);

  return (
    <section id="failure-lab" className="py-24 sm:py-32 bg-[#0a0b10] border-b border-subtle relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="font-mono text-xs text-cyan-400 mb-3 uppercase tracking-wider">
          // SECTION 04 — ADVERSARIAL EXPERIMENTS
        </div>

        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase mb-3">
          I LIKE BREAKING MY OWN ASSUMPTIONS.
        </h2>

        <p className="text-slate-400 font-mono text-sm sm:text-base max-w-2xl mb-6">
          "Controlled experiments for the failure modes of autonomous agents."
        </p>

        <div className="inline-block px-3 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-slate-400 font-mono text-xs mb-12">
          CONTROLLED RESEARCH SIMULATIONS · ZERO FABRICATED INCIDENTS
        </div>

        {/* Experiment Selector Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-8">
          {FAILURE_EXPERIMENTS.map((exp) => {
            const isSelected = selectedExp.id === exp.id;
            return (
              <button
                key={exp.id}
                onClick={() => setSelectedExp(exp)}
                className={`p-3.5 rounded-lg border text-left font-mono transition-all ${
                  isSelected
                    ? 'bg-[#151928] border-cyan-400/80 text-white shadow-md shadow-cyan-500/10'
                    : 'bg-[#11131a] border-white/[0.08] text-slate-400 hover:text-slate-200 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <span className="text-slate-500">{exp.number}</span>
                  <span className={`px-1.5 py-0.2 rounded font-bold ${
                    exp.expectedOutcome === 'DENY' ? 'text-red-400' : 'text-amber-400'
                  }`}>
                    {exp.expectedOutcome}
                  </span>
                </div>
                <div className="text-xs font-bold truncate">
                  {exp.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Experiment Interactive Notebook */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#11131a] border border-white/[0.08]">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.06] mb-6 gap-3">
            <div>
              <span className="font-mono text-xs text-cyan-400 font-bold uppercase">
                EXPERIMENT {selectedExp.number} //
              </span>
              <h3 className="font-display text-2xl font-bold text-white mt-0.5">
                {selectedExp.title}
              </h3>
            </div>

            <div className={`px-3 py-1 rounded font-mono text-xs font-bold uppercase self-start sm:self-auto border ${
              selectedExp.expectedOutcome === 'DENY'
                ? 'bg-red-950/40 border-red-500/40 text-red-300'
                : 'bg-amber-950/40 border-amber-500/40 text-amber-300'
            }`}>
              BOUNDARY VERDICT: {selectedExp.expectedOutcome}
            </div>
          </div>

          {/* 5 Structured Fields */}
          <div className="space-y-6 font-mono text-xs">
            
            {/* 1. Hypothesis */}
            <div>
              <div className="text-[11px] text-slate-500 uppercase tracking-widest mb-1.5 font-bold">
                1. HYPOTHESIS
              </div>
              <p className="text-slate-200 text-sm leading-relaxed font-sans">
                {selectedExp.hypothesis}
              </p>
            </div>

            {/* 2. Setup */}
            <div>
              <div className="text-[11px] text-slate-500 uppercase tracking-widest mb-1.5 font-bold">
                2. SETUP
              </div>
              <div className="p-3.5 rounded bg-black/40 border border-white/[0.04] text-slate-300 leading-relaxed">
                {selectedExp.setup}
              </div>
            </div>

            {/* 3. Observed Behavior */}
            <div>
              <div className="text-[11px] text-slate-500 uppercase tracking-widest mb-1.5 font-bold">
                3. OBSERVED BEHAVIOR
              </div>
              <div className="p-3.5 rounded bg-black/40 border border-white/[0.04] text-slate-300 leading-relaxed">
                {selectedExp.observedBehavior}
              </div>
            </div>

            {/* 4. Decision */}
            <div>
              <div className="text-[11px] text-slate-500 uppercase tracking-widest mb-1.5 font-bold">
                4. DECISION
              </div>
              <div className={`p-3.5 rounded border leading-relaxed ${
                selectedExp.expectedOutcome === 'DENY'
                  ? 'bg-red-950/30 border-red-500/30 text-red-200'
                  : 'bg-amber-950/30 border-amber-500/30 text-amber-200'
              }`}>
                {selectedExp.decision}
              </div>
            </div>

            {/* 5. What it taught me */}
            <div className="pt-4 border-t border-white/[0.06]">
              <div className="text-[11px] text-cyan-400 uppercase tracking-widest mb-1.5 font-bold">
                5. WHAT IT TAUGHT ME
              </div>
              <p className="text-slate-200 text-sm leading-relaxed font-sans font-medium">
                "{selectedExp.whatItTaughtMe}"
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
