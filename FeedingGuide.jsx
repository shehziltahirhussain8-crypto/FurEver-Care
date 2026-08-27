import { useState } from "react";
import { Dog, Cat } from "lucide-react";
import feeding from "../data/feeding.json";
import SectionHeader from "../components/ui/SectionHeader";

export default function FeedingGuide() {
  const [species, setSpecies] = useState("All");
  const filtered = species === "All" ? feeding : feeding.filter((f) => f.species === species);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Feeding Guide</span>
          <h1>The right portion, every life stage</h1>
          <p>Simple feeding tips by age group. Always check the exact amount with your vet for your pet's own needs.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="flex justify-between items-center flex-wrap gap-2" style={{ marginBottom: "var(--space-5)" }}>
            <SectionHeader align="left" title="Life-stage nutrition" description="Filter by species to compare how often, and how much, to feed." />
            <div className="flex gap-2">
              {["All", "Dog", "Cat"].map((s) => (
                <button
                  key={s}
                  className={`btn btn-sm ${species === s ? "btn-primary" : "btn-ghost"}`}
                  onClick={() => setSpecies(s)}
                >
                  {s === "Dog" && <Dog size={14} />} {s === "Cat" && <Cat size={14} />} {s}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-3">
            {filtered.map((f) => (
              <div className="card" style={{ padding: "var(--space-5)" }} key={f.id}>
                <span className="badge badge--terracotta">{f.species}</span>
                <h3 style={{ margin: "10px 0 4px" }}>{f.group}</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, margin: "var(--space-3) 0" }}>
                  <div style={{ background: "var(--color-bg-alt)", borderRadius: "var(--radius-sm)", padding: "10px" }}>
                    <div style={{ fontSize: "0.72rem", textTransform: "uppercase", fontWeight: 700, color: "var(--color-text-soft)" }}>Meals/day</div>
                    <div style={{ fontWeight: 700, color: "var(--color-primary)" }}>{f.mealsPerDay}</div>
                  </div>
                  <div style={{ background: "var(--color-bg-alt)", borderRadius: "var(--radius-sm)", padding: "10px" }}>
                    <div style={{ fontSize: "0.72rem", textTransform: "uppercase", fontWeight: 700, color: "var(--color-text-soft)" }}>Portion</div>
                    <div style={{ fontWeight: 700, color: "var(--color-primary)" }}>{f.portion}</div>
                  </div>
                </div>
                <p style={{ marginBottom: 0, fontSize: "0.9rem" }}>{f.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
