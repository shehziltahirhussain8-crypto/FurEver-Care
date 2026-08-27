import { Link } from "react-router-dom";
import { PawPrint, Utensils, Video, HeartPulse, GraduationCap, ArrowRight } from "lucide-react";
import { useUser } from "../context/UserContext";
import SectionHeader from "../components/ui/SectionHeader";

const SECTIONS = [
  { to: "/pet-profile", icon: PawPrint, title: "Pet Profile", desc: "Keep your pet's name, shots and health notes in one place." },
  { to: "/feeding-guide", icon: Utensils, title: "Feeding Guide", desc: "How much to feed dogs and cats, from puppy to senior years." },
  { to: "/grooming", icon: Video, title: "Grooming Videos", desc: "Short videos for brushing, bathing, nails and coat care." },
  { to: "/health-tips", icon: HeartPulse, title: "Health Tips", desc: "Simple health basics, from clean teeth to parasite control." },
  { to: "/training", icon: GraduationCap, title: "Training Tips", desc: "Reward-based lessons for commands, leash walks and more." },
];

export default function PetOwner() {
  const { firstName } = useUser();
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Pet Owner Portal</span>
          <h1>{firstName ? `Welcome back, ${firstName}!` : "Welcome, Pet Owner"}</h1>
          <p>Everything you need to keep your pet happy, healthy and well cared for — in five simple sections below.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Your dashboard" title="Pet care sections" description="Pick whichever your pet needs today." />
          <div className="grid grid-3">
            {SECTIONS.map((s) => {
              const Icon = s.icon;
              return (
                <Link to={s.to} className="card" style={{ padding: "var(--space-5)", display: "block" }} key={s.to}>
                  <div className="icon-tile"><Icon size={22} /></div>
                  <h3 style={{ marginBottom: 6 }}>{s.title}</h3>
                  <p style={{ marginBottom: 8 }}>{s.desc}</p>
                  <span style={{ color: "var(--color-accent-dark)", fontWeight: 600, fontSize: "0.88rem", display: "inline-flex", alignItems: "center", gap: 6 }}>
                    Open <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
