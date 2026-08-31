"use client";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);
  return (
    <footer className="footer">
      <div className="container f-grid">
        <div>
          <h4>About Us</h4>
          <Link href="/about">Overview</Link>
          <Link href="/about">Global Warehouse</Link>
          <Link href="/about">Advanced R&D Center</Link>
          <Link href="/about">Quality Control</Link>
          <Link href="/about">Compliance Center</Link>
          <Link href="/about">Test Center</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/about">Give us Your Feedback</Link>
        </div>
        <div>
          <h4>Service</h4>
          <Link href="/support">Payment Methods</Link>
          <Link href="/support">Shipping Guide</Link>
          <Link href="/support">Business Account</Link>
          <Link href="/software">Sales Tax</Link>
          <Link href="/about">Net Terms</Link>
          <Link href="/support">Return Policy</Link>
          <Link href="/support">Product Warranty</Link>
        </div>
        <div>
          <h4>Resource</h4>
          <Link href="/support">Documentation</Link>
          <Link href="/support">Compatibility</Link>
          <Link href="/about">Audio & Video</Link>
          <Link href="/about">FS Blog</Link>
          <Link href="/about">Case Studies</Link>
        </div>
        <div>
          <h4>Support</h4>
          <Link href="/support">FAQ & Help Center</Link>
          <Link href="/contact">Solution Consulting</Link>
          <Link href="/support">Quality Test</Link>
          <Link href="/software">Wi-Fi Transceiver Check List</Link>
          <Link href="/about">Products Verification</Link>
          <Link href="/support">Track My Order</Link>
          <Link href="/support">RMA/Returns</Link>
        </div>
        <div className="f-touch">
          <h4>Stay in Touch</h4>
          <form className="sub" onSubmit={(e) => { e.preventDefault(); setOk(true); }}>
            <label>Email</label>
            <div className="sub-row">
              <input type="email" required placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} />
              <button type="submit">Subscribe</button>
            </div>
            {ok && <p className="sub-ok">Thanks — you’re on the list (demo).</p>}
          </form>
          <div className="apps">
            <div className="apps-label">Download FS APP</div>
            <div className="app-btns">
              <span>Google Play</span>
              <span>App Store</span>
            </div>
          </div>
          <div className="social">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="YouTube">▶</a>
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="X">𝕏</a>
            <a href="#" aria-label="Instagram">ig</a>
          </div>
        </div>
      </div>
      <div className="f-pay">
        <div className="container">
          <div className="pay">
            <span>Visa</span><span>Mastercard</span><span>PayPal</span><span>Amex</span><span>Discover</span>
          </div>
          <div className="f-region">United States / $ USD</div>
        </div>
      </div>
      <div className="f-legal">
        <div className="container">
          <div>
            <a href="#">Site Map</a>
            <a href="#">Accessibility</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies Notice</a>
            <a href="#">Terms and Conditions</a>
            <a href="#">Report a Vulnerability</a>
            <a href="#">Company Policies</a>
            <a href="#">Cookie Settings</a>
          </div>
          <div>Copyright © 2009-2026 FS.COM Inc. All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
}
