"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { CATEGORIES } from "@/lib/data";

export default function CategoryExplorer({ initial = "switches" }) {
  const [active, setActive] = useState(initial);
  const t = useRef();
  const cat = CATEGORIES.find((c) => c.id === active) || CATEGORIES[0];

  const enter = (id) => {
    clearTimeout(t.current);
    setActive(id);
  };

  return (
    <section className="cat-explorer">
      <div className="container">
        <div className="cat-icons">
          {CATEGORIES.map((c) => (
            <Link
              key={c.id}
              href={`/c/${c.id}`}
              className={"qcat" + (c.id === active ? " on" : "")}
              onMouseEnter={() => enter(c.id)}
              onFocus={() => enter(c.id)}
            >
              <img src={c.icon} alt="" />
              <span>{c.name}</span>
            </Link>
          ))}
        </div>
        <div className="cat-panel" onMouseEnter={() => clearTimeout(t.current)}>
          <div className="cat-grid">
            {cat.families.map((f) => (
              <article className="cat-card" key={f.name}>
                <Link href={f.href}><img src={f.img} alt={f.name} /></Link>
                <h3><Link href={f.href}>{f.name}</Link></h3>
                <ul>
                  {f.links.map((l) => (
                    <li key={l}><Link href={f.href}>{l}</Link></li>
                  ))}
                </ul>
                <Link className="more" href={f.href}>View all →</Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
