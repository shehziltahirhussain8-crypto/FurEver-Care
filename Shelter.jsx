import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, PawPrint, ArrowRight } from "lucide-react";
import { useUser } from "../context/UserContext";
import events from "../data/events.json";
import EventCard from "../components/cards/EventCard";
import SectionHeader from "../components/ui/SectionHeader";

export default function Shelter() {
  const { firstName } = useUser();
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Animal Shelter Portal</span>
          <h1>{firstName ? `Welcome, ${firstName}!` : "Shelter Dashboard"}</h1>
          <p>Manage your page on FurEver Care — pets for adoption, local events, and how families can reach you.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid grid-3" style={{ marginBottom: "var(--space-7)" }}>
            <Link to="/adoption" className="card" style={{ padding: "var(--space-5)" }}>
              <div className="icon-tile"><PawPrint size={22} /></div>
              <h3>Adoptable Pets Gallery</h3>
              <p>See and filter every pet that is up for adoption now.</p>
              <span style={{ color: "var(--color-accent-dark)", fontWeight: 600, fontSize: "0.88rem", display: "inline-flex", alignItems: "center", gap: 6 }}>
                View gallery <ArrowRight size={14} />
              </span>
            </Link>
            <Link to="/adoption#stories" className="card" style={{ padding: "var(--space-5)" }}>
              <div className="icon-tile"><PawPrint size={22} /></div>
              <h3>Success Stories</h3>
              <p>Read happy updates from families who have adopted.</p>
              <span style={{ color: "var(--color-accent-dark)", fontWeight: 600, fontSize: "0.88rem", display: "inline-flex", alignItems: "center", gap: 6 }}>
                Read stories <ArrowRight size={14} />
              </span>
            </Link>
            <a href="#contact" className="card" style={{ padding: "var(--space-5)" }}>
              <div className="icon-tile"><MapPin size={22} /></div>
              <h3>Shelter Contact</h3>
              <p>Address, phone, email and map for families who want to visit.</p>
              <span style={{ color: "var(--color-accent-dark)", fontWeight: 600, fontSize: "0.88rem", display: "inline-flex", alignItems: "center", gap: 6 }}>
                View details <ArrowRight size={14} />
              </span>
            </a>
          </div>

          <SectionHeader eyebrow="Community" title="Upcoming events" description="Adoption days, vaccine camps and other events near you." />
          <div className="grid grid-2" style={{ marginBottom: "var(--space-7)" }}>
            {events.map((e) => <EventCard event={e} key={e.id} />)}
          </div>

          <div id="contact" className="card" style={{ padding: "var(--space-6)" }}>
            <div className="grid grid-2" style={{ gridTemplateColumns: "1fr 1.2fr", alignItems: "center" }}>
              <div>
                <h3>Downtown Shelter</h3>
                <p style={{ display: "flex", gap: 8 }}><MapPin size={16} style={{ flexShrink: 0, marginTop: 3 }} /> 145 Meadow Lane, Willow City</p>
                <p style={{ display: "flex", gap: 8 }}><Phone size={16} style={{ flexShrink: 0, marginTop: 3 }} /> (555) 300-4471</p>
                <p style={{ display: "flex", gap: 8, marginBottom: 0 }}><Mail size={16} style={{ flexShrink: 0, marginTop: 3 }} /> hello@fureverchelter.org</p>
              </div>
              <div style={{ borderRadius: "var(--radius-md)", overflow: "hidden", aspectRatio: "16/9" }}>
                <iframe
                  title="Shelter location map"
                  src="https://maps.google.com/maps?q=Willow%20City&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  style={{ border: 0, width: "100%", height: "100%" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
