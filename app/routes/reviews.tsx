import type { Route } from "./+types/reviews";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Reviews | Scent by Kim" }];
}

export default function Reviews() {
  return (
    <main className="inner-page">
      <section className="page-intro">
        <p className="eyebrow">The feeling is mutual</p>
        <h1>Notes from <em>you.</em></h1>
        <p>Fragrance is personal. Here are a few words about finding the one.</p>
      </section>
      <section className="reviews-content">
        <div className="review-feature">
          <span className="quote-stars" aria-label="5 out of 5 stars">★★★★★</span>
          <blockquote>“I’ve finally found a scent that feels like it was made for me. The whole experience felt so thoughtful.”</blockquote>
          <p className="quote-credit">A SCENT BY KIM CUSTOMER <span>·</span> LAGOS</p>
        </div>
        <div className="review-note">
          <p className="eyebrow">Your story belongs here</p>
          <h2>Found your <em>signature?</em></h2>
          <p>We’d love to hear about the fragrance you chose and the moments you wear it for.</p>
          <a className="button button-outline" href="mailto:hello@scentbykim.com?subject=My%20Scent%20by%20Kim%20review">Share your experience <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </main>
  );
}