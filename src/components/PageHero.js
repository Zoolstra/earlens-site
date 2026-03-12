import { C } from "@/constants/colors";

export function PageHero({ label, title, subtitle, gradient = false, children }) {
  return (
    <section style={{
      paddingTop: 80,
      paddingBottom: 80,
      background: gradient
        ? `linear-gradient(135deg, ${C.blue} 0%, #0f4d7a 50%, ${C.teal} 100%)`
        : C.light,
      position: "relative",
      overflow: "hidden",
    }}>
      {gradient && (
        <div style={{ position: "absolute", inset: 0, opacity: 0.04 }}>
          {[200, 350, 500].map((r) => (
            <div key={r} style={{
              position: "absolute", top: "50%", right: "8%",
              transform: "translateY(-50%)",
              width: r, height: r, borderRadius: "50%",
              border: "1px solid #fff",
            }} />
          ))}
        </div>
      )}
      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        {label && (
          <div style={{
            color: gradient ? C.tealLight : C.teal,
            fontSize: 12, fontWeight: 700, letterSpacing: 2,
            textTransform: "uppercase", marginBottom: 12,
          }}>
            {label}
          </div>
        )}
        <h1 style={{
          fontSize: "clamp(32px, 5vw, 56px)",
          fontWeight: 900,
          color: gradient ? "#fff" : C.text,
          lineHeight: 1.1,
          maxWidth: 720,
          marginBottom: subtitle || children ? 20 : 0,
        }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{
            color: gradient ? "rgba(255,255,255,0.8)" : C.textLight,
            fontSize: 18, lineHeight: 1.7, maxWidth: 600,
            marginBottom: children ? 32 : 0,
          }}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
