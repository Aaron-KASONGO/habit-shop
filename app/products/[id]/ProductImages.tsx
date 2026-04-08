"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductImagesProps {
  product: any;
}

export default function ProductImages({ product }: ProductImagesProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  console.log("ProductImages component rendered");
  console.log("Product:", product);
  console.log("Selected index:", selectedImageIndex);

  const handleThumbnailClick = (index: number) => {
    console.log("Thumbnail clicked, changing to index:", index);
    setSelectedImageIndex(index);
  };

  const goToPreviousImage = () => {
    const newIndex = selectedImageIndex === 0 ? product.images.length - 1 : selectedImageIndex - 1;
    console.log("Previous image clicked, changing to index:", newIndex);
    setSelectedImageIndex(newIndex);
  };

  const goToNextImage = () => {
    const newIndex = selectedImageIndex === product.images.length - 1 ? 0 : selectedImageIndex + 1;
    console.log("Next image clicked, changing to index:", newIndex);
    setSelectedImageIndex(newIndex);
  };

  return (
    <div>
      {/* Main Image with Slider Controls */}
      <div className="relative aspect-square bg-gray-200 rounded-lg mb-4 overflow-hidden group">
        <img 
          src={product.images[selectedImageIndex]} 
          alt={`${product.name} - Image ${selectedImageIndex + 1}`}
          className="w-full h-full object-cover"
          onLoad={() => console.log("Main image loaded:", selectedImageIndex, product.images[selectedImageIndex])}
          onError={(e) => {
            console.log("Main image failed to load:", selectedImageIndex, product.images[selectedImageIndex]);
            const target = e.target as HTMLImageElement;
            target.src = `https://picsum.photos/600/600?random=${selectedImageIndex + 100}`;
          }}
        />
        
        {/* Navigation Arrows */}
        {product.images.length > 1 && (
          <>
            <button
              onClick={goToPreviousImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={goToNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        {/* Image Counter */}
        {product.images.length > 1 && (
          <div className="absolute bottom-2 right-2 bg-black/60 text-white px-2 py-1 rounded-full text-xs font-semibold">
            {selectedImageIndex + 1} / {product.images.length}
          </div>
        )}
      </div>
      
      {/* Thumbnail Grid */}
      <div className="grid grid-cols-4 gap-2">
        {product.images.map((image: string, index: number) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`aspect-square bg-gray-200 rounded border-2 transition-colors overflow-hidden ${
              selectedImageIndex === index 
                ? "border-black" 
                : "border-gray-300 hover:border-gray-400"
            }`}
          >
            <img 
              src={image} 
              alt={`${product.name} - Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                console.log("Thumbnail failed to load:", index, image);
                const target = e.target as HTMLImageElement;
                target.src = `https://picsum.photos/80/80?random=${index + 200}`;
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
