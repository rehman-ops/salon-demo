import React, { useState, useEffect } from 'react';
import { useSalon, PageId } from '../context/SalonContext';
import { Menu, X, Calendar, Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  const { config, activePage, setActivePage, setIsCustomizerOpen, displayMode, toggleDisplayMode } = useSalon();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'bridal', label: 'Bridal' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'artists', label: 'Our Artists' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: PageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Announcement Bar */}
      {config.announcementBar?.enabled && (
        <div className="bg-[#30231F] text-[#E8DCCB] text-[11px] md:text-xs py-2 px-4 text-center tracking-wider font-light flex items-center justify-center gap-3 border-b border-[#B79A68]/30">
          <span className="truncate max-w-[85vw] md:max-w-none">
            {config.announcementBar.text}
          </span>
          {config.announcementBar.linkText && (
            <button
              onClick={() => handleNavClick('book')}
              className="hidden sm:inline-flex items-center gap-1 text-[#D4BE98] hover:text-white underline underline-offset-4 font-medium transition-colors cursor-pointer"
            >
              {config.announcementBar.linkText}
            </button>
          )}
        </div>
      )}

      {/* Main Top Bar Contract: Zone 1 (Brand) - Zone 2 (Nav links) - Zone 3 (CTA) */}
      <nav
        className={`w-full transition-colors duration-300 ${
          isScrolled
            ? 'bg-[#F8F5EF]/95 backdrop-blur-md shadow-xs border-b border-[#B79A68]/20 py-3.5'
            : 'bg-[#F8F5EF] border-b border-[#30231F]/10 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group cursor-pointer focus:outline-hidden whitespace-nowrap shrink-0"
          >
            <span className="font-serif text-2xl md:text-3xl tracking-wide text-[#30231F] font-medium block transition-colors group-hover:text-[#B79A68]">
              {config.salonName}
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#9A8878] uppercase block font-sans font-light mt-0.5">
              {config.tagline || 'Bespoke Bridal Artistry'}
            </span>
          </button>

          {/* Zone 2: Navigation Links (single-line, clean hover underline) */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative text-xs tracking-widest uppercase transition-colors whitespace-nowrap shrink-0 py-1 font-medium cursor-pointer ${
                    isActive
                      ? 'text-[#30231F] font-semibold'
                      : 'text-[#9A8878] hover:text-[#30231F]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#B79A68]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Quick Mode Indicator for salon seller */}
            <button
              onClick={toggleDisplayMode}
              title="Toggle between [PLACEHOLDER] tags and live Demo view"
              className="text-[11px] px-2.5 py-1.5 rounded-sm border border-[#B79A68]/30 text-[#9A8878] hover:text-[#30231F] hover:border-[#B79A68] transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-3 h-3 text-[#B79A68]" />
              <span className="font-mono text-[10px] uppercase">
                {displayMode === 'placeholder' ? 'Tag Mode' : 'Demo Mode'}
              </span>
            </button>

            <button
              onClick={() => handleNavClick('book')}
              className="px-5 py-2.5 text-xs uppercase tracking-widest font-medium text-white bg-[#30231F] hover:bg-[#B79A68] transition-all duration-300 shadow-xs cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5 text-[#D4BE98]" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => handleNavClick('book')}
              className="sm:hidden px-3 py-1.5 text-[11px] uppercase tracking-wider font-medium text-white bg-[#30231F] rounded-xs cursor-pointer"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#30231F] hover:text-[#B79A68] transition-colors focus:outline-hidden cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F8F5EF] border-b border-[#B79A68]/20 px-6 py-6 shadow-xl transition-all duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left text-sm uppercase tracking-widest py-2 border-b border-[#30231F]/5 cursor-pointer ${
                  activePage === link.id
                    ? 'text-[#B79A68] font-semibold'
                    : 'text-[#30231F]'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => handleNavClick('book')}
                className="w-full py-3 text-center text-xs uppercase tracking-widest font-medium text-white bg-[#30231F] hover:bg-[#B79A68] transition-colors shadow-xs"
              >
                Book Your Appointment
              </button>

              <div className="flex items-center justify-between pt-2 text-xs text-[#9A8878]">
                <span>Template View:</span>
                <button
                  onClick={toggleDisplayMode}
                  className="font-mono text-[11px] underline text-[#B79A68] cursor-pointer"
                >
                  Switch to {displayMode === 'placeholder' ? 'Demo Mode' : 'Placeholder Tags'}
                </button>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCustomizerOpen(true);
                }}
                className="w-full py-2 text-center text-xs tracking-wider border border-[#B79A68] text-[#30231F] hover:bg-[#E8DCCB] transition-colors"
              >
                Configure Salon Template
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
