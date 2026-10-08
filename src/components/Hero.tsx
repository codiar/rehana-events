import React from 'react';
import { Calendar, Eye, ArrowDown } from 'lucide-react';
import { businessInfo } from '../data/hallData';
import heroHallImage from '../assets/images/rehana-hall-main.jpg';

interface HeroProps {
  onOpenBooking: () => void;
  onExplorePackages: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onExplorePackages
}) => {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-slate-950">
      {/* Hero Image Container with luxury atmosphere */}
      <div className="relative min-h-[580px] sm:min-h-[640px] md:min-h-[720px] flex items-center justify-center">
        {/* Background photo */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroHallImage}
            alt="قاعة ريحانة للمناسبات بكربلاء"
            className="w-full h-full object-cover object-center scale-102 transition-transform duration-1000 ease-out"
            referrerPolicy="no-referrer"
          />
          {/* Measured multi-layer contrast scrim ensuring 4.5:1 text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-slate-950/30" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/20 to-black/60" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-12 pb-16">
          
          {/* Subtle Tagline */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-[#C99738]/40 mb-6 text-xs sm:text-sm font-semibold text-[#E9C378]">
            <span className="w-2 h-2 rounded-full bg-[#C99738] animate-pulse" />
            <span>كربلاء المقدسة · {businessInfo.tagline}</span>
          </div>

          {/* Main Headline from User Reference */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight sm:leading-snug drop-shadow-md mb-5 font-serif">
            اجعل مناسبتك ذكرى لا تُنسى
          </h1>

          {/* Subtitle from User Reference */}
          <p className="max-w-2xl mx-auto text-base sm:text-xl text-stone-200 leading-relaxed font-normal mb-8 sm:mb-10 drop-shadow-xs">
            {businessInfo.description}
          </p>

          {/* Action CTAs strictly  */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
            {/* Primary Gold Button */}
            <button
              type="button"
              onClick={onOpenBooking}
              className="w-full sm:w-auto min-w-[200px] flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold text-slate-950 bg-[#C99738] hover:bg-[#d8a846] transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Calendar className="w-5 h-5 text-slate-950" />
              <span>احجز موعداً للمعاينة</span>
            </button>

            {/* Secondary Dark Navy Button with Border */}
            <button
              type="button"
              onClick={onExplorePackages}
              className="w-full sm:w-auto min-w-[200px] flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-[#101C31]/90 hover:bg-[#162544] border-2 border-stone-300/40 hover:border-white transition-all backdrop-blur-xs shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Eye className="w-5 h-5 text-[#C99738]" />
              <span>تصفح الباقات والخدمات</span>
            </button>
          </div>

          {/* Scroll Down Hint */}
          <div className="mt-12 hidden sm:flex justify-center">
            <a 
              href="#why-us" 
              className="inline-flex items-center gap-2 text-xs text-stone-300 hover:text-white transition-colors"
              aria-label="الانتقال إلى تفاصيل القاعة"
            >
              <span>اكتشف مميزات القاعة</span>
              <ArrowDown className="w-4 h-4 animate-bounce text-[#C99738]" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
