import { SalonConfig } from '../types/salon';

// Curated high-aesthetic images representing South Asian bridal elegance, jewellery, and high-end salon atmospheres
export const LUXURY_ASSETS = {
  heroBride: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1600&q=80",
  bridalSignature: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
  serviceBridal: "https://images.unsplash.com/photo-1583241800698-e8ab01c85b27?auto=format&fit=crop&w=1000&q=80",
  serviceParty: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80",
  serviceHair: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
  serviceFacial: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80",
  serviceNails: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1000&q=80",
  salonInterior: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=80",
  artistAtWork: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80",
  mehndiPhone: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=1000&q=80",
  jewelryDetail: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80",
  dupattaSetting: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1000&q=80",
  artist1: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  artist2: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
  artist3: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=800&q=80",
};

export const placeholderSalonConfig: SalonConfig = {
  salonName: "[SALON NAME]",
  tagline: "[TAGLINE]",
  logo: "",
  ownerName: "[OWNER NAME]",
  city: "[CITY]",
  address: "[ADDRESS]",
  phone: "[PHONE NUMBER]",
  whatsapp: "[WHATSAPP NUMBER]",
  email: "[EMAIL ADDRESS]",
  openingHours: "[OPENING HOURS]",
  instagram: "[INSTAGRAM URL]",
  facebook: "[FACEBOOK URL]",
  googleMapsUrl: "[GOOGLE MAPS URL]",
  bookingUrl: "[BOOKING URL]",
  theme: "luxury-bridal",
  currency: "PKR",
  announcementBar: {
    enabled: true,
    text: "Now accepting bookings for the 2026/2027 Pakistani wedding season · Early reservations recommended",
    linkText: "Reserve Date"
  },
  hero: {
    eyebrow: "WELCOME TO [SALON NAME]",
    title: "Beauty, Elevated to an Art.",
    subtitle: "Bespoke Bridal Artistry & Couture Aesthetics",
    description: "Discover a world of refined beauty, bespoke bridal artistry, and exceptional care crafted for your unforgettable moments.",
    image: LUXURY_ASSETS.heroBride,
    primaryButtonText: "Book Your Appointment",
    secondaryButtonText: "Discover Our World",
  },
  services: [
    {
      id: "srv-bridal-barat",
      name: "Signature Barat Bridal Makeup",
      category: "Bridal Makeup",
      description: "Comprehensive royal bridal glam featuring flawless long-wear HD base, intricate eye artistry, lashes, jewellery fixing, and dupatta draping.",
      price: "PKR 55,000",
      duration: "3.5 hours",
      image: LUXURY_ASSETS.serviceBridal,
      featured: true,
      inclusions: ["Custom HD Airbrush Base", "Kundan & Teeka Setting", "Dupatta Setting & Pinning", "Luxury Mink Lashes", "Touch-Up Kit"]
    },
    {
      id: "srv-bridal-walima",
      name: "Soft Glam Walima Bridal Makeup",
      category: "Bridal Makeup",
      description: "Ethereal, luminous pastel bridal aesthetic with gentle sculpting, soft smokey eye, and royal romantic hairstyling.",
      price: "PKR 50,000",
      duration: "3 hours",
      image: LUXURY_ASSETS.bridalSignature,
      featured: true,
      inclusions: ["Radiant Dewy Complexion", "Soft Editorial Eye Contour", "Matha Patti Setting", "Artisanal Hair Updo"]
    },
    {
      id: "srv-bridal-nikkah",
      name: "Timeless Nikkah & Engagement",
      category: "Bridal Makeup",
      description: "Understated classic elegance, natural radiant glow, defined eyes, and delicate floral hair styling tailored for day or evening Nikkah ceremonies.",
      price: "PKR 40,000",
      duration: "2.5 hours",
      image: LUXURY_ASSETS.dupattaSetting,
      featured: true,
      inclusions: ["Natural Luminous Finish", "Subtle Rose or Nude Lip", "Floral Hair Placement", "Dupatta Setting"]
    },
    {
      id: "srv-party-glam",
      name: "Signature Party & Formal Glam",
      category: "Party Makeup",
      description: "High-fashion party makeup tailored for sisters of the bride, close relatives, and black-tie wedding receptions.",
      price: "PKR 18,000",
      duration: "1.5 hours",
      image: LUXURY_ASSETS.serviceParty,
      featured: true,
      inclusions: ["Waterproof Flawless Base", "Custom Eye Look", "Quality Lashes Included", "Setting Spray Mist"]
    },
    {
      id: "srv-hair-styling",
      name: "Couture Hair Styling & Updos",
      category: "Hair Styling",
      description: "Architectural textured updos, Hollywood waves, traditional paranda braiding, or bridal front volume setting.",
      price: "PKR 12,000",
      duration: "60 mins",
      image: LUXURY_ASSETS.serviceHair,
      featured: true,
      inclusions: ["Volumizing Blowdry", "Heat Protection Shield", "Precision Hair Extension Placement", "Long-Wear Pins & Spray"]
    },
    {
      id: "srv-skin-hydrafacial",
      name: "Pre-Bridal 24K Gold Hydra-Facial",
      category: "Skin & Facials",
      description: "Deep medical-grade pore extraction, antioxidant hydration, gentle microdermabrasion, and 24K pure gold leaf collagen infusion for camera-ready luminescence.",
      price: "PKR 22,000",
      duration: "90 mins",
      image: LUXURY_ASSETS.serviceFacial,
      featured: true,
      inclusions: ["Hydro-Peel Extraction", "Oxygen Infusion", "Ultrasonic Collagen Tightening", "Gold Radiance Sheet Mask"]
    },
    {
      id: "srv-nails-luxury",
      name: "Bridal Couture Nails & Russian Manicure",
      category: "Nails",
      description: "Precision cuticle preparation, sculpted BIAB / gel extensions, delicate French tips, or bespoke Swarovski crystal embellishments.",
      price: "PKR 10,000",
      duration: "90 mins",
      image: LUXURY_ASSETS.serviceNails,
      featured: false,
      inclusions: ["Precision Cuticle Care", "Nail Extension / BIAB", "Gel Color Application", "Hand Nourishment Massage"]
    },
    {
      id: "srv-mehndi-ritual",
      name: "Bridal Ubtan & Body Polishing Ritual",
      category: "Mehndi & Pre-Bridal",
      description: "Traditional organic turmeric, sandalwood, and saffron bridal polish followed by aromatic lavender steam and full-body hydration.",
      price: "PKR 25,000",
      duration: "2 hours",
      image: LUXURY_ASSETS.mehndiPhone,
      featured: false,
      inclusions: ["Organic Saffron Ubtan Scrub", "Herb-Infused Steam", "Back & Shoulder Relaxation", "Rose Water Mist"]
    }
  ],
  bridalPackages: [
    {
      id: "pkg-barat-walima-duo",
      name: "The Imperial Barat & Walima Suite",
      subtitle: "The Ultimate Two-Day Wedding Experience",
      tagline: "Unrivaled beauty across your two most celebrated milestones",
      description: "Curated by Senior Bridal Artists. Includes full day-of coverage, jewellery fixing, premium mink lashes, touch-up kits, and complimentary pre-bridal skin assessment.",
      price: "PKR 98,000",
      originalPrice: "PKR 115,000",
      duration: "2 Days",
      image: LUXURY_ASSETS.heroBride,
      event: "Complete Suite",
      inclusions: [
        "Day 1: Full Barat Couture Bridal Makeup & Hair",
        "Day 2: Full Walima Luminous Soft Glam & Hair",
        "Dual Dupatta & Heavy Kundan Jewellery Setting",
        "Complimentary Pre-Bridal Skin Consultation",
        "Bridal Luxury Touch-Up Kit for the Evening",
        "Private VIP Bridal Dressing Suite Access"
      ],
      recommendedNotice: "Book 6 to 8 weeks in advance for peak wedding season"
    },
    {
      id: "pkg-royal-trio",
      name: "The Royal Bridal Trilogy (Mehndi, Barat, Walima)",
      subtitle: "Complete Three-Function Master Package",
      tagline: "Distinctive, unforgettable identities for each festive occasion",
      description: "Complete aesthetic transformation for your entire wedding journey. Fresh dewy Mehndi vibrancy, regal timeless Barat drama, and romantic ethereal Walima radiance.",
      price: "PKR 135,000",
      originalPrice: "PKR 160,000",
      duration: "3 Days",
      image: LUXURY_ASSETS.bridalSignature,
      event: "Complete Suite",
      inclusions: [
        "Day 1: Vibrant Floral Mehndi Glam & Braided Styling",
        "Day 2: Regal HD Airbrush Barat Makeup & Traditional Updo",
        "Day 3: Luminous Pastel Walima Glam & Romantic Waves",
        "Pre-Bridal Glow Facial & Full Russian Manicure",
        "Three Dedicated Artist Slots reserved exclusively for you",
        "Bridal Emergency Touch-Up Bag"
      ],
      recommendedNotice: "Limited to 2 bookings per wedding weekend"
    },
    {
      id: "pkg-pre-bridal-glow",
      name: "The 30-Day Pre-Bridal Wellness & Radiance",
      subtitle: "Skin, Hair & Body Holistic Preparation",
      tagline: "Because radiant makeup begins with immaculate skin health",
      description: "A month-long holistic regimen scheduled 4 weeks prior to your big day to ensure flawless natural glow, deeply hydrated skin, and lustrous hair texture.",
      price: "PKR 48,000",
      originalPrice: "PKR 58,000",
      duration: "4 Weeks",
      image: LUXURY_ASSETS.serviceFacial,
      event: "Pre-Bridal",
      inclusions: [
        "2x Medical-Grade Hydra-Glow Facials",
        "Full Organic Herbal Ubtan & Body Polish",
        "Deep Nourishing Hair Spa & Keratin Infusion",
        "Full Body Waxing & Precision Threading",
        "Deluxe Pedicure & Russian Manicure Treatment"
      ],
      recommendedNotice: "Start 4 weeks prior to Mehndi"
    }
  ],
  gallery: [
    {
      id: "gal-1",
      title: "Royal Crimson Barat Bride",
      category: "Bridal Makeup",
      image: LUXURY_ASSETS.heroBride,
      caption: "High-definition velvet base paired with sculpted traditional eyes and hand-set matha patti.",
      tags: ["Barat", "Traditional", "HD Makeup"]
    },
    {
      id: "gal-2",
      title: "Champagne Pastel Walima Look",
      category: "Bridal Makeup",
      image: LUXURY_ASSETS.bridalSignature,
      caption: "Ethereal luminous soft glam tailored for soft gold and silver bridal ensembles.",
      tags: ["Walima", "Soft Glam", "Dewy"]
    },
    {
      id: "gal-3",
      title: "Mehndi Floral Braid & Glow",
      category: "Hair Styling",
      image: LUXURY_ASSETS.mehndiPhone,
      caption: "Textured bridal braid entwined with fresh baby's breath and heirloom paranda.",
      tags: ["Mehndi", "Hairstyling", "Floral"]
    },
    {
      id: "gal-4",
      title: "The Atelier Reception & Bridal Suite",
      category: "Studio Interior",
      image: LUXURY_ASSETS.salonInterior,
      caption: "Private vanity suites designed for bride comfort, tea service, and calm preparation.",
      tags: ["Interior", "Private Suite", "Luxury"]
    },
    {
      id: "gal-5",
      title: "Editorial Evening Reception Glam",
      category: "Party Makeup",
      image: LUXURY_ASSETS.serviceParty,
      caption: "Dramatic smokey bronze eye contour with velvet nude lips for wedding guests.",
      tags: ["Party Makeup", "Smokey Eye", "Formal"]
    },
    {
      id: "gal-6",
      title: "Bridal Jewellery Setting Precision",
      category: "Bridal Makeup",
      image: LUXURY_ASSETS.jewelryDetail,
      caption: "Every necklace, jhumka, and nose ring pinned with surgical precision for painless wear.",
      tags: ["Jewellery", "Kundan", "Artistry"]
    }
  ],
  artists: [
    {
      id: "art-1",
      name: "[TEAM MEMBER NAME]",
      role: "Creative Director & Lead Bridal Artist",
      specialty: "High-Fashion Pakistani Bridal Makeup & Sculpting",
      experience: "12+ Years Industry Experience",
      bio: "Trained across London and Dubai, specializing in signature South Asian bridal beauty that balances timeless royal heritage with camera-ready modern refinement.",
      image: LUXURY_ASSETS.artist1,
      signatureLooks: ["Barat Royal Traditional", "Walima High-Glow", "Bespoke Airbrush Finish"],
      instagramHandle: "@[SALON_INSTAGRAM]"
    },
    {
      id: "art-2",
      name: "[TEAM MEMBER NAME]",
      role: "Senior Hair Artisan & Dupatta Stylist",
      specialty: "Couture Updos, Hollywood Waves & Matha Patti Setting",
      experience: "8+ Years Industry Experience",
      bio: "Renowned for architectural hair artistry that withstands 12+ hours of festivities while feeling weightless and comfortable for the bride.",
      image: LUXURY_ASSETS.artist2,
      signatureLooks: ["Structured Bridal Bun", "Soft Romantic Texture", "Heirloom Dupatta Draping"],
      instagramHandle: "@[SALON_INSTAGRAM]"
    },
    {
      id: "art-3",
      name: "[TEAM MEMBER NAME]",
      role: "Master Clinical Aesthetician",
      specialty: "Pre-Bridal Dermatology, Hydra-Facials & Skin Rejuvenation",
      experience: "7+ Years Industry Experience",
      bio: "Dedicated to preparing brides' skin barrier weeks ahead so foundation sits effortlessly without caking or creasing on camera.",
      image: LUXURY_ASSETS.artist3,
      signatureLooks: ["24K Gold Hydra-Facial", "Deep Radiance Peel", "Barrier Restoration"],
      instagramHandle: "@[SALON_INSTAGRAM]"
    }
  ],
  testimonials: [
    {
      id: "test-1",
      clientName: "[CLIENT NAME]",
      event: "Barat Bride",
      city: "[CITY]",
      quote: "My makeup lasted through tears, hours of photography, and heavy lighting without a single creased line. The dupatta setting was completely weightless. Truly the best decision of my wedding.",
      isSamplePlaceholder: true
    },
    {
      id: "test-2",
      clientName: "[CLIENT NAME]",
      event: "Walima Bride",
      city: "[CITY]",
      quote: "From the pre-bridal HydraFacial to the delicate pastel soft glam, I felt like royalty. The private bridal suite gave my mother and me such a peaceful sanctuary on a chaotic day.",
      isSamplePlaceholder: true
    },
    {
      id: "test-3",
      clientName: "[CLIENT NAME]",
      event: "Sister of the Bride",
      city: "[CITY]",
      quote: "Party makeup that looks airbrushed and refined without looking overdone. Everyone at the reception kept asking which salon we went to.",
      isSamplePlaceholder: true
    }
  ],
  branches: [
    {
      id: "branch-1",
      name: "Flagship Bridal Studio",
      address: "[ADDRESS]",
      city: "[CITY]",
      phone: "[PHONE NUMBER]",
      whatsapp: "[WHATSAPP NUMBER]",
      hours: "Tuesday – Sunday: 11:00 AM – 8:00 PM (Mondays by prior bridal appointment)",
      googleMapsUrl: "[GOOGLE MAPS URL]",
      isMain: true
    }
  ],
  faqs: [
    {
      id: "faq-1",
      question: "How far in advance should I book my bridal makeup?",
      answer: "We strongly advise booking 2 to 3 months in advance for peak Pakistani wedding months (October through March). Dates for peak Friday and Sunday Barat/Walima events fill rapidly.",
      category: "Bridal Bookings"
    },
    {
      id: "faq-2",
      question: "Do you provide bridal dupatta setting and jewellery fixing?",
      answer: "Yes, every bridal package includes professional dupatta draping, safety pinning, teeka/matha patti placement, and nath fixing to ensure secure comfort throughout your celebration.",
      category: "Bridal Bookings"
    },
    {
      id: "faq-3",
      question: "Are pre-bridal consultations or makeup trials available?",
      answer: "Yes, we offer in-depth 30-minute bridal consultations where we inspect your outfit swatches, jewellery pieces, and skin type to design your personalized bespoke look.",
      category: "Services & Products"
    },
    {
      id: "faq-4",
      question: "What is your booking deposit and cancellation policy?",
      answer: "A 50% non-refundable booking advance is required to secure your appointment slot on our calendar. The remaining balance is payable on the day of service upon arrival.",
      category: "Studio Policies"
    },
    {
      id: "faq-5",
      question: "Do you offer on-venue or destination bridal services?",
      answer: "Venue visits can be arranged for bridal parties upon special request with travel and accommodation arrangements managed separately. Contact our concierge via WhatsApp for destination packages.",
      category: "Services & Products"
    }
  ],
  policies: {
    cancellation: "DRAFT POLICY (Require Salon Owner Approval): Bridal deposits are non-refundable upon cancellation as the studio reserves exclusive artist slots and turns away other prospective brides. Rescheduling is subject to calendar availability with minimum 14 days prior notice.",
    privacy: "DRAFT POLICY: [SALON NAME] respects client confidentiality. Client photography taken during sessions will only be shared on promotional lookbooks or social platforms with prior verbal or written consent.",
    terms: "DRAFT POLICY: Services must commence at the scheduled booking time. Brides arriving later than 45 minutes past appointment time may experience adjustments to styling sequence to protect subsequent bride timelines.",
    isDraft: true
  },
  booking: {
    whatsappEnabled: true,
    backendEnabled: false,
    depositRequiredNotice: "Note: A 50% advance deposit is required to confirm your bridal slot after inquiry confirmation."
  }
};

// Demo configuration to showcase a real-world high-end Pakistani salon setup
export const demoSalonConfig: SalonConfig = {
  ...placeholderSalonConfig,
  salonName: "Zehra Bridal Atelier",
  tagline: "Haute Bridal Artistry & Couture Aesthetics",
  ownerName: "Zehra Batool",
  city: "Lahore",
  address: "Plot 14-B, Block K, MM Alam Road, Gulberg III",
  phone: "+92 42 3578 9200",
  whatsapp: "+92 300 8472910",
  email: "concierge@zehrabridalatelier.pk",
  openingHours: "Tuesday to Sunday: 11:00 AM – 8:30 PM (Closed Mondays)",
  instagram: "https://instagram.com/zehrabridalatelier",
  facebook: "https://facebook.com/zehrabridalatelier",
  googleMapsUrl: "https://maps.google.com/?q=Gulberg+III+Lahore",
  bookingUrl: "#book",
  hero: {
    ...placeholderSalonConfig.hero,
    eyebrow: "WELCOME TO ZEHRA BRIDAL ATELIER",
    title: "Beauty, Elevated to an Art.",
    subtitle: "Lahore's Premier Sanctuary for South Asian Bridal Splendor",
    description: "Discover a world of refined beauty, bespoke bridal artistry, and exceptional care crafted around your most unforgettable celebrations.",
  },
  branches: [
    {
      id: "branch-gulberg",
      name: "Gulberg Flagship Atelier",
      address: "Plot 14-B, Block K, MM Alam Road, Gulberg III",
      city: "Lahore",
      phone: "+92 42 3578 9200",
      whatsapp: "+92 300 8472910",
      hours: "Tue – Sun: 11:00 AM – 8:30 PM",
      googleMapsUrl: "https://maps.google.com/?q=Gulberg+III+Lahore",
      isMain: true
    },
    {
      id: "branch-dha",
      name: "DHA Phase 5 Boutique Lounge",
      address: "Building 42-C, Commercial Broadway, DHA Phase 5",
      city: "Lahore",
      phone: "+92 42 3718 4400",
      whatsapp: "+92 321 9928400",
      hours: "Tue – Sun: 11:30 AM – 8:00 PM",
      googleMapsUrl: "https://maps.google.com/?q=DHA+Phase+5+Lahore",
      isMain: false
    }
  ],
  artists: [
    {
      ...placeholderSalonConfig.artists[0],
      name: "Zehra Batool",
      instagramHandle: "@zehra.artistry"
    },
    {
      ...placeholderSalonConfig.artists[1],
      name: "Maryam Tariq",
      instagramHandle: "@maryam.haircouture"
    },
    {
      ...placeholderSalonConfig.artists[2],
      name: "Dr. Ayesha Malik",
      instagramHandle: "@drayesha.aesthetics"
    }
  ],
  testimonials: [
    {
      id: "test-1",
      clientName: "Mahnoor Khan",
      event: "Barat Bride",
      city: "Lahore",
      quote: "My makeup lasted through tears, 6 hours of heavy camera flashes, and non-stop greetings without budging. The dupatta setting was completely weightless. Truly the best decision of my wedding.",
      isSamplePlaceholder: false
    },
    {
      id: "test-2",
      clientName: "Fatima Aslam",
      event: "Walima Bride",
      city: "Islamabad",
      quote: "From the pre-bridal HydraFacial to the luminous pastel glam, I felt like royalty. The private bridal suite gave my mother and me such a peaceful sanctuary on a chaotic day.",
      isSamplePlaceholder: false
    },
    {
      id: "test-3",
      clientName: "Rameen Zaidi",
      event: "Sister of the Bride",
      city: "Karachi",
      quote: "Party makeup that looks like an editorial magazine shoot without feeling cakey or masked. Everyone at the reception kept inquiring about the artist.",
      isSamplePlaceholder: false
    }
  ]
};
