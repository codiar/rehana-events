import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink, Compass, Car, Check } from 'lucide-react';
import { businessInfo } from '../data/hallData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleOpenMaps = () => {
    window.open(businessInfo.googleMapsUrl, '_blank');
  };

  const handleCopyAddress = () => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(businessInfo.address).then(() => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2500);
      }).catch(() => window.prompt('انسخ العنوان:', businessInfo.address));
    } else {
      window.prompt('انسخ العنوان:', businessInfo.address);
    }
  };

  return (
    <section id="location" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#101C31] tracking-tight mb-2 font-serif">
            موقعنا على الخريطة
          </h2>
          <p className="text-stone-600 text-xs sm:text-base leading-relaxed">
            موقع استراتيجي وسهل الوصول لجميع ضيوفكم من داخل كربلاء والمحافظات
          </p>
        </div>

        {/* Location Card & Map Preview Container  */}
        <div className="max-w-4xl mx-auto bg-stone-50 rounded-3xl p-4 sm:p-8 border border-stone-200 shadow-md">
          
          {/* Google Maps search preview: this is a search-based location, not a verified pin */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-stone-300 bg-stone-100 mb-6">
            <iframe
              title="خريطة البحث عن قاعة ريحانة في كربلاء"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(businessInfo.address + ', كربلاء، العراق')}&output=embed`}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="absolute bottom-3 right-3 left-3 rounded-xl bg-white/95 px-3 py-2 text-xs text-stone-700 shadow">
              الخريطة تعرض نتائج البحث عن العنوان؛ يرجى تأكيد موقع الدبوس مع إدارة القاعة قبل الاعتماد عليه.
            </div>
          </div>

          {/* Location Summary and Open in Google Maps button (Matching Image 3) */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="text-right w-full sm:w-auto">
              <div className="text-xs font-bold text-stone-400 mb-1">
                نقطة دالة مميزة
              </div>
              <div className="text-xs sm:text-sm font-semibold text-stone-800">
                {businessInfo.address}
              </div>
            </div>

            {/* Main Action Button */}
            <button
              type="button"
              onClick={handleOpenMaps}
              className="w-full sm:w-auto min-w-[260px] flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-white hover:bg-stone-100 text-slate-900 border-2 border-slate-900 font-bold text-sm shadow-xs hover:shadow-md transition-all active:scale-98"
            >
              <Navigation className="w-4 h-4 text-[#C99738]" />
              <span>افتتاح الخريطة في Google Maps</span>
              <ExternalLink className="w-4 h-4 text-stone-400" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
