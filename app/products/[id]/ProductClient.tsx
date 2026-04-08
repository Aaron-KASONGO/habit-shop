"use client";

import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, Heart, Star, Truck, Shield, RotateCcw, Minus, Plus } from "lucide-react";

interface ProductClientProps {
  product: any;
}

export default function ProductClient({ product }: ProductClientProps) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [showError, setShowError] = useState<boolean>(false);
  const { addToCart } = useCart();

  console.log("ProductClient rendered, product:", product.name);
  console.log("addToCart function:", typeof addToCart);

  const handleAddToCart = () => {
    console.log("handleAddToCart called");
    console.log("selectedSize:", selectedSize, "selectedColor:", selectedColor);
    
    if (!selectedSize || !selectedColor) {
      console.log("Missing size or color");
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }
    
    console.log("Adding to cart...");
    addToCart(product.id, quantity, selectedSize, selectedColor);
    console.log("Added to cart");
    setShowError(false);
  };

  return (
    <>
      {/* Product Info */}
      <div>
        <div className="mb-4">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.brand}</p>
          
          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-gray-600">(4.8) · 128 reviews</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl font-bold">${product.price}</span>
            {product.compareAtPrice && (
              <>
                <span className="text-xl text-gray-400 line-through">
                  ${product.compareAtPrice}
                </span>
                <span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                  {Math.round((1 - product.price / product.compareAtPrice) * 100)}% OFF
                </span>
              </>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-8">{product.description}</p>

          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Size</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size: string) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-lg transition-colors ${
                    selectedSize === size
                      ? "border-black bg-black text-white"
                      : "border-gray-300 hover:border-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Color</h3>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color: string) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 border rounded-lg transition-colors ${
                    selectedColor === color
                      ? "border-black bg-black text-white"
                      : "border-gray-300 hover:border-black"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Quantity</h3>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </button>
            <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
              <Heart className="h-5 w-5" />
            </button>
          </div>

          {/* Error Message */}
          {showError && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              Please select both size and color before adding to cart.
            </div>
          )}

          {/* Product Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Truck className="h-4 w-4" />
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Shield className="h-4 w-4" />
              <span>2 Year Warranty</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <RotateCcw className="h-4 w-4" />
              <span>Easy Returns</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
