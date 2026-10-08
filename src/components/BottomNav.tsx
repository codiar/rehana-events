import React from 'react';
import { Home, LayoutGrid, Image as ImageIcon, PhoneCall } from 'lucide-react';

interface BottomNavProps {
  activeTab: 'home' | 'packages' | 'gallery' | 'contact';
  onTabChange: (tab: 'home' | 'packages' | 'gallery' | 'contact') => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', label: 'الرئيسية', icon: Home, href: '#hero' },
    { id: 'packages', label: 'الباقات', icon: LayoutGrid, href: '#packages' },
    { id: 'gallery', label: 'معرض الصور', icon: ImageIcon, href: '#gallery' },
    { id: 'contact', label: 'الموقع والاتصال', icon: PhoneCall, href: '#location' }
  ];

  return (
    <nav 
      className="fixed bottom-0 inset-x-0 z-40 bg-white/98 backdrop-blur-md border-t border-stone-200/90 shadow-2xl md:hidden safe-area-pb"
      aria-label="شريط التنقل السفلي"
    >
      <div className="grid grid-cols-4 h-16">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <a
              key={tab.id}
              href={tab.href}
              onClick={(e) => {
                onTabChange(tab.id as any);
              }}
              className={`flex flex-col items-center justify-center gap-1 transition-all h-full select-none cursor-pointer ${
                isActive
                  ? 'bg-[#C99738] text-slate-950 font-extrabold shadow-inner'
                  : 'text-stone-500 hover:text-slate-900 font-semibold'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.4]' : 'stroke-[1.8]'}`} />
              <span className="text-[10px] leading-none whitespace-nowrap">
                {tab.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};
