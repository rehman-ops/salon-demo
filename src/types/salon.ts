export type DisplayMode = 'placeholder' | 'demo';

export interface HeroConfig {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string; // e.g. "PKR 45,000" or "[SERVICE PRICE]"
  duration: string; // e.g. "120 mins" or "[SERVICE DURATION]"
  image: string;
  featured?: boolean;
  inclusions?: string[];
}

export interface BridalPackage {
  id: string;
  name: string; // e.g. "The Royal Barat Signature" or "[PACKAGE NAME]"
  subtitle: string;
  tagline: string;
  description: string;
  price: string;
  originalPrice?: string;
  duration?: string;
  image: string;
  event: 'Barat' | 'Walima' | 'Mehndi' | 'Nikkah' | 'Engagement' | 'Pre-Bridal' | 'Complete Suite';
  inclusions: string[];
  recommendedNotice?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Bridal Makeup' | 'Party Makeup' | 'Hair Styling' | 'Skin & Glow' | 'Studio Interior';
  image: string;
  caption: string;
  tags?: string[];
}

export interface Artist {
  id: string;
  name: string; // e.g. "[TEAM MEMBER NAME]" or "Zehra Batool"
  role: string; // e.g. "Creative Director & Bridal Specialist"
  specialty: string;
  experience: string;
  bio: string;
  image: string;
  signatureLooks: string[];
  instagramHandle?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  event: string; // e.g. "Barat Bride", "Walima Bride", "Engagement Client"
  city: string;
  quote: string;
  isSamplePlaceholder: boolean; // clearly identifies placeholder/demo status
}

export interface Branch {
  id: string;
  name: string; // e.g. "Gulberg Studio (Flagship)" or "[BRANCH 1]"
  address: string;
  city: string;
  phone: string;
  whatsapp: string;
  hours: string;
  googleMapsUrl?: string;
  isMain?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Bridal Bookings' | 'Services & Products' | 'Studio Policies';
}

export interface PoliciesConfig {
  cancellation: string;
  privacy: string;
  terms: string;
  isDraft: boolean;
}

export interface SalonConfig {
  salonName: string;
  tagline: string;
  logo: string;
  ownerName: string;
  city: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  openingHours: string;
  instagram: string;
  facebook: string;
  googleMapsUrl: string;
  bookingUrl: string;
  theme: string;
  currency: string;
  announcementBar: {
    enabled: boolean;
    text: string;
    linkText?: string;
  };
  hero: HeroConfig;
  services: ServiceItem[];
  bridalPackages: BridalPackage[];
  gallery: GalleryItem[];
  artists: Artist[];
  testimonials: Testimonial[];
  branches: Branch[];
  faqs: FAQItem[];
  policies: PoliciesConfig;
  booking: {
    whatsappEnabled: boolean;
    backendEnabled: boolean;
    depositRequiredNotice: string;
  };
}

export interface AppointmentRequest {
  fullName: string;
  phone: string;
  email?: string;
  serviceId: string;
  serviceName: string;
  eventType: string;
  preferredDate: string;
  preferredTime: string;
  artistPreference: string;
  branch: string;
  notes: string;
}
