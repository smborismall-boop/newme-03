import React from 'react';
import { CheckCircle, Star, Gift, Users, Award, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Star,
      title: "LEBIH KENAL DIRI & POTENSI...nya",
      description: "Kondisi kurikulum pendidikan kita yang cenderung tidak berbasis pada potensi jatidiri kita, keadaan lingkungan juga yang akhirnya memaksa kita semakin jauh dari nilai - nilai upscale potensi diri."
    },
    {
      icon: Users,
      title: "NYAMAN dengan GAYA JATIDIRI...nya",
      description: "Tidak dipungkiri memjadi orang lain itu mem-bosankan, maka dengan mengenal siapa kita, menjadikan kita mampu memilah-milih segala aktivitas yang rekomended bagi kenyamanan kita."
    },
    {
      icon: Award,
      title: "Resep AKSELERASI perjuangi IMPIAN",
      description: "Segala yang diawali tanpa perhitungan matang, hanya akan menghasilkan potensi kegagalan yang saling tapal. Dengan mengetahui siapa kita, memudahkan setiap klien memetakan keselarasan impian dengan eksekusinya."
    },
    {
      icon: Gift,
      title: "Produk MERCHANDISE komunitas NMC",
      description: "Sebagai sebuah strategi lebih menguatkan rasa kepedulian klien akan dirinya. NMC padanan dengan strategi membentuk komunitas berfasilitas aneka benefit yang dapat dirasa dan miliki klien."
    },
    {
      icon: ShoppingBag,
      title: "Aneka PRODUK dan LAYANAN dari mitra NMC",
      description: "Mitra kami siap menerima kartu keanggotaan kamu di merchant mereka. Nikmati bonus diskon, bonus, reward hingga royalti dari fasilitas yang NMC kolaborasikan dengan mitra kami."
    }
  ];

  return (
    <section className="py-20 bg-[#1a1a1a]" data-testid="benefits-section">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-[#D4A017] bg-[#D4A017]/10 mb-4">
              <svg viewBox="0 0 50 50" className="w-8 h-8 text-[#D4A017]">
                <path fill="currentColor" d="M25 5 L35 15 L35 25 L25 35 L15 25 L15 15 Z M20 18 Q25 12 30 18 Q35 24 25 30 Q15 24 20 18"/>
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              APA YANG DI_ <span className="text-[#D4A017]">TERIMA KLIEN</span>
            </h2>
          </div>
          
          {/* Badge */}
          <div className="md:w-1/2 flex justify-end items-start">
            <div className="bg-white rounded-full p-6 shadow-xl border-4 border-[#D4A017]">
              <div className="text-center">
                <p className="text-sm italic text-gray-600">- Kelas Peduli Talenta -</p>
                <img 
                  src="/logo.png" 
                  alt="NEWMECLASS Logo" 
                  className="w-24 h-24 mx-auto my-2 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <p className="text-xs text-gray-500">www.newmeclass.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits List */}
        <div className="space-y-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-[#D4A017]/10 rounded-2xl p-6 border-l-4 border-[#D4A017] hover:bg-[#D4A017]/20 transition-all duration-300"
                data-testid={`benefit-item-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#D4A017] rounded-full flex items-center justify-center text-[#1a1a1a] font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#D4A017] text-lg mb-2">{benefit.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/register">
            <Button 
              size="lg"
              className="bg-[#D4A017] hover:bg-[#B8900F] text-[#1a1a1a] font-bold px-8"
              data-testid="benefits-cta"
            >
              Daftar Sekarang & Dapatkan Benefitnya
            </Button>
          </Link>
        </div>

        {/* NEWMECLASS Footer */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="w-12 h-12 bg-[#D4A017] rounded-full flex items-center justify-center">
            <svg viewBox="0 0 50 50" className="w-8 h-8 text-[#1a1a1a]">
              <path fill="currentColor" d="M25 5 L35 15 L35 25 L25 35 L15 25 L15 15 Z"/>
            </svg>
          </div>
          <div>
            <p className="text-white font-bold text-lg">NEWMECLASS</p>
            <p className="text-gray-400 text-sm italic">adalah ilmu kalbu karena kepribadian</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
