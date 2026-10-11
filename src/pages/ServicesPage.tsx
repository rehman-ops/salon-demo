import React, { useState, useMemo } from 'react';
import { useSalon } from '../context/SalonContext';
import { SafeImage } from '../components/SafeImage';
import { Search, Calendar, Clock, Sparkles, Check, ArrowRight } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { config, navigateToBookingWithService } = useSalon();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Bridal Makeup',
    'Party Makeup',
    'Hair Styling',
    'Skin & Facials',
    'Nails',
    'Mehndi & Pre-Bridal',
    'Brows & Lashes',
    'Hair Treatments',
    'Spa Rituals',
  ];

  // Extended service menu catalog typical of Pakistani salons
  const allServices = useMemo(() => {
    return [
      ...config.services,
      {
        id: "srv-ext-engagement",
        name: "Engagement & Baat Pakki Glam",
        category: "Bridal Makeup",
        description: "Fresh, luminous makeup with gentle eye shimmer, soft pink lips, and romantic textured curls for day or evening engagement celebrations.",
        price: "PKR 35,000",
        duration: "2.5 hours",
        image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80",
        featured: false,
        inclusions: ["Luminous HD Base", "Gentle Contouring", "Mink Lashes", "Hair Styling"]
      },
      {
        id: "srv-ext-balayage",
        name: "Couture Balayage & Glossing",
        category: "Hair Styling",
        description: "Hand-painted seamless dimension customized to complement South Asian skin undertones with gloss glaze and deep conditioning.",
        price: "PKR 28,000",
        duration: "3.5 hours",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
        featured: false,
        inclusions: ["Olaplex Bond Protection", "Custom Color Toner", "Blowout & Style"]
      },
      {
        id: "srv-ext-keratin",
        name: "Organic Keratin & Botox Hair Treatment",
        category: "Hair Treatments",
        description: "Zero-frizz, mirror-shine smoothing therapy that restores damaged hair follicles without harsh chemicals, lasting up to 5 months.",
        price: "PKR 32,000",
        duration: "3 hours",
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
        featured: false,
        inclusions: ["Deep Cleansing Wash", "Nano-Infusion Keratin", "Heat Sealing & Trim"]
      },
      {
        id: "srv-ext-dermaplaning",
        name: "Dermaplaning & Glass Skin Facial",
        category: "Skin & Facials",
        description: "Gentle surgical-blade exfoliation to remove peach fuzz and dead skin cells, followed by hyaluronic acid ultrasound infusion for flawless foundation adherence.",
        price: "PKR 16,000",
        duration: "60 mins",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
        featured: false,
        inclusions: ["Precision Dermaplaning", "Hyaluronic Ultrasonic Massage", "Cold Hammer Soothing"]
      },
      {
        id: "srv-ext-lashes",
        name: "Semi-Permanent Russian Volume Lashes",
        category: "Brows & Lashes",
        description: "Handcrafted featherlight lash fans tailored to open the eyes with weightless, camera-ready volume that lasts 4 to 6 weeks.",
        price: "PKR 14,000",
        duration: "90 mins",
        image: "https://images.unsplash.com/photo-1583241800698-e8ab01c85b27?auto=format&fit=crop&w=800&q=80",
        featured: false,
        inclusions: ["Full Custom Mapping", "Medical-Grade Adhesive", "Complimentary Spoolie"]
      },
      {
        id: "srv-ext-spa-hammam",
        name: "Moroccan Hammam & Royal Body Scrub",
        category: "Spa Rituals",
        description: "Traditional warm eucalyptus steam, black olive soap application, authentic Kessa glove exfoliation, and argan oil moisturizing massage.",
        price: "PKR 26,000",
        duration: "90 mins",
        image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80",
        featured: false,
        inclusions: ["Eucalyptus Steam Chamber", "Black Soap Wrap", "Kessa Exfoliation", "Argan Oil Hydration"]
      }
    ];
  }, [config.services]);

  const filteredServices = useMemo(() => {
    return allServices.filter((srv) => {
      const matchesCategory =
        selectedCategory === 'All' || srv.category === selectedCategory;
      const matchesSearch =
        srv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        srv.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        srv.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [allServices, selectedCategory, searchQuery]);

  return (
    <div className="w-full bg-[#F8F5EF] text-[#30231F] min-h-screen">
      {/* Services Header */}
      <section className="py-20 lg:py-24 border-b border-[#B79A68]/20 bg-[#E8DCCB]/20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#B79A68] font-medium font-sans block">
            Bespoke Price List & Offerings
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#30231F] font-normal">
            The Atelier Service Menu
          </h1>
          <p className="text-sm md:text-base text-[#9A8878] max-w-2xl mx-auto font-light leading-relaxed">
            All prices are quoted in {config.currency} and include sterile prep, premium dermatological cosmetics, and master artist supervision.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-[69px] z-30 bg-[#F8F5EF]/95 backdrop-blur-md border-b border-[#B79A68]/20 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Filter Pill Bar */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar w-full md:w-auto py-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xs text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#30231F] text-white shadow-xs'
                      : 'bg-[#FFFFFF] border border-[#B79A68]/30 text-[#9A8878] hover:text-[#30231F]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search className="w-4 h-4 text-[#9A8878] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 bg-white border border-[#B79A68]/30 text-xs rounded-xs text-[#30231F] placeholder:text-[#9A8878]/70 focus:outline-hidden focus:border-[#B79A68]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredServices.length === 0 ? (
          <div className="text-center py-20 bg-white border border-[#B79A68]/20 p-8 space-y-4">
            <Sparkles className="w-8 h-8 text-[#B79A68] mx-auto opacity-70" />
            <h3 className="font-serif text-2xl text-[#30231F]">No Services Found</h3>
            <p className="text-xs text-[#9A8878]">
              No services matched your search term "{searchQuery}". Try selecting another category or resetting the filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-6 py-2 bg-[#30231F] text-white text-xs uppercase tracking-wider font-medium cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group flex flex-col justify-between bg-white border border-[#B79A68]/20 hover:border-[#B79A68] transition-all duration-300 shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <SafeImage
                      src={service.image}
                      alt={service.name}
                      aspectRatioClass="aspect-[16/10]"
                      fallbackTitle={service.name}
                      fallbackCategory={service.category}
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-3 left-3 bg-[#30231F]/80 backdrop-blur-xs text-[#E8DCCB] text-[10px] uppercase tracking-widest px-2 py-0.5 font-sans">
                      {service.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-baseline justify-between gap-2 border-b border-[#30231F]/5 pb-2">
                      <span className="font-serif text-xl font-medium text-[#30231F] group-hover:text-[#B79A68] transition-colors">
                        {service.name}
                      </span>
                      <span className="font-mono text-sm font-semibold text-[#30231F] shrink-0">
                        {service.price}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-[#9A8878] font-mono">
                      <Clock className="w-3.5 h-3.5 text-[#B79A68]" />
                      <span>{service.duration}</span>
                    </div>

                    <p className="text-xs text-[#30231F]/80 leading-relaxed font-light">
                      {service.description}
                    </p>

                    {service.inclusions && service.inclusions.length > 0 && (
                      <div className="pt-2 space-y-1.5 border-t border-[#30231F]/5">
                        <span className="text-[10px] uppercase tracking-wider text-[#9A8878] font-medium block">
                          Included in Service:
                        </span>
                        {service.inclusions.slice(0, 3).map((inc, i) => (
                          <div key={i} className="flex items-center gap-2 text-[11px] text-[#30231F]/70">
                            <span className="w-1 h-1 rounded-full bg-[#B79A68]"></span>
                            <span>{inc}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => navigateToBookingWithService(service.name)}
                    className="w-full py-2.5 bg-[#F8F5EF] hover:bg-[#30231F] hover:text-white text-[#30231F] border border-[#B79A68]/30 text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer flex items-center justify-center gap-1.5 group/btn"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#B79A68] group-hover/btn:text-white" />
                    <span>Book This Service</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Bridal Consultation Callout Banner */}
      <section className="py-16 bg-[#E8DCCB]/30 border-t border-[#B79A68]/20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="font-serif text-2xl md:text-3xl text-[#30231F]">
            Uncertain Which Services Best Suit Your Celebration?
          </h3>
          <p className="text-xs md:text-sm text-[#9A8878] max-w-xl mx-auto font-light leading-relaxed">
            Schedule a 30-minute bridal skin & beauty consultation with our Lead Aesthetician to design a personalized pre-bridal regimen.
          </p>
          <button
            onClick={() => navigateToBookingWithService('Bespoke Bridal Consultation')}
            className="px-8 py-3 bg-[#30231F] hover:bg-[#B79A68] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors shadow-xs cursor-pointer inline-flex items-center gap-2"
          >
            <span>Book Consultation Session</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
};
