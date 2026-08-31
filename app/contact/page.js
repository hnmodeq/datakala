"use client";
import { useState } from "react";

export default function Contact() {
  const [ok, setOk] = useState(false);
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contact Sales</h1>
          <p>Project inquiry, custom optics, PicOS® licenses and solution design — engineers reply in one business day.</p>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <form className="auth" style={{ margin: 0, maxWidth: "none" }} onSubmit={(e) => { e.preventDefault(); setOk(true); }}>
            <h1>Project inquiry</h1>
            <div className="field"><label>Name</label><input required /></div>
            <div className="field"><label>Work email</label><input type="email" required /></div>
            <div className="field"><label>Company</label><input /></div>
            <div className="field"><label>Interest</label>
              <select defaultValue="PicOS® / AmpCon">
                <option>PicOS® / AmpCon</option>
                <option>Data center switches</option>
                <option>Optical transceivers</option>
                <option>Cabling / FHD®</option>
                <option>400G DCI / OTN</option>
              </select>
            </div>
            <div className="field"><label>Message</label><textarea placeholder="Tell us about ports, distances, OEM compatibility…" /></div>
            <button className="btn btn-red" type="submit">Submit</button>
            {ok && <p style={{ color: "#1a7f37", fontSize: 14, marginTop: 10 }}>Inquiry sent (demo). A sales engineer will follow up.</p>}
          </form>
          <div>
            <h2>Talk to FS</h2>
            <p style={{ color: "#555" }}>United States HQ · 380 Centerpoint Blvd, New Castle, DE</p>
            <p><b>1-888-468-9910</b></p>
            <p style={{ color: "#555" }}>Local teams in Germany, UK, Australia, Singapore, Japan and China.</p>
            <div className="stats" style={{ gridTemplateColumns: "1fr 1fr" }}>
              <div className="stat"><b>24/7</b><span>Technical support</span></div>
              <div className="stat"><b>90%</b><span>Same-day shipping</span></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
