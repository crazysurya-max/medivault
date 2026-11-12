export default function BlogSection() {
  const posts = [
    { title: "Medicine Accessibility in Rural India", category: "Research", date: "Oct 12, 2023" },
    { title: "Understanding Safe Medicine Storage", category: "Education", date: "Nov 05, 2023" },
    { title: "The Role of Technology in Healthcare", category: "Technology", date: "Jan 18, 2024" }
  ];

  return (
    <section id="blog" className="py-24 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Health Blog</h2>
          <p className="text-brand-slate max-w-2xl mx-auto">Medically responsible educational content and updates on our journey.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="bg-brand-blue/30 p-6 rounded-xl border border-brand-slate/20 hover:border-brand-teal/50 transition-all cursor-pointer group">
              <div className="text-brand-teal text-sm font-semibold mb-2">{post.category}</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">{post.title}</h3>
              <div className="text-brand-slate text-sm">{post.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
