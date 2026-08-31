"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HERO } from "@/lib/data";

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % HERO.length), 5200);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="hero">
      <div className="hero-track" style={{ transform: `translateX(-${i * 100}%)` }}>
        {HERO.map((s) => (
          <Link className="hero-slide" href={s.href} key={s.title}>
            <img src={s.img} alt={s.title} />
            <div className="hero-copy">
              <h2>{s.title}</h2>
              <p>{s.sub}</p>
              <span className="btn btn-hero">بیشتر بدانید</span>
            </div>
          </Link>
        ))}
      </div>
      <button className="hero-nav hero-prev" onClick={() => setI((x) => (x - 1 + HERO.length) % HERO.length)}>‹</button>
      <button className="hero-nav hero-next" onClick={() => setI((x) => (x + 1) % HERO.length)}>›</button>
      <div className="hero-dots">
        {HERO.map((_, k) => <button key={k} className={k === i ? "on" : ""} onClick={() => setI(k)} />)}
      </div>
    </section>
  );
}
