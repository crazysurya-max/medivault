'use client';
import { useState } from 'react';
import Machine3D from './Machine3D';
import InterfacePanel from './InterfacePanel';
import { useStore } from '@/store/useStore';

export default function InteractiveExperience() {
  const { dispensingStatus } = useStore();
  
  return (
    <section id="how-it-works" className="py-12 bg-brand-navy min-h-screen flex flex-col">
      <div className="text-center mb-8 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Simulated Experience</h2>
        <p className="text-brand-teal">Explore the Machine • Select • Checkout • Dispense</p>
      </div>
      
      <div className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-brand-blue/20 rounded-2xl border border-brand-slate/20 overflow-hidden relative min-h-[500px]">
           <div className="absolute top-4 left-4 z-10 bg-brand-navy/80 px-3 py-1 rounded text-xs text-brand-teal border border-brand-teal/30 backdrop-blur-sm">
             Interactive 3D View (Drag to rotate)
           </div>
           <Machine3D dispensing={dispensingStatus !== 'idle'} />
        </div>
        
        <div className="bg-brand-blue/30 rounded-2xl border border-brand-slate/20 overflow-hidden flex flex-col h-[600px] lg:h-auto">
          <InterfacePanel />
        </div>
      </div>
    </section>
  );
}
