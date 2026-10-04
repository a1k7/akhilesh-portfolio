import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyThis } from './components/WhyThis';
import { WhatIveBuilt } from './components/WhatIveBuilt';
import { OpenSource } from './components/OpenSource';
import { FailureLab } from './components/FailureLab';
import { TheBoundary } from './components/TheBoundary';
import { FounderTimeline } from './components/FounderTimeline';
import { About } from './components/About';
import { WorkWithMe } from './components/WorkWithMe';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0c0d12] text-[#e6e6eb] selection:bg-cyan-500/20 selection:text-cyan-300">
      <Header />
      <main>
        <Hero />
        <WhyThis />
        <WhatIveBuilt />
        <OpenSource />
        <FailureLab />
        <TheBoundary />
        <FounderTimeline />
        <About />
        <WorkWithMe />
      </main>
      <Footer />
    </div>
  );
};

export default App;
