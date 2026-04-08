import { brands } from "@/lib/data";

// SVG components for each brand
const ChanelLogo = () => (
  <svg viewBox="0 0 100 40" className="h-12 w-auto">
    <text x="50" y="25" textAnchor="middle" fontFamily="serif" fontSize="20" fill="#000">CHANEL</text>
  </svg>
);

const CalvinKleinLogo = () => (
  <svg viewBox="0 0 120 40" className="h-12 w-auto">
    <text x="60" y="25" textAnchor="middle" fontFamily="sans-serif" fontSize="16" fontWeight="bold" fill="#000">Calvin Klein</text>
  </svg>
);

const VersaceLogo = () => (
  <svg viewBox="0 0 100 40" className="h-12 w-auto">
    <text x="50" y="25" textAnchor="middle" fontFamily="serif" fontSize="18" fontWeight="bold" fill="#000">VERSACE</text>
  </svg>
);

const GucciLogo = () => (
  <svg viewBox="0 0 80 40" className="h-12 w-auto">
    <text x="40" y="25" textAnchor="middle" fontFamily="serif" fontSize="20" fontWeight="bold" fill="#000">GUCCI</text>
  </svg>
);

const DGLogo = () => (
  <svg viewBox="0 0 80 40" className="h-12 w-auto">
    <text x="40" y="25" textAnchor="middle" fontFamily="serif" fontSize="20" fontWeight="bold" fill="#000">D&amp;G</text>
  </svg>
);

const AdidasLogo = () => (
  <svg viewBox="0 0 100 40" className="h-12 w-auto">
    <path d="M10 20 L30 20 M10 15 L30 15 M10 25 L30 25" stroke="#000" strokeWidth="2"/>
    <text x="40" y="25" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#000">adidas</text>
  </svg>
);

const LevisLogo = () => (
  <svg viewBox="0 0 80 40" className="h-12 w-auto">
    <path d="M20 10 L20 30 M15 15 L25 15 M15 25 L25 25" stroke="#000" strokeWidth="2"/>
    <text x="40" y="25" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#000">Levi's</text>
  </svg>
);

const NikeLogo = () => (
  <svg viewBox="0 0 100 40" className="h-12 w-auto">
    <path d="M10 20 Q30 15 50 20 T90 20" stroke="#000" strokeWidth="2" fill="none"/>
  </svg>
);

const brandLogos: { [key: string]: React.ComponentType } = {
  "Chanel": ChanelLogo,
  "Calvin Klein": CalvinKleinLogo,
  "Versace": VersaceLogo,
  "Gucci": GucciLogo,
  "D&G": DGLogo,
  "Adidas": AdidasLogo,
  "Levi's": LevisLogo,
  "Nike": NikeLogo,
};

export default function Brands() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-12">Featured Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {brands.map((brand, index) => {
            const LogoComponent = brandLogos[brand.name];
            return (
              <div 
                key={index} 
                className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                {LogoComponent && <LogoComponent />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
