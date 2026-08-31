"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HERO } from "@/lib/data";
import { useControl } from "./ControlProvider";

export default function Hero() {
  const { heroSlides } = useControl();
  const slides = heroSlides && heroSlides.length ? heroSlides : HERO;
  const [i, setI] = useState(0);

  useEffect(() => {
    setI(0);
  }, [slides]);

  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % slides.length), 5200);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section className="hero">
      <div className="hero-track" style={{ transform: `translateX(-${i * 100}%)` }}>
        {slides.map((s, k) => (
          <Link className="hero-slide" href={s.href || "#"} key={k}>
            {s.img ? <img src={s.img} alt={s.title || ""} /> : <div className="hero-slide-empty" />}
            {(s.title || s.sub) && (
              <div className="hero-copy">
                {s.title && <h2>{s.title}</h2>}
                {s.sub && <p>{s.sub}</p>}
                <span className="btn btn-hero">بیشتر بدانید</span>
              </div>
            )}
          </Link>
        ))}
      </div>
      <button className="hero-nav hero-prev" onClick={() => setI((x) => (x - 1 + slides.length) % slides.length)}>‹</button>
      <button className="hero-nav hero-next" onClick={() => setI((x) => (x + 1) % slides.length)}>›</button>
      <div className="hero-dots">
        {slides.map((_, k) => <button key={k} className={k === i ? "on" : ""} onClick={() => setI(k)} />)}
      </div>
    </section>
  );
}
