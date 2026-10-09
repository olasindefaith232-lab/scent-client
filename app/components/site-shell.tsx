import { createContext, useContext, useState } from "react";
import { Link, NavLink, Outlet } from "react-router";
import type { Product } from "../data/catalog";
import { formatPrice } from "../data/catalog";

type CartItem = { product: Product; quantity: number };
type StoreContextValue = {
  cart: CartItem[];
  addToBag: (product: Product) => void;
  removeFromBag: (name: string) => void;
  setQuantity: (name: string, quantity: number) => void;
};

const StoreContext = createContext<StoreContextValue | null>(null);

export function useStore() {
  const store = useContext(StoreContext);
  if (!store) throw new Error("useStore must be used inside the site layout");
  return store;
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="10.8" cy="10.8" r="6.3" />
      <path d="m15.5 15.5 4.2 4.2" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 8.5h14l1 12H4l1-12Z" />
      <path d="M9 9V6a3 3 0 0 1 6 0v3" />
    </svg>
  );
}

export default function SiteShell() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  function addToBag(product: Product) {
    setCart((items) => {
      const existing = items.find((item) => item.product.name === product.name);
      if (existing) {
        return items.map((item) =>
          item.product.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...items, { product, quantity: 1 }];
    });
  }

  function removeFromBag(name: string) {
    setCart((items) => items.filter((item) => item.product.name !== name));
  }

  function setQuantity(name: string, quantity: number) {
    if (quantity < 1) return removeFromBag(name);
    setCart((items) =>
      items.map((item) =>
        item.product.name === name ? { ...item, quantity } : item,
      ),
    );
  }

  return (
    <StoreContext.Provider value={{ cart, addToBag, removeFromBag, setQuantity }}>
      <div className="announcement">
        <span>Complimentary delivery on orders over ₦150,000</span>
        <Link to="/shop">Discover the collection <span aria-hidden="true">↗</span></Link>
      </div>
      <header className="site-header">
        <Link className="wordmark" to="/" aria-label="Scent by Kim home">
          <span className="wordmark-monogram">SK</span>
          <span className="wordmark-name">SCENT BY KIM</span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/collections">Collections</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/reviews">Reviews</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <div className="header-actions">
          <button
            className="icon-button search-toggle"
            type="button"
            aria-label={searchOpen ? "Close search" : "Open search"}
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((open) => !open)}
          >
            <SearchIcon />
          </button>
          <Link className="bag-link" to="/cart" aria-label={`Shopping bag, ${itemCount} items`}>
            <BagIcon />
            <span>Bag</span>
            <span className="bag-count">{itemCount}</span>
          </Link>
        </div>
        {searchOpen && (
          <form className="search-panel" action="/shop" method="get">
            <label htmlFor="site-search">Find your next fragrance</label>
            <input
              id="site-search"
              autoFocus
              type="search"
              name="q"
              placeholder="Try a name, note or mood"
            />
          </form>
        )}
      </header>
      <Outlet />
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <Link className="wordmark footer-wordmark" to="/">
              <span className="wordmark-monogram">SK</span>
              <span className="wordmark-name">SCENT BY KIM</span>
            </Link>
            <p>A signature scent<br />for every story.</p>
          </div>
          <div className="footer-column">
            <h3>Explore</h3>
            <Link to="/shop">Shop all</Link>
            <Link to="/collections">Collections</Link>
            <Link to="/about">Our story</Link>
          </div>
          <div className="footer-column">
            <h3>Here to help</h3>
            <Link to="/contact">Contact us</Link>
            <Link to="/contact">Delivery &amp; returns</Link>
            <Link to="/contact">Frequently asked</Link>
          </div>
          <div className="footer-column">
            <h3>Find us</h3>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram ↗</a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">TikTok ↗</a>
            <a href="mailto:hello@scentbykim.com">hello@scentbykim.com</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Scent by Kim</span>
          <span>LAGOS, NIGERIA</span>
          <div><Link to="/contact">Privacy</Link><Link to="/contact">Terms</Link></div>
        </div>
      </footer>
    </StoreContext.Provider>
  );
}