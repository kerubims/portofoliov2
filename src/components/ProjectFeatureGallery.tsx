"use client";

import { useState, useEffect, useRef } from "react";
import { ProjectFeature } from "@/data/projects";

type ProjectFeatureGalleryProps = {
  features: ProjectFeature[];
  themeColor: string;
};

export default function ProjectFeatureGallery({ features, themeColor }: ProjectFeatureGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isIdle, setIsIdle] = useState(true);
  const idleTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleInteraction = () => {
    setIsIdle(false);
    if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
    idleTimeoutRef.current = setTimeout(() => {
      setIsIdle(true);
    }, 8000);
  };

  useEffect(() => {
    return () => {
      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!features || features.length <= 1 || !isIdle || isModalOpen) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % features.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [features?.length, isIdle, activeIndex, isModalOpen]);

  if (!features || features.length === 0) return null;

  const activeFeature = features[activeIndex];

  return (
    <div 
      className="feature-gallery-container mt-24"
      onPointerMove={handleInteraction}
      onClick={handleInteraction}
    >
      <div className="border-b border-white/10 pb-4 mb-8 flex justify-between items-baseline">
        <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-wide">
          {String(activeIndex + 1).padStart(2, '0')} / {activeFeature.title}
        </h2>
        <span className="hidden sm:inline-block text-xs  uppercase tracking-widest text-white">FEATURE BREAKDOWN</span>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 transition-opacity duration-500">
        {/* Text / Specimen Card */}
        <div className="lg:col-span-4 glass rounded-3xl border border-white/10 p-8 flex flex-col justify-between">
          <div>
            <div className="text-xs  font-semibold uppercase tracking-widest text-white mb-4 flex items-center gap-2">
                 SPECIFICATION
            </div>
            <h3 className="text-xl font-display font-semibold mb-4 uppercase">{activeFeature.title}</h3>
            <p className="text-white leading-relaxed font-body text-base">{activeFeature.description}</p>
          </div>
        </div>

        {/* Visual Mockup Area */}
        <div className="lg:col-span-8 rounded-3xl overflow-hidden glass border border-white/10 relative group flex items-center justify-center p-4">
          {activeFeature.image ? (
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full h-full relative outline-none cursor-zoom-in"
                aria-label="Enlarge image"
              >
                <img 
                  key={activeFeature.image} // Force re-render for animation if needed
                  src={activeFeature.image} 
                  alt={activeFeature.title} 
                  className="w-full h-auto max-h-full object-contain object-top rounded-xl shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
                />
              </button>
          ) : (
              <div className="w-full h-full rounded-2xl border border-dashed border-white/20 flex items-center justify-center bg-white/5">
                <span className="text-white/90 font-display text-2xl md:text-3xl font-semibold uppercase tracking-widest text-center px-4">MOCKUP / {activeFeature.title}</span>
              </div>
          )}
        </div>
      </div>

      {/* Thumbnails Row */}
      {features.length > 1 && (
        <div className="flex overflow-x-auto gap-4 -mx-2 px-2 pt-2 pb-4 snap-x [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/40">
          {features.map((feature, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative flex-none w-40 md:w-48 lg:w-56 snap-start rounded-xl overflow-hidden h-24 md:h-32 transition-all duration-300 border-2 text-left group ${isActive ? 'border-white opacity-100 scale-[1.02]' : 'border-transparent opacity-50 hover:opacity-100 hover:scale-[1.02]'}`}
                aria-label={`View feature ${feature.title}`}
              >
                {feature.image ? (
                  <>
                    <img src={feature.image} alt="" className="absolute inset-0 w-full h-full object-cover object-top" />
                    <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-40 group-hover:opacity-10'}`}></div>
                  </>
                ) : (
                  <div className="absolute inset-0 bg-white/10 flex items-center justify-center p-2">
                    <span className="text-[10px] md:text-xs  text-white/70 uppercase text-center leading-tight">MOCKUP</span>
                  </div>
                )}
                
              </button>
            );
          })}
        </div>
      )}
      {/* Lightbox Modal */}
      {isModalOpen && activeFeature.image && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8 cursor-zoom-out"
          onClick={() => setIsModalOpen(false)}
        >
          <button 
            className="fixed top-6 right-6 z-[110] bg-white/10 hover:bg-white/20 text-white rounded-full p-2.5 backdrop-blur-md transition-colors"
            onClick={() => setIsModalOpen(false)}
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          
          <div 
            className="relative w-full max-w-7xl h-full overflow-y-auto rounded-xl [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/40 cursor-default"
            onClick={(e) => e.stopPropagation()} 
          >
            <img 
              src={activeFeature.image} 
              alt={activeFeature.title} 
              className="w-full h-auto rounded-xl block"
            />
          </div>
        </div>
      )}
    </div>
  );
}
