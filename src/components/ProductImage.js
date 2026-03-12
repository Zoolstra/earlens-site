import { Ico } from "@/constants/icons";

const configs = {
  device: {
    bg: "linear-gradient(145deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    label: "Earlens Device",
    sub: "Behind-the-ear processor + Lens",
  },
  lens: {
    bg: "linear-gradient(145deg, #0a0a0a 0%, #1a1a1a 100%)",
    label: "The Lens",
    sub: "Tiny enough for a fingertip",
  },
  system: {
    bg: "linear-gradient(145deg, #f8f9fa 0%, #e9ecef 100%)",
    label: "Complete System",
    sub: "Processor, tip & Lens",
    dark: true,
  },
  hand: {
    bg: "linear-gradient(145deg, #0a0a0a 0%, #1a1a2e 100%)",
    label: "Incredibly Small",
    sub: "Custom-fit to your ear",
  },
};

export function ProductImage({ variant = "device", style: s = {} }) {
  const c = configs[variant] || configs.device;
  const isDark = !c.dark;

  return (
    <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", background: c.bg, aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", ...s }}>
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {[80, 120, 160].map((r) => (
          <div key={r} style={{ position: "absolute", width: r, height: r, borderRadius: "50%", border: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}` }} />
        ))}
      </div>
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: 24 }}>
        <div style={{ color: isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.3)", marginBottom: 12 }}>
          {Ico.ear(36)}
        </div>
        <div style={{ color: isDark ? "#fff" : "#1e293b", fontWeight: 700, fontSize: 15, marginBottom: 4 }}>
          {c.label}
        </div>
        <div style={{ color: isDark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)", fontSize: 12 }}>
          {c.sub}
        </div>
        <div style={{ color: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)", fontSize: 11, marginTop: 16, fontStyle: "italic" }}>
          [Product photo placeholder]
        </div>
      </div>
    </div>
  );
}
