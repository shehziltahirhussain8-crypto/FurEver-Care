import { useState } from "react";
import { X } from "lucide-react";
import grooming from "../data/grooming.json";
import VideoCard from "../components/cards/VideoCard";
import SectionHeader from "../components/ui/SectionHeader";

export default function Grooming() {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Grooming Videos</span>
          <h1>Grooming made simple</h1>
          <p>Short, simple videos on the basics — brushing, bathing, nails and coat care.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <SectionHeader title="Pick a topic" description="Tap a card to watch the video." />
          <div className="grid grid-4">
            {grooming.map((v) => <VideoCard video={v} onPlay={setActive} key={v.id} />)}
          </div>
        </div>
      </section>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
          style={{ position: "fixed", inset: 0, background: "rgba(20,14,10,0.78)", zIndex: 3000, display: "flex", alignItems: "center", justifyContent: "center", padding: "var(--space-4)" }}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ background: "var(--color-white)", borderRadius: "var(--radius-lg)", maxWidth: 640, width: "100%", overflow: "hidden" }}>
            <div style={{ aspectRatio: "16/9", background: "#000", position: "relative" }}>
              <video
                controls
                autoPlay
                muted
                playsInline
                poster={active.thumbnail}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              >
                <source src={active.video} type="video/mp4" />
              </video>
            </div>
            <div style={{ padding: "var(--space-4)" }}>
              <div className="flex justify-between items-center">
                <h3 style={{ margin: 0 }}>{active.title}</h3>
                <button onClick={() => setActive(null)} aria-label="Close video preview" style={{ background: "none", border: "none" }}>
                  <X size={20} />
                </button>
              </div>
              <p style={{ marginTop: 8, marginBottom: 0 }}>{active.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
