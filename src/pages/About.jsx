import React from 'react';
import "../styles/about.css";

// import "./About.css";

export default function About() {
  const stats = [
    { u: "U03", value: "48", label: "Racks online" },
    { u: "U02", value: "2.4K", label: "RDCs delivered" },
    { u: "U01", value: "15 min", label: "Avg. spin-up time" },
  ];

  const values = [
    {
      iface: "Eth1/1",
      title: "Enterprise-Grade Cisco ACI Hardware",
      text: "Practice on genuine Cisco ACI infrastructure, including Spine, Leaf, and APIC controllers. Experience real-world enterprise networking instead of simulated environments.",
    },
    {
      iface: "Eth1/2",
      title: "24×7 Instant Lab Access",
      text: "Reserve your Cisco ACI rack whenever you need it and start practicing within minutes. Learn at your own pace without depending on physical hardware availability.",
    },
    {
      iface: "Eth1/3",
      title: "CCIE Data Center Lab Ready",
      text: "Built specifically for CCIE Data Center candidates, our racks support hands-on practice for ACI, VXLAN EVPN, Multi-Pod, L3Out, Contracts, and enterprise deployment scenarios.",
    },
    {
      iface: "Eth1/4",
      title: "Secure & Isolated Lab Environment",
      text: "Every booking is provisioned in an isolated environment with secure remote access. Your configurations remain private, and the lab is automatically reset after each session.",
    },
    {
      iface: "Eth1/5",
      title: "Practice Real Enterprise Scenarios",
      text: "Deploy production-style topologies, validate migration plans, troubleshoot complex issues, and test new configurations before implementing them in live environments.",
    },
    {
      iface: "Eth1/6",
      title: "Flexible Pricing & Easy Booking",
      text: "Pay only for the lab time you need. Book hourly sessions, extend reservations when required, and gain affordable access to enterprise Cisco ACI hardware without a large investment.",
    },
  ];

  return (
    <div className="rack-page">
      <div className="rack-container">
        {/* Header */}
        <section className="rack-header">
          <div className="rack-header-copy">
            <p className="eyebrow">
              <span className="led led-accent" aria-hidden="true" />
              Rack Rental // Cisco ACI Fabric
            </p>
            <h1 className="rack-title">
           Why Choose Our Cisco ACI Rack Rental Lab?
            </h1>
            <p className="rack-desc">
              Get instant access to a real Cisco ACI environment without
              investing in expensive enterprise hardware. Our Cisco ACI Rack
              Rental platform is built for network engineers, CCIE
              candidates, consultants, and IT professionals who want
              practical experience with production-grade infrastructure.
              Practice real deployment scenarios, validate configurations,
              and strengthen your hands-on skills anytime from anywhere.
            </p>
            <p className="rack-desc">
              Every reserved lab session provides a dedicated Cisco ACI
              environment with secure remote access and preconfigured
              enterprise hardware. Test new features, perform upgrades,
              build VXLAN EVPN fabrics, troubleshoot complex issues, and
              prepare confidently for certification exams. After every
              session, the lab is automatically reset to a clean state,
              ensuring a secure, isolated, and consistent learning
              experience for every engineer.
            </p>
          </div>

          <div className="chassis-rail" role="list" aria-label="Platform stats">
            {stats.map((s) => (
              <div className="chassis-card" role="listitem" key={s.u}>
                <span className="chassis-u">{s.u}</span>
                <span className="chassis-value">{s.value}</span>
                <span className="chassis-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Console / image section */}
        <section className="console-section">
          <div className="console-frame">
            <span className="screw screw-tl" aria-hidden="true" />
            <span className="screw screw-tr" aria-hidden="true" />
            <span className="screw screw-bl" aria-hidden="true" />
            <span className="screw screw-br" aria-hidden="true" />
            <img
              src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&w=1500&q=80"
              alt="Professional woman on phone in office"
              className="console-image"
            />
            <div className="console-tag">Live feed // Console access</div>
          </div>
        </section>

        {/* Values / patch panel section */}
        <section className="patch-section">
          <div className="patch-heading">
            <p className="eyebrow">
              <span className="led led-accent" aria-hidden="true" />
              Fabric // Values
            </p>
            <h2 className="patch-title">Our values</h2>
            <p className="patch-subtitle">
              Designed to deliver enterprise-grade hands-on experience with
              real Cisco ACI hardware for learning, testing, certification,
              and production validation.
            </p>
          </div>

          <div className="patch-grid">
            {values.map((v, i) => (
              <div
                className="patch-module"
                tabIndex={0}
                key={v.iface}
                style={{ "--delay": `${i * 0.12}s` }}
              >
                <div className="patch-module-head">
                  <span className="patch-led" aria-hidden="true" />
                  <span className="patch-iface">{v.iface}</span>
                </div>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-text">{v.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}