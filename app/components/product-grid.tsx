import { useStore } from "./site-shell";
import type { Product } from "../data/catalog";
import { formatPrice } from "../data/catalog";

export function ProductGrid({ products }: { products: Product[] }) {
  const { addToBag } = useStore();

  if (products.length === 0) {
    return <p className="empty-results">No fragrances found. Try another search.</p>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <article className="product-card" key={product.name}>
          <div className="product-image-wrap">
            <img src={product.image} alt={`${product.name} perfume`} loading="lazy" />
            <span className="product-badge">{product.badge}</span>
            <button
              className="quick-add"
              type="button"
              onClick={() => addToBag(product)}
              aria-label={`Add ${product.name} to bag`}
            >+</button>
          </div>
          <div className="product-info">
            <div className="product-title-row">
              <span className="product-brand">{product.brand}</span>
              <span className="product-price">{formatPrice(product.price)}</span>
            </div>
            <h3>{product.name}</h3>
            <p>{product.notes}</p>
          </div>
        </article>
      ))}
    </div>
  );
}