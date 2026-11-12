'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-navy/80 backdrop-blur-md border-b border-brand-blue/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 font-bold text-2xl tracking-tighter">
            <span className="text-white">Medi</span><span className="text-brand-teal">vault</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-white hover:text-brand-teal px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
              <Link href="#our-idea" className="text-brand-slate hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Our Idea</Link>
              <Link href="#how-it-works" className="text-brand-slate hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">How It Works</Link>
              <Link href="#blog" className="text-brand-slate hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Health Blog</Link>
              <Link href="#contact" className="text-brand-slate hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact Us</Link>
              <button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({behavior: 'smooth'})} className="bg-brand-teal/10 text-brand-teal border border-brand-teal px-4 py-2 rounded-md text-sm font-medium hover:bg-brand-teal hover:text-brand-navy transition-all">
                Explore the Machine
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
