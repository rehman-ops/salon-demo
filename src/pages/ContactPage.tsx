import React, { useState } from 'react';
import { useSalon } from '../context/SalonContext';
import { MapPin, Phone, MessageCircle, Mail, Clock, Instagram, Facebook, ArrowUpRight, Send, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { config } = useSalon();
  const [selectedBranchId, setSelectedBranchId] = useState<string>(
    config.branches[0]?.id || ''
  );
  const [messageSent, setMessageSent] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');

  const activeBranch =
    config.branches.find((b) => b.id === selectedBranchId) || config.branches[0];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryPhone) return;
    setMessageSent(true);
  };

  return (
    <div className="w-full bg-[#F8F5EF] text-[#30231F] min-h-screen">
      {/* Header Banner */}
      <section className="py-20 lg:py-24 border-b border-[#B79A68]/20 bg-[#E8DCCB]/20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#B79A68] font-medium font-sans block">
            Studio Concierge
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#30231F] font-normal">
            Visit & Contact Our Atelier
          </h1>
          <p className="text-sm md:text-base text-[#9A8878] max-w-2xl mx-auto font-light leading-relaxed">
            We welcome prospective brides for private consultations, outfit swatch inspections, and bridal package discussions.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Branch Switcher (if multiple branches configured) */}
        {config.branches.length > 1 && (
          <div className="mb-12 flex justify-center">
            <div className="inline-flex p-1 bg-white border border-[#B79A68]/30 rounded-xs shadow-xs">
              {config.branches.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setSelectedBranchId(b.id)}
                  className={`px-5 py-2 text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer ${
                    selectedBranchId === b.id
                      ? 'bg-[#30231F] text-white shadow-xs'
                      : 'text-[#9A8878] hover:text-[#30231F]'
                  }`}
                >
                  {b.name}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Location Info */}
          <div className="lg:col-span-6 space-y-8">
            <div className="bg-white border border-[#B79A68]/30 p-8 shadow-sm space-y-6">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#B79A68] font-sans font-medium">
                  {activeBranch ? activeBranch.name : 'Main Studio'}
                </span>
                <h3 className="font-serif text-3xl text-[#30231F] mt-1 font-medium">
                  Location & Hours
                </h3>
              </div>

              <div className="space-y-4 text-sm text-[#30231F]/85 font-light">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#B79A68] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs uppercase tracking-wider font-semibold text-[#30231F] mb-0.5">
                      Studio Address
                    </strong>
                    <span>
                      {activeBranch ? activeBranch.address : config.address},{' '}
                      {activeBranch ? activeBranch.city : config.city}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#B79A68] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs uppercase tracking-wider font-semibold text-[#30231F] mb-0.5">
                      Visiting Hours
                    </strong>
                    <span>
                      {activeBranch ? activeBranch.hours : config.openingHours}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#B79A68] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs uppercase tracking-wider font-semibold text-[#30231F] mb-0.5">
                      Direct Telephone
                    </strong>
                    <a
                      href={`tel:${activeBranch ? activeBranch.phone : config.phone}`}
                      className="hover:text-[#B79A68] transition-colors"
                    >
                      {activeBranch ? activeBranch.phone : config.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MessageCircle className="w-5 h-5 text-[#B79A68] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs uppercase tracking-wider font-semibold text-[#30231F] mb-0.5">
                      WhatsApp Concierge
                    </strong>
                    <a
                      href={`https://wa.me/${(activeBranch ? activeBranch.whatsapp : config.whatsapp).replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#B79A68] transition-colors"
                    >
                      {activeBranch ? activeBranch.whatsapp : config.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#B79A68] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-xs uppercase tracking-wider font-semibold text-[#30231F] mb-0.5">
                      Email Inquiries
                    </strong>
                    <a
                      href={`mailto:${config.email}`}
                      className="hover:text-[#B79A68] transition-colors"
                    >
                      {config.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Maps / Directions Button */}
              <div className="pt-2">
                <a
                  href={
                    (activeBranch && activeBranch.googleMapsUrl) ||
                    config.googleMapsUrl ||
                    'https://maps.google.com'
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#E8DCCB] hover:bg-[#D4BE98] text-[#30231F] border border-[#B79A68]/40 text-xs uppercase tracking-widest font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-[#B79A68]" />
                  <span>Open in Google Maps / Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 bg-[#E8DCCB]/30 border border-[#B79A68]/20 flex items-center justify-between">
              <div>
                <h4 className="font-serif text-lg text-[#30231F]">
                  Connect on Social Platforms
                </h4>
                <p className="text-xs text-[#9A8878]">
                  Watch daily bridal transformations and real bride reels
                </p>
              </div>

              <div className="flex items-center gap-3">
                {config.instagram && (
                  <a
                    href={config.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white border border-[#B79A68]/40 flex items-center justify-center text-[#30231F] hover:bg-[#30231F] hover:text-white transition-colors"
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
                    className="w-9 h-9 rounded-full bg-white border border-[#B79A68]/40 flex items-center justify-center text-[#30231F] hover:bg-[#30231F] hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: General Inquiry Form */}
          <div className="lg:col-span-6 bg-white border border-[#B79A68]/30 p-8 sm:p-10 shadow-md">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#B79A68] font-sans font-medium">
                Send a Note
              </span>
              <h3 className="font-serif text-3xl text-[#30231F] mt-1 font-medium">
                General Inquiries
              </h3>
              <p className="text-xs text-[#9A8878] mt-1 leading-relaxed">
                For commercial collaborations, photoshoot bookings, or custom destination packages.
              </p>
            </div>

            {messageSent ? (
              <div className="mt-8 p-6 bg-[#F8F5EF] border border-[#B79A68]/30 text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 text-[#B79A68] mx-auto" />
                <h4 className="font-serif text-xl text-[#30231F]">
                  Message Received
                </h4>
                <p className="text-xs text-[#9A8878]">
                  Thank you, {inquiryName}. Our concierge team will reach out to {inquiryPhone} within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setMessageSent(false);
                    setInquiryName('');
                    setInquiryPhone('');
                    setInquiryMessage('');
                  }}
                  className="mt-2 text-xs uppercase tracking-wider text-[#B79A68] underline font-medium cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#30231F] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="e.g. Sana Ahmed"
                    className="w-full px-3.5 py-2.5 bg-[#F8F5EF] border border-[#B79A68]/30 text-sm rounded-xs focus:outline-hidden focus:border-[#B79A68]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#30231F] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={inquiryPhone}
                    onChange={(e) => setInquiryPhone(e.target.value)}
                    placeholder="e.g. +92 300 9876543"
                    className="w-full px-3.5 py-2.5 bg-[#F8F5EF] border border-[#B79A68]/30 text-sm rounded-xs focus:outline-hidden focus:border-[#B79A68]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#30231F] mb-1">
                    Inquiry Details / Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    placeholder="Share any questions regarding group booking, hair trial, or pre-bridal services..."
                    className="w-full px-3.5 py-2.5 bg-[#F8F5EF] border border-[#B79A68]/30 text-sm rounded-xs focus:outline-hidden focus:border-[#B79A68]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#30231F] hover:bg-[#B79A68] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors shadow-xs cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message to Atelier</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
