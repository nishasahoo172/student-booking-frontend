

const LAYERS = [
  {
    num: "01",
    label: "Virtual machines",
    role: "Software-defined lab stack",
    items: [
      { name: "Cisco Identity Services Engine (ISE)", tag: "3.2.0" },
      { name: "Cisco Web Security Appliance (WSA)", tag: "10.1.3" },
      { name: "Cisco Firepower Management Center", tag: "v7.0.0" },
      { name: "Cisco Firepower NGIPSv", tag: "6.2.0" },
      { name: "Cisco Firepower Threat Defense", tag: "v7.1.0" },
      { name: "Cisco Adaptive Security Virtual Appliance", tag: "9.9(2)" },
      { name: "Cisco CSR 1000v", tag: "16.9.5" },
      { name: "Cisco DNA Center", tag: "2.3.5" },
      { name: "L2IOS v2", tag: "15.2" },
    ],
  },
  {
    num: "02",
    label: "Physical equipment",
    role: "Rack-mounted appliances",
    items: [
      { name: "Cisco Adaptive Security Appliance — ASA5515", tag: "9.2(2)4" },
      { name: "Cisco Catalyst 3850 Series — IOS XE", tag: "16.16.8" },
    ],
  },
  {
    num: "03",
    label: "Other equipment",
    role: "Operator and support systems",
    items: [
      { name: "PC", tag: "Windows 10" },
      { name: "AD / DNS", tag: "Windows Server 2026" },
      { name: "Kali Linux", tag: "5.3.0 · 2019" },
      { name: "ASDM", tag: "7.9(2)" },
      { name: "AnyConnect", tag: "4.6.0" },
    ],
  },
];

export default function CCIESecurityEquipment() {
  return (
    <div className="ccie-page">
      <style>{`
        .ccie-page {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, sans-serif;
          background: #FFFFFF;
          color: #14171A;
          max-width: 980px;
          margin: 0 auto;
        }
        .ccie-page * { box-sizing: border-box; }

        .ccie-topbar {
          height: 6px;
          // background: linear-gradient(180deg, #0B1F3A 0%, #16264A 100%);
          margin: 0 -0px 44px;
        }

        .ccie-body { padding: 0 24px 64px; }

        .ccie-eyebrow {
          font-family: 'Courier New', monospace;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: #3B62E0;
          text-transform: uppercase;
          margin: 0 0 18px;
        }
        .ccie-hero h1 {
          font-size: clamp(30px, 4.5vw, 44px);
          font-weight: 500;
          line-height: 1.12;
          letter-spacing: -0.01em;
          margin: 0 0 20px;
          color: #101317;
        }
        .ccie-hero p {
          font-size: 16px;
          line-height: 1.7;
          color: #5B6472;
          max-width: 66ch;
          margin: 0 0 32px;
        }

        .ccie-panel {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: #F5F6F8;
          border: 1px solid #E7E9EC;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 52px;
        }
        .ccie-panel-col {
          padding: 22px 26px;
        }
        .ccie-panel-col + .ccie-panel-col {
          border-left: 1px solid #E7E9EC;
        }
        .ccie-panel-label {
          font-family: 'Courier New', monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #9AA3AF;
          text-transform: uppercase;
          margin: 0 0 8px;
        }
        .ccie-panel-value {
          font-size: 17px;
          font-weight: 700;
          color: #14171A;
          margin: 0 0 6px;
        }
        .ccie-panel-sub {
          font-size: 13.5px;
          line-height: 1.6;
          color: #6B7280;
          margin: 0;
        }

        .ccie-layer {
          display: grid;
          grid-template-columns: 40px 1fr;
          gap: 20px;
          position: relative;
        }
        .ccie-rail {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .ccie-num {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #E8EEFC;
          color: #3B62E0;
          font-family: 'Courier New', monospace;
          font-weight: 700;
          font-size: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ccie-rail-line {
          width: 1px;
          flex: 1;
          margin-top: 4px;
          background-image: linear-gradient(180deg, #D6DAE0 0 6px, transparent 6px 12px);
          background-size: 1px 12px;
        }

        .ccie-layer-body { padding-bottom: 44px; }
        .ccie-layer-head {
          display: flex;
          align-items: baseline;
          gap: 10px;
          margin: 6px 0 14px;
        }
        .ccie-layer-head h2 {
          font-size: 21px;
          font-weight: 800;
          margin: 0;
          color: #101317;
        }
        .ccie-layer-role {
          font-size: 13.5px;
          color: #9AA3AF;
        }

        .ccie-list {
          border: 1px solid #E7E9EC;
          border-radius: 10px;
          overflow: hidden;
        }
        .ccie-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 15px 20px;
          background: #FFFFFF;
        }
        .ccie-item + .ccie-item {
          border-top: 1px solid #EEF0F2;
        }
        .ccie-item-name {
          font-size: 15px;
          color: #24272C;
        }
        .ccie-tag {
          font-family: 'Courier New', monospace;
          font-size: 12px;
          font-weight: 700;
          color: #B36B00;
          background: #FDF1DC;
          border: 1px solid #F2C879;
          border-radius: 6px;
          padding: 3px 10px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        @media (max-width: 560px) {
          .ccie-body { padding: 0 16px 48px; }
          .ccie-panel { grid-template-columns: 1fr; }
          .ccie-panel-col + .ccie-panel-col { border-left: none; border-top: 1px solid #E7E9EC; }
          .ccie-layer { grid-template-columns: 32px 1fr; gap: 14px; }
          .ccie-num { width: 32px; height: 32px; font-size: 11px; }
          .ccie-item { flex-wrap: wrap; }
        }
      `}</style>

      <div className="ccie-topbar" />

      <div className="ccie-body">
        <p className="ccie-eyebrow">CCIE Security v6.1 · Knowledge · CLN Web Admin</p>

        <div className="ccie-hero">
          <h1>Equipment and software list</h1>
          <p>
            CCIE Security v6.1 is Cisco's expert-level credential for security
            architects, covering next-generation firewalls, Cisco ISE, advanced
            threat defense, and Python-driven network automation. The exam pairs
            deep platform coverage with an eight-hour hands-on lab that demands
            zero-error execution and real-time troubleshooting across the full
            stack below.
          </p>
        </div>

        <div className="ccie-panel">
          <div className="ccie-panel-col">
            <p className="ccie-panel-label">Exam format</p>
            <p className="ccie-panel-value">8-hour practical lab</p>
            <p className="ccie-panel-sub">Zero-error tolerance, timed end to end</p>
          </div>
          <div className="ccie-panel-col">
            <p className="ccie-panel-label">Scope note</p>
            <p className="ccie-panel-value">Virtual, physical and support systems</p>
            <p className="ccie-panel-sub">
              The lab runs on this fixed platform list — from virtualized
              security appliances down to the PCs and directory services that
              support them.
            </p>
          </div>
        </div>

        {LAYERS.map((layer, i) => (
          <div className="ccie-layer" key={layer.num}>
            <div className="ccie-rail">
              <div className="ccie-num">{layer.num}</div>
              {i < LAYERS.length - 1 && <div className="ccie-rail-line" />}
            </div>
            <div className="ccie-layer-body">
              <div className="ccie-layer-head">
                <h2>{layer.label}</h2>
                <span className="ccie-layer-role">{layer.role}</span>
              </div>
              <div className="ccie-list">
                {layer.items.map((item) => (
                  <div className="ccie-item" key={item.name}>
                    <span className="ccie-item-name">{item.name}</span>
                    <span className="ccie-tag">{item.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}