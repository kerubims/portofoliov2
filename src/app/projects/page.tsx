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

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tight leading-[0.9] mb-6">
                All Projects
              </h1>
              <p className="text-xl md:text-2xl text-white font-body leading-relaxed max-w-2xl">
                Every case study — the selected work and everything else.
              </p>
            </div>

            <div className="flex-shrink-0">
              <a
                href="https://github.com/kerubims?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="btn glass"
              >
                <svg width="1.25em" height="1.25em" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>Visit All Repositories</span>
                <span className="btn__arrow" aria-hidden="true">
                  <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

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
