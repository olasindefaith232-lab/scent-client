import type { Route } from "./+types/home";
import { useMemo, useState } from "react";
import { categories, formatPrice, products } from "../data/catalog";
import { useStore } from "../components/site-shell";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Scent by Kim | A Signature Scent for Every Story" },
    {
      name: "description",
      content:
        "Discover your next signature fragrance at Scent by Kim, a curated perfume boutique for every mood and moment.",
    },
  ];
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All scents");
  const [search, setSearch] = useState("");
  const [bagMessage, setBagMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { addToBag: addProductToBag } = useStore();

  const visibleProducts = useMemo(() => {
    const query = search.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All scents" || product.category === activeCategory;
      const matchesSearch =
        !query ||
        `${product.brand} ${product.name} ${product.notes} ${product.category}`
          .toLowerCase()
          .includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  function announceAdded(name: string) {
    setBagMessage(`${name} added to your bag`);
    window.setTimeout(() => setBagMessage(""), 2600);
  }

  return (
    <>
      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span /> A fragrance, personally found</p>
            <h1>Leave a little<br /><em>magic</em> behind.</h1>
            <p className="hero-description">
              The right fragrance says what words can’t. Find the one that feels
              unmistakably, beautifully you.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#featured">Shop the collection <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#categories">Explore by scent</a>
            </div>
            <div className="hero-note"><span>01 / 04</span><span className="hero-rule" /><span>THE ART OF A FIRST IMPRESSION</span></div>
          </div>
          <div className="hero-visual" role="img" aria-label="Perfume bottle styled with warm flowers and soft evening light">
            <div className="hero-image" />
            <div className="hero-image-caption"><span>SCENT IS A MEMORY</span><span>EST. WITH INTENTION</span></div>
            <div className="hero-seal"><span>FIND</span><span>YOUR</span><span>SIGNATURE</span><i>✳</i></div>
          </div>
          <span className="hero-index">LAGOS · NIGERIA</span>
        </section>

        <section className="marquee" aria-label="Brand promise">
          <div>SCENT THAT STAYS <span>✳</span> STORIES THAT LINGER <span>✳</span> MADE TO BE REMEMBERED <span>✳</span> SCENT THAT STAYS <span>✳</span></div>
        </section>

        <section className="category-section section-wrap" id="categories">
          <div className="section-heading">
            <div><p className="eyebrow">A world of notes</p><h2>Follow your <em>feeling.</em></h2></div>
            <a className="text-link" href="#featured">View all fragrances <span aria-hidden="true">↗</span></a>
          </div>
          <div className="category-grid">
            {categories.map((category, index) => (
              <button
                type="button"
                className="category-tile"
                key={category.name}
                onClick={() => {
                  setActiveCategory(category.name);
                  document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <img src={category.image} alt="" loading="lazy" />
                <span className="category-number">0{index + 1}</span>
                <span className="category-copy"><strong>{category.name}</strong><small>{category.note}</small></span>
                <span className="category-arrow" aria-hidden="true">↗</span>
              </button>
            ))}
          </div>
        </section>

        <section className="featured-section" id="featured">
          <div className="section-wrap">
            <div className="section-heading featured-heading">
              <div><p className="eyebrow">The considered edit</p><h2>Find your <em>forever.</em></h2></div>
              <p className="section-aside">Distinctive fragrances, chosen for how they make you feel.</p>
            </div>
            <div className="product-toolbar">
              <div className="category-tabs" role="group" aria-label="Filter fragrances by scent family">
                {["All scents", ...categories.map(({ name }) => name)].map((category) => (
                  <button
                    type="button"
                    key={category}
                    className={activeCategory === category ? "category-tab active" : "category-tab"}
                    aria-pressed={activeCategory === category}
                    onClick={() => setActiveCategory(category)}
                  >{category}</button>
                ))}
              </div>
              <span className="result-count">{visibleProducts.length} fragrances</span>
            </div>
            <div className="product-grid">
              {visibleProducts.map((product) => (
                <article className="product-card" key={product.name}>
                  <div className="product-image-wrap">
                    <img src={product.image} alt={`${product.name} perfume`} loading="lazy" />
                    <span className="product-badge">{product.badge}</span>
                    <button className="quick-add" type="button" onClick={() => { addProductToBag(product); announceAdded(product.name); }} aria-label={`Add ${product.name} to bag`}>+</button>
                  </div>
                  <div className="product-info">
                    <div className="product-title-row"><span className="product-brand">{product.brand}</span><span className="product-price">{formatPrice(product.price)}</span></div>
                    <h3>{product.name}</h3>
                    <p>{product.notes}</p>
                  </div>
                </article>
              ))}
              {visibleProducts.length === 0 && <p className="empty-results">No fragrances found. Try another scent family or search.</p>}
            </div>
            <div className="center-action"><a className="button button-outline" href="#categories">Explore all fragrances <span aria-hidden="true">↗</span></a></div>
          </div>
        </section>

        <section className="story-section" id="story">
          <div className="story-image" role="img" aria-label="Sunlight falling across a calm botanical still life" />
          <div className="story-copy">
            <p className="eyebrow">A note from Kim</p>
            <h2>It should feel<br />like <em>you.</em></h2>
            <p>Fragrance is the most intimate part of getting dressed. We bring together thoughtful finds from around the world so the scent you choose feels less like a label and more like your own story.</p>
            <a className="text-link" href="#newsletter">Get to know us <span aria-hidden="true">↗</span></a>
            <span className="story-signature">With love, Kim</span>
          </div>
          <span className="story-decoration" aria-hidden="true">K.</span>
        </section>

        <section className="quote-section">
          <p className="eyebrow">The feeling is mutual</p>
          <div className="quote-stars" aria-label="5 out of 5 stars">★★★★★</div>
          <blockquote>“I’ve finally found a scent that feels like it was made for me. The whole experience felt so thoughtful.”</blockquote>
          <p className="quote-credit">AMARA O. <span>·</span> LAGOS</p>
        </section>

        <section className="newsletter-section" id="newsletter">
          <div><p className="eyebrow">A little something lovely</p><h2>Stay in the <em>scent.</em></h2><p>New arrivals, thoughtful edits and the occasional note from us.</p></div>
          <form className="newsletter-form" onSubmit={(event) => { event.preventDefault(); setSubscribed(true); }}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input id="newsletter-email" type="email" placeholder="Your email address" required />
            <button type="submit" aria-label="Subscribe to newsletter">{subscribed ? "You're on the list" : "Subscribe ↗"}</button>
            <span className="newsletter-note" aria-live="polite">{subscribed ? "Thank you. Look out for a note from us." : "By subscribing, you agree to our privacy policy."}</span>
          </form>
        </section>
      </main>

      <p className="sr-only" aria-live="polite">{bagMessage}</p>
    </>
  );
}
