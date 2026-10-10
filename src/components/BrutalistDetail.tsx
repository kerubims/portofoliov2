"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function BrutalistDetail({ project }: { project: any }) {
  const [viewport, setViewport] = useState('desktop');
  const [galleryIndex, setGalleryIndex] = useState(0);

  return (
    <div className="bg-canvas-pure text-on-surface antialiased font-body-md text-body-md dark selection:bg-primary selection:text-canvas-pure pt-24 pb-24">
      <section className="border-b border-border-quiet bg-surface-container-lowest sticky top-[49px] z-40 backdrop-blur-md bg-opacity-95">
<div className="max-w-[1600px] mx-auto px-margin md:px-margin-desktop">
<div className="flex items-center overflow-x-auto no-scrollbar py-space-xs gap-space-md text-nowrap" id="project-nav-bar">
<button className="project-tab text-left py-space-xs px-space-md font-label-md text-label-md uppercase tracking-wider border transition-all duration-150 border-border-quiet text-text-muted hover:text-primary hover:border-border-defined" id="tab-p1" onClick={() => { /* switchProject('p1') */ }}>
<span className="text-outline mr-2 font-mono">01</span>KOPI SENJA
        </button>
<button className="project-tab text-left py-space-xs px-space-md font-label-md text-label-md uppercase tracking-wider border transition-all duration-150 bg-primary text-canvas-pure border-primary font-semibold" id="tab-p2" onClick={() => { /* switchProject('p2') */ }}>
<span className="mr-2 font-mono">02</span>LUMEN BANK
        </button>
<button className="project-tab text-left py-space-xs px-space-md font-label-md text-label-md uppercase tracking-wider border transition-all duration-150 border-border-quiet text-text-muted hover:text-primary hover:border-border-defined" id="tab-p3" onClick={() => { /* switchProject('p3') */ }}>
<span className="text-outline mr-2 font-mono">03</span>PIXEL PALS
        </button>
<button className="project-tab text-left py-space-xs px-space-md font-label-md text-label-md uppercase tracking-wider border transition-all duration-150 border-border-quiet text-text-muted hover:text-primary hover:border-border-defined" id="tab-p4" onClick={() => { /* switchProject('p4') */ }}>
<span className="text-outline mr-2 font-mono">04</span>BATIK NOW
        </button>
<button className="project-tab text-left py-space-xs px-space-md font-label-md text-label-md uppercase tracking-wider border transition-all duration-150 border-border-quiet text-text-muted hover:text-primary hover:border-border-defined" id="tab-p5" onClick={() => { /* switchProject('p5') */ }}>
<span className="text-outline mr-2 font-mono">05</span>ORBIT OS
        </button>
</div>
</div>
</section>

<main className="max-w-[1600px] mx-auto px-margin md:px-margin-desktop py-space-lg md:py-space-xl">

<section className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg md:gap-gutter-desktop border-b border-border-quiet pb-space-xl mb-space-xl">

<div className="lg:col-span-8 flex flex-col justify-between">
<div>
<div className="flex items-center gap-space-sm mb-space-sm">
<span className="px-2 py-0.5 border border-border-defined bg-canvas-pure text-text-muted font-label-sm text-label-sm uppercase tracking-widest" id="proj-badge">
              02 / 05 — SELECTED PROJECT · FINTECH &amp; UI/UX
            </span>
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 border border-border-quiet bg-surface-subtle text-primary font-label-sm text-label-sm uppercase" id="proj-state-indicator">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Production Release
            </span>
</div>
<h1 className="font-headline-lg md:font-headline-xl text-headline-lg md:text-headline-xl text-primary uppercase tracking-tight leading-none mb-space-md" id="proj-title">
            LUMEN BANK
          </h1>
<p className="font-body-lg text-body-lg text-on-surface max-w-2xl leading-relaxed" id="proj-tagline">
            Architecting a zero-latency digital banking infrastructure for high-growth Southeast Asian founders. Engineered for multi-currency liquidity and micro-second visual feedback.
          </p>
</div>
<div className="mt-space-lg flex flex-wrap items-center gap-space-md">
<a className="px-space-md py-space-xs bg-primary text-canvas-pure font-label-md text-label-md uppercase tracking-wider inline-flex items-center gap-space-xs hover:bg-canvas-pure hover:text-primary hover:border-primary border border-primary transition-all duration-150" href="#live-demo" id="proj-live-link">
<span className="">VISIT LIVE PROTOTYPE</span>
<span className="material-symbols-outlined text-[16px]">arrow_outward</span>
</a>
<button className="px-space-md py-space-xs bg-canvas-pure text-text-primary border border-border-defined font-label-md text-label-md uppercase tracking-wider inline-flex items-center gap-space-xs hover:border-primary transition-all duration-150" onClick={() => { /* scrollToSystem() */ }}>
<span className="">DESIGN SPECIMEN</span>
<span className="material-symbols-outlined text-[16px]">tune</span>
</button>
</div>
</div>

<div className="lg:col-span-4 border border-border-quiet bg-surface-elevated p-space-md md:p-space-lg flex flex-col justify-between">
<div className="divide-y divide-border-quiet">
<div className="pb-space-sm">
<span className="block font-label-sm text-label-sm uppercase text-text-muted mb-1">CLIENT ORGANIZATION</span>
<p className="text-text-primary font-body-md" id="meta-client">Lumen Financial Holdings Ltd. (SG/JKT)</p>
</div>
<div className="py-space-sm">
<span className="block font-label-sm text-label-sm uppercase text-text-muted mb-1">ROLE &amp; DISCIPLINE</span>
<p className="text-text-primary font-body-md" id="meta-role">Principal UI/UX Architect &amp; Design Systems Lead</p>
</div>
<div className="py-space-sm">
<span className="block font-label-sm text-label-sm uppercase text-text-muted mb-1">CORE DELIVERABLES / STACK</span>
<p className="text-text-primary font-body-md" id="meta-stack">iOS Native, React Native Design System, Micro-interactions, Design Tokens</p>
</div>
<div className="py-space-sm">
<span className="block font-label-sm text-label-sm uppercase text-text-muted mb-1">CHRONOLOGY &amp; DURATION</span>
<p className="text-text-primary font-body-md" id="meta-timeline">Q3 2024 — Q1 2025 (6 Months Sprint)</p>
</div>
<div className="pt-space-sm">
<span className="block font-label-sm text-label-sm uppercase text-text-muted mb-1">SYSTEM STATUS</span>
<div className="flex items-center gap-2 text-primary font-label-md text-label-md uppercase" id="meta-status">
<span className="material-symbols-outlined text-primary text-[14px]">check_circle</span> Deployed on iOS &amp; Web
            </div>
</div>
</div>
</div>
</section>

<section className="mb-space-xl">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-space-sm border-b border-border-quiet mb-space-md gap-space-xs">
<div className="flex items-center gap-space-md">
<h2 className="font-headline-sm text-headline-sm uppercase text-text-primary tracking-wide">AUTHENTIC PREVIEW STAGE</h2>
<span className="text-text-muted font-mono text-xs">/ HIGH-FIDELITY ASSET CANVAS</span>
</div>

<div className="flex items-center gap-1 border border-border-quiet p-1 bg-surface-elevated">
<button className="px-space-sm py-1 font-label-sm text-label-sm uppercase tracking-wider bg-surface-subtle text-text-primary border border-border-defined" id="vp-desktop" onClick={() => setViewport("desktop")}>
            DESKTOP VIEW (16:9)
          </button>
<button className="px-space-sm py-1 font-label-sm text-label-sm uppercase tracking-wider text-text-muted hover:text-text-primary" id="vp-mobile" onClick={() => setViewport("mobile")}>
            MOBILE VIEW (9:19)
          </button>
<button className="px-space-sm py-1 font-label-sm text-label-sm uppercase tracking-wider text-text-muted hover:text-text-primary" id="vp-arch" onClick={() => setViewport("arch")}>
            COMPONENT SPEC
          </button>
</div>
</div>

<div className="border border-border-quiet bg-surface-container-lowest overflow-hidden transition-all duration-300">

<div className="flex items-center justify-between px-space-md py-space-xs bg-surface-elevated border-b border-border-quiet">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-border-defined inline-block"></span>
<span className="w-2.5 h-2.5 rounded-full bg-border-defined inline-block"></span>
<span className="w-2.5 h-2.5 rounded-full bg-border-defined inline-block"></span>
<span className="ml-space-md font-mono text-xs text-text-muted hidden sm:inline-block" id="window-url">https://app.lumenbank.io/hub/treasury-alpha</span>
</div>
<div className="flex items-center gap-space-md">
<span className="font-label-sm text-label-sm uppercase text-text-muted">60 FPS REALTIME</span>
<span className="material-symbols-outlined text-text-muted hover:text-primary cursor-pointer text-[18px]">open_in_full</span>
</div>
</div>

<div className="p-space-md md:p-space-lg flex justify-center items-center min-h-[520px] bg-canvas-pure relative overflow-hidden" id="preview-stage-container">

<div className={`w-full max-w-[1300px] border border-border-quiet bg-surface-elevated shadow-2xl relative transition-all duration-200 ${viewport === "desktop" ? "block" : "hidden"}`}>
<div className="relative w-full aspect-[16/9] overflow-hidden bg-surface-subtle group">
<img alt="Project Preview" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]" data-alt="High contrast, ultra-modern monochrome fintech application interface displayed on a high-resolution dark mode screen. Clean Swiss typographic layouts, precision line charts, dark gray slate cards with pure white balance numbers, currency swap dialogs, and sharp geometric modular grids. Minimalist art direction inspired by high-end brutalist architecture." id="main-preview-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDopJJWJSyguEaESnY9WIY99Nf0-IklaiapV68k1WxK6Seqejlr9eg0QPTfMyM6W6-eNHA-TwDI0a_nmvOReaYhGm9YmQSf7IZjgnOGVXbRWRqo-YNgvKqvu88hyxoMVuVBS-OX1oSi26cmQk2PiqqU_54UU3dq7XHq-qombLrho75umYUJlu2N_l-eOuYQ5oSBzoT2-ju74JfroybU4hICpb__r-IwdTfPBs2VwKOL3PjUPy5Z-5edug" />

<div className="absolute inset-0 bg-canvas-pure/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
<span className="px-space-md py-space-xs bg-primary text-canvas-pure font-label-md text-label-md uppercase tracking-wider">
                  ENLARGE HIGH-RES SPECIMEN
                </span>
</div>
</div>
</div>

<div className={`w-[360px] border border-border-defined rounded-[24px] p-2 bg-surface-container-high shadow-2xl ${viewport === "mobile" ? "block" : "hidden"}`}>
<div className="border border-border-quiet rounded-[18px] overflow-hidden bg-canvas-pure aspect-[9/19] relative">
<img alt="Mobile Screen Mockup" className="w-full h-full object-cover" data-alt="Vertical mobile UI screen of a sophisticated dark theme fintech and banking application. Crisp white typography, Oswald headlines, sleek cards displaying transaction histories and card balances. Razor thin hairline separators and minimalist modern design." id="mobile-preview-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBE7gtmg35d9upEO3cezH8cdZiIGPaYO1SB-mb3QLufGxx95IgUiqJGTOVpKW9tW_UPzMVUPALyEsYGoLOuzbRyNuLcO63s_QS8B2H-a7dYxEXQZFQRervhsmie9G5R-GpiYWHISS3qKnVvONvSBnu4yUMBRK_yId__HRPALbmJhGt91QVoq3MY9W-DWYQw1WpKhQQan7yAtx5nLumTqo2UIdF4CwPOVfDnr0Q6eBqErWs2Np_9bzAl-w" />
</div>
</div>

<div className={`w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-space-md ${viewport === "arch" ? "grid" : "hidden"}`}>
<div className="border border-border-quiet p-space-md bg-surface-elevated">
<h4 className="font-label-md text-label-md uppercase text-primary mb-2">Primary Action System</h4>
<div className="space-y-3">
<button className="w-full py-3 bg-primary text-canvas-pure font-label-md text-label-md uppercase tracking-wider">Default State</button>
<button className="w-full py-3 bg-canvas-pure border border-primary text-primary font-label-md text-label-md uppercase tracking-wider">Hover / Inverse State</button>
<button className="w-full py-3 border border-border-defined text-text-muted font-label-md text-label-md uppercase tracking-wider" disabled={true}>Disabled State</button>
</div>
</div>
<div className="border border-border-quiet p-space-md bg-surface-elevated">
<h4 className="font-label-md text-label-md uppercase text-primary mb-2">Input / Query Modules</h4>
<div className="space-y-3">
<input className="w-full bg-canvas-pure border border-border-defined text-primary font-body-md px-3 py-2 focus:border-primary outline-none" readOnly={true} type="text" value="USD 1,450,000.00" />
<div className="flex justify-between items-center text-xs font-mono text-text-muted border-t border-border-quiet pt-2">
<span className="">LATENCY: 0.08ms</span>
<span className="text-emerald-400">STATUS 200 OK</span>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-border-quiet bg-surface-elevated p-space-md grid grid-cols-2 sm:grid-cols-4 gap-space-md">
<div className="cursor-pointer border border-primary p-space-xs bg-canvas-pure group" onClick={() => setGalleryIndex(0)}>
<span className="block font-label-sm text-label-sm uppercase text-primary mb-1">01 / DASHBOARD HUB</span>
<div className="aspect-video bg-surface-subtle overflow-hidden relative">
<img alt="Thumb 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Monochrome dashboard screen design with high contrast layout, crisp data readouts, and minimalist financial metrics. Minimal, architectural interface." id="thumb-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2erZ6lEdQ-WIK4T-L-fIJEUvOryu7Cm5EQxPV5-CBRdlAG69RIfgsaofMa9R4wHIT2Fc-KKZdl5dFIwuEhJKRPboAKdjMOggKOo7iYOruvVzm8qyP0N2hZOOgS93gl5_eK8WhH4CaU4KaOEMexzO-eifW9JcvJZpp89EWCT6KeiB7zDWKS0QqAO0I8TvuzKf8dDYxWNSNyP0kVNOXOPBgH5YpP0nf5LXVFf0fS1TK72m-uUCQPHubMg" />
</div>
</div>
<div className="cursor-pointer border border-border-quiet p-space-xs bg-surface-elevated hover:border-border-defined group" onClick={() => setGalleryIndex(1)}>
<span className="block font-label-sm text-label-sm uppercase text-text-muted mb-1">02 / TRANSACTION ENGINE</span>
<div className="aspect-video bg-surface-subtle overflow-hidden relative">
<img alt="Thumb 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="High contrast UI mockup depicting ledger transactions and wire transfers in a dark theme minimalist app screen with crisp typography." id="thumb-1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVKZpQSuUPjiSabsY49DtYXojD9k8BvKAK7xhuH-9my_f5vceWBhIHgfEaU65VIc76uFDC9nl56r1W5XoEh518rlqh2NK2ydbGswFlxBp-BOimVeUkXeVSyIdWkKSuWKQgCW4V3Y1YbLFR4bxfN853VYk3_i3BfyEOl4vZckuzlQNEasZm-Q4XriUrIXuCVfC3g7hAqJ9u86jk_vj3ljHNitWRe37AwGKtS1rIHVSlDtrK2QqW_LAwQA" />
</div>
</div>
<div className="cursor-pointer border border-border-quiet p-space-xs bg-surface-elevated hover:border-border-defined group" onClick={() => setGalleryIndex(2)}>
<span className="block font-label-sm text-label-sm uppercase text-text-muted mb-1">03 / CARD MANAGEMENT</span>
<div className="aspect-video bg-surface-subtle overflow-hidden relative">
<img alt="Thumb 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Architectural virtual credit card interface screen in pure black and white, featuring clean micro-typography and cryptographic security chips." id="thumb-2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEvNH6Ig0dBk5YpuA3ZbIXgjehdxFPxUe7pCSzmXOV0NFyDOINsTYDWT4-vYmdIuhEAGh1bZSLIH8Ffy3RTJWN15B9rDdL3v6TDi-qLOOsVagSRHPyOXbaA2rk_NsJ8A5choktc_OfOuv3NMC9s1ljsWDA_U4xy585gtAdp4usxTCm2Oo8Zcs_Zcc6v7JmRwWHUUB8DWSHjHK54OXjr9pyhWLposiA83d9zkbvyepA6YsaT2kKiNfX_w" />
</div>
</div>
<div className="cursor-pointer border border-border-quiet p-space-xs bg-surface-elevated hover:border-border-defined group" onClick={() => setGalleryIndex(3)}>
<span className="block font-label-sm text-label-sm uppercase text-text-muted mb-1">04 / AUDIT &amp; ANALYTICS</span>
<div className="aspect-video bg-surface-subtle overflow-hidden relative">
<img alt="Thumb 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Monochrome analytics dashboard charts with stark hair-line gridlines, brutalist statistical columns, and high density telemetry displays." id="thumb-3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWBfz0nnEekCt6CpSsORsn5wurMpYD14BggxXqHkNTwpIGvD8vCq-2kgQYRhCK9eYeqJ8kEe0XS_6gXel-HZirrYkRWW2UTpYI4me5h_KnWq0qIPJ7DUax7j3R1R0d24hcx_WczrSHs4azw4T1k7rGpUuAvzZW-As_Mq6d1Ch3LA6XO1L5n9cYADpBHqEwZlrTV1Yjyerr-NwMdbpP9xursufctalgmaxC4pKPxFFxtmRZhAiGKM63fQ" />
</div>
</div>
</div>
</div>
</section>

<section className="mb-space-xl">
<div className="border-b border-border-quiet pb-space-sm mb-space-lg flex justify-between items-baseline">
<h2 className="font-headline-md text-headline-md text-primary uppercase">01 / ARCHITECTURAL INQUIRY</h2>
<span className="font-label-sm text-label-sm uppercase text-text-muted">PROBLEM VS IMPLEMENTED ARCHITECTURE</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">

<div className="lg:col-span-6 border border-border-quiet p-space-lg bg-surface-elevated relative">
<div className="font-label-sm text-label-sm uppercase text-error mb-space-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">warning</span>
<span className="">CRITICAL BOTTLENECK</span>
</div>
<h3 className="font-headline-sm text-headline-sm uppercase text-text-primary mb-space-sm" id="proj-challenge-title">
            Fragmented Legacy Cross-Border Friction
          </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed" id="proj-challenge-desc">
            Existing financial platforms in the region forced users to navigate disjointed mobile menus, sluggish settlement confirmations, and confusing foreign exchange fees, resulting in high churn among tech-first venture teams.
          </p>
<div className="mt-space-lg pt-space-md border-t border-border-quiet">
<span className="font-label-sm text-label-sm uppercase text-text-muted">MEASURED DEFICIT</span>
<p className="font-mono text-sm text-primary mt-1" id="proj-challenge-stat">4.2 min average completion time per regional batch wire.</p>
</div>
</div>

<div className="lg:col-span-6 border border-border-quiet p-space-lg bg-surface-elevated relative">
<div className="font-label-sm text-label-sm uppercase text-primary mb-space-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">bolt</span>
<span className="">STRATEGIC INTERVENTION</span>
</div>
<h3 className="font-headline-sm text-headline-sm uppercase text-text-primary mb-space-sm" id="proj-solution-title">
            Zero-Friction Liquidity Terminal
          </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed" id="proj-solution-desc">
            Constructed a unified design system that unifies treasury, automated currency routing, and virtual enterprise card issuance into a singular, high-throughput command dashboard backed by millisecond-grade UI states.
          </p>
<div className="mt-space-lg pt-space-md border-t border-border-quiet">
<span className="font-label-sm text-label-sm uppercase text-text-muted">VERIFIED RESOLUTION</span>
<p className="font-mono text-sm text-primary mt-1" id="proj-solution-stat">Single-tap batch execution compressed to 18 seconds.</p>
</div>
</div>
</div>
</section>

<section className="mb-space-xl border-t border-border-quiet pt-space-xl" id="design-system-section">
<div className="border-b border-border-quiet pb-space-sm mb-space-lg flex justify-between items-baseline">
<h2 className="font-headline-md text-headline-md text-primary uppercase">02 / DESIGN SYSTEM &amp; SPECIMEN</h2>
<span className="font-label-sm text-label-sm uppercase text-text-muted">SWISS GRID &amp; CHROMATIC ATOMS</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">

<div className="lg:col-span-4 border border-border-quiet p-space-md bg-surface-elevated flex flex-col justify-between">
<div>
<h3 className="font-label-md text-label-md uppercase text-primary mb-space-sm">Chromatic Spectrum</h3>
<div className="space-y-2">
<div className="flex items-center justify-between p-2 bg-canvas-pure border border-border-quiet">
<span className="font-label-sm text-label-sm uppercase text-primary">CANVAS PURE</span>
<span className="font-mono text-xs text-text-muted">#000000</span>
</div>
<div className="flex items-center justify-between p-2 bg-surface-elevated border border-border-quiet">
<span className="font-label-sm text-label-sm uppercase text-primary">SURFACE ELEVATED</span>
<span className="font-mono text-xs text-text-muted">#111111</span>
</div>
<div className="flex items-center justify-between p-2 bg-surface-subtle border border-border-quiet">
<span className="font-label-sm text-label-sm uppercase text-primary">SURFACE SUBTLE</span>
<span className="font-mono text-xs text-text-muted">#222222</span>
</div>
<div className="flex items-center justify-between p-2 bg-primary text-canvas-pure">
<span className="font-label-sm text-label-sm uppercase font-bold">ACCENT MONOCHROME</span>
<span className="font-mono text-xs text-canvas-pure font-bold">#FFFFFF</span>
</div>
</div>
</div>
<div className="pt-space-md text-text-muted font-body-sm text-body-sm">
            Mathematical contrast ratio strictly conforms to WCAG 2.1 AAA protocols across all functional surfaces.
          </div>
</div>

<div className="lg:col-span-8 border border-border-quiet p-space-md bg-surface-elevated">
<h3 className="font-label-md text-label-md uppercase text-primary mb-space-sm">Hierarchical Type Matrix</h3>
<div className="divide-y divide-border-quiet space-y-3">
<div className="pt-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
<div>
<span className="font-label-sm text-label-sm uppercase text-text-muted block">DISPLAY / OSWALD BOLD</span>
<span className="font-headline-lg text-headline-lg text-primary tracking-tight">KINETIC FLOW</span>
</div>
<span className="font-mono text-xs text-text-muted">80PX / L:88PX / -0.02EM</span>
</div>
<div className="pt-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
<div>
<span className="font-label-sm text-label-sm uppercase text-text-muted block">SUB-TITLE / OSWALD MEDIUM</span>
<span className="font-headline-sm text-headline-sm text-primary">HIGH VELOCITY SETTLEMENT</span>
</div>
<span className="font-mono text-xs text-text-muted">24PX / L:32PX / +0.02EM</span>
</div>
<div className="pt-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
<div>
<span className="font-label-sm text-label-sm uppercase text-text-muted block">BODY TEXT / HANKEN GROTESK</span>
<p className="font-body-md text-body-md text-on-surface max-w-md">Precision-cut geometric sans with high x-height engineered for crisp computational legibility.</p>
</div>
<span className="font-mono text-xs text-text-muted">15PX / L:24PX / REGULAR</span>
</div>
</div>
</div>
</div>
</section>

<section className="mb-space-xl">
<div className="border-b border-border-quiet pb-space-sm mb-space-lg flex justify-between items-baseline">
<h2 className="font-headline-md text-headline-md text-primary uppercase">03 / STRUCTURAL BREAKDOWN</h2>
<span className="font-label-sm text-label-sm uppercase text-text-muted">THREE-TIER FEATURE ARCHITECTURE</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">

<div className="border border-border-quiet bg-surface-elevated p-space-md flex flex-col justify-between">
<div>
<span className="font-mono text-xs text-text-muted block mb-2">MOD // 01</span>
<h4 className="font-headline-sm text-headline-sm uppercase text-primary mb-2" id="feat-1-title">Telemetry Ledger</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed" id="feat-1-desc">
              Real-time audit log streaming microsecond settlements across multi-region SWIFT and local SEPA equivalents.
            </p>
</div>
<div className="aspect-[4/3] bg-surface-subtle overflow-hidden border border-border-quiet relative">
<img alt="Feature 1" className="w-full h-full object-cover" data-alt="Dark aesthetic user interface showing real-time transaction streaming logs, brutalist data tables, and minimal monochrome chart lines." id="feat-1-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIxcyXktjPExmu7ROqW0_R4swd_nZtq-m9cOTVrLUYBqCFmfgkmLWgWqyISZW9g2gYtS6-TD3O99m1zMa8fAZFBIa2utsTDMqw8iJ32McNlcqJbGpGSY4CKsAJJoo9mR-TMnIGx3pbaxgijnNH5AxID1-EO4XeP7ezUmKKufFbpqTC0lipDWRuE9Le6aAJPzdiJGEBjyTDzIPRn-hEvoNZfnPpVe34xWgNp4v2wm5YqYDMbpAR4GNwwg" />
</div>
</div>

<div className="border border-border-quiet bg-surface-elevated p-space-md flex flex-col justify-between">
<div>
<span className="font-mono text-xs text-text-muted block mb-2">MOD // 02</span>
<h4 className="font-headline-sm text-headline-sm uppercase text-primary mb-2" id="feat-2-title">Autonomous Routing</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed" id="feat-2-desc">
              Algorithmic liquidity swaps configured via an expressive slider component offering instant slippage estimations.
            </p>
</div>
<div className="aspect-[4/3] bg-surface-subtle overflow-hidden border border-border-quiet relative">
<img alt="Feature 2" className="w-full h-full object-cover" data-alt="Monochrome financial routing slider interface with precision dial controls and dark geometric containers in high contrast." id="feat-2-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0LhibKRzOYSuTGEEeWICdFRUuTJbGMhsj_dVd05dMbDgwiqayATgF4793GcT0QEfe16VsHb9LJ63BUQzGfJFzguLWJwC1n3_Rk8c5W6P9kUqU6QXJtOqknLn_hADy1P2BxJ8274aaHCnxHzgWW7UTDF8bLAhmbONo7-uawLOcXBK9nGTDD3hZe3_QrKbmi7ld1K2ZJJVz0aPcG58jg4RpjR75zL-TNpAv2hhEAHb3V_VLMEQmqTQwcw" />
</div>
</div>

<div className="border border-border-quiet bg-surface-elevated p-space-md flex flex-col justify-between">
<div>
<span className="font-mono text-xs text-text-muted block mb-2">MOD // 03</span>
<h4 className="font-headline-sm text-headline-sm uppercase text-primary mb-2" id="feat-3-title">Encrypted Vault UI</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed" id="feat-3-desc">
              Hardware key security authentications wrapped in clean Swiss modular states with haptic feedback integration.
            </p>
</div>
<div className="aspect-[4/3] bg-surface-subtle overflow-hidden border border-border-quiet relative">
<img alt="Feature 3" className="w-full h-full object-cover" data-alt="Cryptographic security verification interface in minimalist dark UI style with biometric fingerprint icons and stark monochrome styling." id="feat-3-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2K_smdBYTQs0KF_Z4bxlxZsHAOUr55eobVLYfKfewimfpg2zB14IfVC3DwUYkMBD78KjYVBOActinvzv1ArGNKOAHA3GnaasG1YmMNeKXuZKZEztkZxj2TqGDI5ZBbj6A3t6CqlMlGGkcQLHs5rOAH3tee4SEMDBaq_2T6AuWMUJOk2TzcADF7ButdpjHFC_HxsLVsDaZklhPCbYc4eHO1jaIox-46wws0-xECjA2AJwt2na1lWrT6g" />
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-xl">

<div className="lg:col-span-7 border border-border-quiet p-space-lg bg-surface-elevated flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-space-md">
<span className="material-symbols-outlined text-primary text-[20px]">format_quote</span>
<span className="font-label-sm text-label-sm uppercase text-text-muted">CLIENT VERIFICATION &amp; APPRAISAL</span>
</div>
<blockquote className="font-headline-sm text-headline-sm text-primary uppercase leading-snug tracking-wide mb-space-md" id="testi-quote">
            "Kerubim SM stripped away decades of bloated fintech clutter. Our users execute enterprise swaps in seconds without manual training. It sets an uncompromising benchmark."
          </blockquote>
</div>
<div className="border-t border-border-quiet pt-space-md flex items-center justify-between">
<div>
<p className="font-label-md text-label-md uppercase text-primary" id="testi-name">DANIEL LIM</p>
<p className="font-body-sm text-body-sm text-text-muted" id="testi-role">Chief Product Officer, Lumen Bank SG</p>
</div>
<div className="flex items-center gap-1 text-primary">
<span className="material-symbols-outlined text-[16px]">verified</span>
<span className="font-mono text-xs">CERTIFIED</span>
</div>
</div>
</div>

<div className="lg:col-span-5 border border-border-quiet p-space-lg bg-surface-elevated flex flex-col justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase text-text-muted block mb-space-md">SYSTEM TELEMETRY &amp; OUTCOMES</span>
<div className="space-y-space-md">
<div className="border-b border-border-quiet pb-space-sm flex justify-between items-baseline">
<div>
<span className="font-label-sm text-label-sm uppercase text-text-muted block">TRANSACTION SPEED</span>
<span className="font-body-sm text-body-sm text-on-surface" id="metric-1-label">End-to-end execution</span>
</div>
<span className="font-headline-md text-headline-md text-primary font-bold" id="metric-1-val">+240%</span>
</div>
<div className="border-b border-border-quiet pb-space-sm flex justify-between items-baseline">
<div>
<span className="font-label-sm text-label-sm uppercase text-text-muted block">APP STORE RATING</span>
<span className="font-body-sm text-body-sm text-on-surface" id="metric-2-label">Across 12,000+ reviews</span>
</div>
<span className="font-headline-md text-headline-md text-primary font-bold" id="metric-2-val">4.9 / 5.0</span>
</div>
<div className="flex justify-between items-baseline">
<div>
<span className="font-label-sm text-label-sm uppercase text-text-muted block">DAILY ACTIVE USERS</span>
<span className="font-body-sm text-body-sm text-on-surface" id="metric-3-label">High-velocity founders</span>
</div>
<span className="font-headline-md text-headline-md text-primary font-bold" id="metric-3-val">85,000+</span>
</div>
</div>
</div>
<div className="pt-space-md border-t border-border-quiet mt-space-md text-xs font-mono text-text-muted flex items-center justify-between">
<span className="">AUDIT PERIOD: 90 DAYS POST-LAUNCH</span>
<span className="text-emerald-400">STATUS: ACCELERATING</span>
</div>
</div>
</section>

<section className="border-t border-border-quiet pt-space-xl mb-space-xl">
<div className="flex justify-between items-baseline mb-space-lg">
<h2 className="font-headline-sm text-headline-sm uppercase text-primary">SELECT ANOTHER PROJECT DIRECTLY</h2>
<span className="font-label-sm text-label-sm uppercase text-text-muted">INDEX 01 — 05</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-space-md" id="other-projects-grid">
  
  <div className="cursor-pointer border border-border-quiet bg-surface-elevated p-space-md hover:border-primary transition-all duration-300 group flex flex-col justify-between relative overflow-hidden" onClick={() => { /* switchProject('p1') */ }}>
    <div>
      <div className="flex justify-between items-center mb-space-sm">
        <span className="font-mono text-xs text-text-muted group-hover:text-primary transition-colors flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> 01 // BRAND
        </span>
        <span className="font-mono text-[10px] px-1.5 py-0.5 border border-border-quiet bg-canvas-pure text-text-muted">2024</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm uppercase text-primary mb-1 tracking-wide group-hover:text-white transition-colors">KOPI SENJA</h3>
      <p className="font-body-sm text-body-sm text-text-muted line-clamp-2 mb-space-sm">Specialty roastery brand monograph, blind deboss packaging &amp; retail identity in Malang.</p>
      <div className="flex flex-wrap gap-1 mb-space-md">
        <span className="font-label-sm text-[10px] px-1.5 py-0.5 bg-surface-subtle border border-border-quiet text-on-surface-variant uppercase">Tactile Print</span>
        <span className="font-label-sm text-[10px] px-1.5 py-0.5 bg-surface-subtle border border-border-quiet text-on-surface-variant uppercase">Headless</span>
      </div>
    </div>
    <div>
      <div className="aspect-[16/10] bg-surface-subtle overflow-hidden relative border border-border-quiet group-hover:border-border-defined transition-colors mb-space-sm">
        <img alt="Kopi Senja Preview" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Monochrome coffee packaging and brand identity design mockup on dark stone surface with minimalist typography and stark labels." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB00UrsJv4eoWHwUd-IJWKjGbmsrSWIDLG9Z0C7LD8ZNRtc_uwh4j2SE4EkZcpJGlX8tVBdqC89rJQEiZHaYs89-EirBmlR8D_TL3VJhwMJaV-a6ieQY0SBcA2TahxFtrApajxdampRVyE3QUzNYIGe5Z_ZR5M13NO_ZmVqdgaXYKdiLvE7F_x_T8OPrrE3QAVx44UKLm3X_vKTCA82agLBSjW07hio_v4JyelmWlE3Jmtlyxcue1gtw" />
        <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-canvas-pure/90 font-mono text-[9px] text-text-muted border border-border-quiet">ORIGIN: MLG</div>
      </div>
      <div className="flex items-center justify-between text-text-muted group-hover:text-primary transition-colors border-t border-border-quiet pt-space-xs">
        <span className="font-label-sm text-[11px] uppercase tracking-wider">Inspect Project</span>
        <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_outward</span>
      </div>
    </div>
  </div>

  
  <div className="cursor-pointer border border-primary bg-surface-elevated p-space-md hover:border-primary transition-all duration-300 group flex flex-col justify-between relative overflow-hidden ring-1 ring-primary/20" onClick={() => { /* switchProject('p2') */ }}>
    <div>
      <div className="flex justify-between items-center mb-space-sm">
        <span className="font-mono text-xs text-primary font-semibold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> 02 // FINTECH
        </span>
        <span className="font-mono text-[10px] px-1.5 py-0.5 border border-primary bg-primary text-canvas-pure font-bold">CURRENT</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm uppercase text-primary mb-1 tracking-wide group-hover:text-white transition-colors">LUMEN BANK</h3>
      <p className="font-body-sm text-body-sm text-text-muted line-clamp-2 mb-space-sm">Zero-latency institutional banking terminal, microsecond liquidity swaps &amp; design tokens.</p>
      <div className="flex flex-wrap gap-1 mb-space-md">
        <span className="font-label-sm text-[10px] px-1.5 py-0.5 bg-surface-subtle border border-border-quiet text-on-surface-variant uppercase">iOS Native</span>
        <span className="font-label-sm text-[10px] px-1.5 py-0.5 bg-surface-subtle border border-border-quiet text-on-surface-variant uppercase">React System</span>
      </div>
    </div>
    <div>
      <div className="aspect-[16/10] bg-surface-subtle overflow-hidden relative border border-primary transition-colors mb-space-sm">
        <img alt="Lumen Bank Preview" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Monochrome dashboard screen design with high contrast layout, crisp data readouts, and minimalist financial metrics." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2erZ6lEdQ-WIK4T-L-fIJEUvOryu7Cm5EQxPV5-CBRdlAG69RIfgsaofMa9R4wHIT2Fc-KKZdl5dFIwuEhJKRPboAKdjMOggKOo7iYOruvVzm8qyP0N2hZOOgS93gl5_eK8WhH4CaU4KaOEMexzO-eifW9JcvJZpp89EWCT6KeiB7zDWKS0QqAO0I8TvuzKf8dDYxWNSNyP0kVNOXOPBgH5YpP0nf5LXVFf0fS1TK72m-uUCQPHubMg" />
        <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-canvas-pure/90 font-mono text-[9px] text-emerald-400 border border-border-quiet">LIVE 60FPS</div>
      </div>
      <div className="flex items-center justify-between text-primary font-semibold transition-colors border-t border-border-quiet pt-space-xs">
        <span className="font-label-sm text-[11px] uppercase tracking-wider">Active Case Study</span>
        <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">check_circle</span>
      </div>
    </div>
  </div>

  
  <div className="cursor-pointer border border-border-quiet bg-surface-elevated p-space-md hover:border-primary transition-all duration-300 group flex flex-col justify-between relative overflow-hidden" onClick={() => { /* switchProject('p3') */ }}>
    <div>
      <div className="flex justify-between items-center mb-space-sm">
        <span className="font-mono text-xs text-text-muted group-hover:text-primary transition-colors flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> 03 // FULL-STACK
        </span>
        <span className="font-mono text-[10px] px-1.5 py-0.5 border border-border-quiet bg-canvas-pure text-text-muted">2024</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm uppercase text-primary mb-1 tracking-wide group-hover:text-white transition-colors">PIXEL PALS</h3>
      <p className="font-body-sm text-body-sm text-text-muted line-clamp-2 mb-space-sm">Web multiplayer arcade hub, real-time WebSocket state clusters &amp; custom sprite compositor.</p>
      <div className="flex flex-wrap gap-1 mb-space-md">
        <span className="font-label-sm text-[10px] px-1.5 py-0.5 bg-surface-subtle border border-border-quiet text-on-surface-variant uppercase">Next.js 14</span>
        <span className="font-label-sm text-[10px] px-1.5 py-0.5 bg-surface-subtle border border-border-quiet text-on-surface-variant uppercase">WebSockets</span>
      </div>
    </div>
    <div>
      <div className="aspect-[16/10] bg-surface-subtle overflow-hidden relative border border-border-quiet group-hover:border-border-defined transition-colors mb-space-sm">
        <img alt="Pixel Pals Preview" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Monochrome pixel art gaming community web interface on dark backdrop with chat rooms and leaderboard components." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK5hDL2TK1Uvyyzj_0OlAdQ6HU621OX4lluYCBjkuJubzF0g7UGIjTw2UwZ256jdumnuDlnLQqgqaZaAMz3BYE5SjFH_2EAluF4HYc-mGjFNPzLPl8rj_UII4_3uA8vlThoODfKAAuMGwtiffUu-9zwZZoF8LrYu07jY5C0rhL88JyLVirzyFRVlPuiOJtgpjCYxl7h1B_03ndXkigVCOH381XkgJ8wWjjhlCVnE84IwR7TlX9U7HVDA" />
        <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-canvas-pure/90 font-mono text-[9px] text-text-muted border border-border-quiet">SUB-15MS</div>
      </div>
      <div className="flex items-center justify-between text-text-muted group-hover:text-primary transition-colors border-t border-border-quiet pt-space-xs">
        <span className="font-label-sm text-[11px] uppercase tracking-wider">Inspect Project</span>
        <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_outward</span>
      </div>
    </div>
  </div>

  
  <div className="cursor-pointer border border-border-quiet bg-surface-elevated p-space-md hover:border-primary transition-all duration-300 group flex flex-col justify-between relative overflow-hidden" onClick={() => { /* switchProject('p4') */ }}>
    <div>
      <div className="flex justify-between items-center mb-space-sm">
        <span className="font-mono text-xs text-text-muted group-hover:text-primary transition-colors flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-outline"></span> 04 // ARCHIVE
        </span>
        <span className="font-mono text-[10px] px-1.5 py-0.5 border border-border-quiet bg-canvas-pure text-text-muted">2024</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm uppercase text-primary mb-1 tracking-wide group-hover:text-white transition-colors">BATIK NOW</h3>
      <p className="font-body-sm text-body-sm text-text-muted line-clamp-2 mb-space-sm">Digital preservation &amp; IIIF micro-texture monograph documenting endangered Nusantara motifs.</p>
      <div className="flex flex-wrap gap-1 mb-space-md">
        <span className="font-label-sm text-[10px] px-1.5 py-0.5 bg-surface-subtle border border-border-quiet text-on-surface-variant uppercase">IIIF Canvas</span>
        <span className="font-label-sm text-[10px] px-1.5 py-0.5 bg-surface-subtle border border-border-quiet text-on-surface-variant uppercase">Sanity CMS</span>
      </div>
    </div>
    <div>
      <div className="aspect-[16/10] bg-surface-subtle overflow-hidden relative border border-border-quiet group-hover:border-border-defined transition-colors mb-space-sm">
        <img alt="Batik Now Preview" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Monochrome editorial textile archive website showcasing high detail Indonesian batik patterns with stark Swiss typography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS6n-GWHjO_NY5rfyGGj1CXkTPUx2kyuCSRn77C0d0qJ7V7tYqpjDIWRlJ4CkKc-bxfa8E6QjxgzQLfnrkP8XRvZv9Ff3apgjagrePkQII9eYVLlRzUZu4qbRBI0zdb7Ct2I2Rol0Gm_e367e-JiP4SJbjTFhjr88jQH63Ksey4ffJXeSgpGDt8VtNarA-EL1sXk7oq35Cn4JT9FAlQOrlK3_7yUFS7kwLfJ9Ny72aC7ds1dC79-rPhw" />
        <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-canvas-pure/90 font-mono text-[9px] text-text-muted border border-border-quiet">24K RES</div>
      </div>
      <div className="flex items-center justify-between text-text-muted group-hover:text-primary transition-colors border-t border-border-quiet pt-space-xs">
        <span className="font-label-sm text-[11px] uppercase tracking-wider">Inspect Project</span>
        <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_outward</span>
      </div>
    </div>
  </div>

  
  <div className="cursor-pointer border border-border-quiet bg-surface-elevated p-space-md hover:border-primary transition-all duration-300 group flex flex-col justify-between relative overflow-hidden" onClick={() => { /* switchProject('p5') */ }}>
    <div>
      <div className="flex justify-between items-center mb-space-sm">
        <span className="font-mono text-xs text-text-muted group-hover:text-primary transition-colors flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> 05 // CLOUD OS
        </span>
        <span className="font-mono text-[10px] px-1.5 py-0.5 border border-border-quiet bg-canvas-pure text-text-muted">2025</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm uppercase text-primary mb-1 tracking-wide group-hover:text-white transition-colors">ORBIT OS</h3>
      <p className="font-body-sm text-body-sm text-text-muted line-clamp-2 mb-space-sm">Modular tiling browser OS with local-first WebAssembly pipelines and distributed terminal REPL.</p>
      <div className="flex flex-wrap gap-1 mb-space-md">
        <span className="font-label-sm text-[10px] px-1.5 py-0.5 bg-surface-subtle border border-border-quiet text-on-surface-variant uppercase">WebAssembly</span>
        <span className="font-label-sm text-[10px] px-1.5 py-0.5 bg-surface-subtle border border-border-quiet text-on-surface-variant uppercase">WebGL Tiler</span>
      </div>
    </div>
    <div>
      <div className="aspect-[16/10] bg-surface-subtle overflow-hidden relative border border-border-quiet group-hover:border-border-defined transition-colors mb-space-sm">
        <img alt="Orbit OS Preview" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Minimalist desktop operating system browser interface with floating window managers, command palettes, and monochrome dark mode widgets." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx1iY8zbkcTpPf20JPgqD57OyAWVpikt_c4f4w_0xCbq2y8r_eRFl8j377MkqfiAJqEPf6R6da0tqjDDDOsP6mVkKadApys1t7O61ox8v7WPkT5OM9_rPnYSHMnBXWp8_sKRg4zSUP9IGeRW4tuyHZA-p2w4KZYwusMrhp-GUaw8NHX5W9kvl0wkBusLU6mEmv95SC5AwmrueKxbeqPGHLg2fmC399kRt6UwsKDiaACoYiMQEHtWKl7A" />
        <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-canvas-pure/90 font-mono text-[9px] text-text-muted border border-border-quiet">&lt; 85MB RAM</div>
      </div>
      <div className="flex items-center justify-between text-text-muted group-hover:text-primary transition-colors border-t border-border-quiet pt-space-xs">
        <span className="font-label-sm text-[11px] uppercase tracking-wider">Inspect Project</span>
        <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_outward</span>
      </div>
    </div>
  </div>
</div>
</section>
</main>
    </div>
  );
}
