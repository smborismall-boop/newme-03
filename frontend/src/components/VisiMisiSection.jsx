import React from 'react';
import { Target, Compass, Award, Phone, Mail, MapPin, Globe } from 'lucide-react';

const VisiMisiSection = () => {
  return (
    <section className="py-20 bg-[#2a2a2a]" data-testid="visi-misi-section">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#D4A017] bg-[#D4A017]/10 mb-4">
            <svg viewBox="0 0 50 50" className="w-10 h-10 text-[#D4A017]">
              <path fill="currentColor" d="M25 5 L35 15 L35 25 L25 35 L15 25 L15 15 Z M20 18 Q25 12 30 18 Q35 24 25 30 Q15 24 20 18"/>
            </svg>
          </div>
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-[#D4A017]">NEWME</span>
              <span className="text-white">CLASS</span>
            </h2>
          </div>
          <p className="text-gray-400">a brand & product of</p>
          <p className="text-white font-semibold">PT. MITRA SEMESTA EDUCLASS</p>
        </div>

        {/* Mission Statement */}
        <div className="bg-[#1a1a1a] rounded-2xl p-8 mb-12 border border-[#D4A017]/20">
          <p className="text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
            Kami berkomitmen menjadikan usaha tidak hanya sebagai wadah pencari keuntungan, tapi lebih dari itu, ada aksi nyata bagi perbaikan banyak klien, yang kesemuanya kami harapkan dapat menjadi ladang investasi akhirat kami. Semoga Allah ridho dengan ikhtiar ini.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Visi */}
          <div className="bg-gradient-to-br from-[#D4A017]/20 to-transparent rounded-2xl p-8 border border-[#D4A017]/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-[#D4A017] rounded-full flex items-center justify-center">
                <Target className="w-7 h-7 text-[#1a1a1a]" />
              </div>
              <h3 className="text-2xl font-bold text-[#D4A017]">VISI</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Menjadi bagian dari kemajuan bangsa lewat peran <span className="text-[#D4A017] font-semibold">EDUKASI JATIDIRI</span> di berbagai lembaga, institusi & organisasi di negeri tercinta.
            </p>
          </div>

          {/* Misi */}
          <div className="bg-gradient-to-br from-[#D4A017]/20 to-transparent rounded-2xl p-8 border border-[#D4A017]/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-[#D4A017] rounded-full flex items-center justify-center">
                <Compass className="w-7 h-7 text-[#1a1a1a]" />
              </div>
              <h3 className="text-2xl font-bold text-[#D4A017]">MISI</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Membangun kemitraan edukasi jatidiri <span className="text-[#D4A017] font-semibold">STRATEGIS</span> dengan stakeholder dunia pendidikan, lembaga, institusi & masyarakat luas, demi men-ciptakan manusia Indonesia yang cakap & bahagia.
            </p>
          </div>
        </div>

        {/* Sub Misi */}
        <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#D4A017]/20">
          <h4 className="text-xl font-bold text-white mb-4">Sub. MISI</h4>
          <p className="text-gray-400 mb-8">Menjadi MITRA pendorong capaian VISI & MISI mitra</p>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#D4A017]" />
              <div>
                <p className="text-gray-500 text-xs">Phone</p>
                <p className="text-white">0895.0267.1691</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-[#D4A017]" />
              <div>
                <p className="text-gray-500 text-xs">Site</p>
                <p className="text-white">www.newmeclass.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#D4A017]" />
              <div>
                <p className="text-gray-500 text-xs">Mail</p>
                <p className="text-white">newmeclass@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#D4A017]" />
              <div>
                <p className="text-gray-500 text-xs">Address</p>
                <p className="text-white text-sm">Jl. Puskesmas I - Komp. Golden Seroja - A1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisiSection;
