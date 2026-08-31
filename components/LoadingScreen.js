"use client";
import { useEffect, useState } from "react";
import { useControl } from "./ControlProvider";

// Full-screen loading overlay: logo + site name + progress bar + percentage.
// It is server-rendered (visible from the very first paint) and fades out only
// once the page and web fonts are fully ready — eliminating the font FOUC.
export default function LoadingScreen() {
  const { siteName, logo } = useControl();
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("loading"); // loading | fading | done

  useEffect(() => {
    let raf;
    let finished = false;
    const start = performance.now();
    const D = 1000; // ramp duration (ms)

    const tick = (now) => {
      const p = Math.min(92, ((now - start) / D) * 92);
      setProgress(p);
      if (p < 92 && !finished) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const finish = () => {
      if (finished) return;
      finished = true;
      cancelAnimationFrame(raf);
      setProgress(100);
      setPhase("fading");
      setTimeout(() => setPhase("done"), 450);
    };

    const onReady = () => {
      // Wait for fonts (including any custom font) before revealing.
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => setTimeout(finish, 200));
      } else {
        setTimeout(finish, 200);
      }
    };

    if (document.readyState === "complete") onReady();
    else window.addEventListener("load", onReady);

    // Safety: never block the site for more than ~4.5s.
    const safety = setTimeout(finish, 4500);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(safety);
      window.removeEventListener("load", onReady);
    };
  }, []);

  if (phase === "done") return null;

  const logoSrc = logo && logo.preview ? logo.preview : "/brand/datakala-wordmark.png";

  return (
    <div className={"dk-loader" + (phase === "fading" ? " fading" : "")} aria-hidden={phase !== "loading"}>
      <div className="dk-loader-inner">
        <img className="dk-loader-logo" src={logoSrc} alt={siteName || "دیتاکالا"} />
        <div className="dk-loader-name">{siteName || "دیتاکالا"}</div>
        <div className="dk-loader-bar">
          <div className="dk-loader-fill" style={{ width: `${Math.round(progress)}%` }} />
        </div>
        <div className="dk-loader-pct">{Math.round(progress)}%</div>
      </div>
    </div>
  );
}
