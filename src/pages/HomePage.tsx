import React from 'react';
import { useSalon } from '../context/SalonContext';
import { SafeImage } from '../components/SafeImage';
import { Sparkles, Calendar, ArrowRight, Check, Heart, Shield, Award, Clock, Instagram } from 'lucide-react';
import { LUXURY_ASSETS } from '../config/defaultSalonConfig';

export const HomePage: React.FC = () => {
  const { config, setActivePage, navigateToBookingWithService } = useSalon();

  return (
    <div className="w-full bg-[#F8F5EF] text-[#30231F] overflow-hidden">
      {/* 1. HERO SECTION: Editorial split / cinematic bridal showcase */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center border-b border-[#B79A68]/20 bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Refined Typography & CTAs */}
            <div className="lg:col-span-6 space-y-6 lg:space-y-8 z-10">
              <div className="space-y-3">
                <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#B79A68] font-medium block font-sans">
                  {config.hero.eyebrow}
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] tracking-tight text-[#30231F] font-normal text-balance">
                  {config.hero.title}
                </h1>
                <p className="text-sm md:text-base text-[#9A8878] font-serif italic tracking-wide">
                  {config.hero.subtitle}
                </p>
              </div>

              <p className="text-sm md:text-base text-[#30231F]/80 leading-relaxed font-light max-w-xl">
                {config.hero.description}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => setActivePage('book')}
                  className="px-8 py-4 bg-[#30231F] hover:bg-[#B79A68] text-white text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <Calendar className="w-4 h-4 text-[#D4BE98] group-hover:text-white transition-colors" />
                  <span>{config.hero.primaryButtonText}</span>
                </button>

                <button
                  onClick={() => setActivePage('bridal')}
                  className="px-7 py-4 border border-[#30231F]/30 hover:border-[#B79A68] hover:text-[#B79A68] text-[#30231F] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{config.hero.secondaryButtonText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Quiet Trust Notes */}
              <div className="pt-6 border-t border-[#30231F]/10 flex flex-wrap items-center gap-6 text-xs text-[#9A8878]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B79A68]"></span>
                  <span>Bespoke South Asian Bridal Artistry</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B79A68]"></span>
                  <span>Private VIP Dressing Suites</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B79A68]"></span>
                  <span>Camera-Ready HD Airbrush Longevity</span>
                </div>
              </div>
            </div>

            {/* Right Column: Large South Asian Bridal Editorial Portrait */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Decorative delicate gold hairline offset frame */}
                <div className="absolute -inset-3 sm:-inset-4 border border-[#B79A68]/30 pointer-events-none transform translate-x-2 translate-y-2"></div>
                
                <div className="relative overflow-hidden shadow-2xl bg-[#E8DCCB]">
                  <SafeImage
                    src={config.hero.image || LUXURY_ASSETS.heroBride}
                    alt="South Asian Bridal Artistry Model"
                    aspectRatioClass="aspect-[4/5] sm:aspect-[3/4]"
                    fallbackTitle="Signature Bridal Artistry"
                    fallbackCategory="Barat Couture"
                    className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle editorial photo tag */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#30231F]/90 backdrop-blur-xs text-[#F8F5EF] p-4 border border-[#B79A68]/30 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[#D4BE98] font-sans">
                        Atelier Signature Look
                      </p>
                      <p className="font-serif text-sm tracking-wide text-[#FFFFFF]">
                        The Royal Barat Heritage Suite
                      </p>
                    </div>
                    <button
                      onClick={() => navigateToBookingWithService('Signature Barat Bridal Makeup')}
                      className="text-[11px] underline uppercase tracking-wider text-[#D4BE98] hover:text-white font-medium cursor-pointer"
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED SERVICES SECTION: Editorial Image Cards */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B79A68] font-medium font-sans block">
              Curated Offerings
            </span>
            <h2 className="font-serif text-3xl md:text-5xl tracking-tight text-[#30231F] font-normal">
              Featured Beauty & Bridal Services
            </h2>
          </div>
          <button
            onClick={() => setActivePage('services')}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#30231F] hover:text-[#B79A68] font-medium border-b border-[#30231F] hover:border-[#B79A68] pb-1 transition-all cursor-pointer self-start md:self-auto"
          >
            <span>View Full Service Menu</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {config.services.slice(0, 4).map((service, index) => (
            <div
              key={service.id}
              className="group flex flex-col bg-[#FFFFFF] border border-[#B79A68]/20 hover:border-[#B79A68]/60 transition-all duration-300 shadow-xs hover:shadow-md"
            >
              <div className="relative overflow-hidden">
                <SafeImage
                  src={service.image}
                  alt={service.name}
                  aspectRatioClass={index % 2 === 0 ? "aspect-[4/5]" : "aspect-[1/1] sm:aspect-[4/5]"}
                  fallbackTitle={service.name}
                  fallbackCategory={service.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 bg-[#30231F]/80 backdrop-blur-xs text-[#E8DCCB] text-[10px] uppercase tracking-widest px-2.5 py-1">
                  {service.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#9A8878] font-mono">
                    <span>{service.duration}</span>
                    <span className="font-semibold text-[#30231F]">{service.price}</span>
                  </div>
                  <h3 className="font-serif text-xl text-[#30231F] font-medium group-hover:text-[#B79A68] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-[#9A8878] leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#30231F]/5 flex items-center justify-between">
                  <button
                    onClick={() => navigateToBookingWithService(service.name)}
                    className="text-xs font-medium text-[#30231F] group-hover:text-[#B79A68] inline-flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[11px] text-[#B79A68] font-serif italic">Bespoke</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. BRIDAL SIGNATURE SECTION: High Impact South Asian Artistry */}
      <section className="bg-[#E8DCCB]/30 border-y border-[#B79A68]/20 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Portrait */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative">
                <div className="border border-[#B79A68]/40 p-2 sm:p-3 bg-[#FFFFFF] shadow-xl">
                  <SafeImage
                    src={LUXURY_ASSETS.bridalSignature}
                    alt="South Asian Bridal Signature Artistry"
                    aspectRatioClass="aspect-[4/5]"
                    fallbackTitle="Royal Bridal Heritage"
                    fallbackCategory="Walima Splendor"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Quote Box */}
                <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#30231F] text-[#F8F5EF] p-5 max-w-xs border border-[#B79A68]/40 shadow-xl hidden sm:block">
                  <p className="font-serif italic text-sm text-[#E8DCCB] leading-snug">
                    "Every bride deserves to look like a regal, authentic version of herself."
                  </p>
                  <span className="text-[10px] uppercase tracking-widest text-[#B79A68] font-sans mt-2 block">
                    — Bridal Atelier Philosophy
                  </span>
                </div>
              </div>
            </div>

            {/* Editorial Content */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#B79A68] font-medium font-sans block">
                The Bridal Signature
              </span>
              <h2 className="font-serif text-3xl md:text-5xl leading-tight text-[#30231F] font-normal text-balance">
                Every Bride Has a Story. Let Us Create Yours.
              </h2>
              <p className="text-sm md:text-base text-[#30231F]/80 leading-relaxed font-light">
                South Asian weddings are deeply personal symphonies of family, heritage, and emotion. From the intimate candlelit vows of the Nikkah to the vibrant energy of the Mehndi, the regal majesty of the Barat, and the modern pastel poetry of the Walima—our artistry honors every event with tailored grace.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: "Bespoke Undertone Matching & Skin Prep",
                    desc: "Skin barrier preparation and customized HD blending tailored to your specific South Asian skin tone."
                  },
                  {
                    title: "Heirloom Kundan, Polki & Dupatta Fixing",
                    desc: "Experienced stylists secure heavy headpieces, matha patti, and multi-layered dupattas for effortless 10+ hour comfort."
                  },
                  {
                    title: "Long-Wear Camera-Ready Longevity",
                    desc: "Formulations engineered to resist studio flash photography, tears, hugs, and warm lighting without shifting."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-[#B79A68]/20 flex items-center justify-center text-[#B79A68] shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#B79A68]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#30231F]">{item.title}</h4>
                      <p className="text-xs text-[#9A8878] leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setActivePage('bridal')}
                  className="px-8 py-3.5 bg-[#B79A68] hover:bg-[#30231F] text-white text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-xs cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Explore Bridal Packages</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE ART OF BEAUTY (Philosophy & Studio Introduction) */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B79A68] font-medium font-sans block">
              The Art of Beauty
            </span>
            <h2 className="font-serif text-3xl md:text-5xl tracking-tight text-[#30231F] font-normal">
              Quiet Luxury, Master Crafts and Personalized Sanctuary
            </h2>
            <p className="text-sm md:text-base text-[#30231F]/80 leading-relaxed font-light">
              At {config.salonName}, beauty is never a template or an assembly line. It is an intentional, unhurried craft. We believe true luxury lies in generous listening, sterile instruments, dermatological integrity, and creating an oasis of serenity amid the whirlwind of wedding festivities.
            </p>
            <p className="text-sm text-[#9A8878] leading-relaxed font-light">
              Our salon suites are designed with warm ambient illumination, comfortable styling stations, and private bridal dressing sanctuaries where you and your loved ones can relax with artisan kahwa and teas while our artists work.
            </p>

            <div className="pt-4 flex items-center gap-6">
              <button
                onClick={() => setActivePage('about')}
                className="px-6 py-3 border border-[#30231F] text-[#30231F] hover:bg-[#30231F] hover:text-white text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer"
              >
                Our Story & Philosophy
              </button>
              <button
                onClick={() => setActivePage('artists')}
                className="text-xs uppercase tracking-widest text-[#B79A68] hover:text-[#30231F] font-medium transition-colors cursor-pointer"
              >
                Meet Our Master Artists →
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="border border-[#B79A68]/30 shadow-lg bg-[#FFFFFF] p-2">
                <SafeImage
                  src={LUXURY_ASSETS.artistAtWork}
                  alt="Senior Makeup Artist at Work"
                  aspectRatioClass="aspect-[4/3] sm:aspect-[16/11]"
                  fallbackTitle="The Art of Precision"
                  fallbackCategory="Craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#F8F5EF] p-4 border border-[#B79A68]/30 shadow-md max-w-[240px]">
                <p className="font-serif text-base text-[#30231F]">
                  "Craftsmanship you can see, comfort you can feel."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE BRIDAL LOOKBOOK: Asymmetric Editorial Gallery Preview */}
      <section className="py-20 bg-[#F8F5EF] border-t border-[#B79A68]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#B79A68] font-medium font-sans block">
                Editorial Showcase
              </span>
              <h2 className="font-serif text-3xl md:text-5xl tracking-tight text-[#30231F] font-normal">
                The Bridal & Beauty Lookbook
              </h2>
            </div>
            <button
              onClick={() => setActivePage('gallery')}
              className="text-xs uppercase tracking-widest text-[#30231F] hover:text-[#B79A68] font-medium border-b border-[#30231F] hover:border-[#B79A68] pb-1 transition-all cursor-pointer self-start md:self-auto inline-flex items-center gap-1.5"
            >
              <span>Explore Complete Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Asymmetrical 3-Column Editorial Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.gallery.slice(0, 6).map((item) => (
              <div
                key={item.id}
                onClick={() => setActivePage('gallery')}
                className="group relative cursor-pointer overflow-hidden border border-[#B79A68]/20 bg-[#FFFFFF] shadow-xs"
              >
                <SafeImage
                  src={item.image}
                  alt={item.title}
                  aspectRatioClass="aspect-[4/5]"
                  fallbackTitle={item.title}
                  fallbackCategory={item.category}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#30231F]/90 via-[#30231F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-[#F8F5EF]">
                  <span className="text-[10px] uppercase tracking-widest text-[#D4BE98] font-sans mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg text-white font-medium">{item.title}</h4>
                  <p className="text-xs text-[#E8DCCB]/80 font-light mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. THE SALON EXPERIENCE: 4 Pillars of Quiet Luxury */}
      <section className="py-20 lg:py-28 bg-[#E8DCCB]/25 border-y border-[#B79A68]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B79A68] font-medium font-sans block">
              Our Standard
            </span>
            <h2 className="font-serif text-3xl md:text-5xl tracking-tight text-[#30231F] font-normal">
              The {config.salonName} Experience
            </h2>
            <p className="text-xs md:text-sm text-[#9A8878] leading-relaxed">
              Designed to make every appointment feel like an unhurried, royal indulgence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Personalized Consultations",
                desc: "We analyze your bridal ensemble swatches, jewelry pieces, and facial structure to curate a one-of-a-kind vision."
              },
              {
                icon: Award,
                title: "Prestige Luxury Formulations",
                desc: "Exclusive use of dermatologically vetted, non-comedogenic HD cosmetics designed for extreme durability and glow."
              },
              {
                icon: Shield,
                title: "Sterile & Flawless Hygiene",
                desc: "Medical-grade sanitation of brushes, spatulas, and tools between every client session for your skin's safety."
              },
              {
                icon: Clock,
                title: "Punctual Timeline Management",
                desc: "Dedicated time buffers ensure your bridal look is completed on schedule so you arrive at your venue serene and radiant."
              }
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FFFFFF] p-8 border border-[#B79A68]/20 space-y-4 hover:border-[#B79A68] transition-colors shadow-xs"
                >
                  <div className="w-10 h-10 rounded-full border border-[#B79A68]/40 flex items-center justify-center text-[#B79A68]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl text-[#30231F] font-medium">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#9A8878] leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. SIGNATURE BRIDAL PACKAGES */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#B79A68] font-medium font-sans block">
            Curated Suites
          </span>
          <h2 className="font-serif text-3xl md:text-5xl tracking-tight text-[#30231F] font-normal">
            Signature Bridal Packages
          </h2>
          <p className="text-xs md:text-sm text-[#9A8878] leading-relaxed">
            Thoughtfully packaged suites tailored for Pakistani multi-day weddings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {config.bridalPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-[#FFFFFF] border border-[#B79A68]/30 flex flex-col justify-between p-8 hover:shadow-xl transition-all duration-300 relative group"
            >
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#B79A68] font-mono block mb-1">
                    {pkg.event}
                  </span>
                  <h3 className="font-serif text-2xl text-[#30231F] font-medium">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-[#9A8878] italic mt-1 font-serif">
                    {pkg.subtitle}
                  </p>
                </div>

                <div className="py-4 border-y border-[#30231F]/10 flex items-baseline justify-between">
                  <div>
                    <span className="text-2xl font-serif font-semibold text-[#30231F]">
                      {pkg.price}
                    </span>
                    {pkg.originalPrice && (
                      <span className="text-xs line-through text-[#9A8878] ml-2">
                        {pkg.originalPrice}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-[#9A8878] font-mono">{pkg.duration}</span>
                </div>

                <p className="text-xs text-[#30231F]/80 leading-relaxed font-light">
                  {pkg.description}
                </p>

                <div className="space-y-2.5 pt-2">
                  <p className="text-[11px] uppercase tracking-wider text-[#9A8878] font-medium">
                    Package Inclusions:
                  </p>
                  {pkg.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#30231F]/90 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B79A68] mt-1.5 shrink-0"></span>
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                {pkg.recommendedNotice && (
                  <p className="text-[11px] text-[#B79A68] italic font-serif mb-3">
                    * {pkg.recommendedNotice}
                  </p>
                )}
                <button
                  onClick={() => navigateToBookingWithService(pkg.name)}
                  className="w-full py-3 bg-[#30231F] hover:bg-[#B79A68] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors shadow-xs cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Reserve Package</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. TESTIMONIALS (Refined, honest sample client feedback) */}
      <section className="py-20 bg-[#E8DCCB]/30 border-y border-[#B79A68]/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#B79A68] font-medium font-sans block mb-3">
            Voices of Our Brides
          </span>
          <h2 className="font-serif text-3xl md:text-5xl tracking-tight text-[#30231F] font-normal mb-14">
            Words of Grace
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {config.testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-[#FFFFFF] p-8 border border-[#B79A68]/20 text-left space-y-4 shadow-xs"
              >
                <div className="font-serif text-4xl text-[#B79A68]/50 leading-none select-none">
                  “
                </div>
                <p className="text-xs md:text-sm text-[#30231F]/85 italic font-serif leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="pt-4 border-t border-[#30231F]/10 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-semibold text-[#30231F]">{t.clientName}</h4>
                    <span className="text-[11px] text-[#9A8878] font-light">
                      {t.event} · {t.city}
                    </span>
                  </div>
                  {t.isSamplePlaceholder && (
                    <span className="text-[10px] text-[#B79A68] uppercase font-mono tracking-wider">
                      Sample
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-[#9A8878] mt-8 italic">
            * Client quotes shown above are realistic sample layouts for template preview. Replace with authentic parlour testimonials upon launch.
          </p>
        </div>
      </section>

      {/* 9. INSTAGRAM-STYLE GALLERY */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#B79A68] font-medium font-sans block">
            Social Journal
          </span>
          <h2 className="font-serif text-2xl md:text-4xl text-[#30231F]">
            Follow On Instagram
          </h2>
          <a
            href={config.instagram || "https://instagram.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#B79A68] hover:text-[#30231F] underline underline-offset-4 tracking-wider inline-flex items-center gap-1.5 transition-colors"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>@[SALON_INSTAGRAM]</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {[
            { img: LUXURY_ASSETS.heroBride, label: "Barat Regalia" },
            { img: LUXURY_ASSETS.bridalSignature, label: "Walima Glow" },
            { img: LUXURY_ASSETS.serviceBridal, label: "Eye Artistry" },
            { img: LUXURY_ASSETS.jewelryDetail, label: "Kundan Details" },
            { img: LUXURY_ASSETS.salonInterior, label: "Private Suite" },
            { img: LUXURY_ASSETS.dupattaSetting, label: "Draping Craft" },
          ].map((tile, i) => (
            <a
              key={i}
              href={config.instagram || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden border border-[#B79A68]/20 bg-[#E8DCCB] block"
            >
              <SafeImage
                src={tile.img}
                alt={tile.label}
                aspectRatioClass="aspect-square"
                fallbackTitle={tile.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-[#30231F]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <Instagram className="w-5 h-5 text-[#E8DCCB]" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 10. FINAL CONVERSION CTA */}
      <section className="py-24 bg-[#30231F] text-[#F8F5EF] relative overflow-hidden border-t border-[#B79A68]/30">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4BE98] font-medium font-sans block">
            Begin Your Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#E8DCCB] font-normal leading-tight">
            Your Most Beautiful Moments Begin Here.
          </h2>
          <p className="text-sm md:text-base text-[#E8DCCB]/80 max-w-xl mx-auto font-light leading-relaxed">
            Discover personalized beauty experiences crafted around your unique celebration. Reserve your wedding date with our bridal concierge today.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setActivePage('book')}
              className="px-8 py-4 bg-[#B79A68] hover:bg-[#D4BE98] text-[#30231F] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-md cursor-pointer flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#30231F]" />
              <span>Book Your Appointment</span>
            </button>

            <button
              onClick={() => setActivePage('contact')}
              className="px-8 py-4 border border-[#B79A68]/50 hover:border-white text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
            >
              Contact Studio Concierge
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
