import tips from "../data/tips.json";
import TipCard from "../components/cards/TipCard";
import SectionHeader from "../components/ui/SectionHeader";

export default function HealthTips() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Health Tips</span>
          <h1>Preventive care, made clear</h1>
          <p>Small habits that add up to a longer, healthier life for your pet.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <SectionHeader title="Core health topics" description="Tap 'Learn more' on any card to read more." />
          <div className="grid grid-3">
            {tips.map((t) => <TipCard tip={t} key={t.id} />)}
          </div>
        </div>
      </section>
    </>
  );
}
