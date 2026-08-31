"use client";
import Link from "next/link";
import { useState } from "react";
import Section from "./Section";
import { useControl } from "./ControlProvider";

export default function Footer() {
  const { footer, subFooter2 } = useControl();
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);
  const columns = footer.columns || [];
  const touchVisible = footer.newsletter || footer.social || footer.apps;
  const colCount = columns.length + (touchVisible ? 1 : 0);

  // Center the columns when fewer than the full 5 are visible.
  const gridStyle =
    colCount < 5
      ? {
          gridTemplateColumns: `repeat(${colCount}, minmax(0, 1fr))`,
          maxWidth: `${colCount * 240 + Math.max(0, colCount - 1) * 28}px`,
          margin: "0 auto",
        }
      : { gridTemplateColumns: "repeat(5, 1fr)" };

  return (
    <footer className="footer">
      <Section id="footer">
        <div className="f-grid-wrap">
          <div className="container f-grid" style={gridStyle}>
            {columns.map((col, i) => (
              <div key={i}>
                <h4>{col.title}</h4>
                {(col.links || []).map((l, j) =>
                  l && l.label ? <Link key={j} href={l.href || "#"}>{l.label}</Link> : null
                )}
              </div>
            ))}
            {touchVisible && (
              <div className="f-touch">
                <h4>در ارتباط بمانید</h4>
                {footer.newsletter && (
                  <form className="sub" onSubmit={(e) => { e.preventDefault(); setOk(true); }}>
                    <label>ایمیل</label>
                    <div className="sub-row">
                      <input type="email" required placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} />
                      <button type="submit">عضویت</button>
                    </div>
                    {ok && <p className="sub-ok">متشکریم — به فهرست اضافه شدید (نسخه نمایشی).</p>}
                  </form>
                )}
                {footer.apps && (
                  <div className="apps">
                    <div className="apps-label">دانلود اپلیکیشن FS</div>
                    <div className="app-btns"><span>Google Play</span><span>App Store</span></div>
                  </div>
                )}
                {footer.social && (
                  <div className="social">
                    <a href="#" aria-label="LinkedIn">in</a>
                    <a href="#" aria-label="YouTube">▶</a>
                    <a href="#" aria-label="Facebook">f</a>
                    <a href="#" aria-label="X">𝕏</a>
                    <a href="#" aria-label="Instagram">ig</a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </Section>

      <Section id="subfooter">
        <div className="f-pay">
          <div className="container">
            <div className="pay">
              <span>Visa</span><span>Mastercard</span><span>PayPal</span><span>DigiCert</span><span>TrustedSite</span>
            </div>
            <div className="f-region">ایران / تومان</div>
          </div>
        </div>
      </Section>

      <Section id="subfooter2">
        <div className="f-legal">
          <div className="container f-legal-grid">
            <p className="f-copy">
              {subFooter2.copyright}{" "}
              <a className="f-company" href={subFooter2.companyHref || "#"}>{subFooter2.companyName}</a>
              {subFooter2.copyrightSuffix}
            </p>
            {subFooter2.designerName ? (
              <p className="f-designer">
                {subFooter2.designerText}{" "}
                <a className="f-designer-link" href={subFooter2.designerHref || "#"} target="_blank" rel="noopener noreferrer">{subFooter2.designerName}</a>
              </p>
            ) : null}
          </div>
        </div>
      </Section>
    </footer>
  );
}
