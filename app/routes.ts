import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
	layout("components/site-shell.tsx", [
		index("routes/home.tsx"),
		route("shop", "routes/shop.tsx"),
		route("collections", "routes/collections.tsx"),
		route("about", "routes/about.tsx"),
		route("reviews", "routes/reviews.tsx"),
		route("contact", "routes/contact.tsx"),
		route("cart", "routes/cart.tsx"),
	]),
] satisfies RouteConfig;
