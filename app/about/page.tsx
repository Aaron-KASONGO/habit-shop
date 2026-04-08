import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About HABIT SHOP</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Welcome to HABIT SHOP, your premium destination for fashion and style. 
              Since our founding, we've been dedicated to bringing you the latest trends 
              from top brands worldwide.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              Our mission is to provide curated fashion that empowers individuals to express 
              their unique style. We carefully select each piece in our collection to ensure 
              quality, style, and sustainability.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">What We Offer</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Premium fashion from renowned brands</li>
              <li>Curated collections for every style</li>
              <li>Exceptional customer service</li>
              <li>Fast and reliable shipping</li>
              <li>Sustainable and ethical fashion choices</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6">
              HABIT SHOP began as a small boutique with a big vision: to make high-end 
              fashion accessible to everyone who appreciates quality and style. Today, 
              we're proud to serve fashion enthusiasts worldwide.
            </p>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/collections" 
              className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              Shop Our Collection
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
