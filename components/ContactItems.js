"use client";
import Link from "next/link";
import { useControl } from "./ControlProvider";

export default function ContactItems() {
  const { contacts } = useControl();
  const items = (contacts || []).filter((c) => c && c.title);
  return (
    <div className="info-grid">
      {items.map((c, i) => (
        <Link className="info" href={c.href || "/contact"} key={i}>
          {c.img ? <img src={c.img} alt="" /> : <span className="info-ico">✉</span>}
          <div>
            <h3>{c.title} <span className="chev">‹</span></h3>
            <p>{c.text}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
