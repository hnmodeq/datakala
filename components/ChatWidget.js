"use client";
import { useState } from "react";
import Link from "next/link";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([{ me: false, t: "سلام، من مهندس فروش FS هستم. امروز چطور می‌توانم در زمینه سوئیچ، اپتیک یا کابل‌کشی کمکتان کنم؟" }]);
  const [v, setV] = useState("");
  const send = (e) => {
    e.preventDefault();
    if (!v.trim()) return;
    setMsgs((m) => [...m, { me: true, t: v }, { me: false, t: "متشکریم — یک متخصص پیگیری می‌کند. در این فاصله سوئیچ‌ها یا اپتیک را ببینید." }]);
    setV("");
  };
  return (
    <div className="chat">
      {open && (
        <div className="chat-panel">
          <div className="chat-h">گفتگوی زنده FS <button onClick={() => setOpen(false)}>×</button></div>
          <div className="chat-b">
            {msgs.map((m, i) => (
              <div key={i} className="bubble" style={m.me ? { background: "#fff5f5" } : undefined}>
                {m.t}{" "}
                {!m.me && i === msgs.length - 1 && i > 0 && (
                  <><Link href="/c/switches" style={{ color: "#C00000" }}>سوئیچ‌ها</Link> / <Link href="/c/transceivers" style={{ color: "#C00000" }}>اپتیک</Link></>
                )}
              </div>
            ))}
          </div>
          <form className="chat-f" onSubmit={send}>
            <input value={v} onChange={(e) => setV(e.target.value)} placeholder="پیام خود را بنویسید..." />
            <button type="submit" style={{ width: 48, color: "#C00000", fontWeight: 700 }}>ارسال</button>
          </form>
        </div>
      )}
      <button className="chat-btn quiet" onClick={() => setOpen((o) => !o)} title="گفتگوی زنده">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 6h14v10H8l-3 3V6z"/></svg>
      </button>
    </div>
  );
}
