import { Link } from "react-router";
import type { Route } from "./+types/cart";
import { useStore } from "../components/site-shell";
import { formatPrice } from "../data/catalog";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Your Bag | Scent by Kim" }];
}

export default function Cart() {
  const { cart, removeFromBag, setQuantity } = useStore();
  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  return (
    <main className="inner-page cart-page">
      <section className="page-intro cart-intro">
        <p className="eyebrow">A very good choice</p>
        <h1>Your <em>bag.</em></h1>
      </section>
      {cart.length === 0 ? (
        <section className="cart-empty">
          <p>Your bag is waiting for a little something lovely.</p>
          <Link className="button button-dark" to="/shop">Explore fragrances <span aria-hidden="true">↗</span></Link>
        </section>
      ) : (
        <section className="cart-content">
          <div className="cart-items">
            {cart.map(({ product, quantity }) => (
              <article className="cart-item" key={product.name}>
                <img src={product.image} alt={`${product.name} perfume`} />
                <div className="cart-item-info">
                  <span className="product-brand">{product.brand}</span>
                  <h2>{product.name}</h2>
                  <p>{product.notes}</p>
                  <button className="remove-item" type="button" onClick={() => removeFromBag(product.name)}>Remove</button>
                </div>
                <label className="quantity-control">Qty
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    aria-label={`Quantity of ${product.name}`}
                    onChange={(event) => setQuantity(product.name, Number(event.target.value))}
                  />
                </label>
                <strong className="cart-line-price">{formatPrice(product.price * quantity)}</strong>
              </article>
            ))}
          </div>
          <aside className="cart-summary">
            <p>Order summary</p>
            <div><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div>
            <small>Delivery is calculated when your order is confirmed.</small>
            <button className="button button-dark" type="button" disabled>Checkout coming soon</button>
            <Link className="text-link" to="/shop">Continue shopping <span aria-hidden="true">↗</span></Link>
          </aside>
        </section>
      )}
    </main>
  );
}