import Header from "@/components/Header";
import Footer from "@/components/Footer";

const brands = [
  { name: "Nike", description: "Just Do It", products: 245 },
  { name: "Adidas", description: "Impossible is Nothing", products: 189 },
  { name: "Gucci", description: "Luxury Italian Fashion", products: 67 },
  { name: "Prada", description: "Timeless Elegance", products: 54 },
  { name: "Balenciaga", description: "Avant-Garde Fashion", products: 43 },
  { name: "Off-White", description: "Streetwear Luxury", products: 78 },
  { name: "Supreme", description: "Iconic Streetwear", products: 92 },
  { name: "Stone Island", description: "Technical Innovation", products: 56 },
  { name: "The North Face", description: "Outdoor Exploration", products: 134 },
  { name: "Patagonia", description: "Sustainable Outdoor", products: 87 },
  { name: "Moncler", description: "Luxury Outerwear", products: 45 },
  { name: "Canada Goose", description: "Extreme Weather", products: 38 }
];

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Brands</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our curated selection of premium brands, from iconic fashion houses 
            to innovative streetwear labels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-gray-100 aspect-square rounded-lg mb-4 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                <div className="text-center">
                  <div className="text-6xl font-bold text-gray-400 group-hover:text-gray-600 transition-colors">
                    {brand.name.charAt(0)}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1">{brand.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{brand.description}</p>
              <p className="text-sm text-gray-500">{brand.products} products</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Looking for something specific?</h2>
          <p className="text-gray-600 mb-6">
            Can't find your favorite brand? We're always expanding our collection.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
