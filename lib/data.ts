export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  category: string;
  brand: string;
  sizes: string[];
  colors: string[];
  stock: number;
  isNewArrival: boolean;
  isBestSeller: boolean;
  tags: string[];
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  products: string[];
}

export const brands = [
  { name: "Chanel", logo: "/brands/chanel.png" },
  { name: "Calvin Klein", logo: "/brands/calvin-klein.png" },
  { name: "Versace", logo: "/brands/versace.png" },
  { name: "Gucci", logo: "/brands/gucci.png" },
  { name: "D&G", logo: "/brands/dg.png" },
  { name: "Adidas", logo: "/brands/adidas.png" },
  { name: "Levi's", logo: "/brands/levis.png" },
  { name: "Nike", logo: "/brands/nike.png" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Classic White T-Shirt",
    description: "Premium cotton t-shirt with perfect fit and comfort",
    price: 29.99,
    compareAtPrice: 49.99,
    images: ["https://i.pinimg.com/736x/19/0f/63/190f639d4cccb4842b7a30b28597a933.jpg", "https://i.pinimg.com/736x/c3/d1/66/c3d1660b8b11aa2b3a3689ed81eaff7e.jpg"],
    category: "Men",
    brand: "Calvin Klein",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Gray"],
    stock: 150,
    isNewArrival: false,
    isBestSeller: true,
    tags: ["casual", "basic", "cotton"]
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    description: "Modern slim fit jeans with stretch technology",
    price: 89.99,
    images: ["https://i.pinimg.com/736x/47/59/f1/4759f19ea151bc2cbffdbf5bb5b0b878.jpg", "https://i.pinimg.com/1200x/f9/fd/f3/f9fdf372ca55416cbf121fcb9db7da54.jpg", "https://i.pinimg.com/1200x/b5/1a/d0/b51ad044a0c18dd18aa017f84287acc1.jpg"],
    category: "Men",
    brand: "Levi's",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Blue", "Black", "Gray"],
    stock: 85,
    isNewArrival: true,
    isBestSeller: false,
    tags: ["denim", "casual", "slim-fit"]
  },
  {
    id: "3",
    name: "Elegant Summer Dress",
    description: "Light and flowy dress perfect for summer occasions",
    price: 129.99,
    compareAtPrice: 189.99,
    images: ["https://i.pinimg.com/736x/3a/fa/f0/3afaf06575a91d179c3a3a9c014d8c15.jpg", "https://i.pinimg.com/736x/25/51/53/255153d4b45257f2667404142cde1986.jpg", "https://i.pinimg.com/736x/42/ec/06/42ec0653344fbaeef23a5173a6da0145.jpg"],
    category: "Women",
    brand: "Chanel",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Pink", "Blue", "White"],
    stock: 45,
    isNewArrival: true,
    isBestSeller: true,
    tags: ["dress", "summer", "elegant"]
  },
  {
    id: "4",
    name: "Premium Leather Jacket",
    description: "Genuine leather jacket with modern styling",
    price: 399.99,
    images: ["https://i.pinimg.com/1200x/f1/98/f4/f198f430bf0d9203fb35523985b52373.jpg", "https://i.pinimg.com/736x/98/3e/d6/983ed6b722e2f9a5c3db68778fb1c3b6.jpg"],
    category: "Men",
    brand: "Versace",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Brown"],
    stock: 25,
    isNewArrival: false,
    isBestSeller: false,
    tags: ["leather", "jacket", "premium"]
  },
  {
    id: "5",
    name: "Designer Handbag",
    description: "Luxury handbag with authentic designer branding",
    price: 599.99,
    compareAtPrice: 899.99,
    images: ["https://i.pinimg.com/736x/06/57/f2/0657f2de5b2b4a0d70e93c30c457c30b.jpg", "https://i.pinimg.com/736x/52/81/63/52816316e567cb9bcea0474c9ba5c06d.jpg"],
    category: "Women",
    brand: "Gucci",
    sizes: ["One Size"],
    colors: ["Black", "Tan", "Red"],
    stock: 15,
    isNewArrival: true,
    isBestSeller: true,
    tags: ["handbag", "luxury", "designer"]
  },
  {
    id: "6",
    name: "Running Shoes",
    description: "High-performance running shoes with advanced cushioning",
    price: 149.99,
    images: ["https://i.pinimg.com/1200x/e0/a5/b3/e0a5b353b3f7adcba85393a731a5bd61.jpg", "https://i.pinimg.com/1200x/ce/b0/32/ceb0320257d89d899a2fac8ab0486be0.jpg"],
    category: "Men",
    brand: "Nike",
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Black", "White", "Blue"],
    stock: 120,
    isNewArrival: false,
    isBestSeller: true,
    tags: ["shoes", "running", "athletic"]
  },
  {
    id: "7",
    name: "Yoga Leggings",
    description: "Comfortable and flexible leggings for yoga and fitness",
    price: 59.99,
    images: ["https://m.media-amazon.com/images/I/51QYOo+dhUS._AC_SX569_.jpg", "https://m.media-amazon.com/images/I/81schv3OGQS._AC_SX569_.jpg", "https://m.media-amazon.com/images/I/61xXp-tJAJS._AC_SX569_.jpg", "https://m.media-amazon.com/images/I/71YllI0nDrL._AC_SX569_.jpg"],
    category: "Women",
    brand: "Adidas",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Pink"],
    stock: 95,
    isNewArrival: true,
    isBestSeller: false,
    tags: ["leggings", "yoga", "fitness"]
  },
  {
    id: "8",
    name: "Casual Sneakers",
    description: "Comfortable everyday sneakers with modern design",
    price: 79.99,
    compareAtPrice: 99.99,
    images: ["https://m.media-amazon.com/images/I/61ASywrkNwL._AC_SY695_.jpg", "https://m.media-amazon.com/images/I/711JkJfbRSL._AC_SY625_.jpg", "https://m.media-amazon.com/images/I/61b3BtLDDGL._AC_SY695_.jpg"],
    category: "Women",
    brand: "Nike",
    sizes: ["6", "7", "8", "9", "10"],
    colors: ["White", "Black", "Pink"],
    stock: 110,
    isNewArrival: false,
    isBestSeller: true,
    tags: ["sneakers", "casual", "comfortable"]
  }
];

export const collections: Collection[] = [
  {
    id: "men",
    name: "Shop Men",
    description: "Discover our latest men's collection",
    image: "https://i.pinimg.com/736x/2b/ea/67/2bea674d086c1b35e7a4520697ed0d48.jpg",
    products: ["1", "2", "4", "6"]
  },
  {
    id: "women",
    name: "Shop Women",
    description: "Explore our women's fashion collection",
    image: "https://i.pinimg.com/736x/eb/96/6c/eb966c0537dee9721eb9d3000c18b80c.jpg",
    products: ["3", "5", "7", "8"]
  },
  {
    id: "best-sellers",
    name: "Best Seller",
    description: "Our most popular products",
    image: "https://i.pinimg.com/736x/22/8a/8c/228a8c3dd050881c510ca5664c04d0cf.jpg",
    products: ["1", "3", "5", "6", "8"]
  },
  {
    id: "new-arrivals",
    name: "New Arrival",
    description: "Fresh styles just arrived",
    image: "https://i.pinimg.com/736x/75/e4/4f/75e44f60970023baf23f1fd9de1a4830.jpg",
    products: ["2", "3", "5", "7"]
  },
  {
    id: "sale",
    name: "Sale",
    description: "Great deals on selected items",
    image: "https://i.pinimg.com/1200x/20/a5/66/20a56673b1d6e0ac73501a96c89cf766.jpg",
    products: ["1", "3", "5", "8"]
  }
];

export const categories = ["Men", "Women", "Accessories"];
export const allTags = ["casual", "basic", "cotton", "denim", "slim-fit", "dress", "summer", "elegant", "leather", "jacket", "premium", "handbag", "luxury", "designer", "shoes", "running", "athletic", "leggings", "yoga", "fitness", "sneakers", "comfortable"];
