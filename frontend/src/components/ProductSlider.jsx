import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      title: "NEWME TEST",
      subtitle: "Tes Kepribadian 5 Element",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80",
      link: "/newme-test",
      badge: "Popular"
    },
    {
      id: 2,
      title: "KELAS GALI BAKAT",
      subtitle: "Program Pengembangan Potensi",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80",
      link: "/kelas-gali-bakat",
      badge: "B to B"
    },
    {
      id: 3,
      title: "NEWME CLINIC",
      subtitle: "Konseling Individual",
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&q=80",
      link: "/services/clinic",
      badge: "B to C"
    },
    {
      id: 4,
      title: "NEWME CLASS",
      subtitle: "Pelatihan & Workshop",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
      link: "/services/class",
      badge: "B to B"
    },
    {
      id: 5,
      title: "MERCHANDISE",
      subtitle: "Produk Komunitas NMC",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
      link: "/shop",
      badge: "New"
    },
    {
      id: 6,
      title: "Digital Apps",
      subtitle: "Aplikasi Tes Online",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&q=80",
      link: "/user-test",
      badge: "Digital"
    }
  ];

  const itemsPerView = 4;
  const maxIndex = Math.max(0, products.length - itemsPerView);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  const nextSlide = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  return (
    <section className="py-20 bg-[#D4A017]" data-testid="product-slider-section">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#5A5A4A] bg-white/20 backdrop-blur-sm mb-4">
            <svg viewBox="0 0 50 50" className="w-10 h-10 text-[#5A5A4A]">
              <path fill="currentColor" d="M25 5 L35 15 L35 25 L25 35 L15 25 L15 15 Z M20 18 Q25 12 30 18 Q35 24 25 30 Q15 24 20 18"/>
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#5A5A4A] mb-2">
            PRODUK USAHA
          </h2>
          <p className="text-[#5A5A4A]/80">NIB: 2805240064989 ( sudah & yang akan )</p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out gap-4"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView + 2)}%)` }}
            >
              {products.map((product) => (
                <Link
                  key={product.id}
                  to={product.link}
                  className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 group"
                  data-testid={`product-card-${product.id}`}
                >
                  <div className="bg-white/90 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    <div className="relative aspect-square">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      {product.badge && (
                        <span className="absolute top-3 right-3 bg-[#5A5A4A] text-white text-xs px-3 py-1 rounded-full">
                          {product.badge}
                        </span>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-bold text-[#5A5A4A] group-hover:text-[#D4A017] transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm text-gray-600">{product.subtitle}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-[#5A5A4A] hover:bg-[#4A4A3A] text-white rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            data-testid="product-prev"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-[#5A5A4A] hover:bg-[#4A4A3A] text-white rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            data-testid="product-next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex 
                  ? 'w-8 h-3 bg-[#5A5A4A]' 
                  : 'w-3 h-3 bg-[#5A5A4A]/30 hover:bg-[#5A5A4A]/50'
              }`}
              data-testid={`product-dot-${index}`}
            />
          ))}
        </div>

        {/* Bottom Text */}
        <p className="text-center text-[#5A5A4A]/70 text-sm mt-8 italic">
          ( dan kolaborasi dengan industri yang relatif di bisnis komunitas )
        </p>
      </div>
    </section>
  );
};

export default ProductSlider;
