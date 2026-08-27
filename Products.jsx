import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import products from "../data/products.json";
import ProductCard from "../components/cards/ProductCard";
import SectionHeader from "../components/ui/SectionHeader";

const CATEGORIES = ["All", ...new Set(products.map((p) => p.category))];
const SORTS = [
  { id: "relevance", label: "Relevance" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "name-asc", label: "Name: A to Z" },
];

export default function Products() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("relevance");

  const results = useMemo(() => {
    let list = products.filter((p) => category === "All" || p.category === category);
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    }
    switch (sort) {
      case "price-asc": list = [...list].sort((a, b) => a.price - b.price); break;
      case "price-desc": list = [...list].sort((a, b) => b.price - a.price); break;
      case "name-asc": list = [...list].sort((a, b) => a.name.localeCompare(b.name)); break;
      default: break;
    }
    return list;
  }, [query, category, sort]);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Product Showcase</span>
          <h1>Everything your pet could ask for</h1>
          <p>Browse picked food, toys, grooming items, bedding and supplements. These cards are for browsing only.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="card" style={{ padding: "var(--space-4)", marginBottom: "var(--space-6)" }}>
            <div className="flex gap-3 flex-wrap items-center">
              <div style={{ position: "relative", flex: "1 1 260px" }}>
                <Search size={16} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--color-text-soft)" }} />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label="Search products"
                  style={{ paddingLeft: 40 }}
                />
              </div>
              <select value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Filter by category" style={{ maxWidth: 220 }}>
                {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
              <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort products" style={{ maxWidth: 220 }}>
                {SORTS.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
              </select>
            </div>
          </div>

          <div className="flex justify-between items-center" style={{ marginBottom: "var(--space-4)" }}>
            <p style={{ margin: 0, display: "flex", alignItems: "center", gap: 6 }}>
              <SlidersHorizontal size={15} /> {results.length} product{results.length !== 1 ? "s" : ""} found
            </p>
          </div>

          {results.length === 0 ? (
            <div className="empty-state">
              <h3>No products match your search</h3>
              <p>Try a different word, or clear the category filter.</p>
              <button className="btn btn-secondary" onClick={() => { setQuery(""); setCategory("All"); }}>Reset filters</button>
            </div>
          ) : (
            <div className="grid grid-4">
              {results.map((p) => <ProductCard product={p} key={p.id} />)}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
