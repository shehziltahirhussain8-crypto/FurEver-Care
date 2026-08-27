import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact Us</span>
          <h1>We'd love to hear from you</h1>
          <p>Questions about a pet, a partnership, or the site itself — reach out any time.</p>
        </div>
      </div>

      <section className="section">
        <div className="container grid grid-2" style={{ gridTemplateColumns: "1fr 1.3fr", alignItems: "start" }}>
          <div className="card" style={{ padding: "var(--space-5)", display: "grid", gap: 18 }}>
            <div className="flex gap-3" style={{ alignItems: "flex-start" }}>
              <MapPin size={20} color="var(--color-accent-dark)" style={{ flexShrink: 0, marginTop: 2 }} />
              <div><strong>Address</strong><p style={{ marginBottom: 0 }}>145 Meadow Lane, Willow City, 24071</p></div>
            </div>
            <div className="flex gap-3" style={{ alignItems: "flex-start" }}>
              <Phone size={20} color="var(--color-accent-dark)" style={{ flexShrink: 0, marginTop: 2 }} />
              <div><strong>Phone</strong><p style={{ marginBottom: 0 }}>(555) 011-2288</p></div>
            </div>
            <div className="flex gap-3" style={{ alignItems: "flex-start" }}>
              <Mail size={20} color="var(--color-accent-dark)" style={{ flexShrink: 0, marginTop: 2 }} />
              <div><strong>Email</strong><p style={{ marginBottom: 0 }}>care@fureverclinic.com</p></div>
            </div>
            <div className="flex gap-3" style={{ alignItems: "flex-start" }}>
              <Clock size={20} color="var(--color-accent-dark)" style={{ flexShrink: 0, marginTop: 2 }} />
              <div><strong>Hours</strong><p style={{ marginBottom: 0 }}>Mon–Sat, 8:00 AM – 7:00 PM</p></div>
            </div>
          </div>

          <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", aspectRatio: "16/10" }}>
            <iframe
              title="FurEver Care location map"
              src="https://maps.google.com/maps?q=Willow%20City&t=&z=13&ie=UTF8&iwloc=&output=embed"
              style={{ border: 0, width: "100%", height: "100%" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
