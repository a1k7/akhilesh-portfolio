import React, { useState } from 'react';
import { ArrowUpRight, GitPullRequest, RefreshCw } from 'lucide-react';
import { PROJECTS, FOUNDER_INFO } from '../data/portfolioData';

export const WhatIveBuilt: React.FC = () => {
  const [replayState, setReplayState] = useState<'ORIGINAL' | 'REPLAY'>('REPLAY');

  return (
    <section id="work" className="py-24 sm:py-32 bg-[#0a0b10] border-b border-subtle relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="font-mono text-xs text-cyan-400 mb-3 uppercase tracking-wider">
          // SECTION 02 — SYSTEMS & CODE
        </div>

        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase mb-4">
          WHAT I'VE BUILT
        </h2>
        <p className="text-slate-400 font-mono text-sm max-w-2xl mb-16">
          Working infrastructure, runtime enforcement integrations, and reproducible adversarial testbeds.
        </p>

        {/* Featured Projects 01 - 03 (Large Cards) */}
        <div className="space-y-8 mb-16">
          
          {/* PROJECT 01: DecisionAssure */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#11131a] border border-white/[0.08] hover:border-cyan-500/30 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.06] gap-4 mb-6">
              <div>
                <div className="font-mono text-xs text-cyan-400 font-semibold mb-1">
                  PROJECT 01 // CORE INFRASTRUCTURE
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  DecisionAssure
                </h3>
                <div className="font-mono text-xs text-slate-400 mt-1">
                  Runtime governance infrastructure for AI agents
                </div>
              </div>

              <a
                href={FOUNDER_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-200 font-mono text-xs transition-colors self-start sm:self-auto"
              >
                <span>github.com/a1k7</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
              </a>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-3xl">
              An open-source runtime governance system designed to evaluate whether an agent's proposed action remains admissible at the exact moment of execution. Built around deterministic state transitions and execution-time policy checks.
            </p>

            <div className="mb-6">
              <div className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-3">
                CORE FOCUS
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 font-mono text-xs">
                {[
                  "Runtime admissibility",
                  "Authority continuity",
                  "Policy/evidence drift",
                  "Replayable traces",
                  "Deterministic ALLOW / HOLD / DENY"
                ].map((item) => (
                  <div key={item} className="p-2.5 rounded bg-black/40 border border-white/[0.04] text-slate-300 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-[11px] font-mono text-slate-500 pt-4 border-t border-white/[0.06]">
              Deterministic decision model: Action requests resolve strictly to ALLOW, HOLD, or DENY at the boundary.
            </div>
          </div>

          {/* PROJECT 02: Agent Sentinel / AgentTrust */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#11131a] border border-cyan-500/30 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.06] gap-4 mb-6">
              <div>
                <div className="font-mono text-xs text-cyan-400 font-semibold mb-1 flex items-center space-x-2">
                  <GitPullRequest className="w-3.5 h-3.5" />
                  <span>PROJECT 02 // UPSTREAM MERGED CONTRIBUTION</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  Agent Sentinel / AgentTrust
                </h3>
                <div className="font-mono text-xs text-slate-400 mt-1">
                  Open-source runtime enforcement contribution (PR #5 — MERGED)
                </div>
              </div>

              <a
                href={FOUNDER_INFO.agentTrustPrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded bg-cyan-950/40 hover:bg-cyan-900/40 border border-cyan-500/40 text-cyan-300 font-mono text-xs transition-colors self-start sm:self-auto"
              >
                <span>VIEW MERGED PR #5</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-3xl">
              Contributed a runtime enforcement integration to the AgentTrust ecosystem. Implemented delegation escalation detection, risk scoring thresholds, and structured execution claims for autonomous agents.
            </p>

            <div className="mb-6">
              <div className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-3">
                CONTRIBUTION HIGHLIGHTS
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 font-mono text-xs">
                {[
                  "Delegation escalation detection",
                  "Risk scoring",
                  "Runtime enforcement",
                  "ADMIT / DENY",
                  "Structured evidence"
                ].map((item) => (
                  <div key={item} className="p-2.5 rounded bg-black/40 border border-white/[0.04] text-slate-300 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Authentic Small Demo */}
            <div className="p-5 rounded-xl bg-black/50 border border-white/[0.08] font-mono text-xs">
              <div className="text-[11px] text-slate-400 uppercase tracking-wider mb-3">
                AUTHENTIC ENFORCEMENT DEMO
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center mb-3">
                <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.04]">
                  <div className="text-slate-500 text-[10px]">DEPTH</div>
                  <div className="text-white font-bold text-sm">4</div>
                </div>
                <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.04]">
                  <div className="text-slate-500 text-[10px]">THRESHOLD</div>
                  <div className="text-white font-bold text-sm">2</div>
                </div>
                <div className="p-2.5 rounded bg-white/[0.03] border border-white/[0.04]">
                  <div className="text-slate-500 text-[10px]">RISK</div>
                  <div className="text-amber-400 font-bold text-sm">0.9</div>
                </div>
                <div className="p-2.5 rounded bg-red-950/40 border border-red-500/40">
                  <div className="text-red-400 text-[10px]">RESULT</div>
                  <div className="text-red-300 font-bold text-sm">DENY</div>
                </div>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                The enforcement boundary evaluated the supplied execution request and returned <strong>DENY</strong> because delegation depth 4 exceeded the configured threshold of 2. (Note: Claims reflect boundary decision; no physical downstream effects were claimed to be prevented outside the boundary).
              </p>
            </div>
          </div>

          {/* PROJECT 03: Governance Replay */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#11131a] border border-white/[0.08] hover:border-cyan-500/30 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.06] gap-4 mb-6">
              <div>
                <div className="font-mono text-xs text-cyan-400 font-semibold mb-1">
                  PROJECT 03 // FORENSIC RECONSTRUCTION
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  Governance Replay
                </h3>
                <div className="font-mono text-xs text-slate-400 mt-1">
                  Reconstructing runtime governance decisions under changed conditions
                </div>
              </div>

              <button
                onClick={() => setReplayState(replayState === 'ORIGINAL' ? 'REPLAY' : 'ORIGINAL')}
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-200 font-mono text-xs transition-colors self-start sm:self-auto"
              >
                <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
                <span>TOGGLE: {replayState === 'ORIGINAL' ? 'SHOW REPLAY' : 'SHOW ORIGINAL'}</span>
              </button>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-3xl">
              Captures the state of an agent's execution request at approval time and allows replaying the decision logic when conditions (evidence freshness, active policies, or context) have drifted.
            </p>

            {/* Demonstration Visual */}
            <div className="p-6 rounded-xl bg-black/50 border border-white/[0.08] font-mono text-xs">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-center">
                
                <div className={`p-4 rounded border transition-all ${
                  replayState === 'ORIGINAL' ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200' : 'bg-white/[0.02] border-white/[0.04] text-slate-400'
                }`}>
                  <div className="text-[10px] text-slate-500 mb-1">STAGE 1</div>
                  <div className="font-bold text-sm text-white">ORIGINAL</div>
                  <div className="mt-2 text-emerald-400 font-bold">ALLOW</div>
                  <div className="mt-1 text-[11px] text-slate-400">t0 approval conditions met</div>
                </div>

                <div className="p-3 text-slate-500">
                  <div className="text-[10px] uppercase tracking-wider text-amber-400 font-bold mb-1">DRIFT DETECTED</div>
                  <div className="text-xs text-slate-300">Policy v1 → v2 / Stale evidence</div>
                  <div className="text-cyan-400 mt-1">→ REPLAY →</div>
                </div>

                <div className={`p-4 rounded border transition-all ${
                  replayState === 'REPLAY' ? 'bg-red-950/30 border-red-500/40 text-red-200' : 'bg-white/[0.02] border-white/[0.04] text-slate-400'
                }`}>
                  <div className="text-[10px] text-slate-500 mb-1">STAGE 2</div>
                  <div className="font-bold text-sm text-white">REPLAY</div>
                  <div className="mt-2 text-red-400 font-bold">DENY</div>
                  <div className="mt-1 text-[11px] text-slate-400">Execution inadmissible under drifted state</div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Supporting Projects 04 - 08 (Clean Editorial Cards) */}
        <div>
          <div className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-6">
            ADDITIONAL RESEARCH ENGINES & TOOLS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.slice(3).map((proj) => (
              <div
                key={proj.id}
                className="p-6 rounded-xl bg-[#11131a] border border-white/[0.08] hover:border-white/[0.18] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-slate-500 font-mono text-[10px] mb-2">
                    <span>PROJECT {proj.number}</span>
                    <span className="text-cyan-400">{proj.tags[0]}</span>
                  </div>

                  <h4 className="font-mono text-base font-bold text-white mb-1">
                    {proj.title}
                  </h4>
                  <div className="font-mono text-xs text-slate-400 mb-3">
                    {proj.subtitle}
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {proj.tags.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-400 border border-white/[0.04]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
