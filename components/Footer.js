import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="f-grid">
          <div className="f-brand">
            <Link href="/"><Logo light /></Link>
            <p>High-Performance Simplicity networking solutions for AI infrastructure, data centers, enterprise and telecom.</p>
            <div className="social"><a href="#">in</a><a href="#">▶</a><a href="#">f</a><a href="#">𝕏</a></div>
          </div>
          <div>
            <h4>Products</h4>
            <Link href="/c/switches">Switches</Link>
            <Link href="/c/transceivers">Optical Transceivers</Link>
            <Link href="/c/cables">Fiber Optic Cables</Link>
            <Link href="/c/optical">Optical Networking</Link>
            <Link href="/c/copper">Copper Systems</Link>
            <Link href="/c/tools">Testers & Tools</Link>
          </div>
          <div>
            <h4>Solutions</h4>
            <Link href="/solutions">Data Center</Link>
            <Link href="/solutions">Enterprise Campus</Link>
            <Link href="/solutions">AI / HPC Fabrics</Link>
            <Link href="/solutions">DCI / OTN</Link>
            <Link href="/solutions">Cabling Infrastructure</Link>
          </div>
          <div>
            <h4>Support</h4>
            <Link href="/support">Help Center</Link>
            <Link href="/support">Warranty</Link>
            <Link href="/contact">Contact Sales</Link>
            <Link href="/support">RMA / Returns</Link>
          </div>
          <div>
            <h4>About FS</h4>
            <Link href="/about">Who We Are</Link>
            <Link href="/about">Global Warehouse</Link>
            <Link href="/about">Test Center</Link>
            <Link href="/about">Quality & Compliance</Link>
          </div>
        </div>
        <div className="f-bottom">
          <div>© 2009–2026 FS.com Inc. All rights reserved. Demo clone.</div>
          <div className="pay"><span>Visa</span><span>Mastercard</span><span>PayPal</span><span>Wire</span><span>PO</span></div>
        </div>
      </div>
    </footer>
  );
}
