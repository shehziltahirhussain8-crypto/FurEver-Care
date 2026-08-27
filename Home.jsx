import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  ChevronDown, Dog, Stethoscope, Home as HomeIcon, ShieldCheck,
  Sparkles, HeartHandshake, Clock3, ArrowRight, PlayCircle,
} from "lucide-react";
import { useUser } from "../context/UserContext";
import { useToast } from "../context/ToastContext";
import { useScrollReveal } from "../hooks/useScrollReveal";
import VisitorCounter from "../components/ui/VisitorCounter";
import SectionHeader from "../components/ui/SectionHeader";
import successStories from "../data/successStories.json";
import StoryCard from "../components/cards/StoryCard";
import "./Home.css";

const USER_TYPES = [
  { id: "owner", label: "Pet Owner", icon: Dog, desc: "Profiles, feeding, grooming and health help for your pet.", route: "/pet-owner" },
  { id: "vet", label: "Veterinarian", icon: Stethoscope, desc: "Manage your profile, schedule and case history.", route: "/veterinarian" },
  { id: "shelter", label: "Animal Shelter", icon: HomeIcon, desc: "List pets for adoption, share stories and manage events.", route: "/shelter" },
];

export default function Home() {
  const [selected, setSelected] = useState(null);
  const [name, setName] = useState("");
  const { selectUser } = useUser();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const revealRef = useScrollReveal();
  const revealRef2 = useScrollReveal();
  const revealRef3 = useScrollReveal();
  const revealRef4 = useScrollReveal();

  const handleContinue = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      showToast("Please tell us your first name to continue.", "error");
      return;
    }
    const type = USER_TYPES.find((t) => t.id === selected);
    selectUser(selected, name);
    showToast(`Welcome, ${name.trim()}! Taking you to your ${type.label} experience.`);
    navigate(type.route);
  };

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__media">
          <video autoPlay muted loop playsInline poster="https://assets.mixkit.co/videos/15160/15160-thumb-720-0.jpg">
            <source src="https://assets.mixkit.co/videos/15160/15160-720.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero__overlay" />
        <div className="container hero__content">
          <span className="hero__eyebrow"><Sparkles size={14} /> Simple pet care, all in one place</span>
          <h1 className="hero__title">They Deserve Forever Love</h1>
          <p className="hero__subtitle">
            FurEver Care brings pet owners, vets and shelters together. Find feeding
            guides, grooming videos, adoption stories and emergency help — all built
            around one idea: every pet deserves a lifetime of care.
          </p>
          <div className="hero__ctas">
            <a href="#get-started" className="btn btn-primary">Get Started <ArrowRight size={16} /></a>
            <a href="#watch" className="btn btn-outline"><PlayCircle size={16} /> Watch Video</a>
          </div>
        </div>
        <a href="#get-started" className="hero__scroll-cue" aria-label="Scroll for more">
          Scroll <ChevronDown size={18} />
        </a>
      </section>

      {/* USER TYPE SELECTION */}
      <section className="section" id="get-started">
        <div className="blob blob--coral" style={{ width: 320, height: 320, top: -80, left: -100 }} />
        <div className="blob blob--gold" style={{ width: 260, height: 260, bottom: -60, right: -80 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <SectionHeader
            eyebrow="Choose your experience"
            title="Who's visiting FurEver Care today?"
            description="Pick the option that fits you. We'll set everything up from there."
          />
          <div className="usertype-grid">
            {USER_TYPES.map((t, i) => {
              const Icon = t.icon;
              return (
                <button
                  key={t.id}
                  className={`usertype-card ${selected === t.id ? "is-selected" : ""}`}
                  onClick={() => setSelected(t.id)}
                  aria-pressed={selected === t.id}
                  style={{ "--reveal-delay": `${i * 0.08}s` }}
                >
                  <div className="usertype-card__icon"><Icon size={28} /></div>
                  <h3 style={{ marginBottom: 6 }}>{t.label}</h3>
                  <p style={{ marginBottom: 0, fontSize: "0.9rem" }}>{t.desc}</p>
                </button>
              );
            })}
          </div>

          {selected && (
            <form className="usertype-form reveal is-visible glass" onSubmit={handleContinue}>
              <h3>Almost there!</h3>
              <div className="form-group">
                <label htmlFor="firstName">What's your first name?</label>
                <input
                  id="firstName"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Jordan"
                  autoComplete="given-name"
                />
              </div>
              <button className="btn btn-primary btn-block" type="submit">
                Continue as {USER_TYPES.find((t) => t.id === selected)?.label} <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="section section--alt" id="pet-care-preview" ref={revealRef}>
        <div className="container reveal" ref={revealRef}>
          <SectionHeader
            eyebrow="Why FurEver Care"
            title="Everything your pet needs, in one spot"
            description="From daily care to emergency numbers, everything is easy to find and easy to trust."
          />
          <div className="feature-strip">
            <div className="feature-item">
              <div className="icon-tile" style={{ margin: "0 auto var(--space-3)" }}><HeartHandshake size={22} /></div>
              <h4 style={{ fontSize: "1.05rem" }}>Guided Pet Care</h4>
              <p style={{ fontSize: "0.88rem" }}>Feeding, grooming, health and training — sorted by life stage.</p>
            </div>
            <div className="feature-item">
              <div className="icon-tile" style={{ margin: "0 auto var(--space-3)" }}><Stethoscope size={22} /></div>
              <h4 style={{ fontSize: "1.05rem" }}>Trusted Vet Network</h4>
              <p style={{ fontSize: "0.88rem" }}>Real vet profiles, schedules and case notes, shown clearly.</p>
            </div>
            <div className="feature-item">
              <div className="icon-tile" style={{ margin: "0 auto var(--space-3)" }}><HomeIcon size={22} /></div>
              <h4 style={{ fontSize: "1.05rem" }}>Shelter & Adoption</h4>
              <p style={{ fontSize: "0.88rem" }}>See pets for adoption, real success stories and upcoming events.</p>
            </div>
            <div className="feature-item">
              <div className="icon-tile" style={{ margin: "0 auto var(--space-3)" }}><ShieldCheck size={22} /></div>
              <h4 style={{ fontSize: "1.05rem" }}>Always-On Emergency Help</h4>
              <p style={{ fontSize: "0.88rem" }}>Poison control and emergency vet numbers, one tap away.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SHOWCASE */}
      <section className="section" id="watch" ref={revealRef4}>
        <div className="container reveal" ref={revealRef4}>
          <div className="video-showcase">
            <div className="video-showcase__media">
              <video controls muted loop playsInline poster="https://assets.mixkit.co/videos/45405/45405-thumb-720-0.jpg">
                <source src="https://assets.mixkit.co/videos/45405/45405-720.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="video-showcase__text">
              <span className="eyebrow">See it in action</span>
              <h2>A calm, caring platform for every pet</h2>
              <p>
                Watch a quick look at what FurEver Care feels like day to day — simple
                guides, short videos and friendly reminders that make pet care easier
                for owners, vets and shelters alike.
              </p>
              <Link to="/grooming" className="btn btn-primary">More Videos <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* VISITOR COUNTER + TIME */}
      <section className="section text-center section--alt" ref={revealRef2}>
        <div className="container reveal" ref={revealRef2}>
          <div className="flex justify-between items-center gap-3" style={{ flexWrap: "wrap", justifyContent: "center" }}>
            <VisitorCounter target={12458} />
            <div className="visitor-counter">
              <div className="visitor-counter__icon"><Clock3 size={20} /></div>
              <div>
                <div className="visitor-counter__number" style={{ fontSize: "1.1rem" }}>Live clock &amp; location</div>
                <div className="visitor-counter__label">See it in the ticker above</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS STORY PREVIEW */}
      <section className="section" ref={revealRef3}>
        <div className="container reveal" ref={revealRef3}>
          <SectionHeader
            eyebrow="Happy tails"
            title="A few of our favorite endings"
            description="Real pets, real families — a small taste of the stories waiting in Adoption."
          />
          <div className="grid grid-3">
            {successStories.slice(0, 3).map((s) => <StoryCard story={s} key={s.id} />)}
          </div>
          <div className="text-center mt-4">
            <Link to="/adoption" className="btn btn-ghost">See all success stories</Link>
          </div>
        </div>
      </section>
    </>
  );
}
