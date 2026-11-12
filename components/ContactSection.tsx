"use client";
import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1500); // Simulate API call
  };

  return (
    <section id="contact" className="py-24 bg-brand-blue/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-brand-slate">Interested in the Medivault startup? Get in touch.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-brand-navy p-8 rounded-2xl border border-brand-slate/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-brand-slate mb-2">Name</label>
              <input required type="text" className="w-full bg-brand-blue/50 border border-brand-slate/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-teal" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-slate mb-2">Email</label>
              <input required type="email" className="w-full bg-brand-blue/50 border border-brand-slate/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-teal" placeholder="your@email.com" />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-brand-slate mb-2">Message</label>
            <textarea required rows={4} className="w-full bg-brand-blue/50 border border-brand-slate/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-teal" placeholder="How can we collaborate?"></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={status !== "idle"}
            className="w-full bg-brand-teal text-brand-navy font-bold py-4 rounded-lg hover:bg-white transition-all disabled:opacity-70"
          >
            {status === "idle" ? "Send Message" : status === "submitting" ? "Sending..." : "Message Sent!"}
          </button>
        </form>
      </div>
    </section>
  );
}
