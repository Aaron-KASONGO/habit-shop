import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[600px] bg-gradient-to-r from-gray-900 to-gray-700 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[url('https://i.pinimg.com/736x/6c/03/35/6c03354a8988d0ec3c2a54e3c2a9efff.jpg')] bg-cover bg-center opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Level up your style with our summer collections
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Discover the latest trends and premium quality pieces that will elevate your wardrobe this season.
          </p>
          <Link 
            href="/collections"
            className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Shop now
          </Link>
        </div>
      </div>
    </section>
  );
}
