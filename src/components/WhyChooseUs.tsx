import React from 'react';
import { Sparkles, Users, Volume2, MapPin, Eye, CheckCircle2 } from 'lucide-react';
import { whyChooseUs } from '../data/hallData';

interface WhyChooseUsProps {
  onOpenGallery: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenGallery }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'sparkles':
        return <Sparkles className="w-8 h-8 text-[#C99738]" />;
      case 'users':
        return <Users className="w-8 h-8 text-[#C99738]" />;
      case 'volume':
        return <Volume2 className="w-8 h-8 text-[#C99738]" />;
      case 'map-pin':
        return <MapPin className="w-8 h-8 text-[#C99738]" />;
      default:
        return <Sparkles className="w-8 h-8 text-[#C99738]" />;
    }
  };

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-[#FAF9F5] border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#101C31] tracking-tight mb-3 font-serif">
            لماذا تختار قاعة ريحانة؟
          </h2>
          <div className="w-16 h-1 bg-[#C99738] mx-auto rounded-full mb-4" />
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            صُممت كل زاوية في قاعة ريحانة لتمنحكم حفلاً استثنائياً يجمع بين الفخامة المعاصرة والخدمة الفندقية الراقية.
          </p>
        </div>

        {/* 4 Feature Pillars  */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16">
          {whyChooseUs.map((item) => (
            <div 
              key={item.id}
              className="flex flex-col items-center text-center p-5 sm:p-6 rounded-2xl bg-white border border-stone-200/80 shadow-2xs hover:shadow-md hover:border-[#C99738]/50 transition-all group"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-amber-50/70 border border-amber-200/60 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-amber-100/70 transition-all">
                {getIcon(item.icon)}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-[#101C31] mb-2 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Venue & Decor Spotlight Showcase () */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-stone-300/80 bg-slate-900 group">
          {/* Background image of the hall decor */}
          <div className="relative h-72 sm:h-96 md:h-[460px] w-full">
            <img
              src={heroHallImage}
              alt="القاعة والديكور - قاعة ريحانة للمناسبات"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            
            {/* Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />

            {/* "جديد بالكامل" Badge () */}
            <div className="absolute top-5 right-5 sm:top-8 sm:right-8 z-10">
              <div className="relative flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-slate-950/80 border-2 border-[#C99738] text-[#C99738] shadow-lg backdrop-blur-md rotate-[-8deg] hover:rotate-0 transition-transform">
                <span className="text-[11px] sm:text-xs font-black">جديد</span>
                <span className="text-[10px] sm:text-[11px] font-bold">بالكامل</span>
              </div>
            </div>

            {/* Bottom Caption and CTA */}
            <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-2 font-serif">
                  القاعة والديكور
                </h3>
                <p className="text-stone-300 text-sm sm:text-base max-w-xl">
                  تجهيزات ديكورية ملكية مع أرقى خامات الورد الطبيعي وتنسيقات الطاولات والكوشات الحديثة لعام 2026.
                </p>
              </div>

              <button
                type="button"
                onClick={onOpenGallery}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/95 hover:bg-white text-slate-900 text-sm font-bold shadow-md hover:scale-105 transition-all self-start sm:self-auto"
              >
                <Eye className="w-4 h-4 text-[#C99738]" />
                <span>عرض معرض الصور</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
