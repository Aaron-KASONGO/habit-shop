"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Promo Banner */}
      <div className="bg-black text-white text-center py-2 text-sm">
        <p>Free shipping on orders over $50 | Use code SUMMER25 for 25% off</p>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-black">
            HABIT SHOP
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/collections" className="text-gray-700 hover:text-black transition-colors">
              Shop
            </Link>
            <Link href="/collections/best-sellers" className="text-gray-700 hover:text-black transition-colors">
              Most wanted
            </Link>
            <Link href="/collections/new-arrivals" className="text-gray-700 hover:text-black transition-colors">
              New arrival
            </Link>
            <Link href="/brands" className="text-gray-700 hover:text-black transition-colors">
              Brands
            </Link>
          </nav>

          {/* Search Bar (Desktop) */}
          {/* <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-full focus:outline-none focus:border-black transition-colors"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div> */}

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
            
            <Link href="/account" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <User className="h-5 w-5" />
            </Link>
            
            <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-full focus:outline-none focus:border-black"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/collections" className="text-gray-700 hover:text-black transition-colors">
                Shop
              </Link>
              <Link href="/collections/best-sellers" className="text-gray-700 hover:text-black transition-colors">
                Most wanted
              </Link>
              <Link href="/collections/new-arrivals" className="text-gray-700 hover:text-black transition-colors">
                New arrival
              </Link>
              <Link href="/brands" className="text-gray-700 hover:text-black transition-colors">
                Brands
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
