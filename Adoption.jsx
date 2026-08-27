import { useMemo, useState } from "react";
import { Dog, Cat, Rabbit, LayoutGrid } from "lucide-react";
import pets from "../data/pets.json";
import successStories from "../data/successStories.json";
import PetCard from "../components/cards/PetCard";
import StoryCard from "../components/cards/StoryCard";
import SectionHeader from "../components/ui/SectionHeader";

const TYPES = [
  { id: "All", label: "All", icon: LayoutGrid },
  { id: "Dog", label: "Dogs", icon: Dog },
  { id: "Cat", label: "Cats", icon: Cat },
  { id: "Rabbit", label: "Rabbits", icon: Rabbit },
];

export default function Adoption() {
  const [type, setType] = useState("All");
  const [breed, setBreed] = useState("All");
  const [location, setLocation] = useState("All");
  const [maxAge, setMaxAge] = useState(10);

  const breeds = useMemo(() => ["All", ...new Set(pets.map((p) => p.breed))], []);
  const locations = useMemo(() => ["All", ...new Set(pets.map((p) => p.location))], []);

  const filtered = pets.filter((p) =>
    (type === "All" || p.type === type) &&
    (breed === "All" || p.breed === breed) &&
    (location === "All" || p.location === location) &&
    p.age <= maxAge
  );

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Adoption</span>
          <h1>Meet your new best friend</h1>
          <p>Every pet below is ready for adoption now. Filter by type, breed, age or shelter to find the right match.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="card" style={{ padding: "var(--space-4)", marginBottom: "var(--space-6)" }}>
            <div className="flex gap-2 flex-wrap" style={{ marginBottom: "var(--space-3)" }}>
              {TYPES.map((t) => {
                const Icon = t.icon;
                return (
                  <button key={t.id} className={`btn btn-sm ${type === t.id ? "btn-primary" : "btn-ghost"}`} onClick={() => setType(t.id)}>
                    <Icon size={14} /> {t.label}
                  </button>
                );
              })}
            </div>
            <div className="flex gap-3 flex-wrap items-center">
              <select value={breed} onChange={(e) => setBreed(e.target.value)} aria-label="Filter by breed" style={{ maxWidth: 200 }}>
                {breeds.map((b) => <option key={b} value={b}>{b === "All" ? "All Breeds" : b}</option>)}
              </select>
              <select value={location} onChange={(e) => setLocation(e.target.value)} aria-label="Filter by location" style={{ maxWidth: 220 }}>
                {locations.map((l) => <option key={l} value={l}>{l === "All" ? "All Locations" : l}</option>)}
              </select>
              <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.88rem", fontWeight: 600, color: "var(--color-primary)" }}>
                Max age: {maxAge}y
                <input type="range" min="0" max="10" value={maxAge} onChange={(e) => setMaxAge(Number(e.target.value))} />
              </label>
            </div>
          </div>

          <p style={{ marginBottom: "var(--space-4)" }}>{filtered.length} pet{filtered.length !== 1 ? "s" : ""} available</p>

          {filtered.length === 0 ? (
            <div className="empty-state">
              <h3>No pets match these filters</h3>
              <p>Try a wider age range, or clear a filter.</p>
            </div>
          ) : (
            <div className="grid grid-4">
              {filtered.map((p) => <PetCard pet={p} key={p.id} />)}
            </div>
          )}
        </div>
      </section>

      <section className="section section--alt" id="stories">
        <div className="container">
          <SectionHeader eyebrow="Happy tails" title="Adoption success stories" description="A few of the families that FurEver Care has helped bring together." />
          <div className="grid grid-3">
            {successStories.map((s) => <StoryCard story={s} key={s.id} />)}
          </div>
        </div>
      </section>
    </>
  );
}
