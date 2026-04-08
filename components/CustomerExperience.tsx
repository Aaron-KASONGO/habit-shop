import { Shield, Truck, Sparkles, Package } from "lucide-react";

export default function CustomerExperience() {
  const features = [
    {
      icon: Shield,
      title: "Original Products",
      description: "100% authentic products from top brands worldwide"
    },
    {
      icon: Sparkles,
      title: "Satisfaction Guarantee",
      description: "30-day return policy for your peace of mind"
    },
    {
      icon: Package,
      title: "New Arrival Everyday",
      description: "Fresh collections added daily to keep you stylish"
    },
    {
      icon: Truck,
      title: "Fast & Free Shipping",
      description: "Free delivery on orders over $50, shipped within 24h"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center group cursor-pointer"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <feature.icon className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
