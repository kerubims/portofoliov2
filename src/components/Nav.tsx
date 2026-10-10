"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const nav = document.querySelector(".nav");
    if (!nav) return;

    let navQueued = false;

    function updateNav() {
      navQueued = false;
      const lightSections = Array.from(document.querySelectorAll('[data-nav="light"]'));
      const navRect = nav!.getBoundingClientRect();
      const y = navRect.top + navRect.height / 2;
      const overLight = lightSections.some((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= y && rect.bottom >= y;
      });
      setIsDark(overLight);
    }

    function queueNav() {
      if (navQueued) return;
      navQueued = true;
      requestAnimationFrame(updateNav);
    }

    window.addEventListener("scroll", queueNav, { passive: true });
    window.addEventListener("resize", queueNav);
    
    // Initial update needs to happen after next paint sometimes
    requestAnimationFrame(updateNav);

    return () => {
      window.removeEventListener("scroll", queueNav);
      window.removeEventListener("resize", queueNav);
    };
  }, []);

  return (
    <nav className={`nav glass ${isDark ? "nav--dark" : ""}`} aria-label="Main">
      <Link className="nav__logo" href="/#hero"><b>KERUBIM</b> <span>SM</span></Link>
      <ul className="nav__links">
        <li><Link href="/#about">About</Link></li>
        <li><Link href="/#work">Work</Link></li>
        <li><Link href="/#testimonials">Words</Link></li>
      </ul>
      <div className="nav__actions">
        <a 
          className="btn glass btn--sm nav__cv" 
          href="/CV_KERUBIM%20SERAFIM%20MAHANAIM.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          title="View CV"
        >
          <span className="nav__cv-text">Download CV</span>
          <span className="nav__cv-short">CV</span>
        </a>
        <Link className="btn btn--light btn--sm" href="/#contact">Contact</Link>
      </div>
    </nav>
  );
}
