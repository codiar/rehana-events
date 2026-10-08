import React from 'react';
import { X, Check, MessageCircle, Calendar, Sparkles, ArrowLeft } from 'lucide-react';
import { PackageItem, businessInfo } from '../data/hallData';

interface PackageDetailsModalProps {
  packageItem: PackageItem | null;
  onClose: () => void;
  onBookPackage: (pkg: PackageItem) => void;
}

export const PackageDetailsModal: React.FC<PackageDetailsModalProps> = ({
  packageItem,
  onClose,
  onBookPackage
}) => {
  if (!packageItem) return null;

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `مرحباً قاعة ريحانة للمناسبات، أود الاستفسار وحجز [${packageItem.title}]. أرجو تزويدي بالأسعار والتواريخ المتاحة.`
    );
    window.open(`https://wa.me/${businessInfo.whatsappNumberInternational}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-6">
        
        {/* Package Image & Close Button */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
          <img
            src={packageItem.image}
            alt={packageItem.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 left-4 z-20 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors"
            aria-label="إغلاق النافذة"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge */}
          {packageItem.badge && (
            <div className="absolute top-4 right-4 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#101C31]/90 text-amber-300 border border-[#C99738]/60 shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-[#C99738]" />
                <span>{packageItem.badge}</span>
              </span>
            </div>
          )}

          {/* Title on Image */}
          <div className="absolute bottom-4 inset-x-4 sm:inset-x-6 text-right">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif mb-1">
              {packageItem.title}
            </h3>
            <span className="text-xs sm:text-sm text-[#E9C378] font-bold">
              {packageItem.priceText}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          <p className="text-stone-600 text-sm leading-relaxed">
            {packageItem.description}
          </p>

          <div>
            <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">
              ما تشمله هذه الباقة الملكية:
            </h4>
            <ul className="space-y-3">
              {packageItem.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-800">
                  <div className="w-5 h-5 rounded-full bg-amber-100 text-[#C99738] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-stone-700 leading-relaxed">
            <span className="font-bold text-[#b88628]">ملاحظة مهمة:</span> يتوفر تخصيص كامل لألوان الورد، تصاميم الكوشة، وتفاصيل الضيافة حسب ذوق العروسين والمناسبة.
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-4 sm:p-6 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center gap-3">
          <button
            type="button"
            onClick={() => {
              onClose();
              onBookPackage(packageItem);
            }}
            className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#C99738] hover:bg-[#d8a846] text-slate-950 font-bold text-sm shadow-md transition-all active:scale-98"
          >
            <Calendar className="w-4 h-4" />
            <span>إصدار فاتورة وحجز الباقة</span>
          </button>

          <button
            type="button"
            onClick={handleDirectWhatsApp}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>استفسار واتساب</span>
          </button>
        </div>

      </div>
    </div>
  );
};
