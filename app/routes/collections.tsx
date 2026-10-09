import { Link } from "react-router";
import type { Route } from "./+types/collections";
import { categories } from "../data/catalog";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Fragrance Collections | Scent by Kim" }];
}

export default function Collections() {
  return (
    <main className="inner-page">
      <section className="page-intro">
        <p className="eyebrow">A world of notes</p>
        <h1>Follow your <em>feeling.</em></h1>
        <p>Start with the notes you love. Your next signature scent is somewhere here.</p>
      </section>
      <section className="section-wrap collection-page-grid" aria-label="Scent collections">
        {categories.map((category, index) => (
          <Link className="collection-page-tile" to={`/shop?family=${category.name}`} key={category.name}>
            <img src={category.image} alt="" />
            <span className="collection-index">0{index + 1}</span>
            <span className="collection-page-copy">
              <strong>{category.name}</strong>
              <small>{category.note}</small>
              <span>Explore collection ↗</span>
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}