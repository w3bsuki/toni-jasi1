import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Black Snapback",
    slug: "classic-black-snapback",
    price: 29.99,
    images: [
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?q=80&w=500&auto=format&fit=crop",
    ],
    collection: "snapback",
    description: "A timeless black snapback with a clean design that goes with any outfit.",
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
  },
  {
    id: "2",
    name: "Vintage Dad Hat",
    slug: "vintage-dad-hat",
    price: 24.99,
    images: [
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?q=80&w=500&auto=format&fit=crop&rot=15",
    ],
    collection: "dad-hats",
    description: "A comfortable and stylish dad hat with a lived-in look.",
    sizes: ["One Size"],
    isNew: true,
  },
  {
    id: "3",
    name: "Premium Fitted Cap",
    slug: "premium-fitted-cap",
    price: 34.99,
    images: [
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=500&auto=format&fit=crop&blur=5",
    ],
    collection: "fitted",
    description: "A high-quality fitted cap designed for perfect comfort and style.",
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
  },
  {
    id: "4",
    name: "Summer Straw Hat",
    slug: "summer-straw-hat",
    price: 19.99,
    images: [
      "https://images.unsplash.com/photo-1531185038189-41815d742438?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583484963886-cfe2bff2945f?q=80&w=500&auto=format&fit=crop",
    ],
    collection: "summer",
    description: "Keep cool and stylish with this breathable straw hat, perfect for sunny days.",
    sizes: ["One Size"],
  },
  {
    id: "5",
    name: "Winter Beanie",
    slug: "winter-beanie",
    price: 22.99,
    images: [
      "https://images.unsplash.com/photo-1511231683436-44b8e3c7fb40?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1510598155053-7fcfa597c4fc?q=80&w=500&auto=format&fit=crop",
    ],
    collection: "winter",
    description: "A warm and cozy beanie to keep you comfortable during the cold winter months.",
    sizes: ["One Size"],
  },
  {
    id: "6",
    name: "Limited Edition Snapback",
    slug: "limited-edition-snapback",
    price: 49.99,
    images: [
      "https://images.unsplash.com/photo-1533055640609-24b498dfd74c?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517941849094-9f62fca72af8?q=80&w=500&auto=format&fit=crop",
    ],
    collection: "limited-edition",
    description: "A special edition snapback with unique design elements, available for a limited time only.",
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
  },
  {
    id: "7",
    name: "59FIFTY Fitted",
    slug: "59fifty-fitted",
    price: 39.99,
    images: [
      "https://images.unsplash.com/photo-1590999659195-e64a988eaf4f?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517941849094-9f62fca72af8?q=80&w=500&auto=format&fit=crop",
    ],
    collection: "fitted",
    description: "The iconic 59FIFTY fitted cap, known for its structured form and flat visor.",
    sizes: ["7", "7 1/8", "7 1/4", "7 3/8", "7 1/2", "7 5/8"],
    isNew: true,
  },
  {
    id: "8",
    name: "9FORTY Adjustable",
    slug: "9forty-adjustable",
    price: 29.99,
    images: [
      "https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=500&auto=format&fit=crop",
    ],
    collection: "snapback",
    description: "A classic adjustable cap with a curved visor, providing a relaxed fit for everyday wear.",
    sizes: ["One Size"],
    isNew: true,
  },
  {
    id: "9",
    name: "9FIFTY Snapback",
    slug: "9fifty-snapback",
    price: 34.99,
    images: [
      "https://images.unsplash.com/photo-1560774358-d727658f457c?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=500&auto=format&fit=crop",
    ],
    collection: "snapback",
    description: "The structured 9FIFTY with a flat visor and adjustable snapback closure for the perfect fit.",
    sizes: ["One Size"],
    isNew: true,
  },
  {
    id: "10",
    name: "9TWENTY Dad Hat",
    slug: "9twenty-dad-hat",
    price: 27.99,
    images: [
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?q=80&w=500&auto=format&fit=crop",
    ],
    collection: "dad-hats",
    description: "A relaxed, unstructured cap with a curved visor for a classic, casual look.",
    sizes: ["One Size"],
    isNew: true,
  },
]; 