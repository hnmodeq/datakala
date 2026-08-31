import Link from "next/link";

export const metadata = { title: "PicOS® Switch Software - FS.com" };

export default function Software() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>PicOS® Switch Software</h1>
          <p>PicOS® switches utilize AmpCon-DC/Campus to automate, centrally manage, and securely expand campus and data center networks.</p>
          <div style={{ marginTop: 18, display: "flex", gap: 10 }}>
            <Link className="btn btn-red" href="/contact">Try PicOS-V Free</Link>
            <Link className="btn btn-ghost" href="/c/switches">Explore hardware</Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div>
            <h2>How PicOS® Works</h2>
            <p style={{ color: "#555" }}>PicOS® fully supports Broadcom switches with essential Layer 2/3 protocols and telemetry APIs. AmpCon-DC / Campus enables more resilient operations at lower cost.</p>
            <ul className="hl">
              <li>EVPN-VXLAN and MLAG for scalable fabrics</li>
              <li>Zero-touch provisioning via AmpCon</li>
              <li>Ansible, Python and NETCONF APIs</li>
              <li>Debian Linux based, dual-partition rollback</li>
            </ul>
          </div>
          <img src="/images/20240911111423gedjr4.jpeg" alt="PicOS" />
        </div>
      </section>
      <section className="section gray">
        <div className="container">
          <div className="sec-head"><h2>Why Choose PicOS®?</h2></div>
          <div className="cert-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
            {[
              ["Complete Standardization", "Standard protocols for backward compatibility."],
              ["AmpCon for Automation", "Ansible playbooks, scheduled workflows, web GUI."],
              ["Full Support for Broadcom", "Silicon-accelerated performance in campus and DC."],
              ["High Reliability", "EVPN-VXLAN and MLAG for nimble, secure fabrics."],
              ["Reduced OpEx", "GUI-based mass deployment — 35–40% cost savings."],
              ["Network Security", "Zero-trust campus access with NAC, RADIUS, TACACS+."],
            ].map(([t, d]) => <div className="cert" key={t}><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </div>
      </section>
    </>
  );
}
