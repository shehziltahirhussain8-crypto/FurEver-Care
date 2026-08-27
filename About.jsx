import { HeartHandshake, Users, Sparkles, ShieldCheck } from "lucide-react";
import SectionHeader from "../components/ui/SectionHeader";

const TEAM = [
  { name: "Dr. Amelia Hart", role: "Founder & Chief Veterinary Officer", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80" },
  { name: "Naomi Fields", role: "Head of Shelter Partnerships", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
  { name: "Diego Marín", role: "Community & Adoption Lead", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
  { name: "Priya Nair", role: "Pet Nutrition Specialist", image: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=400&q=80" },
];

export default function About() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">About FurEver Care</span>
          <h1>Built for pets, and the people who love them</h1>
          <p>We believe pet care should be simple, honest and easy to reach — for owners, vets and shelters alike.</p>
        </div>
      </div>

      <section className="section">
        <div className="container grid grid-2" style={{ alignItems: "center" }}>
          <div>
            <span className="eyebrow">Our mission</span>
            <h2>Every pet deserves forever love</h2>
            <p>FurEver Care wants to close the gap between wanting to help your pet and knowing how. We bring feeding tips, grooming know-how, health guidance and shelter adoption together in one place — so no pet parent has to guess.</p>
            <p>Whether you are raising a new puppy, running a vet practice, or finding homes for shelter animals, FurEver Care gives you clear, trustworthy information right when you need it.</p>
          </div>
          <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", aspectRatio: "4/3" }}>
            <img src="https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=800&q=80" alt="A volunteer sitting with a shelter dog" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeader title="Why pet wellness matters" description="Many pet health problems, and full shelters, can be helped with better information." />
          <div className="feature-strip">
            <div className="feature-item">
              <div className="icon-tile" style={{ margin: "0 auto var(--space-3)" }}><HeartHandshake size={22} /></div>
              <h4 style={{ fontSize: "1.05rem" }}>Preventive First</h4>
              <p style={{ fontSize: "0.88rem" }}>Most costly health problems can be avoided with simple, steady care.</p>
            </div>
            <div className="feature-item">
              <div className="icon-tile" style={{ margin: "0 auto var(--space-3)" }}><Users size={22} /></div>
              <h4 style={{ fontSize: "1.05rem" }}>Community Focused</h4>
              <p style={{ fontSize: "0.88rem" }}>We work directly with local shelters and independent vets.</p>
            </div>
            <div className="feature-item">
              <div className="icon-tile" style={{ margin: "0 auto var(--space-3)" }}><ShieldCheck size={22} /></div>
              <h4 style={{ fontSize: "1.05rem" }}>Trustworthy Info</h4>
              <p style={{ fontSize: "0.88rem" }}>Every guide is checked against current vet best practice.</p>
            </div>
            <div className="feature-item">
              <div className="icon-tile" style={{ margin: "0 auto var(--space-3)" }}><Sparkles size={22} /></div>
              <h4 style={{ fontSize: "1.05rem" }}>Built With Care</h4>
              <p style={{ fontSize: "0.88rem" }}>Every screen is made to feel warm, calm and easy to trust.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Our people" title="Meet the team" description="A small, dedicated group of vet and community specialists." />
          <div className="grid grid-4">
            {TEAM.map((m) => (
              <div className="card text-center" style={{ padding: "var(--space-5)" }} key={m.name}>
                <img src={m.image} alt={m.name} loading="lazy" style={{ width: 88, height: 88, borderRadius: "50%", objectFit: "cover", margin: "0 auto var(--space-3)" }} />
                <h4 style={{ marginBottom: 2 }}>{m.name}</h4>
                <p style={{ fontSize: "0.85rem", marginBottom: 0 }}>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
