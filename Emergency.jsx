import { Phone, AlertTriangle, Stethoscope, Hospital } from "lucide-react";

const CONTACTS = [
  { label: "FurEver Care 24/7 Emergency Line", number: "(555) 011-2288", icon: Hospital },
  { label: "Pet Poison Helpline", number: "(855) 764-7661", icon: AlertTriangle },
  { label: "ASPCA Animal Poison Control", number: "(888) 426-4435", icon: AlertTriangle },
  { label: "Nearest Emergency Vet Hospital", number: "(555) 400-9931", icon: Stethoscope },
];

export default function Emergency() {
  return (
    <>
      <div className="page-hero" style={{ background: "linear-gradient(160deg, var(--color-danger-bg) 0%, var(--color-bg) 75%)" }}>
        <div className="container">
          <span className="eyebrow" style={{ color: "var(--color-danger)" }}>Emergency &amp; Vet Help</span>
          <h1>If it's urgent, start here</h1>
          <p>Save these numbers now. If it is life-threatening, call your nearest emergency animal hospital right away.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {CONTACTS.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={`tel:${c.number.replace(/[^0-9+]/g, "")}`}
                  className="card"
                  style={{ padding: "var(--space-5)", display: "flex", alignItems: "center", gap: 18, border: "1.5px solid var(--color-danger-bg)" }}
                >
                  <div style={{ width: 54, height: 54, borderRadius: "50%", background: "var(--color-danger-bg)", color: "var(--color-danger)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: "var(--color-primary)" }}>{c.label}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--color-danger)", fontWeight: 700, fontSize: "1.05rem" }}>
                      <Phone size={16} /> {c.number}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="card" style={{ marginTop: "var(--space-6)", padding: "var(--space-5)", borderLeft: "5px solid var(--color-danger)" }}>
            <h3 style={{ marginBottom: 8 }}>When to seek emergency care</h3>
            <p style={{ marginBottom: 0 }}>
              Call right away if your pet has trouble breathing, may have eaten something toxic,
              will not stop bleeding, collapses, keeps vomiting, or has a swollen belly. If you are
              not sure, calling is always the safer choice.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
