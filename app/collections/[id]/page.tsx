import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { collections, products } from "@/lib/data";
import Link from "next/link";

export default async function CollectionPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const collection = collections.find(c => c.id === id);
  
  if (!collection) {
    notFound();
  }

  const collectionProducts = products.filter(product => 
    collection.products.includes(product.id)
  );

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <Header />
      
      {/* Collection Hero */}
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={collection.image} 
            alt={collection.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{collection.name}</h1>
            <p className="text-xl text-gray-200">{collection.description}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <p className="text-gray-600">
            Showing {collectionProducts.length} products
          </p>
        </div>

        {collectionProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No products found in this collection.</p>
            <Link
              href="/collections"
              className="mt-4 inline-block text-black underline hover:no-underline"
            >
              Back to Collections
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collectionProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
