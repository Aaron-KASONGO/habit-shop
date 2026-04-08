"use client";

import { useState } from "react";
import { ShoppingCart, Heart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    // Use first available size and color as defaults
    const defaultSize = product.sizes[0];
    const defaultColor = product.colors[0];
    
    addToCart(product.id, 1, defaultSize, defaultColor);
    setIsAdded(true);
    
    // Reset the button state after 2 seconds
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Product Image */}
      <div className="aspect-square bg-gray-200 relative overflow-hidden">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            // Fallback to gradient if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              if (product.category === "Men") {
                parent.className = "w-full h-full bg-gradient-to-br from-blue-400 to-indigo-600";
              } else if (product.category === "Women") {
                parent.className = "w-full h-full bg-gradient-to-br from-pink-400 to-purple-600";
              }
            }
          }}
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
        
        {/* Best Seller Badge */}
        {product.isBestSeller && (
          <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            BEST SELLER
          </div>
        )}
        
        {/* Quick Actions */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={handleAddToCart}
            className={`flex-1 py-2 rounded-full text-sm font-semibold transition-colors flex items-center justify-center gap-1 ${
              isAdded 
                ? 'bg-green-500 text-white' 
                : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            <ShoppingCart className="h-4 w-4" />
            {isAdded ? 'Added!' : 'Add to cart'}
          </button>
          <button className="bg-white text-black p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Heart className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 group-hover:text-blue-600 transition-colors">
          <a href={`/products/${product.id}`}>
            {product.name}
          </a>
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
  );
}
