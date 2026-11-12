export default function IdeaSection() {
  return (
    <section id="our-idea" className="py-24 bg-brand-blue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">The Medivault Concept</h2>
          <p className="text-brand-slate max-w-2xl mx-auto">Tackling limited pharmacy access during late-night hours and in remote locations through an integrated hardware-software ecosystem.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Smart Storage", desc: "Temperature-controlled, secure compartments for essential medicines." },
            { title: "Digital Interface", desc: "Intuitive touchscreen for browsing, selecting, and verifying medicines." },
            { title: "Automated Dispensing", desc: "Safe and precise internal robotics to dispense selected items directly to the collection tray." }
          ].map((item, i) => (
            <div key={i} className="bg-brand-navy p-6 rounded-xl border border-brand-slate/20 hover:border-brand-teal/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-brand-slate">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
