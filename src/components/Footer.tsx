import React, { useState } from 'react';
import { RehanaLogo, CodiarTechCredit } from './Logos';
import { businessInfo } from '../data/hallData';
import { Phone, Mail, Instagram, MapPin, Clock, MessageCircle, ExternalLink, ShieldCheck, FileCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-[#0D1524] text-stone-300 pt-16 pb-24 md:pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800/80">
          
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-4">
            <RehanaLogo light className="h-12" />
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              {businessInfo.description}
            </p>
            <div className="text-xs text-[#E9C378] font-semibold pt-1">
              {businessInfo.tagline}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="hover:text-[#C99738] transition-colors">الرئيسية</a>
              </li>
              <li>
                <a href="#packages" className="hover:text-[#C99738] transition-colors">باقات المناسبات والأعراس</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C99738] transition-colors">معرض الصور والديكور</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#C99738] transition-colors">طلب استفسار وحجز موعد</a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#C99738] transition-colors">الموقع على الخريطة</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif">
              التواصل والاستفسار
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C99738] shrink-0" />
                <a href={`tel:${businessInfo.phone}`} className="hover:text-white" dir="ltr">
                  {businessInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={`https://wa.me/${businessInfo.whatsappNumberInternational}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white"
                  dir="ltr"
                >
                  {businessInfo.whatsapp} (واتساب مباشر)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#C99738] shrink-0" />
                <a 
                  href={businessInfo.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white"
                  dir="ltr"
                >
                  @{businessInfo.instagramUsername}
                </a>
              </div>
              {businessInfo.email && (
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#C99738] shrink-0" />
                  <a href={`mailto:${businessInfo.email}`} className="hover:text-white">{businessInfo.email}</a>
                </div>
              )}
              <div className="flex items-start gap-2 pt-1 text-stone-400 text-xs">
                <Clock className="w-4 h-4 text-[#C99738] shrink-0 mt-0.5" />
                <span>{businessInfo.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Column 4: Location Summary */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif">
              العنوان والوصول
            </h4>
            <div className="text-xs sm:text-sm text-stone-400 leading-relaxed space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C99738] shrink-0 mt-0.5" />
                <span>{businessInfo.address}</span>
              </div>
              <p className="text-[11px] text-stone-500">
                كربلاء المقدسة، بين تقاطع سيد جودة وفلكة المحافظة (مجاور مفوضية الانتخابات).
              </p>
              <a
                href={businessInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#E9C378] hover:underline pt-1"
              >
                <span>فتح الاتجاهات في Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Legal & Policy Links  */}
        <div className="py-6 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-400 border-b border-stone-800/80">
          <button
            type="button"
            onClick={() => setModalType('privacy')}
            className="hover:text-[#C99738] transition-colors cursor-pointer"
          >
            سياسة الخصوصية
          </button>
          <span>·</span>
          <button
            type="button"
            onClick={() => setModalType('terms')}
            className="hover:text-[#C99738] transition-colors cursor-pointer"
          >
            الشروط والأحكام
          </button>
          <span>·</span>
          <span>جميع الحقوق محفوظة لقاعة ريحانة للمناسبات © 2026</span>
        </div>

        {/* Codiar Tech Official Credit as requested in 28, 29, 30 */}
        <div className="pt-4">
          <CodiarTechCredit />
        </div>

      </div>

      {/* Privacy / Terms Modal */}
      {modalType && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-slate-900 rounded-2xl max-w-lg w-full p-6 space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-bold text-base flex items-center gap-2">
                {modalType === 'privacy' ? <ShieldCheck className="w-5 h-5 text-[#C99738]" /> : <FileCheck className="w-5 h-5 text-[#C99738]" />}
                <span>{modalType === 'privacy' ? 'سياسة الخصوصية' : 'الشروط والأحكام العامة'}</span>
              </h3>
              <button 
                onClick={() => setModalType(null)}
                className="text-stone-400 hover:text-stone-800 font-bold p-1"
              >
                ✕
              </button>
            </div>
            
            <div className="text-xs sm:text-sm text-stone-600 space-y-2 leading-relaxed max-h-64 overflow-y-auto">
              {modalType === 'privacy' ? (
                <>
                  <p>• نحترم خصوصية جميع عملائنا الكرام وزوار قاعة ريحانة للمناسبات.</p>
                  <p>• تُستخدم معلومات الاتصال (الاسم ورقم الهاتف) حصراً لتأكيد حجوزاتكم ومواعيد المعاينة والتواصل معكم بشأن الحفل.</p>
                  <p>• لا تتم مشاركة أي بيانات شخصية مع أي أطراف ثالثة.</p>
                </>
              ) : (
                <>
                  <p>• يتم تثبيت موعد وتاريخ الحفل رسمياً بعد المعاينة الميدانية وتوقيع استمارة الحجز في مقر القاعة.</p>
                  <p>• يمكن تخصيص وإضافة باقات الضيافة والورد وفق رغبة العميل وبالتنسيق مع إدارة القاعة المسبق.</p>
                  <p>• تلتزم إدارة قاعة ريحانة بتقديم أعلى مستويات الخدمة والضيافة والتنظيم لإنجاح مناسبتكم المميزة.</p>
                </>
              )}
            </div>

            <div className="pt-2 text-right">
              <button
                type="button"
                onClick={() => setModalType(null)}
                className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold rounded-lg"
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
