'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-blue to-brand-navy z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6"
        >
          Essential Medicines. <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-cyan">Available When You Need Them.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-2xl mx-auto text-xl text-brand-slate mb-10"
        >
          A smart medicine dispensing concept designed to improve access to essential medicines, particularly in rural and underserved areas.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button 
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({behavior: 'smooth'})}
            className="bg-brand-teal text-brand-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:shadow-[0_0_20px_rgba(100,255,218,0.4)] transition-all duration-300"
          >
            Explore How It Works
          </button>
        </motion.div>
      </div>
    </section>
  );
}
