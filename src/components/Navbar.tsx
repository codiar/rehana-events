import React, { useState } from 'react';
import { Menu, X, MessageCircle, Phone, Calendar, Sparkles, MapPin, Image } from 'lucide-react';
import { RehanaLogo } from './Logos';
import { businessInfo } from '../data/hallData';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenInvoiceCart: () => void;
  selectedAddonsCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenInvoiceCart,
  selectedAddonsCount = 0
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(`مرحباً قاعة ريحانة للمناسبات، أود الاستفسار عن حجز موعد ومعاينة القاعة.`);
    window.open(`https://wa.me/${businessInfo.whatsappNumberInternational}?text=${text}`, '_blank');
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Zone 1: Navigation icons (Hamburger + WhatsApp quick button) */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-slate-800 hover:text-[#C99738] hover:bg-stone-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C99738]"
                aria-label="القائمة الرئيسية"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="p-2.5 rounded-full text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xs hover:scale-105 active:scale-95"
                title="مراسلة عبر واتساب"
                aria-label="تواصل عبر واتساب"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
              </button>

              {/* Desktop Nav Links */}
              <nav className="hidden md:flex items-center gap-6 mr-4 text-sm font-semibold text-slate-700">
                <a href="#hero" className="hover:text-[#C99738] transition-colors py-1">الرئيسية</a>
                <a href="#packages" className="hover:text-[#C99738] transition-colors py-1">الباقات والخدمات</a>
                <a href="#gallery" className="hover:text-[#C99738] transition-colors py-1">معرض الصور</a>
                <a href="#booking" className="hover:text-[#C99738] transition-colors py-1">حجز موعد</a>
                <a href="#location" className="hover:text-[#C99738] transition-colors py-1">الموقع والاتصال</a>
              </nav>
            </div>

            {/* Zone 2: Centered Brand Logo */}
            <div className="flex items-center justify-center">
              <a href="#hero" className="inline-block transition-transform hover:scale-102">
                <RehanaLogo className="h-12 sm:h-14" />
              </a>
            </div>

            {/* Zone 3: Primary Action (Book Now button + Invoice Quote Button) */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Custom Quote / Invoice Cart button */}
              <button
                type="button"
                onClick={onOpenInvoiceCart}
                className="relative hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-lg transition-colors"
                title="إصدار فاتورة الحجز المخصصة"
              >
                <Sparkles className="w-4 h-4 text-[#C99738]" />
                <span>فاتورة الحجز</span>
                {selectedAddonsCount > 0 && (
                  <span className="w-4 h-4 text-[10px] font-bold text-white bg-[#C99738] rounded-full inline-flex items-center justify-center">
                    {selectedAddonsCount}
                  </span>
                )}
              </button>

              {/* Book Now button */}
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-stone-50 border-2 border-slate-900 rounded-lg shadow-2xs hover:shadow-xs transition-all active:scale-95 whitespace-nowrap"
              >
                احجز الآن
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Slide-out Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 border-l border-stone-200">
            {/* Drawer Header */}
            <div className="p-6 border-b border-stone-100 flex items-center justify-between bg-stone-50/60">
              <RehanaLogo className="h-10" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-lg"
                aria-label="إغلاق القائمة"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Links */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              <div className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
                أقسام الموقع
              </div>
              <a
                href="#hero"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-800 font-semibold hover:bg-stone-100 transition-colors"
              >
                <Sparkles className="w-5 h-5 text-[#C99738]" />
                <span>الرئيسية</span>
              </a>
              <a
                href="#packages"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-800 font-semibold hover:bg-stone-100 transition-colors"
              >
                <Calendar className="w-5 h-5 text-[#C99738]" />
                <span>الباقات والخدمات</span>
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-800 font-semibold hover:bg-stone-100 transition-colors"
              >
                <Image className="w-5 h-5 text-[#C99738]" />
                <span>معرض الصور والأجواء</span>
              </a>
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-800 font-semibold hover:bg-stone-100 transition-colors"
              >
                <Phone className="w-5 h-5 text-[#C99738]" />
                <span>طلب استفسار أو حجز</span>
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-800 font-semibold hover:bg-stone-100 transition-colors"
              >
                <MapPin className="w-5 h-5 text-[#C99738]" />
                <span>الموقع على الخريطة</span>
              </a>

              <div className="pt-4 border-t border-stone-200">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInvoiceCart();
                  }}
                  className="w-full flex items-center justify-center gap-2 p-3 text-sm font-bold text-slate-900 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-[#C99738]" />
                  <span>إصدار فاتورة حجز تفصيلية</span>
                </button>
              </div>
            </div>

            {/* Quick Contact Footer in Drawer */}
            <div className="p-6 bg-stone-50 border-t border-stone-100 space-y-3">
              <div className="text-xs text-slate-500 text-center">
                كربلاء - بين سيد جودة وفلكة المحافظة
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleWhatsAppClick}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>واتساب</span>
                </button>
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>اتصال مباشر</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
