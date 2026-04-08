import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import CustomerExperience from "@/components/CustomerExperience";
import CuratedPicks from "@/components/CuratedPicks";
import FeaturedProducts from "@/components/FeaturedProducts";
import PromoBanner from "@/components/PromoBanner";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main>
        <Hero />
        <Brands />
        <CustomerExperience />
        <CuratedPicks />
        <FeaturedProducts />
        <PromoBanner />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
