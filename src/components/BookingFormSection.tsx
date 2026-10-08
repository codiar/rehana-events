import React, { useState } from 'react';
import { Send, Phone, Mail, Instagram, MapPin, Calendar, Clock, CheckCircle2, MessageCircle, ExternalLink } from 'lucide-react';
import { businessInfo } from '../data/hallData';

interface BookingFormProps {
  onSuccessMessage?: (text: string) => void;
}

export const BookingFormSection: React.FC<BookingFormProps> = ({ onSuccessMessage }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [eventType, setEventType] = useState('حفل زفاف / عرس ملكي');
  const [approxDate, setApproxDate] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [orderId, setOrderId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim() || !phoneNumber.trim()) {
      alert('يرجى كتابة الاسم ورقم الهاتف للمتابعة');
      return;
    }

    const uniqueId = `ORD-2026-RH${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderId(uniqueId);
    setSubmitted(true);

    if (onSuccessMessage) {
      onSuccessMessage('تم تجهيز طلب الحجز بنجاح!');
    }

    // Format WhatsApp Message directly matching prompt requirement 23
    const message = 
`طلب استفسار وحجز موعد جديد #${uniqueId}

العميل: ${fullName}
الهاتف: ${phoneNumber}
نوع المناسبة: ${eventType}
التاريخ التقريبي: ${approxDate || 'لم يحدد بعد'}
${notes ? `ملاحظات إضافية: ${notes}\n` : ''}
الموقع: قاعة ريحانة للمناسبات - كربلاء
(بين تقاطع سيد جودة وفلكة المحافظة)`;

    const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumberInternational}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new window
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking" className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navy Header Block  */}
        <div className="rounded-3xl bg-[#101C31] text-white p-8 sm:p-14 text-center max-w-4xl mx-auto mb-10 sm:mb-14 shadow-xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3 font-serif">
            تواصل معنا واحجز موعداً
          </h2>
          <p className="text-stone-300 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            يسعدنا الإجابة على استفساراتكم وترتيب زيارة لمعاينة القاعة ومناقشة تفاصيل الحفل
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main Booking Form Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-[#101C31] mb-6 font-serif border-b border-stone-100 pb-4">
              طلب استفسار أو حجز موعد
            </h3>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-emerald-900">
                  تم تسجيل طلب الحجز بنجاح!
                </h4>
                <p className="text-xs sm:text-sm text-emerald-800">
                  رقم الطلب الخاص بكم: <span className="font-mono font-bold">{orderId}</span>
                </p>
                <p className="text-xs text-stone-600 leading-relaxed">
                  تم فتح محادثة واتساب الرسمية مع كادر قاعة ريحانة لإكمال ترتيبات الموعد.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 text-xs font-bold text-slate-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-50"
                >
                  إرسال استفسار آخر
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-stone-700 mb-1.5">
                    الاسم الكامل <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="مثال: أحمد الجبوري"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-[#C99738] focus:ring-2 focus:ring-[#C99738]/20 text-sm outline-none transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-stone-700 mb-1.5">
                    رقم الهاتف <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="07708600338"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-[#C99738] focus:ring-2 focus:ring-[#C99738]/20 text-sm outline-none transition-all text-right"
                  />
                </div>

                {/* Event Type Dropdown */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-stone-700 mb-1.5">
                    نوع المناسبة
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-[#C99738] focus:ring-2 focus:ring-[#C99738]/20 text-sm outline-none transition-all bg-white"
                  >
                    <option value="حفل زفاف / عرس ملكي">حفل زفاف / عرس ملكي</option>
                    <option value="حفلة خطوبة وعقد قران">حفلة خطوبة وعقد قران</option>
                    <option value="حفل تخرج جامعي أو مدرسي">حفل تخرج جامعي أو مدرسي</option>
                    <option value="مؤتمر أو ندوة علمية">مؤتمر أو ندوة علمية</option>
                    <option value="مناسبة خاصة / ميلاد / حناء">مناسبة خاصة / ميلاد / حناء</option>
                    <option value="باقة مخصصة أخرى">باقة مخصصة أخرى</option>
                  </select>
                </div>

                {/* Date Picker */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-stone-700 mb-1.5">
                    تاريخ المناسبة التقريبي
                  </label>
                  <input
                    type="date"
                    value={approxDate}
                    onChange={(e) => setApproxDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-[#C99738] focus:ring-2 focus:ring-[#C99738]/20 text-sm outline-none transition-all"
                  />
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-stone-700 mb-1.5">
                    ملاحظات أو استفسارات إضافية
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="عدد الضيوف المتوقع، رغبات الديكور الخاصة، أو أي استفسار آخر..."
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-[#C99738] focus:ring-2 focus:ring-[#C99738]/20 text-sm outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit button (Golden button matching Image 3) */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#C99738] hover:bg-[#d8a846] text-slate-950 font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>إرسال الطلب وحجز موعد عبر واتساب</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Details & Info Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Information Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-md space-y-6">
              <h4 className="text-lg font-bold text-[#101C31] font-serif border-b border-stone-100 pb-3">
                معلومات الاتصال والوصول
              </h4>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#C99738] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-400 mb-0.5">العنوان</div>
                  <div className="text-xs sm:text-sm font-semibold text-stone-800 leading-snug">
                    {businessInfo.address}
                  </div>
                </div>
              </div>

              {/* Phone & Telegram */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#C99738] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-400 mb-0.5">الهاتف والتواصل</div>
                  <div className="text-xs sm:text-sm font-bold text-stone-900" dir="ltr">
                    <a href={`tel:${businessInfo.phone}`} className="hover:text-[#C99738] transition-colors">
                      {businessInfo.phone}
                    </a>
                  </div>
                  {businessInfo.telegramOrContact && (
                    <div className="text-xs text-stone-500 mt-0.5">معرف التواصل: {businessInfo.telegramOrContact}</div>
                  )}
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#C99738] flex items-center justify-center shrink-0 mt-0.5">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-400 mb-0.5">انستغرام الرسمي</div>
                  <a
                    href={businessInfo.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-bold text-stone-800 hover:text-[#C99738] transition-colors inline-flex items-center gap-1"
                    dir="ltr"
                  >
                    <span>@{businessInfo.instagramUsername}</span>
                    <ExternalLink className="w-3 h-3 text-stone-400" />
                  </a>
                </div>
              </div>

              {businessInfo.email && (<>
              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#C99738] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-400 mb-0.5">البريد الإلكتروني</div>
                  <a
                    href={`mailto:${businessInfo.email}`}
                    className="text-xs sm:text-sm font-semibold text-stone-800 hover:text-[#C99738] transition-colors"
                  >
                    {businessInfo.email}
                  </a>
                </div>
              </div>
              </>)}

              {/* Working Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#C99738] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-400 mb-0.5">أوقات العمل والمعاينة</div>
                  <div className="text-xs sm:text-sm font-semibold text-stone-800">
                    {businessInfo.workingHours}
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
