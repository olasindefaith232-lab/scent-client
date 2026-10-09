import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Contact | Scent by Kim" }];
}

export default function Contact() {
  return (
    <main className="inner-page">
      <section className="page-intro">
        <p className="eyebrow">We’re here for you</p>
        <h1>Let’s have a <em>word.</em></h1>
        <p>A question about a fragrance, an order, or just not sure where to start? We’d love to help.</p>
      </section>
      <section className="contact-content">
        <div className="contact-details">
          <p className="eyebrow">Get in touch</p>
          <h2>A little help goes a <em>long way.</em></h2>
          <p>Send us a note and we’ll get back to you as soon as we can.</p>
          <a href="mailto:hello@scentbykim.com">hello@scentbykim.com <span aria-hidden="true">↗</span></a>
          <span>Lagos, Nigeria</span>
        </div>
        <form className="contact-form" action="mailto:hello@scentbykim.com" method="post" encType="text/plain">
          <label>Your name<input name="name" autoComplete="name" required /></label>
          <label>Email address<input name="email" type="email" autoComplete="email" required /></label>
          <label>What can we help with?<textarea name="message" rows={5} required /></label>
          <button className="button button-dark" type="submit">Send your note <span aria-hidden="true">↗</span></button>
          <p className="contact-form-note">Your email app will open to send this message.</p>
        </form>
      </section>
    </main>
  );
}