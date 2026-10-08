"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const [time, setTime] = useState("--:-- WIB");
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    // ----------------------------------------------------------------------
    // Hero video scrub
    // ----------------------------------------------------------------------
    const hero = heroRef.current;
    const canvas = canvasRef.current;
    if (!hero || !canvas) return;

    let destroyed = false;
    let animId: number;

    const FRAME_COUNT = 96;
    const MAX_FRAME_SIDE = 1280;
    const PLAYBACK_RATE = 2;
    const CAPTURE_RUNS = 3;
    const EASE = 0.12;
    const VIDEO_SRC = "/assets/Video%20Scrub.mp4"; // Updated path for public/
    const END_MARGIN = 0.05;

    const ctx = canvas.getContext("2d");
    const frames = new Array(FRAME_COUNT).fill(null);

    let target = 0;
    let current = 0;
    let lastIndex = -1;
    let lastBitmap: ImageBitmap | null = null;
    let dirty = true;

    function resizeCanvas() {
      if (destroyed) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = hero!.getBoundingClientRect();
      canvas!.width = Math.round(rect.width * dpr);
      canvas!.height = Math.round(rect.height * dpr);
      dirty = true;
    }

    function nearestFrame(index: number) {
      for (let d = 0; d < FRAME_COUNT; d++) {
        if (frames[index - d]) return frames[index - d];
        if (frames[index + d]) return frames[index + d];
      }
      return null;
    }

    function draw(bitmap: ImageBitmap) {
      if (!ctx || !canvas) return;
      const cw = canvas.width;
      const ch = canvas.height;
      const scale = Math.max(cw / bitmap.width, ch / bitmap.height);
      const w = bitmap.width * scale;
      const h = bitmap.height * scale;
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(bitmap, (cw - w) / 2, (ch - h) / 2, w, h);
    }

    function tick() {
      if (destroyed) return;
      current += (target - current) * EASE;
      const index = Math.round(current);
      const bitmap = nearestFrame(index);

      if (bitmap && (dirty || index !== lastIndex || bitmap !== lastBitmap)) {
        draw(bitmap);
        lastIndex = index;
        lastBitmap = bitmap;
        dirty = false;
      }
      animId = requestAnimationFrame(tick);
    }

    function setTargetFromX(clientX: number) {
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const progress = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
      target = progress * (FRAME_COUNT - 1);
    }

    const onMouseMove = (e: MouseEvent) => setTargetFromX(e.clientX);
    const onTouchStart = (e: TouchEvent) => setTargetFromX(e.touches[0].clientX);
    const onTouchMove = (e: TouchEvent) => setTargetFromX(e.touches[0].clientX);

    hero.addEventListener("mousemove", onMouseMove);
    hero.addEventListener("touchstart", onTouchStart, { passive: true });
    hero.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("resize", resizeCanvas);

    resizeCanvas();
    animId = requestAnimationFrame(tick);

    // Extraction
    const video = document.createElement("video");
    video.src = VIDEO_SRC;
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";
    video.setAttribute("aria-hidden", "true");
    video.style.cssText = "position:fixed;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none;";
    document.body.appendChild(video);

    const scratch = document.createElement("canvas");
    const scratchCtx = scratch.getContext("2d");

    const once = (el: any, type: string) => new Promise((resolve) => el.addEventListener(type, resolve, { once: true }));

    const loader = document.getElementById("loader");
    const loaderFill = document.getElementById("loaderFill");
    const loaderPct = document.getElementById("loaderPct");
    const loaderBar = loaderFill && loaderFill.parentElement;
    let loadedCount = 0;

    function updateLoader() {
      if (!loader || !loaderFill || !loaderPct || !loaderBar) return;
      const pct = Math.round((loadedCount / FRAME_COUNT) * 100);
      loaderFill.style.transform = `scaleX(${loadedCount / FRAME_COUNT})`;
      loaderPct.textContent = `${pct}%`;
      loaderBar.setAttribute("aria-valuenow", String(pct));
    }

    function hideLoader() {
      if (loader) loader.classList.add("is-done");
    }

    function captureFrame(slot: number) {
      if (!scratchCtx) return Promise.resolve();
      scratchCtx.drawImage(video, 0, 0, scratch.width, scratch.height);
      return createImageBitmap(scratch).then((bitmap) => {
        if (destroyed) {
          bitmap.close();
          return;
        }
        if (frames[slot]) {
          bitmap.close();
          return;
        }
        frames[slot] = bitmap;
        loadedCount++;
        updateLoader();
      });
    }

    function whenVisible() {
      if (!document.hidden) return Promise.resolve();
      return new Promise<void>((resolve) => {
        const check = () => {
          if (document.hidden) return;
          document.removeEventListener("visibilitychange", check);
          resolve();
        };
        document.addEventListener("visibilitychange", check);
      });
    }

    function playthrough(endTime: number) {
      return new Promise<string>((resolve) => {
        const pending: Promise<void>[] = [];
        const claimed = new Set<number>();
        let done = false;

        const finish = (result = "done") => {
          if (done) return;
          done = true;
          clearTimeout(safety);
          video.removeEventListener("ended", onEnded);
          video.removeEventListener("pause", onPause);
          video.pause();
          Promise.all(pending).then(() => resolve(result));
        };
        const onEnded = () => finish();
        const onPause = () => finish(document.hidden ? "hidden" : "done");

        const onFrame = (_now: any, meta: any) => {
          if (done) return;
          const slot = Math.min(
            FRAME_COUNT - 1,
            Math.max(0, Math.round((meta.mediaTime / endTime) * (FRAME_COUNT - 1)))
          );
          if (!frames[slot] && !claimed.has(slot)) {
            claimed.add(slot);
            pending.push(captureFrame(slot));
          }
          if (meta.mediaTime >= endTime) finish();
          else if ("requestVideoFrameCallback" in video) {
            (video as any).requestVideoFrameCallback(onFrame);
          }
        };

        const safety = setTimeout(
          () => finish(document.hidden ? "hidden" : "done"),
          (endTime / PLAYBACK_RATE) * 1000 + 4000
        );

        video.currentTime = 0;
        once(video, "seeked").then(() => {
          if (!frames[0]) {
            claimed.add(0);
            pending.push(captureFrame(0));
          }
          video.playbackRate = PLAYBACK_RATE;
          if ("requestVideoFrameCallback" in video) {
            (video as any).requestVideoFrameCallback(onFrame);
          }
          video
            .play()
            .then(() => {
              video.addEventListener("ended", onEnded);
              video.addEventListener("pause", onPause);
            })
            .catch(() => finish(document.hidden ? "hidden" : "failed"));
        });
      });
    }

    async function fillMissing(endTime: number) {
      for (let slot = 0; slot < FRAME_COUNT; slot++) {
        if (destroyed) return;
        if (frames[slot]) continue;
        await whenVisible();
        video.currentTime = (slot / (FRAME_COUNT - 1)) * endTime;
        await once(video, "seeked");
        await captureFrame(slot);
      }
    }

    async function extractFrames() {
      if (video.readyState < 1) await once(video, "loadedmetadata");
      if (destroyed) return;

      const scale = Math.min(1, MAX_FRAME_SIDE / Math.max(video.videoWidth, video.videoHeight));
      scratch.width = Math.round(video.videoWidth * scale);
      scratch.height = Math.round(video.videoHeight * scale);

      const endTime = Math.max(0, video.duration - END_MARGIN);

      if ("requestVideoFrameCallback" in HTMLVideoElement.prototype) {
        let runs = 0;
        while (runs < CAPTURE_RUNS && frames.includes(null)) {
          if (destroyed) break;
          await whenVisible();
          const result = await playthrough(endTime);
          if (result === "failed") break;
          if (result === "done") runs++;
        }
      }
      await fillMissing(endTime);

      if (destroyed) return;
      video.pause();
      video.removeAttribute("src");
      video.load();
      video.remove();
    }

    extractFrames()
      .catch((err) => console.error("Hero video scrub failed:", err))
      .finally(() => {
        if (!destroyed) hideLoader();
      });

    return () => {
      destroyed = true;
      clearInterval(timeInterval);
      cancelAnimationFrame(animId);
      hero.removeEventListener("mousemove", onMouseMove);
      hero.removeEventListener("touchstart", onTouchStart);
      hero.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", resizeCanvas);
      video.remove();
      frames.forEach(f => f && f.close());
    };
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <canvas className="hero__canvas" id="heroCanvas" aria-hidden="true" ref={canvasRef}></canvas>
      <div className="hero__shade" aria-hidden="true"></div>

      <div className="hero__content container">
        <div className="hero__main">
          <h1 className="hero__title">KERUBIM</h1>
          <p className="hero__intro">Web Developer from Indonesia crafting high-performance web applications and digital experiences.</p>
          <div className="hero__actions">
            <Link className="btn btn--light" href="#contact">Get in touch <span className="btn__arrow" aria-hidden="true"><svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span></Link>
            <Link className="btn glass" href="#work">View work</Link>
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
            <span className="stat__time" id="jakartaTime">{time}</span>
          </div>
        </aside>
      </div>

      <Link className="hero__scroll glass" href="#about" aria-label="Scroll to About">
        <span className="hero__scroll-dot"></span>
      </Link>


    </section>
  );
}
