import React from 'react';
import { useSalon } from '../context/SalonContext';
import { SafeImage } from '../components/SafeImage';
import { Award, Calendar, Instagram, Sparkles, Check } from 'lucide-react';

export const ArtistsPage: React.FC = () => {
  const { config, navigateToBookingWithService } = useSalon();

  return (
    <div className="w-full bg-[#F8F5EF] text-[#30231F] min-h-screen">
      {/* Header Banner */}
      <section className="py-20 lg:py-24 border-b border-[#B79A68]/20 bg-[#E8DCCB]/20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#B79A68] font-medium font-sans block">
            Master Craftspeople
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#30231F] font-normal">
            Meet Our Senior Artists
          </h1>
          <p className="text-sm md:text-base text-[#9A8878] max-w-2xl mx-auto font-light leading-relaxed">
            Every artist at {config.salonName} undergoes rigorous masterclass training in bridal longevity, skin barrier science, and delicate dupatta draping.
          </p>
        </div>
      </section>

      {/* Artists Roster */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {config.artists.map((artist, index) => (
            <div
              key={artist.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white border border-[#B79A68]/30 p-8 sm:p-12 shadow-sm ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Artist Portrait */}
              <div
                className={`lg:col-span-5 relative ${
                  index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="border border-[#B79A68]/30 p-2 sm:p-3 bg-[#F8F5EF] shadow-md">
                  <SafeImage
                    src={artist.image}
                    alt={artist.name}
                    aspectRatioClass="aspect-[3/4]"
                    fallbackTitle={artist.name}
                    fallbackCategory={artist.role}
                    className="w-full h-full object-cover"
                  />
                </div>
                {artist.instagramHandle && (
                  <div className="mt-3 flex items-center justify-between text-xs text-[#9A8878]">
                    <span className="font-mono">{artist.instagramHandle}</span>
                    <Instagram className="w-3.5 h-3.5 text-[#B79A68]" />
                  </div>
                )}
              </div>

              {/* Artist Details & Signature Looks */}
              <div
                className={`lg:col-span-7 space-y-6 ${
                  index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#B79A68]" />
                    <span className="text-[11px] uppercase tracking-widest text-[#B79A68] font-medium font-sans">
                      {artist.experience}
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#30231F] font-normal">
                    {artist.name}
                  </h2>
                  <p className="text-xs text-[#B79A68] uppercase tracking-wider font-sans font-semibold">
                    {artist.role}
                  </p>
                </div>

                <div className="p-3 bg-[#E8DCCB]/40 border-l-2 border-[#B79A68]">
                  <span className="text-[10px] uppercase tracking-wider text-[#9A8878] font-medium block">
                    Specialty & Discipline:
                  </span>
                  <p className="text-xs font-medium text-[#30231F] mt-0.5">
                    {artist.specialty}
                  </p>
                </div>

                <p className="text-sm text-[#30231F]/80 leading-relaxed font-light">
                  {artist.bio}
                </p>

                {/* Signature Looks */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] uppercase tracking-wider text-[#9A8878] font-medium block">
                    Signature Repertoire:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {artist.signatureLooks.map((look, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-[#30231F]/85 bg-[#F8F5EF] p-2 border border-[#B79A68]/20"
                      >
                        <Check className="w-3.5 h-3.5 text-[#B79A68] shrink-0" />
                        <span>{look}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() =>
                      navigateToBookingWithService(`Bridal Makeup with ${artist.name}`)
                    }
                    className="px-8 py-3.5 bg-[#30231F] hover:bg-[#B79A68] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors shadow-xs cursor-pointer inline-flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-[#D4BE98]" />
                    <span>Book With {artist.name.split(' ')[0]}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
