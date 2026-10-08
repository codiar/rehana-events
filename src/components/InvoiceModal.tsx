import React, { useState, useEffect } from 'react';
import { X, Send, Copy, Check, Printer, Sparkles, Plus, Trash2, Calendar, Phone, User, MessageCircle, FileText } from 'lucide-react';
import { PackageItem, packageAddons, businessInfo } from '../data/hallData';
import { RehanaLogo } from './Logos';

interface InvoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackage?: PackageItem | null;
}

export const InvoiceModal: React.FC<InvoiceModalProps> = ({
  isOpen,
  onClose,
  initialPackage
}) => {
  const [selectedPkg, setSelectedPkg] = useState<string>(initialPackage?.title || 'الباقة الملكية المتكاملة');
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>(['addon-photo', 'addon-effects']);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [guestsCount, setGuestsCount] = useState('150 - 250 ضيف');
  const [notes, setNotes] = useState('');
  const [orderCode, setOrderCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [showInvoicePreview, setShowInvoicePreview] = useState(false);

  useEffect(() => {
    if (isOpen) {
      if (initialPackage) {
        setSelectedPkg(initialPackage.title);
      }
      if (!orderCode) {
        const rand = Math.floor(1000 + Math.random() * 9000);
        setOrderCode(`ORD-2026-RH${rand}`);
      }
    }
  }, [isOpen, initialPackage]);

  if (!isOpen) return null;

  const toggleAddon = (id: string) => {
    if (selectedAddonIds.includes(id)) {
      setSelectedAddonIds(selectedAddonIds.filter(item => item !== id));
    } else {
      setSelectedAddonIds([...selectedAddonIds, id]);
    }
  };

  const getSelectedAddonsList = () => {
    return packageAddons.filter(a => selectedAddonIds.includes(a.id));
  };

  const generateWhatsAppMessage = () => {
    const addonsList = getSelectedAddonsList();
    const addonsText = addonsList.length > 0 
      ? addonsList.map(a => `• ${a.name}`).join('\n')
      : '• لا توجد إضافات مختارة';

    return `طلب حجز وإصدار فاتورة جديدة #${orderCode}
---------------------------------
قاعة ريحانة للمناسبات - كربلاء
خلي يومك الوحيد مميز

بيانات العميل:
الاسم: ${customerName || 'غير محدد'}
الهاتف: ${customerPhone || 'غير محدد'}
تاريخ الحفل: ${eventDate || 'لم يحدد بعد'}
العدد التقريبي: ${guestsCount}

تفاصيل الباقة:
• الباقة الأساسية: ${selectedPkg}

الخدمات والإضافات المختارة:
${addonsText}
${notes ? `\nملاحظات العميل: ${notes}` : ''}
---------------------------------
العنوان: كربلاء - بين تقاطع سيد جودة وفلكة المحافظة (مجاور مفوضية الانتخابات)`;
  };

  const handleSendWhatsApp = () => {
    if (!customerName.trim() || !customerPhone.trim()) {
      alert('يرجى كتابة الاسم ورقم الهاتف لإصدار الفاتورة وإرسالها');
      return;
    }
    const message = generateWhatsAppMessage();
    const url = `https://wa.me/${businessInfo.whatsappNumberInternational}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleCopyDetails = () => {
    const message = generateWhatsAppMessage();
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-6">
        
        {/* Header */}
        <div className="bg-[#101C31] p-6 text-white flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C99738]/20 border border-[#C99738]/50 flex items-center justify-center text-[#E9C378]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-serif">
                إصدار فاتورة حجز مبدئية
              </h3>
              <p className="text-xs text-stone-300">
                رمز الطلب: <span className="font-mono text-[#E9C378] font-bold">{orderCode}</span>
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="إغلاق النافذة"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Tabs / Body */}
        <div className="p-6 sm:p-8 max-h-[78vh] overflow-y-auto space-y-6">
          
          {/* Section 1: Customer Data */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider flex items-center gap-2">
              <User className="w-4 h-4 text-[#C99738]" />
              <span>معلومات العميل والحفل</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  الاسم الكامل <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="اسم صاحب الحفل"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:border-[#C99738] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  رقم الهاتف (واتساب) <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  dir="ltr"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="07708600338"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:border-[#C99738] outline-none text-right"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  تاريخ الحفل التقريبي
                </label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:border-[#C99738] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  العدد التقريبي للضيوف
                </label>
                <select
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:border-[#C99738] outline-none bg-white"
                >
                  <option value="أقل من 100 ضيف">أقل من 100 ضيف (عائلي دافئ)</option>
                  <option value="100 - 200 ضيف">100 - 200 ضيف</option>
                  <option value="200 - 350 ضيف">200 - 350 ضيف (حفل متوسط)</option>
                  <option value="350 - 500+ ضيف">350 - 500+ ضيف (حفل ملكي واسع)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 2: Selected Base Package */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C99738]" />
              <span>اختيار الباقة الرئيسية</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                'الباقة الملكية المتكاملة',
                'باقة ريحانة الخاصة',
                'باقة حفلات التخرج الأكاديمية',
                'باقة الضيافة والبوفيه VIP'
              ].map(pkgName => (
                <button
                  key={pkgName}
                  type="button"
                  onClick={() => setSelectedPkg(pkgName)}
                  className={`p-3 rounded-xl border text-right font-semibold text-xs sm:text-sm flex items-center justify-between transition-all ${
                    selectedPkg === pkgName
                      ? 'border-[#C99738] bg-amber-50/70 text-[#101C31] shadow-2xs font-bold'
                      : 'border-stone-200 hover:border-stone-300 text-stone-700 bg-white'
                  }`}
                >
                  <span>{pkgName}</span>
                  {selectedPkg === pkgName && <Check className="w-4 h-4 text-[#C99738]" />}
                </button>
              ))}
            </div>
          </div>

          {/* Section 3: Add-ons selection */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider flex items-center gap-2">
                <Plus className="w-4 h-4 text-[#C99738]" />
                <span>إضافات وترقيات خاصة (اختياري)</span>
              </h4>
              <span className="text-[11px] text-stone-500">
                {selectedAddonIds.length} مختارة
              </span>
            </div>

            <div className="space-y-2">
              {packageAddons.map(addon => {
                const isSelected = selectedAddonIds.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-3 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                      isSelected
                        ? 'border-[#C99738]/80 bg-amber-50/40 text-slate-900'
                        : 'border-stone-200 hover:border-stone-300 bg-white'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => {}}
                      className="mt-1 rounded text-[#C99738] focus:ring-[#C99738] cursor-pointer"
                    />
                    <div className="flex-1 text-right">
                      <div className="text-xs sm:text-sm font-bold text-stone-900 flex items-center justify-between">
                        <span>{addon.name}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-normal">
                          {addon.category}
                        </span>
                      </div>
                      <p className="text-xs text-stone-500 mt-0.5 leading-snug">
                        {addon.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">
              ملاحظات أو رغبات إضافية
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="مثال: نرغب بالدخول على زفة خاصة، ديكور ورد كوشة هولندي..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:border-[#C99738] outline-none"
            />
          </div>

          {/* Invoice Summary Box (Printable) */}
          <div className="p-5 sm:p-6 rounded-2xl bg-stone-100 border-2 border-dashed border-stone-300 space-y-3">
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <RehanaLogo className="h-9" />
              <div className="text-left font-mono text-xs text-stone-600">
                <div>رقم: {orderCode}</div>
                <div>الموقع: كربلاء المقدسة</div>
              </div>
            </div>

            <div className="text-xs space-y-1.5 text-stone-700 pt-1">
              <div className="flex justify-between">
                <span className="text-stone-500">العميل:</span>
                <span className="font-bold">{customerName || '—'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">الباقة المختارة:</span>
                <span className="font-bold text-[#101C31]">{selectedPkg}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">العدد التقريبي:</span>
                <span>{guestsCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">التاريخ:</span>
                <span>{eventDate || 'يتم تحديده لاحقاً'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">التسعير:</span>
                <span className="font-bold text-[#b88628]">حسب المعاينة والمطابقة الرسمية</span>
              </div>
            </div>

            <div className="text-[11px] text-stone-400 text-center pt-2 border-t border-stone-200">
              * تصدر هذه الفاتورة المبدئية مباشرة إلى محادثة واتساب الرسمية لحجز الموعد وتثبيت التاريخ.
            </div>
          </div>

        </div>

        {/* Footer Actions (Send to WhatsApp, Save/Print, Copy) */}
        <div className="p-4 sm:p-6 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center gap-3">
          {/* Main Action: Send directly to WhatsApp */}
          <button
            type="button"
            onClick={handleSendWhatsApp}
            className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all active:scale-98"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>إرسال الفاتورة عبر واتساب</span>
          </button>

          {/* Copy info */}
          <button
            type="button"
            onClick={handleCopyDetails}
            className="w-full sm:w-auto px-4 py-3 rounded-xl border border-stone-300 hover:bg-stone-200 text-stone-700 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
            title="نسخ تفاصيل الفاتورة كنص"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'تم النسخ!' : 'نسخ النص'}</span>
          </button>

          {/* Print invoice */}
          <button
            type="button"
            onClick={handlePrint}
            className="w-full sm:w-auto px-4 py-3 rounded-xl border border-stone-300 hover:bg-stone-200 text-stone-700 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
            title="طباعة أو حفظ كملف PDF"
          >
            <Printer className="w-4 h-4" />
            <span>طباعة / حفظ</span>
          </button>
        </div>

      </div>
    </div>
  );
};
