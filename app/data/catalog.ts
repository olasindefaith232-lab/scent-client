export type Product = {
  brand: string;
  name: string;
  notes: string;
  price: number;
  category: string;
  badge: string;
  image: string;
};

export const products: Product[] = [
  {
    brand: "YVES SAINT LAURENT",
    name: "Libre Eau de Parfum",
    notes: "Orange blossom · lavender · vanilla",
    price: 185000,
    category: "Floral",
    badge: "BESTSELLER",
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=85",
  },
  {
    brand: "MAISON MARGIELA",
    name: "Jazz Club",
    notes: "Pink pepper · rum · tobacco leaf",
    price: 212000,
    category: "Woody",
    badge: "NEW ARRIVAL",
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=85",
  },
  {
    brand: "LATTAFA",
    name: "Khamrah Eau de Parfum",
    notes: "Cinnamon · praline · vanilla",
    price: 55000,
    category: "Amber",
    badge: "LOVED",
    image:
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=900&q=85",
  },
  {
    brand: "JO MALONE LONDON",
    name: "Wood Sage & Sea Salt",
    notes: "Ambrette · sea salt · sage",
    price: 168000,
    category: "Fresh",
    badge: "EDITOR'S PICK",
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=85",
  },
];

export const categories = [
  {
    name: "Floral",
    note: "Soft, romantic, unforgettable",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Woody",
    note: "Warm notes with presence",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Fresh",
    note: "Bright, airy, made for today",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Amber",
    note: "Rich, warm, close to the skin",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1000&q=85",
  },
];

export const formatPrice = (price: number) =>
  `₦${new Intl.NumberFormat("en-NG").format(price)}`;