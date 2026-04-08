import Link from "next/link";
import { collections } from "@/lib/data";

export default function CuratedPicks() {
  const featuredCollections = [
    collections.find(c => c.id === "best-sellers"),
    collections.find(c => c.id === "men"),
    collections.find(c => c.id === "women")
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Curated Picks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCollections.map((collection, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/5] relative">
                <img 
                  src={collection?.image} 
                  alt={collection?.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">{collection?.name}</h3>
                  <p className="mb-6 text-gray-200">{collection?.description}</p>
                  <Link 
                    href={`/collections/${collection?.id}`}
                    className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
                  >
                    Shop
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
