import { Link } from "react-router";
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Our Story | Scent by Kim" }];
}

export default function About() {
  return (
    <main className="inner-page">
      <section className="about-hero">
        <div className="about-image" role="img" aria-label="Soft sunlight over a botanical landscape" />
        <div className="about-hero-copy">
          <p className="eyebrow">A note from Kim</p>
          <h1>It should feel<br />like <em>you.</em></h1>
          <p>Because the best fragrance is never just something you wear. It becomes part of the way you move through the world.</p>
        </div>
      </section>
      <section className="about-statement">
        <p className="eyebrow">The essence of elegance</p>
        <h2>A scent can hold a whole <em>story.</em></h2>
        <p>At Scent by Kim, we believe fragrance is personal. It can bring you back to a moment, set the tone for a new one, or simply make an ordinary day feel like yours. Our edit brings together distinctive scents for different moods, styles and occasions.</p>
        <Link className="button button-dark" to="/collections">Explore the collections <span aria-hidden="true">↗</span></Link>
      </section>
      <section className="about-values">
        <article><span>01</span><h3>Considered</h3><p>Every fragrance has a point of view. We make room for the ones that leave a feeling.</p></article>
        <article><span>02</span><h3>Personal</h3><p>Your signature scent should feel like an expression of you, not a passing trend.</p></article>
        <article><span>03</span><h3>Memorable</h3><p>The best moments linger. We believe the same should be true of the scents you wear.</p></article>
      </section>
    </main>
  );
}