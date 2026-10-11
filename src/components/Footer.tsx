import React from 'react';
import { useSalon, PageId } from '../context/SalonContext';
import { Phone, MessageCircle, MapPin, Clock, Instagram, Facebook, ArrowUpRight, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const { config, setActivePage, setIsCustomizerOpen } = useSalon();

  const handleNav = (page: PageId) => {
    setActivePage(page);
  };

  return (
    <footer className="bg-[#30231F] text-[#F8F5EF] pt-20 pb-12 border-t border-[#B79A68]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-[#F8F5EF]/10">
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-5">
            <h3 className="font-serif text-3xl tracking-wide text-[#E8DCCB]">
              {config.salonName}
            </h3>
            <p className="text-xs uppercase tracking-[0.2em] text-[#B79A68] font-sans">
              {config.tagline || 'Bespoke Bridal Artistry & Couture Aesthetics'}
            </p>
            <p className="text-xs text-[#E8DCCB]/70 leading-relaxed font-light pr-4">
              Dedicated to celebrating South Asian bridal elegance with precision, radiant craftsmanship, and calm hospitality.
            </p>

            <div className="flex items-center gap-4 pt-2">
              {config.instagram && (
                <a
                  href={config.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-[#B79A68]/40 flex items-center justify-center text-[#E8DCCB] hover:text-[#FFFFFF] hover:border-[#B79A68] hover:bg-[#B79A68]/20 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {config.facebook && (
                <a
                  href={config.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-[#B79A68]/40 flex items-center justify-center text-[#E8DCCB] hover:text-[#FFFFFF] hover:border-[#B79A68] hover:bg-[#B79A68]/20 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {config.whatsapp && (
                <a
                  href={`https://wa.me/${config.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-[#B79A68]/40 flex items-center justify-center text-[#E8DCCB] hover:text-[#FFFFFF] hover:border-[#B79A68] hover:bg-[#B79A68]/20 transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B79A68]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E8DCCB]/80 font-light">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#FFFFFF] transition-colors cursor-pointer"
                >
                  Home Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#FFFFFF] transition-colors cursor-pointer"
                >
                  About {config.ownerName ? `& ${config.ownerName}` : 'The Atelier'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#FFFFFF] transition-colors cursor-pointer"
                >
                  Full Service Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('bridal')}
                  className="hover:text-[#FFFFFF] transition-colors cursor-pointer"
                >
                  Bridal Suites & Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gallery')}
                  className="hover:text-[#FFFFFF] transition-colors cursor-pointer"
                >
                  Bridal Lookbook & Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('artists')}
                  className="hover:text-[#FFFFFF] transition-colors cursor-pointer"
                >
                  Meet Our Artists
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('faqs-policies')}
                  className="hover:text-[#FFFFFF] transition-colors cursor-pointer"
                >
                  FAQ & Policies
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Bridal Specialities */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B79A68]">
              Signature Offerings
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E8DCCB]/80 font-light">
              <li>
                <button
                  onClick={() => handleNav('bridal')}
                  className="hover:text-[#FFFFFF] transition-colors cursor-pointer text-left"
                >
                  Barat & Royal Heritage Makeup
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('bridal')}
                  className="hover:text-[#FFFFFF] transition-colors cursor-pointer text-left"
                >
                  Walima Pastel Soft Glam
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('bridal')}
                  className="hover:text-[#FFFFFF] transition-colors cursor-pointer text-left"
                >
                  Mehndi Vibrant Glow & Braids
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#FFFFFF] transition-colors cursor-pointer text-left"
                >
                  24K Gold Hydra-Facial Rituals
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#FFFFFF] transition-colors cursor-pointer text-left"
                >
                  Russian Manicure & Nail Extensions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#FFFFFF] transition-colors cursor-pointer text-left"
                >
                  Organic Herbal Bridal Ubtan
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Concierge */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B79A68]">
              Salon Concierge
            </h4>
            <div className="space-y-3 text-xs text-[#E8DCCB]/85 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B79A68] shrink-0 mt-0.5" />
                <span>
                  {config.address}, {config.city}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B79A68] shrink-0" />
                <a
                  href={`tel:${config.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {config.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#B79A68] shrink-0" />
                <a
                  href={`https://wa.me/${config.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {config.whatsapp} (WhatsApp Concierge)
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#B79A68] shrink-0 mt-0.5" />
                <span>{config.openingHours}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => handleNav('book')}
                className="w-full py-2.5 px-4 bg-[#B79A68] hover:bg-[#D4BE98] text-[#30231F] text-xs font-medium uppercase tracking-widest transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>Request Appointment</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#E8DCCB]/60 font-light">
          <div className="flex items-center gap-3">
            <p>© {new Date().getFullYear()} {config.salonName}. All rights reserved.</p>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline italic">Designed for High-End Beauty Parlours</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNav('faqs-policies')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleNav('faqs-policies')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={() => handleNav('faqs-policies')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Cancellation Policy
            </button>
            <button
              onClick={() => setIsCustomizerOpen(true)}
              className="text-[#D4BE98] hover:underline cursor-pointer flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#B79A68]" />
              <span>Template Config</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
