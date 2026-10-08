import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PackagesSection } from './components/PackagesSection';
import { BookingFormSection } from './components/BookingFormSection';
import { LocationSection } from './components/LocationSection';
import { GallerySection } from './components/GallerySection';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';
import { InvoiceModal } from './components/InvoiceModal';
import { PackageDetailsModal } from './components/PackageDetailsModal';
import { PackageItem, businessInfo } from './data/hallData';
import { MessageCircle, PhoneCall, Sparkles } from 'lucide-react';

export default function App() {
  const [isInvoiceOpen, setIsInvoiceOpen] = useState(false);
  const [selectedPackageForDetails, setSelectedPackageForDetails] = useState<PackageItem | null>(null);
  const [initialPackageForInvoice, setInitialPackageForInvoice] = useState<PackageItem | null>(null);
  const [activeBottomTab, setActiveBottomTab] = useState<'home' | 'packages' | 'gallery' | 'contact'>('home');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Monitor scroll to update active bottom nav tab
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const heroEl = document.getElementById('hero');
      const packagesEl = document.getElementById('packages');
      const galleryEl = document.getElementById('gallery');
      const locationEl = document.getElementById('location');

      if (locationEl && scrollPosition >= locationEl.offsetTop) {
        setActiveBottomTab('contact');
      } else if (galleryEl && scrollPosition >= galleryEl.offsetTop) {
        setActiveBottomTab('gallery');
      } else if (packagesEl && scrollPosition >= packagesEl.offsetTop) {
        setActiveBottomTab('packages');
      } else {
        setActiveBottomTab('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleOpenBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExplorePackages = () => {
    const packagesSection = document.getElementById('packages');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenGallery = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (pkg: PackageItem) => {
    setSelectedPackageForDetails(pkg);
  };

  const handleBookFromModal = (pkg: PackageItem) => {
    setInitialPackageForInvoice(pkg);
    setIsInvoiceOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#101C31] flex flex-col font-sans selection:bg-[#C99738]/20 selection:text-[#101C31]">
      
      {/* Top Navigation Bar */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenInvoiceCart={() => {
          setInitialPackageForInvoice(null);
          setIsInvoiceOpen(true);
        }}
        selectedAddonsCount={0}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onExplorePackages={handleExplorePackages}
        />

        {/* Why Choose Rehana Section & Hall Decor Spotlight */}
        <WhyChooseUs onOpenGallery={handleOpenGallery} />

        {/* Packages & Digital Menu Section */}
        <PackagesSection
          onSelectPackage={handleSelectPackage}
          onOpenCustomBuilder={() => {
            setInitialPackageForInvoice(null);
            setIsInvoiceOpen(true);
          }}
        />

        {/* Photo Gallery & Atmosphere */}
        <GallerySection />

        {/* Booking & Consultation Section */}
        <BookingFormSection onSuccessMessage={showToast} />

        {/* Interactive Location & Google Maps Section */}
        <LocationSection />
      </main>

      {/* Footer with Codiar Tech Credit */}
      <Footer />

      {/* Mobile Sticky Bottom Navigation */}
      <BottomNav
        activeTab={activeBottomTab}
        onTabChange={(tab) => setActiveBottomTab(tab)}
      />

      {/* Floating Fast WhatsApp Action for instant mobile conversion */}
      <aside aria-label="أزرار التواصل السريع" className="fixed bottom-20 left-4 z-30 hidden sm:flex flex-col gap-2.5">
        <button
          type="button"
          onClick={() => {
            setInitialPackageForInvoice(null);
            setIsInvoiceOpen(true);
          }}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-slate-900 text-amber-300 border border-[#C99738]/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all text-xs font-bold"
          title="إصدار فاتورة حجز فورية"
        >
          <Sparkles className="w-4 h-4 text-[#C99738]" />
          <span>فاتورة الحجز</span>
        </button>

        <a
          href={`https://wa.me/${businessInfo.whatsappNumberInternational}?text=${encodeURIComponent('مرحباً قاعة ريحانة للمناسبات، أود الاستفسار عن تفاصيل الحجز.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:scale-110 active:scale-95 transition-all"
          title="تواصل مباشر عبر واتساب"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
        </a>
      </aside>

      {/* Interactive Package Details Modal */}
      <PackageDetailsModal
        packageItem={selectedPackageForDetails}
        onClose={() => setSelectedPackageForDetails(null)}
        onBookPackage={handleBookFromModal}
      />

      {/* Interactive Invoice Generator / Order Cart Modal */}
      <InvoiceModal
        isOpen={isInvoiceOpen}
        onClose={() => setIsInvoiceOpen(false)}
        initialPackage={initialPackageForInvoice}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-2xl bg-slate-900/95 text-white text-xs sm:text-sm font-bold shadow-2xl border border-[#C99738]/40 animate-fade-in backdrop-blur-md">
          {toastMessage}
        </div>
      )}

    </div>
  );
}
