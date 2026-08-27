import { Link } from "react-router-dom";
import { PawPrint } from "lucide-react";

export default function NotFound() {
  return (
    <div className="section text-center" style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <PawPrint size={48} color="var(--color-accent)" style={{ marginBottom: "var(--space-3)" }} />
      <h1>This trail went cold</h1>
      <p>We could not find the page you were looking for.</p>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );
}
