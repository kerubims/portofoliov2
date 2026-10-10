import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CursorTrail from "@/components/CursorTrail";
import ProjectFeatureGallery from "@/components/ProjectFeatureGallery";

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

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
          
          <Link href="/#work" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity mb-12 uppercase tracking-widest ">
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            BACK TO PROJECTS
          </Link>

          {/* HERO HEADER & EDITORIAL SYNOPSIS (Grid 8/4) */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-b border-white/10 pb-16 mb-16">
            {/* Left Column: Title & Intent */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-3 py-1 border border-white/20 rounded-full text-xs  font-semibold uppercase tracking-widest bg-white/5">
                    {project.category}
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 rounded-full text-xs  font-semibold uppercase bg-white/5">
                    Status: {project.status}
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tight leading-[0.9] mb-8">
                  {project.title}
                </h1>
                
                <p className="text-xl md:text-2xl text-white font-body leading-relaxed max-w-3xl">
                  {project.description}
                </p>
              </div>
              
              <div className="mt-12 flex flex-wrap items-center gap-4">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn--light">
                    VISIT LIVE SITE
                    <span className="btn__arrow" aria-hidden="true">
                      <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: Rigorous Architectural Metadata Grid */}
            <div className="lg:col-span-4 glass rounded-3xl border border-white/10 p-8 flex flex-col justify-between animate-[float-card-1_3s_ease-in-out_infinite_alternate] hover:[animation-play-state:paused]">
              <div className="divide-y divide-white/10">
                <div className="pb-5">
                  <span className="block text-xs  font-semibold uppercase text-white mb-2">CATEGORY</span>
                  <p className="text-base font-medium">{project.category}</p>
                </div>
                <div className="py-5">
                  <span className="block text-xs  font-semibold uppercase text-white mb-2">TECH STACK</span>
                  <p className="text-base font-medium leading-relaxed">{project.techTags.join(", ")}</p>
                </div>
                <div className="py-5">
                  <span className="block text-xs  font-semibold uppercase text-white mb-2">STATUS</span>
                  <div className="flex items-center gap-2 font-medium">
                    {project.status}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FEATURES / COMPONENT ARCHITECTURE VIEW */}
          <ProjectFeatureGallery features={project.features} themeColor={project.themeColor} />

          {/* MORE PROJECTS SECTION */}
          <section className="mt-32 pt-16 border-t border-white/10">
            <div className="flex justify-between items-baseline mb-8">
              <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-wide">Select Another Project Directly</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {projects.map((p, idx) => {
                const isActive = p.slug === slug;
                return isActive ? (
                  <div key={p.slug} className="glass rounded-2xl overflow-hidden border-2 border-white p-4 flex flex-col justify-between h-full relative group shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    <div className="absolute top-0 right-0 bg-white text-black text-[9px] font-bold px-3 py-1 uppercase rounded-bl-xl shadow-md z-30">Current</div>
                    <div>
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center gap-2 text-[10px]  uppercase text-white">
                            {String(idx + 1).padStart(2, '0')} // {p.category}
                          </div>
                        </div>
                        <h3 className="text-xl font-display font-bold uppercase mb-2">{p.title}</h3>
                        <p className="text-[11px] font-body text-white/70 line-clamp-2 mb-4">{p.description}</p>
                        
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {p.techTags.slice(0, 2).map(tag => (
                            <span key={tag} className="text-[9px]  uppercase px-1.5 py-0.5 bg-white/10 text-white/90">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <div className="aspect-video relative overflow-hidden rounded-xl bg-black/50 mb-4 border border-white/20">
                          {p.thumbnail && (
                            <img src={p.thumbnail} alt={p.title} className="w-full h-full object-cover object-top opacity-80" />
                          )}
                        </div>
                        
                        <div className="flex justify-between items-center text-[10px]  uppercase font-bold text-white border-t border-white/20 pt-3">
                          <span>Active Case Study</span>
                          <span className="material-symbols-outlined text-[14px]">check_circle</span>
                        </div>
                      </div>
                  </div>
                ) : (
                  <Link key={p.slug} href={`/projects/${p.slug}`} className="glass rounded-2xl overflow-hidden border border-white/10 p-4 flex flex-col justify-between h-full group hover:border-white/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-2 text-[10px]  uppercase text-white/50 group-hover:text-white transition-colors">
                          {String(idx + 1).padStart(2, '0')} // {p.category}
                        </div>
                        <span className="text-[10px]  text-white/30">2026</span>
                      </div>
                      <h3 className="text-xl font-display font-bold uppercase mb-2 text-white/90 group-hover:text-white transition-colors">{p.title}</h3>
                      <p className="text-[11px] font-body text-white/50 line-clamp-2 mb-4 group-hover:text-white/70 transition-colors">{p.description}</p>
                      
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {p.techTags.slice(0, 2).map(tag => (
                          <span key={tag} className="text-[9px]  uppercase px-1.5 py-0.5 bg-white/5 text-white/50 group-hover:bg-white/10 group-hover:text-white/90 transition-colors">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <div className="aspect-video relative overflow-hidden rounded-xl bg-black/80 mb-4 border border-white/5 group-hover:border-white/20 transition-colors">
                        {p.thumbnail && (
                          <img src={p.thumbnail} alt={p.title} className="w-full h-full object-cover object-top opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                        )}
                      </div>
                      
                      <div className="flex justify-between items-center text-[10px]  uppercase font-semibold text-white/40 border-t border-white/10 pt-3 group-hover:text-white group-hover:border-white/30 transition-all">
                        <span>Inspect Project</span>
                        <span className="material-symbols-outlined text-[14px] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform">arrow_outward</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

        </div>
      </main>
      <Footer />
      <CursorTrail />
    </>
  );
}
