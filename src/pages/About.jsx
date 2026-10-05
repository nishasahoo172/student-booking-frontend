import React from "react";
import "../styles/about.css";

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
    <div className="aci-page">
      <div className="aci-wrap">
        {/* Hero: image full-bleed with text panel overlapping */}
        <section className="aci-hero">
          <div className="aci-hero-media">
            <img
              src="https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=1500"
              alt="Professional woman on phone in office"
              className="aci-hero-img"
            />
          </div>

          <div className="aci-hero-panel">
            <p className="aci-kicker">Rack Rental // Cisco ACI Fabric</p>
            <h1 className="aci-title">
              Why Choose Our Cisco ACI Rack Rental Lab ?
            </h1>
            <p className="aci-body">
              Get instant access to a real Cisco ACI environment without
              investing in expensive enterprise hardware. Our Cisco ACI Rack
              Rental platform is built for network engineers, CCIE
              candidates, consultants, and IT professionals who want
              practical experience with production-grade infrastructure.
              Practice real deployment scenarios, validate configurations,
              and strengthen your hands-on skills anytime from anywhere.
            </p>
            <p className="aci-body">
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
        </section>

        {/* Stats strip */}
        <section className="aci-stats" aria-label="Platform stats">
          {stats.map((s) => (
            <div className="aci-stat" key={s.u}>
              <span className="aci-stat-value">{s.value}</span>
              <span className="aci-stat-label">{s.label}</span>
              <span className="aci-stat-u">{s.u}</span>
            </div>
          ))}
        </section>

        {/* Values */}
        <section className="aci-values">
          <div className="aci-values-intro">
            <p className="aci-kicker">Fabric // Values</p>
            <h2 className="aci-subtitle">Our values</h2>
            <p className="aci-intro-text">
              Designed to deliver enterprise-grade hands-on experience with
              real Cisco ACI hardware for learning, testing, certification,
              and production validation.
            </p>
          </div>

          <ul className="aci-list">
            {values.map((v) => (
              <li className="aci-item" key={v.iface} tabIndex={0}>
                <span className="aci-item-iface">{v.iface}</span>
                <h3 className="aci-item-title">{v.title}</h3>
                <p className="aci-item-text">{v.text}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}