import React, { useState } from 'react';
import { useSalon } from '../context/SalonContext';
import { SafeImage } from '../components/SafeImage';
import { LUXURY_ASSETS } from '../config/defaultSalonConfig';
import { Check, Calendar, ArrowRight, Sparkles, Clock, ShieldCheck, Heart } from 'lucide-react';

export const BridalPage: React.FC = () => {
  const { config, navigateToBookingWithService } = useSalon();
  const [activeFunction, setActiveFunction] = useState<'Barat' | 'Walima' | 'Mehndi' | 'Nikkah' | 'Engagement'>('Barat');

  const weddingFunctions = [
    {
      id: 'Barat' as const,
      name: 'The Barat Regal Tradition',
      subtitle: 'The Majestic Climax of Pakistani Weddings',
      tagline: 'Timeless Royal Reds, Velvet Bases & Heavy Kundan Poise',
      description: 'The Barat demands immaculate, high-contrast regal perfection. Engineered to hold up under powerful 4K flash cameras and stage illumination while maintaining silky, breathable skin texture. Complete with painless multi-pin dupatta fixing and hand-aligned matha patti.',
      features: [
        'Full HD Waterproof Base formulated for 12+ hour wear',
        'Sculpted cut-crease or smokey royal eye contour with premium 3D mink lashes',
        'Traditional Matha Patti, Teeka, Nath, and Kundan necklace alignment',
        'Secure double-dupatta draping with invisible safety pinning',
        'Emergency evening touch-up kit with matching lip sample and blotting papers'
      ],
      price: 'PKR 55,000',
      duration: '3.5 Hours',
      image: LUXURY_ASSETS.heroBride
    },
    {
      id: 'Walima' as const,
      name: 'The Walima Ethereal Pastel Glow',
      subtitle: 'Romantic Modern Sophistication',
      tagline: 'Dewy Glass Skin, Soft Champagne Shimmer & Sculpted Waves',
      description: 'Walima elegance celebrates soft luxury, modern pastels, and champagne tones. Designed to complement lighter silver, mint, blush, and ivory lehengas with an illuminated, filterless finish and romantic architectural hairstyles.',
      features: [
        'Dewy glass-skin primer infused with liquid light pearls',
        'Soft ethereal eye artistry featuring champagne, bronze, and diamond reflects',
        'Hollywood waves, soft romantic low chignon, or textured French updo',
        'Delicate side-jhumka and hair accessory placement',
        'Lightweight silk dupatta pinning'
      ],
      price: 'PKR 50,000',
      duration: '3.0 Hours',
      image: LUXURY_ASSETS.bridalSignature
    },
    {
      id: 'Mehndi' as const,
      name: 'The Mehndi Floral Vibrancy',
      subtitle: 'Joyful, Playful Festive Splendor',
      tagline: 'Sun-Kissed Golden Glow, Paranda Braids & Fresh Jasmine',
      description: 'For energetic dance practices, dholaks, and festive evenings. Lightweight waterproof bases that never sweat off during dancing, paired with vibrant eye pops and traditional braided hair adorned with fresh floral gajras.',
      features: [
        'Sweat-proof dewy tint base that stays fresh through high humidity and dancing',
        'Warm sunset or bronze metallic eye shimmer',
        'Artisan fishtail or traditional long braid entwined with fresh baby’s breath or paranda',
        'Fresh flower gajra placement and matha teeka pinning',
        'Radiant cheek blush and juicy gloss finish'
      ],
      price: 'PKR 42,000',
      duration: '2.5 Hours',
      image: LUXURY_ASSETS.mehndiPhone
    },
    {
      id: 'Nikkah' as const,
      name: 'The Sacred Nikkah Poise',
      subtitle: 'Pure, Understated Classic Grace',
      tagline: 'Soft Rose Flush, Defined Eyes & Delicate White/Gold Drapes',
      description: 'The Nikkah ceremony calls for serene, angelic modesty and timeless elegance. Soft luminous complexion, defined eyes with subtle liner, velvety rose lips, and gentle veil draping designed for daylight and candlelit settings.',
      features: [
        'Velvet matte porcelain skin finish with natural warmth',
        'Subtle defined wing eyeliner with fluttery natural lashes',
        'Custom nude-rose lip blend tailored to your skin undertone',
        'Traditional sheer organza or net veil draping',
        'Delicate hair pins and hair net security'
      ],
      price: 'PKR 40,000',
      duration: '2.5 Hours',
      image: LUXURY_ASSETS.dupattaSetting
    },
    {
      id: 'Engagement' as const,
      name: 'The Engagement & Baat Pakki Glam',
      subtitle: 'Youthful Radiant Allure',
      tagline: 'High-Fashion Polish with Effortless Charm',
      description: 'The initial official celebration of your wedding journey. A soft, radiant editorial look that balances celebratory glamour with effortless freshness.',
      features: [
        'Airy luminous foundation finish',
        'Soft bronze or peach shimmer eye lids',
        'Textured modern Hollywood curls or half-up romantic twist',
        'Custom lip shade and gloss',
        'Jewellery placement'
      ],
      price: 'PKR 35,000',
      duration: '2.0 Hours',
      image: LUXURY_ASSETS.serviceParty
    }
  ];

  const currentFunctionData = weddingFunctions.find((f) => f.id === activeFunction)!;

  return (
    <div className="w-full bg-[#F8F5EF] text-[#30231F]">
      {/* Header Banner */}
      <section className="py-20 lg:py-24 border-b border-[#B79A68]/20 bg-[#E8DCCB]/20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#B79A68] font-medium font-sans block">
            Couture South Asian Weddings
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#30231F] font-normal">
            Bespoke Bridal Suites & Functions
          </h1>
          <p className="text-sm md:text-base text-[#9A8878] max-w-2xl mx-auto font-light leading-relaxed">
            Every ceremony in a Pakistani wedding carries its own soul. We tailor your aesthetic journey so each function feels distinct, breathtaking, and authentically you.
          </p>
        </div>
      </section>

      {/* Function-by-Function Interactive Navigator */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Function Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-white border border-[#B79A68]/30 rounded-xs shadow-xs overflow-x-auto no-scrollbar">
            {weddingFunctions.map((fn) => (
              <button
                key={fn.id}
                onClick={() => setActiveFunction(fn.id)}
                className={`px-5 py-2.5 text-xs uppercase tracking-widest font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  activeFunction === fn.id
                    ? 'bg-[#30231F] text-white shadow-xs'
                    : 'text-[#9A8878] hover:text-[#30231F]'
                }`}
              >
                {fn.id}
              </button>
            ))}
          </div>
        </div>

        {/* Function Showcase Card */}
        <div className="bg-white border border-[#B79A68]/30 p-8 lg:p-12 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Visual representation */}
            <div className="lg:col-span-5 relative">
              <div className="border border-[#B79A68]/30 p-2 bg-[#F8F5EF] shadow-lg">
                <SafeImage
                  src={currentFunctionData.image}
                  alt={currentFunctionData.name}
                  aspectRatioClass="aspect-[4/5]"
                  fallbackTitle={currentFunctionData.name}
                  fallbackCategory={currentFunctionData.id}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 right-4 bg-[#30231F] text-[#D4BE98] text-[10px] uppercase tracking-widest px-3 py-1 font-mono">
                {currentFunctionData.id} Speciality
              </div>
            </div>

            {/* Right: Detailed Description & Inclusions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#B79A68] font-sans font-medium block">
                  {currentFunctionData.subtitle}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#30231F] font-normal">
                  {currentFunctionData.name}
                </h2>
                <p className="text-xs text-[#9A8878] italic font-serif">
                  {currentFunctionData.tagline}
                </p>
              </div>

              <div className="flex items-baseline gap-4 py-3 border-y border-[#30231F]/10">
                <span className="font-serif text-2xl font-semibold text-[#30231F]">
                  {currentFunctionData.price}
                </span>
                <span className="text-xs text-[#9A8878] font-mono">
                  Duration: {currentFunctionData.duration}
                </span>
              </div>

              <p className="text-sm text-[#30231F]/80 leading-relaxed font-light">
                {currentFunctionData.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#30231F]">
                  Ceremony Service Inclusions:
                </h4>
                {currentFunctionData.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-[#30231F]/85 font-light">
                    <Check className="w-4 h-4 text-[#B79A68] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => navigateToBookingWithService(`${currentFunctionData.id} Bridal Makeup`)}
                  className="px-8 py-3.5 bg-[#30231F] hover:bg-[#B79A68] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors shadow-xs cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#D4BE98]" />
                  <span>Reserve {currentFunctionData.id} Slot</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Bridal Multi-Day Packages Section */}
      <section className="py-20 bg-[#E8DCCB]/25 border-t border-[#B79A68]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B79A68] font-medium font-sans block">
              Multi-Day Suites
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#30231F] font-normal">
              Curated Master Packages
            </h2>
            <p className="text-xs md:text-sm text-[#9A8878] leading-relaxed">
              Combine your ceremonies with dedicated artist slots and VIP dressing suite access.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {config.bridalPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white border border-[#B79A68]/30 flex flex-col justify-between p-8 shadow-xs hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#B79A68] font-mono block mb-1">
                      {pkg.event}
                    </span>
                    <h3 className="font-serif text-2xl text-[#30231F] font-medium">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-[#9A8878] italic font-serif mt-1">
                      {pkg.subtitle}
                    </p>
                  </div>

                  <div className="py-3 border-y border-[#30231F]/10 flex items-baseline justify-between">
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

                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] uppercase tracking-wider text-[#9A8878] font-medium block">
                      Suite Privileges:
                    </span>
                    {pkg.inclusions.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#30231F]/90 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B79A68] mt-1.5 shrink-0"></span>
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => navigateToBookingWithService(pkg.name)}
                    className="w-full py-3 bg-[#30231F] hover:bg-[#B79A68] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                  >
                    <span>Reserve Package</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bridal FAQ Callout */}
      <section className="py-16 max-w-4xl mx-auto px-4 text-center space-y-4">
        <h3 className="font-serif text-2xl text-[#30231F]">
          Have Questions About Bridal Bookings & Deposits?
        </h3>
        <p className="text-xs text-[#9A8878] leading-relaxed">
          Learn about our advance deposit requirements, jewellery setting policies, and venue travel availability.
        </p>
        <button
          onClick={() => navigateToBookingWithService('General Bridal Inquiry')}
          className="px-6 py-2.5 border border-[#30231F] hover:bg-[#30231F] hover:text-white text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer"
        >
          Contact Bridal Concierge
        </button>
      </section>
    </div>
  );
};
