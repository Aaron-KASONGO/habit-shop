import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/lib/data";
import ProductClient from "./ProductClient";
import { Star } from "lucide-react";
import ProductImages from "./ProductImages";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find(p => p.id === id);
  
  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-8">
          <a href="/" className="hover:text-black">Home</a>
          <span className="mx-2">/</span>
          <a href="/products" className="hover:text-black">Products</a>
          <span className="mx-2">/</span>
          <span className="text-black">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images - Client Component */}
          <ProductImages product={product} />

          {/* Product Info - Client Component */}
          <ProductClient product={product} />
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <div className="border-b mb-8">
            <div className="flex space-x-8">
              <button className="pb-4 border-b-2 border-black font-semibold">Description</button>
              <button className="pb-4 text-gray-600 hover:text-black">Reviews</button>
              <button className="pb-4 text-gray-600 hover:text-black">Shipping & Returns</button>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed">
              {product.description} This premium product is crafted with the finest materials 
              and attention to detail. Perfect for everyday wear or special occasions, this piece 
              combines style, comfort, and durability in one elegant package.
            </p>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 4)
              .map((relatedProduct) => (
                <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="aspect-square bg-gray-200 relative overflow-hidden">
                    <img 
                      src={relatedProduct.images[0]} 
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {relatedProduct.compareAtPrice && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        SALE
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-blue-600 transition-colors">
                      <a href={`/products/${relatedProduct.id}`}>
                        {relatedProduct.name}
                      </a>
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">{relatedProduct.brand}</p>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-lg">${relatedProduct.price}</span>
                      {relatedProduct.compareAtPrice && (
                        <span className="text-gray-400 line-through text-sm">
                          ${relatedProduct.compareAtPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
