import { useState } from "react";
import { useUser } from "../context/UserContext";
import vets from "../data/vets.json";
import medicalHistory from "../data/medicalHistory.json";
import VetCard from "../components/cards/VetCard";
import SectionHeader from "../components/ui/SectionHeader";

const STATUS_BADGE = { Resolved: "badge", "In Recovery": "badge badge--terracotta", Ongoing: "badge badge--danger" };

export default function Veterinarian() {
  const { firstName } = useUser();
  const [activeVet, setActiveVet] = useState(vets[0].id);
  const vet = vets.find((v) => v.id === activeVet);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Veterinarian Portal</span>
          <h1>{firstName ? `Welcome, Dr. ${firstName}` : "Veterinarian Dashboard"}</h1>
          <p>A simple view of your profile, your schedule, and recent cases.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Team" title="Veterinarian profiles" description="Pick a profile to see their schedule." />
          <div className="grid grid-3" style={{ marginBottom: "var(--space-7)" }}>
            {vets.map((v) => (
              <div
                key={v.id}
                onClick={() => setActiveVet(v.id)}
                style={{ cursor: "pointer", outline: activeVet === v.id ? "2px solid var(--color-accent)" : "none", borderRadius: "var(--radius-md)" }}
              >
                <VetCard vet={v} />
              </div>
            ))}
          </div>

          <div className="grid grid-2" style={{ gridTemplateColumns: "1fr 1.3fr", alignItems: "start" }}>
            <div className="card" style={{ padding: "var(--space-5)" }}>
              <h3>{vet.name}'s Schedule</h3>
              <p style={{ fontSize: "0.85rem" }}>Today's appointment times, for viewing only.</p>
              <div style={{ display: "grid", gap: 10 }}>
                {vet.schedule.map((slot) => (
                  <div key={slot.time} className="flex justify-between items-center" style={{ padding: "10px 14px", borderRadius: "var(--radius-sm)", background: "var(--color-bg-alt)" }}>
                    <span style={{ fontWeight: 600 }}>{slot.time}</span>
                    <span className={slot.status === "Available" ? "badge" : "badge badge--terracotta"}>{slot.status}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card" style={{ padding: "var(--space-5)" }}>
              <h3>Recent Medical Case History</h3>
              <p style={{ fontSize: "0.85rem" }}>Sample cases, shown here for reference.</p>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 480 }}>
                  <thead>
                    <tr style={{ textAlign: "left", fontSize: "0.78rem", textTransform: "uppercase", color: "var(--color-text-soft)" }}>
                      <th style={{ padding: "8px 10px" }}>Pet</th>
                      <th style={{ padding: "8px 10px" }}>Condition</th>
                      <th style={{ padding: "8px 10px" }}>Date</th>
                      <th style={{ padding: "8px 10px" }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {medicalHistory.map((m) => (
                      <tr key={m.id} style={{ borderTop: "1px solid var(--color-bg-alt)" }}>
                        <td style={{ padding: "10px", fontWeight: 600 }}>{m.petName}</td>
                        <td style={{ padding: "10px", fontSize: "0.9rem" }}>{m.condition}<div style={{ fontSize: "0.78rem", color: "var(--color-text-soft)" }}>{m.treatment}</div></td>
                        <td style={{ padding: "10px", fontSize: "0.85rem", whiteSpace: "nowrap" }}>{new Date(m.date).toLocaleDateString(undefined, { month: "short", day: "numeric" })}</td>
                        <td style={{ padding: "10px" }}><span className={STATUS_BADGE[m.status]}>{m.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
