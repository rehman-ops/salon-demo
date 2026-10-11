import React from 'react';
import { useSalon } from '../context/SalonContext';
import { SafeImage } from '../components/SafeImage';
import { LUXURY_ASSETS } from '../config/defaultSalonConfig';
import { ArrowRight, Sparkles, Shield, Heart, Award } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { config, setActivePage } = useSalon();

  return (
    <div className="w-full bg-[#F8F5EF] text-[#30231F]">
      {/* Header Banner */}
      <section className="py-20 lg:py-24 border-b border-[#B79A68]/20 bg-[#E8DCCB]/20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#B79A68] font-medium font-sans block">
            Our Heritage & Philosophy
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#30231F] font-normal">
            The Story of {config.salonName}
          </h1>
          <p className="text-sm md:text-base text-[#9A8878] max-w-2xl mx-auto font-light leading-relaxed">
            Where traditional South Asian bridal craftsmanship harmonizes with contemporary dermatological science and calm luxury.
          </p>
        </div>
      </section>

      {/* Brand Story & Founder Section */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="border border-[#B79A68]/30 p-3 bg-white shadow-xl">
              <SafeImage
                src={LUXURY_ASSETS.artist1}
                alt={config.ownerName || "Salon Founder"}
                aspectRatioClass="aspect-[3/4]"
                fallbackTitle={config.ownerName || "Founder Portrait"}
                fallbackCategory="Creative Director"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 text-center sm:text-left">
              <h3 className="font-serif text-xl text-[#30231F] font-medium">
                {config.ownerName || "[OWNER NAME]"}
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#B79A68] font-sans mt-0.5">
                Founder & Lead Bridal Artisan
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B79A68] font-medium font-sans block">
              A Personal Vision
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#30231F] font-normal leading-tight">
              Honoring Every Bride's Individuality Since Day One
            </h2>
            <div className="space-y-4 text-sm text-[#30231F]/80 font-light leading-relaxed">
              <p>
                Founded in {config.city}, {config.salonName} was conceived as an alternative to rushed, high-stress beauty parlours. We envisioned a tranquil sanctuary where a bride is never one of twenty faces in an assembly line, but the singular focus of an attentive team.
              </p>
              <p>
                Under the creative vision of {config.ownerName}, our artists study the nuances of Pakistani weddings—from the daylight warmth of garden Nikkahs to the intense camera flash of grand Barat stages and the soft ambient ballroom lighting of Walimas.
              </p>
              <p>
                We believe makeup should never disguise or erase who you are. Instead, our signature technique sculpts your natural features with weightless longevity, allowing your joy and beauty to radiate effortlessly.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => setActivePage('services')}
                className="px-7 py-3.5 bg-[#30231F] hover:bg-[#B79A68] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors shadow-xs cursor-pointer flex items-center gap-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setActivePage('bridal')}
                className="px-7 py-3.5 border border-[#B79A68] text-[#30231F] hover:bg-[#E8DCCB] text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
              >
                Bridal Suites
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Studio Pillars */}
      <section className="py-20 bg-[#E8DCCB]/30 border-y border-[#B79A68]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B79A68] font-medium font-sans block">
              Core Principles
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#30231F] font-normal">
              Our Professional Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-[#B79A68]/30 space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#B79A68]/15 flex items-center justify-center text-[#B79A68]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#30231F] font-medium">Authentic Radiance</h3>
              <p className="text-xs text-[#9A8878] leading-relaxed font-light">
                We believe in skin that looks like skin—refined, poreless, yet deeply dimensional. No heavy mask finishes or unnatural lightening.
              </p>
            </div>

            <div className="bg-white p-8 border border-[#B79A68]/30 space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#B79A68]/15 flex items-center justify-center text-[#B79A68]">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#30231F] font-medium">Uncompromising Hygiene</h3>
              <p className="text-xs text-[#9A8878] leading-relaxed font-light">
                Medical-grade autoclaving of metal tools, disposable applicators for sensitive eyes and lips, and spotless private dressing chambers.
              </p>
            </div>

            <div className="bg-white p-8 border border-[#B79A68]/30 space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#B79A68]/15 flex items-center justify-center text-[#B79A68]">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#30231F] font-medium">Serene Hospitality</h3>
              <p className="text-xs text-[#9A8878] leading-relaxed font-light">
                Your wedding day is unforgettable. We treat every bride and her family as cherished personal guests with attentive care from arrival to final reveal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Atelier Atmosphere Visual */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="border border-[#B79A68]/30 p-2 bg-white shadow-lg">
              <SafeImage
                src={LUXURY_ASSETS.salonInterior}
                alt="Salon Interior Design"
                aspectRatioClass="aspect-[16/10]"
                fallbackTitle="Salon Interior"
                fallbackCategory="Boutique Studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B79A68] font-medium font-sans block">
              The Space
            </span>
            <h2 className="font-serif text-3xl text-[#30231F]">
              Designed For Calm & Comfort
            </h2>
            <p className="text-sm text-[#30231F]/80 leading-relaxed font-light">
              Located in {config.city}, our boutique features bespoke architectural archways, warm dimmable illumination calibrated to photography standards, and private styling lounges.
            </p>
            <div className="p-4 bg-[#E8DCCB]/40 border-l-2 border-[#B79A68] space-y-1">
              <p className="font-serif text-sm text-[#30231F] font-medium">
                Complimentary Bridal Hospitality
              </p>
              <p className="text-xs text-[#9A8878]">
                Freshly brewed cardamom tea, organic infusions, and light refreshments served throughout your session.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
