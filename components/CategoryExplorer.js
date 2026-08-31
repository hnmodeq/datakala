"use client";
import Link from "next/link";
import { useState } from "react";
import { CATEGORIES } from "@/lib/data";
import { MEGA } from "@/lib/mega";

export default function CategoryExplorer({ initial = "switches" }) {
  const [active, setActive] = useState(initial);
  const [page, setPage] = useState(0);
  const cat = CATEGORIES.find((c) => c.id === active) || CATEGORIES[0];
  const families = MEGA[active] || cat.families || [];
  const pageSize = 4;
  const pages = Math.max(1, Math.ceil(families.length / pageSize));
  const slice = families.slice(page * pageSize, page * pageSize + pageSize);

  const enter = (id) => {
    setActive(id);
    setPage(0);
  };

  return (
    <section className="cat-explorer">
      <div className="container">
        <div className="cat-icons">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              className={"qcat" + (c.id === active ? " on" : "")}
              onMouseEnter={() => enter(c.id)}
              onClick={() => enter(c.id)}
              type="button"
            >
              <img src={c.icon} alt="" />
              <span>{c.name}</span>
            </button>
          ))}
        </div>
        <div className="cat-panel">
          <div className="home-cat-grid">
            {slice.map((f) => (
              <article className="home-cat-card" key={f.name}>
                <Link href={f.href} className="home-cat-img"><img src={f.img} alt={f.name} /></Link>
                <h3><Link href={f.href}>{f.name}</Link></h3>
                <ul>
                  {(f.links || []).slice(0, 5).map((l) => {
                    const label = typeof l === "string" ? l : l.label;
                    return (
                      <li key={label}><Link href={f.href}>{label}</Link></li>
                    );
                  })}
                </ul>
              </article>
            ))}
          </div>
          {pages > 1 && (
            <div className="dots">
              {Array.from({ length: pages }).map((_, i) => (
                <button key={i} className={i === page ? "on" : ""} onClick={() => setPage(i)} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
