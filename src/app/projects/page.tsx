import type { Metadata } from "next";
import { projects } from "@/data/projects";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CursorTrail from "@/components/CursorTrail";

export const metadata: Metadata = {
  title: "All Projects | Kerubim SM",
  description: "Browse all projects by Kerubim SM — selected work and the full archive.",
  alternates: {
    canonical: "/projects",
  },
};

export default function AllProjects() {
  return (
    <>
      <Nav />
      {/* Ambient Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
        <div className="blob blob--pink" aria-hidden="true" style={{ top: '10%', left: '-10%' }}></div>
        <div className="blob blob--blue" aria-hidden="true" style={{ top: '40%', right: '-10%' }}></div>
      </div>
      <main id="hero" className="min-h-screen pt-32 pb-24 text-white relative">
        <div className="container mx-auto px-6 max-w-7xl">

          <Link href="/#work" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity mb-12 uppercase tracking-widest">
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">arrow_back</span>
            Back to Selected Projects
          </Link>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tight leading-[0.9] mb-6">
            All Projects
          </h1>
          <p className="text-xl md:text-2xl text-white font-body leading-relaxed max-w-3xl mb-16">
            Every case study — the selected work and everything else.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p, idx) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="glass rounded-2xl overflow-hidden border border-white/10 p-4 flex flex-col justify-between h-full group hover:border-white/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2 text-[10px] uppercase text-white/50 group-hover:text-white transition-colors">
                      {String(idx + 1).padStart(2, '0')} // {p.category}
                    </div>
                    <span className="text-[10px] text-white/30">{p.status}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold uppercase mb-2 text-white/90 group-hover:text-white transition-colors">{p.title}</h3>
                  <p className="text-[11px] font-body text-white/50 line-clamp-2 mb-4 group-hover:text-white/70 transition-colors">{p.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.techTags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[9px] uppercase px-1.5 py-0.5 bg-white/5 text-white/50 group-hover:bg-white/10 group-hover:text-white/90 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="aspect-video relative overflow-hidden rounded-xl bg-black/80 mb-4 border border-white/5 group-hover:border-white/20 transition-colors">
                    {p.thumbnail && (
                      <img src={p.thumbnail} alt={p.title} loading="lazy" decoding="async" className="w-full h-full object-cover object-top opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                    )}
                  </div>

                  <div className="flex justify-between items-center text-[10px] uppercase font-semibold text-white/40 border-t border-white/10 pt-3 group-hover:text-white group-hover:border-white/30 transition-all">
                    <span>Inspect Project</span>
                    <span className="material-symbols-outlined text-[14px] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true">arrow_outward</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>
      <Footer />
      <CursorTrail />
    </>
  );
}
