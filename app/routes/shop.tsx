import { useMemo, useState } from "react";
import { useSearchParams } from "react-router";
import type { Route } from "./+types/shop";
import { categories, products } from "../data/catalog";
import { ProductGrid } from "../components/product-grid";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Shop Fragrances | Scent by Kim" }];
}

export default function Shop() {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") ?? "");
  const initialFamily = searchParams.get("family") ?? "All scents";
  const [family, setFamily] = useState(initialFamily);
  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();
    return products.filter((product) => {
      const matchesFamily = family === "All scents" || product.category === family;
      const matchesQuery =
        !query ||
        `${product.brand} ${product.name} ${product.notes} ${product.category}`
          .toLowerCase()
          .includes(query);
      return matchesFamily && matchesQuery;
    });
  }, [family, search]);

  return (
    <main className="inner-page">
      <section className="page-intro shop-intro">
        <p className="eyebrow">The considered edit</p>
        <h1>Find your <em>forever.</em></h1>
        <p>Distinctive fragrances, chosen for how they make you feel.</p>
      </section>
      <section className="section-wrap shop-page-content" aria-label="Shop fragrances">
        <div className="shop-controls">
          <label className="shop-search">
            <span className="sr-only">Search fragrances</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by name, brand or note"
            />
          </label>
          <span className="result-count">{filteredProducts.length} fragrances</span>
        </div>
        <div className="category-tabs shop-tabs" role="group" aria-label="Filter fragrances by scent family">
          {["All scents", ...categories.map(({ name }) => name)].map((category) => (
            <button
              type="button"
              key={category}
              className={family === category ? "category-tab active" : "category-tab"}
              aria-pressed={family === category}
              onClick={() => setFamily(category)}
            >{category}</button>
          ))}
        </div>
        <ProductGrid products={filteredProducts} />
      </section>
    </main>
  );
}