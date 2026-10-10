import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CursorTrail from "@/components/CursorTrail";

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
      <main className="min-h-screen pt-32 pb-24 text-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <Link href="/#work" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity mb-12 uppercase tracking-widest font-mono">
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            Kembali ke Beranda
          </Link>

          {/* HERO HEADER & EDITORIAL SYNOPSIS (Grid 8/4) */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-b border-white/10 pb-16 mb-16">
            {/* Left Column: Title & Intent */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-3 py-1 border border-white/20 rounded-full text-xs font-mono font-semibold uppercase tracking-widest bg-white/5">
                    {project.category}
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1 border border-white/20 rounded-full text-xs font-mono font-semibold uppercase bg-white/5">
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: project.themeColor }}></span>
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
            <div className="lg:col-span-4 glass rounded-3xl border border-white/10 p-8 flex flex-col justify-between">
              <div className="divide-y divide-white/10">
                <div className="pb-5">
                  <span className="block text-xs font-mono font-semibold uppercase text-white mb-2">CATEGORY</span>
                  <p className="text-base font-medium">{project.category}</p>
                </div>
                <div className="py-5">
                  <span className="block text-xs font-mono font-semibold uppercase text-white mb-2">TECH STACK</span>
                  <p className="text-base font-medium leading-relaxed">{project.techTags.join(", ")}</p>
                </div>
                <div className="py-5">
                  <span className="block text-xs font-mono font-semibold uppercase text-white mb-2">STATUS</span>
                  <div className="flex items-center gap-2 font-medium">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: project.themeColor }}></span>
                    {project.status}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FEATURES / COMPONENT ARCHITECTURE VIEW */}
          <div className="space-y-24">
            {project.features.map((feature, idx) => (
              <section key={idx} className="feature-section">
                <div className="border-b border-white/10 pb-4 mb-8 flex justify-between items-baseline">
                  <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-wide">
                    {String(idx + 1).padStart(2, '0')} / {feature.title}
                  </h2>
                  <span className="hidden sm:inline-block text-xs font-mono uppercase tracking-widest text-white">FEATURE BREAKDOWN</span>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Text / Specimen Card */}
                  <div className="lg:col-span-4 glass rounded-3xl border border-white/10 p-8 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-mono font-semibold uppercase tracking-widest text-white mb-4 flex items-center gap-2">
                         <span className="w-1.5 h-1.5 rounded-full bg-white/30"></span> SPECIFICATION
                      </div>
                      <h3 className="text-xl font-display font-semibold mb-4 uppercase">{feature.title}</h3>
                      <p className="text-white leading-relaxed font-body text-base">{feature.description}</p>
                    </div>
                  </div>
                  
                  {/* Mockup / Display Canvas */}
                  <div className="lg:col-span-8 glass rounded-3xl border border-white/10 overflow-hidden aspect-video flex items-center justify-center relative bg-white/5 group">
                    {feature.image ? (
                       <img src={feature.image} alt={feature.title} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]" />
                    ) : (
                       <span className="text-white/90 font-display text-2xl md:text-3xl font-semibold uppercase tracking-widest">MOCKUP / {feature.title}</span>
                    )}
                  </div>
                </div>
              </section>
            ))}
          </div>

        </div>
      </main>
      <Footer />
      <CursorTrail />
    </>
  );
}
