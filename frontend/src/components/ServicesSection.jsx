import React from 'react';
import { Building2, User, GraduationCap, Briefcase, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const corporateServices = [
    {
      title: "KELAS GALI BAKAT",
      description: "Program KELAS OPTIMASI POTENSI di yayasan pendidikan dan pelatihan untuk dunia bisnis / korporasi yang diselenggarakan di waktu dan tempat yang dapat disesuaikan dengan budget anggaran yang disepakati.",
      link: "/kelas-gali-bakat"
    }
  ];

  const individualServices = [
    {
      title: "Observasi Online & Offline",
      description: "Melakukan observasi offline hingga online sengaja disediakan NEWMECLASS, karena idealisme bisnis sekaligus idealisme pergerakan kepasifisan atas semakin banyaknya 'korban' SALAH PILIHAN minat bakat di negeri yang kita cintai bersama ini.",
      link: "/services/clinic"
    },
    {
      title: "Program MENGENAL DIRI",
      description: "Berbekal strategi NETWORKING SYSTEM, diharapkan usaha kampanye pentingnya program MENGENAL DIRI lewat NMC ini akan lebih memberi dampak positif juga bagi mitra individual NMC.",
      link: "/newme-test"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#5A5A4A] via-[#4A4A3A] to-[#3A3A2A]" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#D4A017] bg-white/10 backdrop-blur-sm mb-4">
            <svg viewBox="0 0 50 50" className="w-10 h-10 text-[#D4A017]">
              <path fill="currentColor" d="M25 5 L35 15 L35 25 L25 35 L15 25 L15 15 Z M20 18 Q25 12 30 18 Q35 24 25 30 Q15 24 20 18"/>
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            <span className="text-[#D4A017]">PRODUK JASA</span> KAMI
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Corporate / B2B */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-[#D4A017] rounded-full flex items-center justify-center">
                <Building2 className="w-7 h-7 text-[#5A5A4A]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#D4A017]">YAYASAN / KORPORASI</h3>
                <p className="text-white/70">( B to B )</p>
              </div>
            </div>

            {corporateServices.map((service, index) => (
              <Link 
                key={index} 
                to={service.link}
                className="block group"
                data-testid={`corporate-service-${index}`}
              >
                <div className="bg-[#D4A017] rounded-2xl p-6 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.02]">
                  <h4 className="font-bold text-[#5A5A4A] text-lg mb-2 flex items-center justify-between">
                    {service.title}
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </h4>
                  <p className="text-[#5A5A4A]/80 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}

            {/* Image */}
            <div className="rounded-2xl overflow-hidden border-4 border-[#D4A017]/50">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80" 
                alt="Corporate Training"
                className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Individual / B2C */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-[#D4A017] rounded-full flex items-center justify-center">
                <User className="w-7 h-7 text-[#5A5A4A]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#D4A017]">INDIVIDUAL</h3>
                <p className="text-white/70">( B to C )</p>
              </div>
            </div>

            {individualServices.map((service, index) => (
              <Link 
                key={index} 
                to={service.link}
                className="block group"
                data-testid={`individual-service-${index}`}
              >
                <div className="bg-white/10 backdrop-blur-sm border border-[#D4A017]/30 rounded-2xl p-6 transition-all duration-300 group-hover:bg-[#D4A017]/10 group-hover:border-[#D4A017]">
                  <h4 className="font-bold text-[#D4A017] text-lg mb-2 flex items-center justify-between">
                    {service.title}
                    <ChevronRight className="w-5 h-5 text-[#D4A017] group-hover:translate-x-2 transition-transform" />
                  </h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}

            {/* Image */}
            <div className="rounded-2xl overflow-hidden border-4 border-[#D4A017]/50">
              <img 
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&q=80" 
                alt="Individual Counseling"
                className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
