import React, { useState } from 'react';
import { Eye, X, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';
import { galleryPhotos, GalleryPhoto } from '../data/hallData';

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'hall' | 'kosha' | 'tables' | 'buffet'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const filterTabs = [
    { id: 'all', label: 'جميع الصور' },
    { id: 'hall', label: 'القاعة والمدخل' },
    { id: 'kosha', label: 'الكوشة الملكية' },
    { id: 'tables', label: 'الطاولات والديكور' },
    { id: 'buffet', label: 'الضيافة والبوفيه' }
  ];

  const filteredPhotos = galleryPhotos.filter(photo => {
    if (filter === 'all') return true;
    return photo.category === filter;
  });

  const handleNextPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[nextIndex]);
  };

  const handlePrevPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[prevIndex]);
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#FAF9F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/70 text-[#C99738] text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>توثيق حي للأجواء</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#101C31] tracking-tight mb-3 font-serif">
            معرض الصور والأجواء الملكية
          </h2>
          <p className="text-stone-600 text-xs sm:text-base leading-relaxed">
            استعرض لقطات حقيقية من تجهيزات قاعة ريحانة للمناسبات وديكوراتها الحصرية
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar">
          {filterTabs.map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-[#101C31] text-amber-300 shadow-md ring-2 ring-[#C99738]/40'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-stone-200 shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 h-72 sm:h-80"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              
              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

              {/* View Icon on hover */}
              <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4 text-[#C99738]" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 inset-x-0 p-4 text-right">
                <h4 className="text-white text-sm sm:text-base font-bold font-serif mb-1 group-hover:text-[#E9C378] transition-colors">
                  {photo.title}
                </h4>
                {photo.description && (
                  <p className="text-stone-300 text-xs line-clamp-2">
                    {photo.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full-Screen Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          {/* Close button */}
          <button
            type="button"
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-5 left-5 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
            aria-label="إغلاق المعاينة"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous button */}
          <button
            type="button"
            onClick={handlePrevPhoto}
            className="absolute right-4 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors hidden sm:flex items-center justify-center"
            aria-label="الصورة السابقة"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={handleNextPhoto}
            className="absolute left-4 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors hidden sm:flex items-center justify-center"
            aria-label="الصورة التالية"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Modal Image & Info */}
          <div className="max-w-4xl max-h-[90vh] flex flex-col items-center">
            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
              className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 text-center text-white">
              <h3 className="text-lg font-bold font-serif text-[#E9C378]">
                {selectedPhoto.title}
              </h3>
              {selectedPhoto.description && (
                <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-md mx-auto">
                  {selectedPhoto.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
