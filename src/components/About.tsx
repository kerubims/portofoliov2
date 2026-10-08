"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;
    
    const MARQUEE_SPEED = 60; // px per second
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const marqueeRows = Array.from(marqueeRef.current.querySelectorAll(".marquee__row"));

    if (!marqueeRows.length || reduceMotion) return;

    let destroyed = false;
    let animId: number;

    const rows = marqueeRows.map((row) => {
      const track = row.querySelector(".marquee__track") as HTMLElement;
      const group = track.querySelector(".marquee__group") as HTMLElement;
      return {
        track,
        group,
        dir: row.classList.contains("marquee--reverse") ? 1 : -1,
        width: 0,
        offset: 0,
      };
    });

    function measureMarquee() {
      if (destroyed) return;
      for (const r of rows) {
        r.track.querySelectorAll(".marquee__group[data-clone]").forEach((c) => c.remove());
        r.width = r.group.getBoundingClientRect().width;
        if (!r.width) continue;
        const parent = r.track.parentElement;
        if (!parent) continue;
        
        const needed = Math.ceil(parent.offsetWidth / r.width) + 1;
        for (let i = 0; i < needed; i++) {
          const clone = r.group.cloneNode(true) as HTMLElement;
          clone.dataset.clone = "true";
          r.track.appendChild(clone);
        }
        r.offset %= r.width;
      }
    }

    let visible = true;
    let boost = 0;
    let lastScrollY = window.scrollY;
    let lastTime = performance.now();

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(marqueeRef.current);

    function marqueeTick(now: number) {
      if (destroyed) return;
      
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      const scrollY = window.scrollY;
      const velocity = dt > 0 ? Math.abs(scrollY - lastScrollY) / dt : 0;
      lastScrollY = scrollY;
      const boostTarget = Math.min(velocity * 0.4, 900);
      boost += (boostTarget - boost) * 0.08;

      if (visible) {
        const step = (MARQUEE_SPEED + boost) * dt;
        for (const r of rows) {
          if (!r.width) continue;
          r.offset = (r.offset + step) % r.width;
          const x = r.dir < 0 ? -r.offset : r.offset - r.width;
          r.track.style.transform = `translate3d(${x}px, 0, 0)`;
        }
      }
      animId = requestAnimationFrame(marqueeTick);
    }

    measureMarquee();
    if (document.fonts) {
      document.fonts.ready.then(measureMarquee);
    }
    window.addEventListener("resize", measureMarquee);
    animId = requestAnimationFrame(marqueeTick);

    return () => {
      destroyed = true;
      observer.disconnect();
      window.removeEventListener("resize", measureMarquee);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section className="about" id="about">
      <div className="marquee" aria-label="Web Development, LLM Integration, IT Support, Linux Server. Kerubim SM, Developer, Indonesia, Malang." ref={marqueeRef}>
        <div className="marquee__row" aria-hidden="true">
          <div className="marquee__track">
            <div className="marquee__group">
              <span>Web Development</span><span className="marquee__sep">✦</span>
              <span className="outline">LLM Integration</span><span className="marquee__sep">✦</span>
              <span>IT Support</span><span className="marquee__sep">✦</span>
              <span className="outline">Linux Server</span><span className="marquee__sep">✦</span>
            </div>
          </div>
        </div>
        <div className="marquee__row marquee--reverse" aria-hidden="true">
          <div className="marquee__track">
            <div className="marquee__group">
              <span>Kerubim SM</span><span className="marquee__sep">✦</span>
              <span className="outline">Developer</span><span className="marquee__sep">✦</span>
              <span>Indonesia</span><span className="marquee__sep">✦</span>
              <span className="outline">Malang</span><span className="marquee__sep">✦</span>
            </div>
          </div>
        </div>
      </div>

      <div className="about__body container">
        <p className="eyebrow">(01) About</p>
        <p className="about__text">
          I&apos;m Kerubim Serafim Mahanaim, a full-stack web developer based in Malang. I engineer 
          <strong> high-performance systems</strong>, scalable web applications, and seamless digital experiences for startups and forward-thinking brands worldwide.
        </p>
        <ul className="about__tags">
          <li className="tag">Web Development</li>
          <li className="tag">LLM Integration</li>
          <li className="tag">Linux Server</li>
          <li className="tag">IT Support</li>
          <li className="tag">React / Next.js</li>
        </ul>
      </div>
    </section>
  );
}
