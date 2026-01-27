import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Slides data sesuai desain Canva NEWMECLASS
  const slides = [
    {
      id: 1,
      title: "COMPANY PROFILE",
      subtitle: "NEWMECLASS",
      description: "Kami, perusahaan edukasi peduli minat bakat, yang berinovasi dengan tambahan strategi membangun jejaring komunitas.",
      badge: "Kelas Peduli Talenta",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      cta: { text: "www.newmeclass.com", link: "/" }
    },
    {
      id: 2,
      title: "SIAPA KAMI?",
      subtitle: "PT. MITRA SEMESTA EDUCLASS",
      description: "NEWMECLASS adalah sebuah brand dan produk dari PT. MITRA SEMESTA EDUCLASS, yang bergerak dengan produk Edukasi, Bimbel, Upscale Training berbasis gali potensi bakat.",
      badge: "B to B & B to C",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
      cta: { text: "Pelajari Lebih Lanjut", link: "/company-profile" }
    },
    {
      id: 3,
      title: "PRODUK USAHA",
      subtitle: "NIB: 2805240064989",
      description: "Berbagai produk dan layanan edukasi untuk pengembangan potensi diri dan bakat alami Anda.",
      badge: "Terdaftar Resmi",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      cta: { text: "Lihat Produk", link: "/shop" }
    },
    {
      id: 4,
      title: "VISI & MISI",
      subtitle: "NEWME CLASS",
      description: "Menjadi bagian dari kemajuan bangsa lewat peran EDUKASI JATIDIRI di berbagai lembaga, institusi & organisasi di negeri tercinta.",
      badge: "a brand & product of PT. MITRA SEMESTA EDUCLASS",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
      cta: { text: "Lihat Visi Misi", link: "/company-profile" }
    }
  ];

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  return (
    <section 
      className="relative min-h-[650px] md:min-h-[750px] overflow-hidden bg-gradient-to-br from-[#5A5A4A] via-[#4A4A3A] to-[#3A3A2A]"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      data-testid="hero-carousel"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <pattern id="diagonal-lines" patternUnits="userSpaceOnUse" width="10" height="10">
              <line x1="0" y1="0" x2="10" y2="10" stroke="#D4A017" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect fill="url(#diagonal-lines)" width="200" height="200"/>
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <pattern id="diagonal-lines-2" patternUnits="userSpaceOnUse" width="10" height="10">
              <line x1="10" y1="0" x2="0" y2="10" stroke="#D4A017" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect fill="url(#diagonal-lines-2)" width="200" height="200"/>
        </svg>
      </div>

      {/* Slides */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[650px] md:min-h-[750px]">
              {/* Content */}
              <div className={`space-y-6 ${isActive ? 'animate-fade-in-up' : ''}`}>
                {/* Logo Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#D4A017] bg-white/10 backdrop-blur-sm">
                  <svg viewBox="0 0 50 50" className="w-10 h-10 text-[#D4A017]">
                    <path fill="currentColor" d="M25 5 L35 15 L35 25 L25 35 L15 25 L15 15 Z M20 18 Q25 12 30 18 Q35 24 25 30 Q15 24 20 18"/>
                  </svg>
                </div>
                
                {/* Title */}
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-[#D4A017]">{slide.title.split(' ')[0]}</span>
                    {slide.title.split(' ').length > 1 && (
                      <span className="text-white"> {slide.title.split(' ').slice(1).join(' ')}</span>
                    )}
                  </h1>
                  <h2 className="text-2xl md:text-3xl font-semibold text-white mt-2">
                    {slide.subtitle}
                  </h2>
                </div>
                
                {/* Description */}
                <p className="text-lg text-gray-200 max-w-lg leading-relaxed">
                  {slide.description}
                </p>
                
                {/* CTA */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a href={slide.cta.link}>
                    <Button 
                      size="lg" 
                      className="bg-[#D4A017] hover:bg-[#B8900F] text-black font-bold group"
                      data-testid={`hero-cta-${slide.id}`}
                    >
                      {slide.cta.text}
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>

                {/* Contact Info */}
                <div className="flex flex-wrap gap-6 pt-4 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#D4A017] rounded-full"></span>
                    <span>newmeclass@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#D4A017] rounded-full"></span>
                    <span>@newmeclass</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#D4A017] rounded-full"></span>
                    <span>0895.0267.1691</span>
                  </div>
                </div>
              </div>
              
              {/* Image / Visual */}
              <div className={`relative hidden md:block ${isActive ? 'animate-fade-in-right' : ''}`}>
                <div className="relative">
                  {/* Badge */}
                  <div className="absolute -top-4 right-8 z-20">
                    <div className="bg-white rounded-full px-6 py-3 shadow-xl border-4 border-[#D4A017]">
                      <p className="text-sm font-semibold text-gray-800 italic">- {slide.badge} -</p>
                    </div>
                  </div>
                  
                  {/* Main Image Container */}
                  <div className="relative z-10 rounded-full overflow-hidden w-80 h-80 md:w-96 md:h-96 mx-auto border-4 border-[#D4A017] shadow-2xl">
                    <img 
                      src={slide.image} 
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#5A5A4A]/50 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Decorative Circle */}
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-[#D4A017] rounded-full opacity-50"></div>
                  <div className="absolute -top-8 -left-8 w-24 h-24 border-4 border-[#D4A017] rounded-full opacity-30"></div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      
      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/10 hover:bg-[#D4A017] text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-[#D4A017]/50 hover:border-[#D4A017] group"
        data-testid="hero-prev-btn"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/10 hover:bg-[#D4A017] text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-[#D4A017]/50 hover:border-[#D4A017] group"
        data-testid="hero-next-btn"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>
      
      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide 
                ? 'w-10 h-3 bg-[#D4A017]' 
                : 'w-3 h-3 bg-white/50 hover:bg-white/70'
            }`}
            data-testid={`hero-dot-${index}`}
          />
        ))}
      </div>
      
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-30">
        <div 
          className="h-full bg-gradient-to-r from-[#D4A017] to-[#F4C430] transition-all duration-500"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        ></div>
      </div>
    </section>
  );
};

export default HeroCarousel;
