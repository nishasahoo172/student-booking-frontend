const LAYERS = [
  {
    num: "01",
    label: "Virtual Machines",
    role: "Software-based platforms used in the exam environment",
    items: [
      { name: "Cisco Catalyst 8000V Routers", tag: "IOS XE 17.9" },
      { name: "Cisco IOSv", tag: "IOS 15.8" },
      { name: "Cisco IOSv-L2", tag: "IOS 15.2" },
      { name: "Cisco SD-WAN (vManage, vBond, vSmart, cEdge)", tag: "20.9" },
      { name: "Cisco DNA Center", tag: "2.3" },
    ],
  },
  {
    num: "02",
    label: "Physical Equipment",
    role: "Physical rack hardware used in the exam environment",
    items: [
      { name: "Cisco Catalyst 9300 Switches", tag: "IOS XE 17.9" },
    ],
  },
  {
    num: "03",
    label: "Other",
    role: "Supporting virtual machines used in the exam environment",
    items: [
      { name: "Cisco Identity Services Engine", tag: "3.1" },
      { name: "Linux Desktop", tag: "" },
    ],
  },
];

export default function CCIEEIEquipment() {
  return (
    <div className="fcx-page">
      <style>{`
        .fcx-page {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 30px 70px;
          background: #ffffff;
          color: #14171a;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
          box-sizing: border-box;
        }

        .fcx-page * {
          box-sizing: border-box;
        }

        .fcx-eyebrow {
          margin: 0 0 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 15px;
          font-weight: 600;
          color: #315ee7;
        }

        .fcx-eyebrow svg {
          flex-shrink: 0;
        }

        .fcx-posted-by {
          margin: 0 0 24px;
          font-size: 13.5px;
          color: #9aa3af;
        }

        .fcx-title {
          margin: 0 0 20px;
          max-width: 1000px;
          font-size: clamp(30px, 4vw, 44px);
          font-weight: 700;
          line-height: 1.15;
          color: #101317;
        }

        .fcx-description {
          max-width: 1100px;
          margin: 0 0 25px;
          font-size: 16px;
          line-height: 1.8;
          color: #5b6472;
        }

        .fcx-info-panel {
          display: grid;
          grid-template-columns: 1fr 1fr;
          margin: 38px 0 64px;
          border: 1px solid #e4e7eb;
          border-radius: 12px;
          overflow: hidden;
          background: #f7f8fa;
        }

        .fcx-info-box {
          padding: 28px 32px;
        }

        .fcx-info-box + .fcx-info-box {
          border-left: 1px solid #e4e7eb;
        }

        .fcx-info-label {
          margin: 0 0 10px;
          font-family: "Courier New", monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #9aa3af;
        }

        .fcx-info-title {
          margin: 0 0 8px;
          font-size: 18px;
          font-weight: 700;
          color: #111827;
        }

        .fcx-info-text {
          margin: 0;
          font-size: 14px;
          line-height: 1.6;
          color: #667085;
        }

        .fcx-layer {
          display: grid;
          grid-template-columns: 55px 1fr;
          gap: 22px;
        }

        .fcx-rail {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .fcx-number {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #edf2ff;
          color: #315ee7;
          font-family: "Courier New", monospace;
          font-size: 13px;
          font-weight: 700;
        }

        .fcx-line {
          width: 1px;
          flex: 1;
          min-height: 40px;
          margin-top: 4px;
          border-left: 2px dashed #d8dde6;
        }

        .fcx-layer-content {
          padding: 7px 0 50px;
        }

        .fcx-layer-heading {
          display: flex;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 18px;
        }

        .fcx-layer-title {
          margin: 0;
          font-size: 22px;
          font-weight: 800;
          color: #111827;
        }

        .fcx-layer-role {
          font-size: 14px;
          color: #9aa3af;
        }

        .fcx-list {
          overflow: hidden;
          border: 1px solid #e4e7eb;
          border-radius: 10px;
          background: #ffffff;
        }

        .fcx-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          min-height: 54px;
          padding: 14px 20px;
        }

        .fcx-item + .fcx-item {
          border-top: 1px solid #eef0f3;
        }

        .fcx-item-name {
          font-size: 15px;
          color: #20252b;
        }

        .fcx-tag {
          flex-shrink: 0;
          padding: 4px 10px;
          border: 1px solid #f1c46c;
          border-radius: 6px;
          background: #fff3df;
          color: #b56b00;
          font-family: "Courier New", monospace;
          font-size: 12px;
          font-weight: 700;
        }

        @media (max-width: 650px) {
          .fcx-page {
            padding: 25px 16px 50px;
          }

          .fcx-info-panel {
            grid-template-columns: 1fr;
          }

          .fcx-info-box + .fcx-info-box {
            border-left: none;
            border-top: 1px solid #e4e7eb;
          }

          .fcx-layer {
            grid-template-columns: 40px 1fr;
            gap: 14px;
          }

          .fcx-number {
            width: 38px;
            height: 38px;
            font-size: 11px;
          }

          .fcx-item {
            flex-wrap: wrap;
          }
        }
      `}</style>

      <h1 className="fcx-title">CCIE Enterprise Infrastructure Equipment and Software List</h1>

      <p className="fcx-eyebrow">
        {/* <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg> */}
        {/* Jun 12, 2024 &nbsp;·&nbsp; Knowledge */}
      </p>

      {/* <p className="fcx-posted-by">• Posted by: Cisco Admin</p> */}

      <p className="fcx-description">
       The practical exam evaluates your ability to configure and troubleshoot solutions using the listed equipment and supported software versions. While newer versions may be available during the exam, candidates are assessed only on the features and technologies included in the official equipment list.
      </p>

      <p className="fcx-description">
        Strong hands-on practice is essential for exam preparation. Candidates should gain early access to lab equipment and software that closely matches the real exam environment to build practical configuration, troubleshooting, and implementation skills.
      </p>

      <div className="fcx-info-panel">
        <div className="fcx-info-box">
          <p className="fcx-info-label">Exam format</p>
          <h3 className="fcx-info-title">Practical lab exam</h3>
          <p className="fcx-info-text">
            Hands-on configuration using real and virtual Enterprise
            Infrastructure equipment.
          </p>
        </div>

        <div className="fcx-info-box">
          <p className="fcx-info-label">Prep note</p>
          <h3 className="fcx-info-title">Get onto a rack early</h3>
          <p className="fcx-info-text">
            Arrange access to equipment and software similar to the exam
            environment well before your attempt. Hands-on practice on real
            gear helps close the knowledge gap.
          </p>
        </div>
      </div>

      {LAYERS.map((layer, layerIndex) => (
        <div className="fcx-layer" key={layer.num}>
          <div className="fcx-rail">
            <div className="fcx-number">{layer.num}</div>

            {layerIndex < LAYERS.length - 1 && (
              <div className="fcx-line" />
            )}
          </div>

          <div className="fcx-layer-content">
            <div className="fcx-layer-heading">
              <h2 className="fcx-layer-title">{layer.label}</h2>
              <span className="fcx-layer-role">{layer.role}</span>
            </div>

            <div className="fcx-list">
              {layer.items.map((item, itemIndex) => (
                <div
                  className="fcx-item"
                  key={`${layer.num}-${itemIndex}`}
                >
                  <span className="fcx-item-name">{item.name}</span>

                  {item.tag && (
                    <span className="fcx-tag">{item.tag}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}