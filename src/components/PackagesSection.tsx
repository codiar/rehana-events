import React, { useState } from 'react';
import { Check, Sparkles, SlidersHorizontal, MessageCircle, ArrowLeft, Plus } from 'lucide-react';
import { packagesData, PackageItem, businessInfo } from '../data/hallData';

interface PackagesSectionProps {
  onSelectPackage: (pkg: PackageItem) => void;
  onOpenCustomBuilder: () => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  onSelectPackage,
  onOpenCustomBuilder
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'جميع الباقات' },
    { id: 'weddings', label: 'أعراس ومناسبات' },
    { id: 'graduation', label: 'حفلات التخرج' },
    { id: 'hospitality', label: 'خدمات الضيافة' },
    { id: 'custom', label: 'باقات مخصصة' }
  ];

  const filteredPackages = packagesData.filter(pkg => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'custom') return false; // Handled by custom box
    return pkg.category === activeCategory;
  });

  return (
    <section id="packages" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#101C31] tracking-tight mb-3 font-serif">
            باقات وخدمات المناسبات
          </h2>
          <p className="text-stone-600 text-sm sm:text-lg leading-relaxed">
            اختر الباقة الأنسب لليلتكم المميزة، أو صمم باقتك الخاصة
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  if (cat.id === 'custom') {
                    onOpenCustomBuilder();
                  } else {
                    setActiveCategory(cat.id);
                  }
                }}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#C99738] text-slate-950 shadow-md scale-102 ring-2 ring-[#C99738]/30'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200 hover:text-slate-950'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-12">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="flex flex-col bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-md hover:shadow-xl hover:border-[#C99738]/60 transition-all duration-300 group"
            >
              {/* Package Card Top Image */}
              <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-900">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Badge if present (like الأكثر طلباً in Image 2) */}
                {pkg.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-[#101C31]/90 text-amber-300 border border-[#C99738]/60 shadow-md backdrop-blur-xs">
                      <Sparkles className="w-3.5 h-3.5 text-[#C99738]" />
                      <span>{pkg.badge}</span>
                    </span>
                  </div>
                )}

                {/* Subtle gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Package Details Body */}
              <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#101C31] mb-2 font-serif">
                    {pkg.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 mb-6 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Bullet list of features matching image 2 */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C99738] shrink-0 mt-2" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer of Card: Price & CTA (matching image 2) */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-stone-400 block mb-0.5">الأسعار</span>
                    <span className="text-xs sm:text-sm font-bold text-stone-800">
                      {pkg.priceText}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectPackage(pkg)}
                    className="flex items-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl bg-[#C99738] hover:bg-[#d8a846] text-slate-950 font-bold text-xs sm:text-sm shadow-xs hover:shadow-md transition-all active:scale-95"
                  >
                    <span>تفاصيل واحجز</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Custom Package Dotted Box */}
        <div className="relative rounded-3xl border-2 border-dashed border-stone-300 bg-stone-50/70 p-6 sm:p-10 text-center max-w-4xl mx-auto">
          <div className="max-w-xl mx-auto space-y-3">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-100/80 text-[#C99738] mb-2">
              <SlidersHorizontal className="w-6 h-6" />
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-[#101C31] font-serif">
              بحاجة لباقة مخصصة؟
            </h3>
            
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              تواصل معنا لتصميم ليلتك بالديكور والخدمات التي تناسب تطلعاتك وميزانيتك، أو استخدم أداة إصدار الفاتورة المخصصة مباشرة.
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={onOpenCustomBuilder}
                className="px-6 py-3 rounded-xl bg-white hover:bg-stone-100 text-slate-900 border border-stone-300 font-bold text-xs sm:text-sm shadow-xs transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#C99738]" />
                <span>تصميم باقة مخصصة وإصدار فاتورة</span>
              </button>

              <a
                href={`https://wa.me/${businessInfo.whatsappNumberInternational}?text=${encodeURIComponent('مرحباً قاعة ريحانة، أرغب بتصميم باقة مخصصة لحفلي.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>تواصل معنا على واتساب</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
