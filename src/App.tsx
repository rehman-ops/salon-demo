/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SalonProvider, useSalon } from './context/SalonContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TemplateCustomizer } from './components/TemplateCustomizer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { BridalPage } from './pages/BridalPage';
import { GalleryPage } from './pages/GalleryPage';
import { ArtistsPage } from './pages/ArtistsPage';
import { BookingPage } from './pages/BookingPage';
import { ContactPage } from './pages/ContactPage';
import { FAQAndPoliciesPage } from './pages/FAQAndPoliciesPage';

const AppContent: React.FC = () => {
  const { activePage } = useSalon();

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'bridal':
        return <BridalPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'artists':
        return <ArtistsPage />;
      case 'book':
        return <BookingPage />;
      case 'contact':
        return <ContactPage />;
      case 'faqs-policies':
        return <FAQAndPoliciesPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F5EF] text-[#30231F] font-sans antialiased selection:bg-[#B79A68]/20 selection:text-[#30231F]">
      <Header />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
      <TemplateCustomizer />
    </div>
  );
};

export default function App() {
  return (
    <SalonProvider>
      <AppContent />
    </SalonProvider>
  );
}
