import React, { useState, useEffect } from 'react';
import { useSalon } from '../context/SalonContext';
import { SafeImage } from '../components/SafeImage';
import { GalleryItem } from '../types/salon';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles, Filter } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const { config, navigateToBookingWithService } = useSalon();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Bridal Makeup',
    'Party Makeup',
    'Hair Styling',
    'Skin & Glow',
    'Studio Interior',
  ];

  const filteredItems = config.gallery.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  // Keyboard navigation for lightbox (Escape, ArrowLeft, ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : 0
        );
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + filteredItems.length) % filteredItems.length
            : 0
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const activeLightboxItem: GalleryItem | null =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="w-full bg-[#F8F5EF] text-[#30231F] min-h-screen">
      {/* Header Banner */}
      <section className="py-20 lg:py-24 border-b border-[#B79A68]/20 bg-[#E8DCCB]/20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#B79A68] font-medium font-sans block">
            Visual Portfolio
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#30231F] font-normal">
            The Atelier Lookbook
          </h1>
          <p className="text-sm md:text-base text-[#9A8878] max-w-2xl mx-auto font-light leading-relaxed">
            A curated showcase of royal Pakistani bridal transformations, couture hairstyling, dewy party aesthetics, and our private boutique interior.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-[69px] z-30 bg-[#F8F5EF]/95 backdrop-blur-md border-b border-[#B79A68]/20 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-xs text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#30231F] text-white shadow-xs'
                    : 'bg-white border border-[#B79A68]/30 text-[#9A8878] hover:text-[#30231F]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative cursor-pointer overflow-hidden bg-white border border-[#B79A68]/20 hover:border-[#B79A68] transition-all duration-300 shadow-xs hover:shadow-md"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <SafeImage
                  src={item.image}
                  alt={item.title}
                  aspectRatioClass="aspect-[4/5]"
                  fallbackTitle={item.title}
                  fallbackCategory={item.category}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                />

                <div className="absolute top-3 left-3 bg-[#30231F]/80 backdrop-blur-xs text-[#E8DCCB] text-[10px] uppercase tracking-widest px-2.5 py-0.5">
                  {item.category}
                </div>

                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 p-1.5 rounded-full text-white">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Bottom Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#30231F]/90 via-[#30231F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <h3 className="font-serif text-lg text-white font-medium">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#E8DCCB]/80 font-light mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                  <span className="text-[11px] text-[#D4BE98] underline uppercase tracking-wider font-mono mt-2">
                    Click to enlarge photo
                  </span>
                </div>
              </div>

              <div className="p-4 border-t border-[#30231F]/5 flex items-center justify-between bg-white">
                <span className="font-serif text-sm font-medium text-[#30231F] truncate pr-2">
                  {item.title}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#B79A68] font-mono shrink-0">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && activeLightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-[#30231F]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
              );
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer z-50"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer z-50"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            className="relative max-w-4xl max-h-[90vh] bg-[#F8F5EF] text-[#30231F] shadow-2xl flex flex-col md:flex-row overflow-hidden border border-[#B79A68]/40"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="md:w-3/5 bg-black flex items-center justify-center overflow-hidden max-h-[50vh] md:max-h-[85vh]">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                referrerPolicy="no-referrer"
                className="max-h-[80vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between space-y-6 bg-[#F8F5EF]">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#30231F]/10 pb-3">
                  <span className="text-[11px] uppercase tracking-widest text-[#B79A68] font-sans font-medium">
                    {activeLightboxItem.category}
                  </span>
                  <span className="text-[10px] text-[#9A8878] font-mono">
                    {lightboxIndex + 1} / {filteredItems.length}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#30231F] font-medium leading-snug">
                  {activeLightboxItem.title}
                </h3>

                <p className="text-xs text-[#30231F]/80 leading-relaxed font-light">
                  {activeLightboxItem.caption}
                </p>

                {activeLightboxItem.tags && activeLightboxItem.tags.length > 0 && (
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {activeLightboxItem.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 bg-[#E8DCCB] text-[#30231F]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#30231F]/10">
                <button
                  onClick={() => {
                    setLightboxIndex(null);
                    navigateToBookingWithService(activeLightboxItem.title);
                  }}
                  className="w-full py-3 bg-[#30231F] hover:bg-[#B79A68] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer shadow-xs"
                >
                  Request Similar Look
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
