"use client";

import { useState } from "react";
import { ProjectFeature } from "@/data/projects";

type ProjectFeatureGalleryProps = {
  features: ProjectFeature[];
  themeColor: string;
};

export default function ProjectFeatureGallery({ features, themeColor }: ProjectFeatureGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!features || features.length === 0) return null;

  const activeFeature = features[activeIndex];

  return (
    <div className="feature-gallery-container mt-24">
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
              <img 
                key={activeFeature.image} // Force re-render for animation if needed
                src={activeFeature.image} 
                alt={activeFeature.title} 
                className="w-full h-auto object-contain object-top rounded-xl shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
              />
          ) : (
              <div className="w-full h-full rounded-2xl border border-dashed border-white/20 flex items-center justify-center bg-white/5">
                <span className="text-white/90 font-display text-2xl md:text-3xl font-semibold uppercase tracking-widest text-center px-4">MOCKUP / {activeFeature.title}</span>
              </div>
          )}
        </div>
      </div>

      {/* Thumbnails Row */}
      {features.length > 1 && (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {features.map((feature, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative rounded-xl overflow-hidden h-24 md:h-32 transition-all duration-300 border-2 text-left group ${isActive ? 'border-white opacity-100 scale-[1.02]' : 'border-transparent opacity-50 hover:opacity-100 hover:scale-[1.02]'}`}
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
    </div>
  );
}
