import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { collections } from "@/lib/data";
import Link from "next/link";

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 py-16 text-black">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Collections</h1>
          <p className="text-gray-600 text-lg">
            Discover our curated collections designed for every style and occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href={`/collections/${collection.id}`}
              className="group block"
            >
              <div className="relative aspect-[4/5] bg-gray-200 rounded-lg overflow-hidden mb-4 group-hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={collection.image} 
                  alt={collection.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
                  <h2 className="text-3xl font-bold mb-4">{collection.name}</h2>
                  <p className="mb-6 text-gray-200">{collection.description}</p>
                  <span className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                    Shop Collection
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
