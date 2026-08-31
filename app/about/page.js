export const metadata = { title: "About FS - FS.com" };

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About FS</h1>
          <p>Simplify Enterprise Network Design. High-Performance Simplicity that empowers enterprises to break free from complexity.</p>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div>
            <h2>Company Overview</h2>
            <p style={{ color: "#555" }}>Founded in 2009, FS delivers a unified platform of switches, optics, cabling and software for data centers, enterprise, SMB and telecom. Our commitment is autonomous management, streamlined implementation, and seamless scalability.</p>
          </div>
          <img src="/images/20251230115848cad4ei.jpg" alt="FS" />
        </div>
        <div className="container">
          <div className="stats">
            <div className="stat"><b>2009</b><span>Founded</span></div>
            <div className="stat"><b>7</b><span>Local warehouses</span></div>
            <div className="stat"><b>150+</b><span>Countries served</span></div>
            <div className="stat"><b>900+</b><span>Sales & technical experts</span></div>
          </div>
        </div>
      </section>
    </>
  );
}
