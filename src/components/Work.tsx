"use client";

import { useEffect, useRef, useState } from "react";

export default function Work() {
  const workRef = useRef<HTMLElement>(null);
  const workTrackRef = useRef<HTMLDivElement>(null);
  const workProgressRef = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const work = workRef.current;
    const workTrack = workTrackRef.current;
    const workProgress = workProgressRef.current;

    if (!work || !workTrack || !workProgress) return;

    const cards = Array.from(workTrack.querySelectorAll(".project")) as HTMLElement[];
    let distance = 0;

    function measureWork() {
      if (!work || !workTrack) return;
      if (window.innerWidth < 900) {
        distance = 0;
        work.style.height = "auto";
        workTrack.style.transform = "none";
      } else {
        distance = Math.max(0, workTrack.scrollWidth - window.innerWidth);
        work.style.height = `${distance + window.innerHeight}px`;
      }
      updateWork();
    }

    function updateWork() {
      if (!work || !workTrack || !workProgress) return;
      if (window.innerWidth < 900) {
        workTrack.style.transform = "none";
        workProgress.style.width = "0%";
        return;
      }
      const top = work.getBoundingClientRect().top;
      const progress = distance ? Math.min(Math.max(-top / distance, 0), 1) : 0;

      workTrack.style.transform = `translate3d(${-progress * distance}px, 0, 0)`;
      workProgress.style.width = `${progress * 100}%`;

      const center = window.innerWidth * progress + progress * distance;
      let currentIndex = 0;
      let best = Infinity;
      cards.forEach((card, i) => {
        const d = Math.abs(card.offsetLeft + card.offsetWidth / 2 - center);
        if (d < best) {
          best = d;
          currentIndex = i;
        }
      });
      setCurrent(currentIndex + 1);
    }

    window.addEventListener("scroll", updateWork, { passive: true });
    window.addEventListener("resize", measureWork);
    
    if (document.fonts) {
      document.fonts.ready.then(measureWork);
    }
    measureWork();

    return () => {
      window.removeEventListener("scroll", updateWork);
      window.removeEventListener("resize", measureWork);
    };
  }, []);

  return (
    <section className="work" id="work" data-nav="light" ref={workRef}>
      <div className="work__sticky">
        <div className="work__head container">
          <p className="eyebrow">(02) Selected Work</p>
          <p className="work__counter"><span>{String(current).padStart(2, "0")}</span> / 05</p>
        </div>

        <div className="work__track" id="workTrack" ref={workTrackRef}>
          <div className="work__intro">
            <h2 className="work__title">Selected<br />Projects</h2>
            <p>Scroll to explore a few favourites from the last couple of years.</p>
          </div>

          <article className="project project--kopi">
            <div className="project__art"></div>
            <span className="project__num">01</span>
            <div className="project__info glass">
              <div>
                <h3 className="project__title">Kopi Senja</h3>
                <p className="project__cat">Brand identity · Packaging</p>
              </div>
              <span className="project__year">2025</span>
            </div>
          </article>

          <article className="project project--lumen">
            <div className="project__art"></div>
            <span className="project__num">02</span>
            <div className="project__info glass">
              <div>
                <h3 className="project__title">Lumen Bank</h3>
                <p className="project__cat">Mobile app · UI / UX</p>
              </div>
              <span className="project__year">2025</span>
            </div>
          </article>

          <article className="project project--pixel">
            <div className="project__art"></div>
            <span className="project__num">03</span>
            <div className="project__info glass">
              <div>
                <h3 className="project__title">Pixel Pals</h3>
                <p className="project__cat">Full-stack web app · React</p>
              </div>
              <span className="project__year">2024</span>
            </div>
          </article>

          <article className="project project--batik">
            <div className="project__art"></div>
            <span className="project__num">04</span>
            <div className="project__info glass">
              <div>
                <h3 className="project__title">Batik Now</h3>
                <p className="project__cat">Editorial · Art direction</p>
              </div>
              <span className="project__year">2024</span>
            </div>
          </article>

          <article className="project project--orbit">
            <div className="project__art"></div>
            <span className="project__num">05</span>
            <div className="project__info glass">
              <div>
                <h3 className="project__title">Orbit OS</h3>
                <p className="project__cat">Product design · Web</p>
              </div>
              <span className="project__year">2023</span>
            </div>
          </article>
        </div>

        <div className="work__progress" aria-hidden="true"><span id="workProgress" ref={workProgressRef}></span></div>
      </div>
    </section>
  );
}
