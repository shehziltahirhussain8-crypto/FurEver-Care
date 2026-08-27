import { useState } from "react";
import { PawPrint, ShieldCheck, HeartPulse, Cake, Sparkles } from "lucide-react";
import { useToast } from "../context/ToastContext";
import SectionHeader from "../components/ui/SectionHeader";

const DEFAULT_PET = {
  name: "Bella",
  species: "Dog",
  breed: "Golden Retriever",
  age: "3",
  gender: "Female",
  vaccination: "Up to date — Rabies, DHPP, Bordetella (last dose: June 2026)",
  health: "No known allergies. Mild seasonal itchiness managed with omega-3 supplements.",
  image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=700&q=80",
};

export default function PetProfile() {
  const [pet, setPet] = useState(DEFAULT_PET);
  const [form, setForm] = useState(DEFAULT_PET);
  const { showToast } = useToast();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.breed.trim()) {
      showToast("Pet name and breed are required.", "error");
      return;
    }
    setPet(form);
    showToast(`${form.name}'s profile has been updated.`);
  };

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Pet Profile</span>
          <h1>Your pet, front and center</h1>
          <p>Keep your pet's name, shots and health notes organized and easy to find.</p>
        </div>
      </div>

      <section className="section">
        <div className="container grid grid-2" style={{ alignItems: "start", gridTemplateColumns: "1fr 1.1fr" }}>
          <div className="card" style={{ overflow: "hidden" }}>
            <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
              <img src={pet.image} alt={pet.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ padding: "var(--space-5)" }}>
              <div className="flex items-center gap-2" style={{ marginBottom: 10 }}>
                <PawPrint size={22} color="var(--color-accent)" />
                <h2 style={{ margin: 0 }}>{pet.name}</h2>
              </div>
              <div className="tag-row" style={{ marginBottom: "var(--space-4)" }}>
                <span className="badge">{pet.species}</span>
                <span className="badge badge--terracotta">{pet.breed}</span>
                <span className="badge badge--terracotta">{pet.gender}</span>
              </div>
              <div style={{ display: "grid", gap: 14 }}>
                <div className="flex gap-2" style={{ alignItems: "flex-start" }}>
                  <Cake size={18} color="var(--color-accent-dark)" style={{ marginTop: 3, flexShrink: 0 }} />
                  <div><strong>Age:</strong> {pet.age} years old</div>
                </div>
                <div className="flex gap-2" style={{ alignItems: "flex-start" }}>
                  <ShieldCheck size={18} color="var(--color-accent-dark)" style={{ marginTop: 3, flexShrink: 0 }} />
                  <div><strong>Vaccination:</strong> {pet.vaccination}</div>
                </div>
                <div className="flex gap-2" style={{ alignItems: "flex-start" }}>
                  <HeartPulse size={18} color="var(--color-accent-dark)" style={{ marginTop: 3, flexShrink: 0 }} />
                  <div><strong>Health notes:</strong> {pet.health}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card" style={{ padding: "var(--space-5)" }}>
            <div className="flex items-center gap-2" style={{ marginBottom: "var(--space-3)" }}>
              <Sparkles size={18} color="var(--color-accent)" />
              <h3 style={{ margin: 0 }}>Edit profile</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-2">
                <div className="form-group">
                  <label htmlFor="name">Pet name</label>
                  <input id="name" name="name" value={form.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="species">Species</label>
                  <select id="species" name="species" value={form.species} onChange={handleChange}>
                    <option>Dog</option>
                    <option>Cat</option>
                    <option>Rabbit</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="breed">Breed</label>
                  <input id="breed" name="breed" value={form.breed} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age (years)</label>
                  <input id="age" name="age" type="number" min="0" value={form.age} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select id="gender" name="gender" value={form.gender} onChange={handleChange}>
                    <option>Female</option>
                    <option>Male</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="vaccination">Vaccination information</label>
                <textarea id="vaccination" name="vaccination" value={form.vaccination} onChange={handleChange} rows={2} />
              </div>
              <div className="form-group">
                <label htmlFor="health">Health information</label>
                <textarea id="health" name="health" value={form.health} onChange={handleChange} rows={2} />
              </div>
              <button className="btn btn-primary btn-block" type="submit">Save profile</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
