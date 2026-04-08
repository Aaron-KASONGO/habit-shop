import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">HABIT SHOP</h3>
            <p className="text-gray-400 text-sm">Your premium fashion destination</p>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="/collections" className="text-gray-400 hover:text-white transition-colors">
              Shop
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
              FAQ
            </Link>
          </div>
          
          <div className="text-gray-400 text-sm">
            © 2024 HABIT SHOP. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
