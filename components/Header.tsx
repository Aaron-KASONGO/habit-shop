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
            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" viewBox="0 0 640 640"><path fill="rgb(0, 0, 0)" d="M640 88.9C559.2 142.5 550.6 181.4 543.6 193.3C536.9 205.5 531.9 253.6 520.3 276.9C508.6 300.5 466.1 319.1 454.2 326.9C442.5 334.7 425.9 365 412.3 391.1C304.2 386.7 244.9 429.9 153.1 484.7C182.5 475 196.4 468 196.4 468C290.6 432 335.7 399.7 477.5 418.8C478.6 418.8 479.4 419.4 480.3 419.6C484.2 421.8 485.6 426.5 483.4 430.4L429.5 526.2C427 530.9 421.7 533.4 416.4 532.3C289.6 508.5 189.5 549.6 97.5 550.9C24.1 552 0 517.4 0 515.8C0 514.7 .6 514.1 1.7 514.1C1.7 514.1 40 514.1 104.8 498.8C178.4 358.5 244 309.4 315.4 309.4C315.4 309.4 387.1 309.4 406 371.3C428.8 331.6 434.3 322.1 434.3 322.1C439.6 312.7 469.3 244.9 520.7 180.7C572.2 116.7 611.1 100.8 640 88.9z"/></svg>
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
