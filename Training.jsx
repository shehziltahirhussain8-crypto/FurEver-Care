import { useState } from "react";
import training from "../data/training.json";
import TrainingCard from "../components/cards/TrainingCard";
import SectionHeader from "../components/ui/SectionHeader";

const CATEGORIES = ["All", ...new Set(training.map((t) => t.category))];

export default function Training() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? training : training.filter((t) => t.category === filter);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Training Tips</span>
          <h1>Positive-reinforcement training</h1>
          <p>Step-by-step lessons that build good habits through praise, not punishment.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="flex justify-between items-center flex-wrap gap-2" style={{ marginBottom: "var(--space-5)" }}>
            <SectionHeader align="left" title="Lessons" description="Filter by lesson type." />
            <div className="flex gap-2 flex-wrap">
              {CATEGORIES.map((c) => (
                <button key={c} className={`btn btn-sm ${filter === c ? "btn-primary" : "btn-ghost"}`} onClick={() => setFilter(c)}>
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-3">
            {filtered.map((t) => <TrainingCard item={t} key={t.id} />)}
          </div>
        </div>
      </section>
    </>
  );
}
