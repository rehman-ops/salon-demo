import React, { useState } from 'react';
import { useSalon } from '../context/SalonContext';
import { X, Sliders, Check, Copy, RotateCcw, Sparkles, Building, Phone, Image as ImageIcon } from 'lucide-react';

export const TemplateCustomizer: React.FC = () => {
  const {
    config,
    updateConfig,
    resetConfig,
    displayMode,
    setDisplayMode,
    isCustomizerOpen,
    setIsCustomizerOpen,
  } = useSalon();

  const [activeTab, setActiveTab] = useState<'general' | 'contact' | 'hero' | 'services' | 'export'>('general');
  const [copied, setCopied] = useState(false);

  if (!isCustomizerOpen) {
    return (
      /* Discrete floating controller pill for website reseller / designer */
      <button
        onClick={() => setIsCustomizerOpen(true)}
        className="fixed bottom-5 right-5 z-50 bg-[#30231F] text-[#E8DCCB] border border-[#B79A68] hover:bg-[#B79A68] hover:text-[#FFFFFF] px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer group"
        title="Customize Salon Template & Placeholders"
      >
        <Sliders className="w-3.5 h-3.5 text-[#B79A68] group-hover:text-white transition-colors" />
        <span>Customize Template</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#B79A68]"></span>
      </button>
    );
  }

  const handleCopyJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(config, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs transition-opacity duration-300">
      <div className="w-full max-w-xl h-full bg-[#F8F5EF] text-[#30231F] shadow-2xl flex flex-col border-l border-[#B79A68]/30 overflow-hidden animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="px-6 py-5 bg-[#30231F] text-[#F8F5EF] flex items-center justify-between border-b border-[#B79A68]/40">
          <div>
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-[#B79A68]" />
              <h3 className="font-serif text-xl tracking-wide text-[#E8DCCB]">
                Salon Template Customizer
              </h3>
            </div>
            <p className="text-[11px] text-[#E8DCCB]/70 tracking-wide mt-0.5">
              White-label editor for configuring and selling this beauty parlour site
            </p>
          </div>
          <button
            onClick={() => setIsCustomizerOpen(false)}
            className="p-1.5 rounded-full text-[#E8DCCB] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode Selector Strip */}
        <div className="bg-[#E8DCCB]/70 px-6 py-3 border-b border-[#B79A68]/30 flex items-center justify-between text-xs">
          <span className="font-medium text-[#30231F] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#B79A68]" />
            Template Mode:
          </span>
          <div className="flex items-center gap-1 bg-[#F8F5EF] p-1 rounded-sm border border-[#B79A68]/30">
            <button
              onClick={() => setDisplayMode('placeholder')}
              className={`px-3 py-1 rounded-xs text-[11px] font-medium transition-colors cursor-pointer ${
                displayMode === 'placeholder'
                  ? 'bg-[#30231F] text-white shadow-xs'
                  : 'text-[#9A8878] hover:text-[#30231F]'
              }`}
            >
              [PLACEHOLDERS]
            </button>
            <button
              onClick={() => setDisplayMode('demo')}
              className={`px-3 py-1 rounded-xs text-[11px] font-medium transition-colors cursor-pointer ${
                displayMode === 'demo'
                  ? 'bg-[#30231F] text-white shadow-xs'
                  : 'text-[#9A8878] hover:text-[#30231F]'
              }`}
            >
              Live Demo (Zehra Atelier)
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#30231F]/10 px-6 bg-[#F8F5EF] overflow-x-auto no-scrollbar">
          {[
            { id: 'general', label: 'Identity', icon: Building },
            { id: 'contact', label: 'Contact', icon: Phone },
            { id: 'hero', label: 'Hero', icon: ImageIcon },
            { id: 'services', label: 'Services & Pricing', icon: Sliders },
            { id: 'export', label: 'Export JSON', icon: Copy },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-1.5 py-3.5 px-3 text-xs uppercase tracking-wider font-medium border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'border-[#B79A68] text-[#30231F]'
                    : 'border-transparent text-[#9A8878] hover:text-[#30231F]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeTab === 'general' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#9A8878] mb-1 font-medium">
                  Salon Name
                </label>
                <input
                  type="text"
                  value={config.salonName}
                  onChange={(e) => updateConfig({ salonName: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#B79A68]/30 rounded-xs text-sm text-[#30231F] focus:outline-hidden focus:border-[#B79A68]"
                  placeholder="e.g. Zehra Bridal Studio or [SALON NAME]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#9A8878] mb-1 font-medium">
                  Tagline
                </label>
                <input
                  type="text"
                  value={config.tagline}
                  onChange={(e) => updateConfig({ tagline: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#B79A68]/30 rounded-xs text-sm text-[#30231F] focus:outline-hidden focus:border-[#B79A68]"
                  placeholder="e.g. Haute Bridal & Couture Aesthetics"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#9A8878] mb-1 font-medium">
                  Founder / Owner Name
                </label>
                <input
                  type="text"
                  value={config.ownerName}
                  onChange={(e) => updateConfig({ ownerName: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#B79A68]/30 rounded-xs text-sm text-[#30231F] focus:outline-hidden focus:border-[#B79A68]"
                  placeholder="e.g. Zehra Batool or [OWNER NAME]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#9A8878] mb-1 font-medium">
                  City
                </label>
                <input
                  type="text"
                  value={config.city}
                  onChange={(e) => updateConfig({ city: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#B79A68]/30 rounded-xs text-sm text-[#30231F] focus:outline-hidden focus:border-[#B79A68]"
                  placeholder="e.g. Lahore, Karachi, Islamabad or [CITY]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#9A8878] mb-1 font-medium">
                  Currency Symbol / Code
                </label>
                <input
                  type="text"
                  value={config.currency}
                  onChange={(e) => updateConfig({ currency: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#B79A68]/30 rounded-xs text-sm text-[#30231F] focus:outline-hidden focus:border-[#B79A68]"
                  placeholder="PKR"
                />
              </div>

              <div className="pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={config.announcementBar?.enabled}
                    onChange={(e) =>
                      updateConfig({
                        announcementBar: {
                          ...config.announcementBar,
                          enabled: e.target.checked,
                        },
                      })
                    }
                    className="w-4 h-4 accent-[#B79A68] rounded-xs"
                  />
                  <span className="text-xs text-[#30231F]">Enable Top Announcement Bar</span>
                </label>
                {config.announcementBar?.enabled && (
                  <input
                    type="text"
                    value={config.announcementBar.text}
                    onChange={(e) =>
                      updateConfig({
                        announcementBar: {
                          ...config.announcementBar,
                          text: e.target.value,
                        },
                      })
                    }
                    className="mt-2 w-full px-3 py-2 bg-white border border-[#B79A68]/30 rounded-xs text-xs text-[#30231F]"
                  />
                )}
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#9A8878] mb-1 font-medium">
                  Studio Address
                </label>
                <input
                  type="text"
                  value={config.address}
                  onChange={(e) => updateConfig({ address: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#B79A68]/30 rounded-xs text-sm text-[#30231F]"
                  placeholder="[ADDRESS]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#9A8878] mb-1 font-medium">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={config.phone}
                  onChange={(e) => updateConfig({ phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#B79A68]/30 rounded-xs text-sm text-[#30231F]"
                  placeholder="[PHONE NUMBER]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#9A8878] mb-1 font-medium">
                  WhatsApp Number (with country code)
                </label>
                <input
                  type="text"
                  value={config.whatsapp}
                  onChange={(e) => updateConfig({ whatsapp: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#B79A68]/30 rounded-xs text-sm text-[#30231F]"
                  placeholder="+92 300 0000000 or [WHATSAPP NUMBER]"
                />
                <span className="text-[10px] text-[#9A8878] mt-1 block">
                  Used for instantaneous one-click appointment requests on WhatsApp.
                </span>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#9A8878] mb-1 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  value={config.email}
                  onChange={(e) => updateConfig({ email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#B79A68]/30 rounded-xs text-sm text-[#30231F]"
                  placeholder="[EMAIL ADDRESS]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#9A8878] mb-1 font-medium">
                  Opening Hours
                </label>
                <input
                  type="text"
                  value={config.openingHours}
                  onChange={(e) => updateConfig({ openingHours: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#B79A68]/30 rounded-xs text-sm text-[#30231F]"
                  placeholder="[OPENING HOURS]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#9A8878] mb-1 font-medium">
                  Instagram Profile Link
                </label>
                <input
                  type="text"
                  value={config.instagram}
                  onChange={(e) => updateConfig({ instagram: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#B79A68]/30 rounded-xs text-sm text-[#30231F]"
                  placeholder="https://instagram.com/..."
                />
              </div>
            </div>
          )}

          {activeTab === 'hero' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#9A8878] mb-1 font-medium">
                  Hero Eyebrow Label
                </label>
                <input
                  type="text"
                  value={config.hero.eyebrow}
                  onChange={(e) =>
                    updateConfig({ hero: { ...config.hero, eyebrow: e.target.value } })
                  }
                  className="w-full px-3.5 py-2.5 bg-white border border-[#B79A68]/30 rounded-xs text-sm text-[#30231F]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#9A8878] mb-1 font-medium">
                  Hero Headline
                </label>
                <input
                  type="text"
                  value={config.hero.title}
                  onChange={(e) =>
                    updateConfig({ hero: { ...config.hero, title: e.target.value } })
                  }
                  className="w-full px-3.5 py-2.5 bg-white border border-[#B79A68]/30 rounded-xs text-sm text-[#30231F]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#9A8878] mb-1 font-medium">
                  Hero Supporting Description
                </label>
                <textarea
                  rows={3}
                  value={config.hero.description}
                  onChange={(e) =>
                    updateConfig({ hero: { ...config.hero, description: e.target.value } })
                  }
                  className="w-full px-3.5 py-2.5 bg-white border border-[#B79A68]/30 rounded-xs text-sm text-[#30231F]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#9A8878] mb-1 font-medium">
                  Hero Bridal Portrait Image URL
                </label>
                <input
                  type="text"
                  value={config.hero.image}
                  onChange={(e) =>
                    updateConfig({ hero: { ...config.hero, image: e.target.value } })
                  }
                  className="w-full px-3.5 py-2.5 bg-white border border-[#B79A68]/30 rounded-xs text-sm text-[#30231F]"
                  placeholder="https://images.unsplash.com/..."
                />
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="space-y-5">
              <p className="text-xs text-[#9A8878]">
                Modify sample starting prices and durations for client quote presentation.
              </p>
              {config.services.slice(0, 4).map((service, index) => (
                <div
                  key={service.id}
                  className="p-3.5 bg-white border border-[#B79A68]/30 rounded-xs space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#30231F]">
                      {service.name}
                    </span>
                    <span className="text-[10px] text-[#B79A68] uppercase font-mono">
                      {service.category}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] text-[#9A8878] uppercase">Price</label>
                      <input
                        type="text"
                        value={service.price}
                        onChange={(e) => {
                          const updated = [...config.services];
                          updated[index] = { ...updated[index], price: e.target.value };
                          updateConfig({ services: updated });
                        }}
                        className="w-full px-2 py-1 bg-[#F8F5EF] text-xs border border-[#B79A68]/20"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-[#9A8878] uppercase">Duration</label>
                      <input
                        type="text"
                        value={service.duration}
                        onChange={(e) => {
                          const updated = [...config.services];
                          updated[index] = { ...updated[index], duration: e.target.value };
                          updateConfig({ services: updated });
                        }}
                        className="w-full px-2 py-1 bg-[#F8F5EF] text-xs border border-[#B79A68]/20"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'export' && (
            <div className="space-y-4">
              <p className="text-xs text-[#9A8878] leading-relaxed">
                Copy the configured salon parameters as clean JSON to pass directly to your salon client, or commit as their permanent preset.
              </p>
              <button
                onClick={handleCopyJSON}
                className="w-full py-3 bg-[#30231F] hover:bg-[#B79A68] text-white text-xs uppercase tracking-widest font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Salon JSON Config'}</span>
              </button>

              <div className="relative">
                <pre className="p-3 bg-[#30231F] text-[#E8DCCB] text-[11px] rounded-xs font-mono h-60 overflow-auto border border-[#B79A68]/30">
                  {JSON.stringify(config, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-4 bg-[#E8DCCB]/40 border-t border-[#B79A68]/30 flex items-center justify-between">
          <button
            onClick={() => resetConfig()}
            className="flex items-center gap-1.5 text-xs text-[#9A8878] hover:text-[#30231F] transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Defaults</span>
          </button>

          <button
            onClick={() => setIsCustomizerOpen(false)}
            className="px-5 py-2 bg-[#30231F] hover:bg-[#B79A68] text-white text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer shadow-xs"
          >
            Apply & Close
          </button>
        </div>
      </div>
    </div>
  );
};
