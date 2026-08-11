
import "../styles/CCIEWirelessEquipment.css";

const STACK = [
  {
    layer: "01",
    label: "Access points",
    role: "Client-facing edge",
    items: [
      { name: "Cisco Catalyst Wireless 9100 Series", tag: "Wi-Fi 6 / 6E" },
    ],
  },
  {
    layer: "02",
    label: "Controllers / aggregators",
    role: "WLAN control plane",
    items: [
      { name: "Cisco Catalyst 9800 Series Wireless Controllers", tag: "WLC" },
      { name: "Cisco Campus Gateway", tag: "Gateway" },
      { name: "Cisco Embedded Wireless Controller (EWC) on Catalyst Switches", tag: "SD-Access" },
    ],
  },
  {
    layer: "03",
    label: "Switches",
    role: "Wired access layer",
    items: [
      { name: "Cisco Catalyst 9300 Series", tag: "Access" },
      { name: "Cisco Catalyst 9200 Series", tag: "Access" },
    ],
  },
  {
    layer: "04",
    label: "Cloud-delivered",
    role: "Off-prem services",
    items: [
      { name: "Cisco Meraki Dashboard", tag: "Cloud" },
      { name: "Cisco Umbrella", tag: "Cloud" },
    ],
  },
  {
    layer: "05",
    label: "Virtual machines",
    role: "Management & clients",
    items: [
      { name: "Cisco Catalyst Center", tag: "v2.3.x" },
      { name: "Cisco Identity Services Engine (ISE)", tag: "v3.4.x" },
      { name: "Windows Server", tag: "No config" },
      { name: "Wireless clients — Linux / Windows 11 with Cisco Secure Client", tag: "Client" },
    ],
  },
];

export default function CCIEWirelessEquipment() {
  return (
    <div className="wireless-equipment-page">
      <header className="we-hero">
        <p className="we-eyebrow">CCIE Wireless v1.1 · Knowledge · CLN Web Admin</p>
        <h1 class="equp">Equipment and software list</h1>
        <p className="we-intro">
          The exact hardware and software used on the Deploy, Operate and Optimize
          (DOO) module — laid out edge to cloud, the same order it's built in the lab.
        </p>

        <div className="we-scope">
          <div className="we-scope-block">
            <span className="we-scope-label">Platform baseline</span>
            <span className="we-scope-value">Cisco IOS XE 17.18.x</span>
            <span className="we-scope-sub">Applied across all Catalyst equipment</span>
          </div>
          <div className="we-scope-block">
            <span className="we-scope-label">Scope note</span>
            <span className="we-scope-value">DOO vs. Design module</span>
            <span className="we-scope-sub">
              DOO uses this fixed list for hands-on tasks. Design covers a wider range
              of Cisco access points and controllers for architecture decisions.
            </span>
          </div>
        </div>
      </header>

      <div className="we-stack" role="list">
        {STACK.map((section, i) => (
          <section className="we-layer" role="listitem" key={section.layer}>
            <div className="we-layer-rail" aria-hidden="true">
              <span className="we-layer-num">{section.layer}</span>
              {i < STACK.length - 1 && <span className="we-layer-line" />}
            </div>

            <div className="we-layer-body">
              <div className="we-layer-head">
                <h2>{section.label}</h2>
                <span className="we-layer-role">{section.role}</span>
              </div>

              <ul className="we-item-list">
                {section.items.map((item) => (
                  <li className="we-item" key={item.name}>
                    <span className="we-item-name">{item.name}</span>
                    <span className="we-item-tag">{item.tag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}