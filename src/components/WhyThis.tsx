import React from 'react';

export const WhyThis: React.FC = () => {
  return (
    <section id="why" className="py-24 sm:py-32 bg-[#0c0d12] border-b border-subtle relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="font-mono text-xs text-cyan-400 mb-3 uppercase tracking-wider">
          // SECTION 01 — WHY THIS
        </div>

        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase mb-12">
          WHY I'M BUILDING THIS
        </h2>

        {/* Core Thesis Copy */}
        <div className="max-w-3xl space-y-6 text-slate-300 text-lg sm:text-xl font-normal leading-relaxed mb-16">
          <p>
            AI systems are moving from generating answers to taking actions.
          </p>
          <p>
            Once an agent can modify a database, call an API, send a message, move money or delegate to another agent, the security problem changes.
          </p>
          <p className="text-white font-medium">
            It's no longer enough to ask whether the model made a good decision.
          </p>
          <p className="text-cyan-300 font-medium font-mono text-base sm:text-lg">
            You need to know whether it was still allowed to act when the action actually happened.
          </p>
          <p className="text-slate-400 text-base">
            That's the problem I've been building around.
          </p>
        </div>

        {/* Visual 1: DECISION != EXECUTION */}
        <div className="mb-16">
          <div className="font-mono text-[11px] text-slate-500 uppercase tracking-wider mb-4">
            THE CORE DISTINCTION
          </div>

          <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
            
            {/* Box 1: DECISION */}
            <div className="md:col-span-5 p-6 rounded-xl bg-[#11131a] border border-white/[0.08]">
              <div className="font-mono text-xs text-slate-400 mb-1">PROBABILISTIC REASONING</div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                DECISION
              </div>
              <p className="text-xs font-mono text-slate-400 leading-relaxed">
                The model formulates an intent, selects a tool, and crafts arguments based on conversational context.
              </p>
            </div>

            {/* Unequal Sign */}
            <div className="md:col-span-1 text-center py-2 md:py-0">
              <span className="font-mono text-3xl sm:text-4xl text-cyan-400 font-bold">
                ≠
              </span>
            </div>

            {/* Box 2: EXECUTION */}
            <div className="md:col-span-5 p-6 rounded-xl bg-[#11131a] border border-cyan-500/30">
              <div className="font-mono text-xs text-cyan-400 mb-1">CONSEQUENTIAL REALITY</div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-cyan-300 mb-2">
                EXECUTION
              </div>
              <p className="text-xs font-mono text-slate-400 leading-relaxed">
                The physical API call, database write, or financial transaction dispatched against downstream systems.
              </p>
            </div>

          </div>
        </div>

        {/* Visual 2: AUTHORIZATION -> RUNTIME CONDITIONS -> EXECUTION */}
        <div>
          <div className="font-mono text-[11px] text-slate-500 uppercase tracking-wider mb-4">
            THE REAL-WORLD SEQUENCE
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="p-6 rounded-xl bg-[#11131a] border border-white/[0.08]">
              <div className="flex items-center justify-between font-mono text-xs text-slate-400 mb-2">
                <span>STAGE 01</span>
                <span>INITIATION</span>
              </div>
              <div className="font-mono text-lg font-bold text-white mb-2">
                AUTHORIZATION
              </div>
              <p className="text-xs font-mono text-slate-400 leading-relaxed">
                Initial tokens, approved scopes, role grants at the start of the user session.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#131726] border border-cyan-500/40 relative">
              <div className="flex items-center justify-between font-mono text-xs text-cyan-400 mb-2">
                <span>STAGE 02</span>
                <span className="font-semibold text-cyan-300">WHERE DRIFT OCCURS</span>
              </div>
              <div className="font-mono text-lg font-bold text-cyan-200 mb-2">
                RUNTIME CONDITIONS
              </div>
              <p className="text-xs font-mono text-slate-300 leading-relaxed">
                Context changes, evidence expires, delegation chains grow, policies update mid-flight.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#11131a] border border-white/[0.08]">
              <div className="flex items-center justify-between font-mono text-xs text-slate-400 mb-2">
                <span>STAGE 03</span>
                <span>DISPATCH</span>
              </div>
              <div className="font-mono text-lg font-bold text-white mb-2">
                EXECUTION
              </div>
              <p className="text-xs font-mono text-slate-400 leading-relaxed">
                Was the action still admissible when it became real?
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
