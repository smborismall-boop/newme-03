import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Siti Rahma",
      organization: "Yayasan Al Karim",
      role: "Kepala Sekolah",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      rating: 5,
      text: "Program event KELAS GALI BAKAT yang telah terealisir di sekolah kami, NYATA telah memberi ANTUSIAS yang tinggi dari murid-murid kami. Semoga NEWMECLASS semakin mampu memberi efek superlitas dan kualitas murid kami kini dan kedepan."
    },
    {
      id: 2,
      name: "Asmi Kamal",
      organization: "Peserta Program",
      role: "Mahasiswa",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      rating: 5,
      text: "Setelah diobservasi oleh NEWMECLASS, semakin mengerti tentang 'siapa diri ini', memastikan langkah apa yang bisa saya pilih dalam pengembangan. Keputusan untuk perbaikan kedepan. Tidak ada kata terlambat untuk membenahi hidup, ini NMC bisa jadi rujukan KOMPAS untuk rencana kini dan esok."
    },
    {
      id: 3,
      name: "Dr. Ahmad Fauzi",
      organization: "Universitas Negeri Medan",
      role: "Dosen Psikologi",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
      rating: 5,
      text: "Metode 5 Element yang digunakan NEWMECLASS sangat komprehensif dan berbasis riset. Saya merekomendasikan program ini untuk mahasiswa dan profesional yang ingin mengenali potensi diri mereka."
    },
    {
      id: 4,
      name: "Rina Susanti",
      organization: "PT. Global Mandiri",
      role: "HR Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      rating: 5,
      text: "Kami telah bermitra dengan NEWMECLASS untuk program pengembangan karyawan. Hasilnya sangat positif, produktivitas tim meningkat dan kepuasan kerja lebih baik."
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section 
      className="py-20 bg-gradient-to-br from-[#5A5A4A] via-[#4A4A3A] to-[#3A3A2A] relative overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      data-testid="testimonial-section"
    >
      {/* Decorative Background */}
      <div className="absolute top-10 right-10 opacity-10">
        <Quote className="w-40 h-40 text-[#D4A017]" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10 rotate-180">
        <Quote className="w-32 h-32 text-[#D4A017]" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#D4A017] bg-white/10 backdrop-blur-sm mb-4">
            <svg viewBox="0 0 50 50" className="w-10 h-10 text-[#D4A017]">
              <path fill="currentColor" d="M25 5 L35 15 L35 25 L25 35 L15 25 L15 15 Z M20 18 Q25 12 30 18 Q35 24 25 30 Q15 24 20 18"/>
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            <span className="text-[#D4A017]">TANGGAPAN</span> MITRA & KLIEN
          </h2>
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#D4A017] text-[#D4A017]" />
            ))}
          </div>
          <p className="text-gray-300 text-sm">Diwakili Oleh:</p>
        </div>

        {/* Slider */}
        <div className="relative">
          {testimonials.map((testimonial, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={testimonial.id}
                className={`transition-all duration-700 ${
                  isActive ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pointer-events-none'
                }`}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Testimonial Card */}
                  <div className="bg-[#D4A017] rounded-2xl p-6 md:p-8 relative">
                    <Quote className="absolute top-4 left-4 w-8 h-8 text-[#5A5A4A]/20" />
                    <div className="relative z-10">
                      <h3 className="text-[#5A5A4A] font-bold text-lg mb-1">{testimonial.name} / {testimonial.organization}</h3>
                      <p className="text-[#5A5A4A]/80 italic leading-relaxed">
                        {testimonial.text}
                      </p>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="flex justify-center md:justify-end">
                    <div className="relative">
                      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#D4A017] shadow-2xl">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                      {/* Name Badge */}
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg">
                        <p className="text-[#5A5A4A] font-semibold text-sm whitespace-nowrap">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 bg-white/10 hover:bg-[#D4A017] text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 border border-[#D4A017]/50"
              data-testid="testimonial-prev"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide 
                      ? 'w-8 h-3 bg-[#D4A017]' 
                      : 'w-3 h-3 bg-white/50 hover:bg-white/70'
                  }`}
                  data-testid={`testimonial-dot-${index}`}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="w-12 h-12 bg-white/10 hover:bg-[#D4A017] text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 border border-[#D4A017]/50"
              data-testid="testimonial-next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
