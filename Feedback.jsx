import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { useToast } from "../context/ToastContext";

export default function Feedback() {
  const [form, setForm] = useState({ name: "", email: "", feedback: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const { showToast } = useToast();

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Please enter your name.";
    if (!form.email.trim()) errs.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email address.";
    if (!form.feedback.trim() || form.feedback.trim().length < 10) errs.feedback = "Feedback should be at least 10 characters.";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      showToast("Thank you — your feedback has been received!");
      setForm({ name: "", email: "", feedback: "" });
    }
  };

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Feedback</span>
          <h1>Help us improve FurEver Care</h1>
          <p>Tell us what works, what's missing, or what you'd like to see next.</p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 560 }}>
          {submitted ? (
            <div className="card text-center" style={{ padding: "var(--space-7)" }}>
              <CheckCircle2 size={48} color="#3E5233" style={{ margin: "0 auto var(--space-3)" }} />
              <h3>Thank you for sharing!</h3>
              <p>We read every message. It helps shape what we build next.</p>
              <button className="btn btn-secondary" onClick={() => setSubmitted(false)}>Send another response</button>
            </div>
          ) : (
            <form className="card" style={{ padding: "var(--space-6)" }} onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="fb-name">Name</label>
                <input
                  id="fb-name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={errors.name ? "has-error" : ""}
                  aria-invalid={!!errors.name}
                />
                {errors.name && <div className="field-error">{errors.name}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="fb-email">Email</label>
                <input
                  id="fb-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={errors.email ? "has-error" : ""}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <div className="field-error">{errors.email}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="fb-feedback">Feedback</label>
                <textarea
                  id="fb-feedback"
                  rows={5}
                  value={form.feedback}
                  onChange={(e) => setForm({ ...form, feedback: e.target.value })}
                  className={errors.feedback ? "has-error" : ""}
                  aria-invalid={!!errors.feedback}
                />
                {errors.feedback && <div className="field-error">{errors.feedback}</div>}
              </div>
              <button className="btn btn-primary btn-block" type="submit">
                Send Feedback <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
