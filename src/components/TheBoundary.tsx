import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';

export const TheBoundary: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(4);

  const steps = [
    { title: 'MODEL', subtitle: 'Probabilistic reasoning & intention formulation' },
    { title: 'PROPOSE', subtitle: 'Structuring of prospective tool call payload' },
    { title: 'AUTHORITY', subtitle: 'Bearer token, static role, initial session grants' },
    { title: 'RUNTIME CONTEXT', subtitle: 'Dynamic session state, temporal window, active policy' },
    { title: 'ADMISSIBILITY', subtitle: 'Verifying whether the action remains permitted at execution time', isCore: true },
    { title: 'EXECUTION', subtitle: 'The irreversible point of dispatch', isCore: true },
    { title: 'EXTERNAL EFFECT', subtitle: 'Physical database write, API dispatch, funds transfer' },
  ];

  return (
    <section id="boundary" className="py-24 sm:py-32 bg-[#0c0d12] border-b border-subtle relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <div className="font-mono text-xs text-cyan-400 mb-3 uppercase tracking-wider">
          // SECTION 05 — THE IDEA
        </div>

        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase mb-4">
          THE BOUNDARY
        </h2>

        {/* Central Core Statement */}
        <p className="text-xl sm:text-2xl text-cyan-300 font-mono font-medium max-w-2xl mx-auto mb-16 leading-relaxed">
          "Most of my work lives at the boundary between authorization and consequence."
        </p>

        {/* Conceptual Vertical Diagram */}
        <div className="max-w-md mx-auto space-y-2">
          {steps.map((step, index) => {
            const isSelected = activeStep === index;
            const isHighlightedBoundary = step.isCore;

            return (
              <div key={step.title} className="relative">
                <button
                  onClick={() => setActiveStep(index)}
                  className={`w-full p-4 rounded-xl border transition-all text-center ${
                    isSelected
                      ? isHighlightedBoundary
                        ? 'bg-cyan-950/60 border-cyan-400 text-white shadow-lg shadow-cyan-500/10 scale-[1.02]'
                        : 'bg-[#1a1e2d] border-white/30 text-white'
                      : isHighlightedBoundary
                        ? 'bg-[#111422] border-cyan-500/40 text-cyan-200 hover:border-cyan-400'
                        : 'bg-[#11131a] border-white/[0.06] text-slate-300 hover:border-white/20'
                  }`}
                >
                  <div className="font-mono text-xs text-slate-500 mb-0.5">
                    0{index + 1} //
                  </div>
                  <div className={`font-mono text-sm sm:text-base font-bold tracking-wider ${
                    isHighlightedBoundary ? 'text-cyan-300' : 'text-white'
                  }`}>
                    {step.title}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-sans">
                    {step.subtitle}
                  </div>
                </button>

                {index < steps.length - 1 && (
                  <div className="flex justify-center py-1">
                    <ArrowDown className="w-3.5 h-3.5 text-slate-600" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Conceptual Footnote */}
        <div className="mt-12 text-xs font-mono text-slate-500 max-w-xl mx-auto leading-relaxed">
          Click any stage to highlight its position in the pipeline. Traditional software assumes step 03 automatically carries through to step 06. In autonomous agent architectures, that assumption breaks.
        </div>

      </div>
    </section>
  );
};
