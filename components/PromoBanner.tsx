export default function PromoBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          35% off only this friday and get special gift
        </h2>
        <p className="text-xl mb-8 text-purple-100">
          Limited time offer - Don't miss out on amazing deals!
        </p>
        <button className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
          Grab it now
        </button>
      </div>
    </section>
  );
}
