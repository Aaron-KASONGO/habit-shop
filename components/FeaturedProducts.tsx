"use client";

import Link from "next/link";
import { products } from "@/lib/data";
import { ShoppingCart, Heart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export default function FeaturedProducts() {
  const featuredProducts = products.slice(0, 8);
  const { addToCart } = useCart();

  const quickAddToCart = (product: any) => {
    const defaultSize = product.sizes[0];
    const defaultColor = product.colors[0];
    addToCart(product.id, 1, defaultSize, defaultColor);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Product Image */}
              <div className="aspect-square bg-gray-200 relative overflow-hidden">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Sale Badge */}
                {product.compareAtPrice && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    SALE
                  </div>
                )}
                
                {/* New Badge */}
                {product.isNewArrival && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    NEW
                  </div>
                )}
                
                {/* Quick Actions */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={() => quickAddToCart(product)}
                    className="flex-1 bg-white text-black py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-1"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Add to cart
                  </button>
                  <button className="bg-white text-black p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1 group-hover:text-blue-600 transition-colors">
                  <Link href={`/products/${product.id}`}>
                    {product.name}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-2">{product.brand}</p>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg">${product.price}</span>
                  {product.compareAtPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      ${product.compareAtPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            href="/products"
            className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
