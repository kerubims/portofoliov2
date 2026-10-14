"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const [time, setTime] = useState("--:-- WIB");
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // ----------------------------------------------------------------------
    // Live local time in Malang (WIB)
    // ----------------------------------------------------------------------
    const timeFormat = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Jakarta",
      hour: "2-digit",
      minute: "2-digit",
    });

    const updateTime = () => {
      setTime(`${timeFormat.format(new Date())} WIB`);
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 30000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Check if video is already playing or ready to play
    if (video.readyState >= 3) {
      setIsVideoLoaded(true);
    }

    const handleReady = () => setIsVideoLoaded(true);
    video.addEventListener("playing", handleReady);
    video.addEventListener("loadeddata", handleReady);
    video.addEventListener("canplaythrough", handleReady);

    // Explicitly trigger play for browsers with autoplay policies
    video.play().catch(() => {
      // Browser autoplay policy might require explicit user interaction;
      // in that case, the poster image stays visible gracefully.
    });

    // Pause video playback when out of viewport to free GPU/CPU resources
    const heroSection = document.getElementById("hero");
    let observer: IntersectionObserver | null = null;
    if (heroSection) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) {
            video.pause();
          } else {
            video.play().catch(() => {});
          }
        },
        { threshold: 0.05 }
      );
      observer.observe(heroSection);
    }

    return () => {
      if (observer) observer.disconnect();
      video.removeEventListener("playing", handleReady);
      video.removeEventListener("loadeddata", handleReady);
      video.removeEventListener("canplaythrough", handleReady);
    };
  }, []);

  return (
    <section className="hero" id="hero">
      {/* Placeholder image shown while video is loading */}
      <img
        src="/assets/lazyhero.webp"
        alt="Hero Visual"
        className={`hero__poster ${isVideoLoaded ? "is-hidden" : ""}`}
        fetchPriority="high"
        aria-hidden="true"
      />

      {/* Continuously looping hero video with lightweight metadata preload */}
      <video
        ref={videoRef}
        className="hero__video"
        poster="/assets/lazyhero.webp"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        onPlaying={() => setIsVideoLoaded(true)}
      >
        <source src="/assets/hero.webm" type="video/webm" />        
      </video>

      <div className="hero__shade" aria-hidden="true"></div>

      {/* Floating Mascots Layer (between video and KERUBIM text) */}
      <div className="hero__mascots" aria-hidden="true">
        {/* Mascot 5: Pink astronaut floating near KERUBIM title */}
        <div className="hero__mascot hero__mascot--pink">
          <img
            src="/assets/mascot-portofolio/mascot5.webp"
            alt="Mascot Astronaut Pink"
            className="hero__mascot-img"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Mascot 3: UFO alien octopus hovering in upper right sky */}
        <div className="hero__mascot hero__mascot--ufo">
          <img
            src="/assets/mascot-portofolio/mascot3.webp"
            alt="Mascot UFO Octopus"
            className="hero__mascot-img"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <div className="hero__content container">
        <div className="hero__main">
          <h1 className="hero__title">KERUBIM</h1>
          <p className="hero__intro">
            Web Developer from Indonesia crafting high-performance web applications and digital experiences.
          </p>
          <div className="hero__actions">
            <Link className="btn btn--light" href="#contact">
              Get in touch{" "}
              <span className="btn__arrow" aria-hidden="true">
                <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link className="btn glass" href="#work">
              View work
            </Link>
          </div>
        </div>

        <aside className="hero__stats">
          <div className="stat glass">
            <span className="stat__value">120</span>
            <span className="stat__label">Projects shipped</span>
          </div>
          <div className="stat glass">
            <span className="stat__label">Based in</span>
            <span className="stat__value stat__value--sm">MALANG, ID</span>
            <span className="stat__time" id="jakartaTime">
              {time}
            </span>
          </div>
        </aside>
      </div>

      {/* Sitting Fox Astronaut Mascot bridging Home and About with instant transparent poster */}
      <div className="hero__sitting-mascot" aria-hidden="true">
        <video
          className="hero__sitting-mascot-video"
          poster="/assets/video-maskot-transparan/home-poster.webp"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/assets/video-maskot-transparan/home-transparent.webm" type="video/webm" />
        </video>
      </div>

      <Link className="hero__scroll glass" href="#about" aria-label="Scroll to About">
        <span className="hero__scroll-dot"></span>
      </Link>
    </section>
  );
}
