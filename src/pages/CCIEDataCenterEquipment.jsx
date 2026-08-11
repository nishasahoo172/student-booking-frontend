const LAYERS = [
  {
    num: "01",
    label: "Lab equipment",
    role: "Fabric, compute and access-layer gear",
    items: [
      { name: "APIC cluster", tag: "ACI" },
      { name: "Nexus 9336 ACI Spine Switch", tag: "Spine" },
      { name: "Nexus 9332 ACI Spine Switch", tag: "Spine" },
      { name: "Nexus 9372 Switch", tag: "Leaf" },
      { name: "Nexus 93180 Switch", tag: "Leaf" },
      { name: "Nexus 93108 Switch", tag: "Leaf" },
      { name: "Nexus 7004 Switch", tag: "Core" },
      { name: "Supervisor 2 Enhanced", tag: "N7K Sup" },
      { name: "48-Port 10-Gb Ethernet SFP/SFP+ (F3 module)", tag: "N7K I/O" },
      { name: "Nexus 5672 Switch", tag: "Access" },
      { name: "UCS C220 M4 Series Rack Server", tag: "Compute" },
      { name: "Virtual interface card (VIC) for C-Series", tag: "Compute" },
      { name: "UCS-6248 Fabric Interconnect", tag: "UCS FI" },
      { name: "UCS 5108 Blade Server Chassis", tag: "Compute" },
      { name: "B200 M4 Blade Server", tag: "Compute" },
      { name: "Cisco Virtual Interface Card", tag: "Compute" },
      { name: "VIC 1340", tag: "Compute" },
      { name: "Dual Attached JBOD", tag: "Storage" },
      { name: "Cisco Catalyst 3750 Switch", tag: "Mgmt" },
      { name: "Cisco 2911/K9 Terminal Server", tag: "Mgmt" },
    ],
  },
  {
    num: "02",
    label: "Software",
    role: "Platform code trains and controllers",
    items: [
      { name: "Cisco NX-OS on Nexus 7000 switches", tag: "v8.x" },
      { name: "Cisco NX-OS on Nexus 5000 switches", tag: "v7.x" },
      { name: "Cisco NX-OS on Nexus 9000 switches", tag: "v10.x" },
      { name: "Cisco UCS Software Bundle (Fabric Interconnect, UCS Manager)", tag: "v4.x" },
      { name: "Cisco Application Policy Infrastructure Controller", tag: "v5.x" },
      { name: "Cisco Integrated Management Controller", tag: "v4.x" },
      { name: "Cisco Nexus Dashboard", tag: "v3.x" },
      { name: "Cisco Nexus Dashboard Orchestrator", tag: "v4.x" },
      { name: "Cisco Nexus Dashboard Fabric Controller", tag: "v12.x" },
      { name: "Cisco Nexus Dashboard Insights", tag: "v6.x" },
    ],
  },
];

export default function CCIEDataCenterEquipment() {
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

        // .ccie-topbar {
        //   height: 6px;
        //   background: linear-gradient(180deg, #0B1F3A 0%, #16264A 100%);
        //   margin: 0 -0px 44px;
        // }

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
        //   max-width: 66ch;
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
        <p className="ccie-eyebrow">CCIE Data Center v3.1 · Knowledge · CLN Web Admin</p>
        <div className="ccie-hero">
          <h1>Lab rack equipment and software reference</h1>
          <p>
           Cisco's DC lab exam isn't something you can crack by reading theory alone. The blueprint is built around real gear behaving the way it does in production — timing quirks, CLI inconsistencies, feature interactions — and that only shows up once you've actually driven the equipment yourself. The list below reflects the platforms and software trains you're expected to be comfortable with for the current v3.1 blueprint. Cisco may push newer code to the exam environment between updates, but you won't be tested on anything beyond what's already covered in this list.
          </p>
          <p>If you're serious about the CCIE DC track, don't leave hands-on time for the last few weeks. Get onto a rack early — even a couple of hours a week on real hardware compounds fast, and it's the difference between recognizing a config pattern instantly on exam day versus fumbling through it under the clock.</p>
        </div>
        <div className="ccie-panel">
          <div className="ccie-panel-col">
            <p className="ccie-panel-label">Exam format</p>
            <p className="ccie-panel-value">8-hour practical lab</p>
            <p className="ccie-panel-sub">Zero-error tolerance, timed end to end</p>
          </div>
          <div className="ccie-panel-col">
            <p className="ccie-panel-label">Prep note</p>
            <p className="ccie-panel-value">Get onto a rack early</p>
            <p className="ccie-panel-sub">
              Don't leave hands-on time for the last few weeks. A couple of
              hours a week on real hardware compounds fast — it's the
              difference between recognizing a config pattern instantly on
              exam day versus fumbling through it under the clock.
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