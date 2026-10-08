import React from 'react';

/**
 * Rehana Hall Vector Brand Logo
 */
export const RehanaLogo: React.FC<{ className?: string; light?: boolean }> = ({
  className = "h-12",
  light = false
}) => {
  const goldColor = "#C99738";
  const navyColor = light ? "#F8FAFC" : "#101C31";

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      {/* Arabic Calligraphic Logo Typography */}
      <div className="flex flex-col items-center text-center leading-none">
        <span 
          className="text-[11px] font-semibold tracking-wider transition-colors duration-200"
          style={{ color: navyColor }}
        >
          قـاعـة
        </span>
        <span 
          className="text-2xl sm:text-3xl font-extrabold tracking-tight my-0.5 font-serif"
          style={{ 
            color: goldColor,
            textShadow: '0 1px 2px rgba(201, 151, 56, 0.15)'
          }}
        >
          ريـحــانـة
        </span>
        <span 
          className="text-[10px] font-bold tracking-widest transition-colors duration-200"
          style={{ color: navyColor }}
        >
          للمنـاسبــات
        </span>
      </div>

      {/* Botanical floral branch motif from the original logo */}
      <svg 
        viewBox="0 0 60 70" 
        className="h-10 sm:h-12 w-auto shrink-0 drop-shadow-sm" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Flower head */}
        <circle cx="38" cy="18" r="4.5" stroke={goldColor} strokeWidth="1.8" fill="none" />
        <path 
          d="M38 10 C34 14, 34 22, 38 26 C42 22, 42 14, 38 10 Z" 
          stroke={goldColor} 
          strokeWidth="1.4" 
          fill="none" 
        />
        <path 
          d="M30 18 C34 14, 42 14, 46 18 C42 22, 34 22, 30 18 Z" 
          stroke={goldColor} 
          strokeWidth="1.4" 
          fill="none" 
        />
        <circle cx="38" cy="18" r="1.5" fill={navyColor} />

        {/* Stem curved downwards */}
        <path 
          d="M38 27 C37 38, 30 52, 22 64" 
          stroke={navyColor} 
          strokeWidth="1.8" 
          strokeLinecap="round" 
        />

        {/* Leaves on left side */}
        <path 
          d="M36 34 C30 33, 24 38, 26 43 C30 43, 34 39, 36 34 Z" 
          stroke={goldColor} 
          strokeWidth="1.4" 
          fill="none" 
        />
        <path 
          d="M32 45 C25 46, 21 52, 24 57 C28 56, 31 51, 32 45 Z" 
          stroke={goldColor} 
          strokeWidth="1.4" 
          fill="none" 
        />

        {/* Leaves on right side */}
        <path 
          d="M37 38 C43 37, 48 42, 45 47 C41 46, 38 42, 37 38 Z" 
          stroke={navyColor} 
          strokeWidth="1.4" 
          fill="none" 
        />
        <path 
          d="M33 50 C38 50, 42 55, 39 60 C36 59, 34 55, 33 50 Z" 
          stroke={goldColor} 
          strokeWidth="1.4" 
          fill="none" 
        />
      </svg>
    </div>
  );
};

/**
 * Codiar Tech Official Logo & Credit Component
 * As strictly requested in section 28, 29, 30:
 * - Clickable Codiar Tech name + Logo
 * - Links to https://www.instagram.com/codiar_tech
 * - Does not change current page (opens in new tab)
 * - Elegant, proportional, respectful to client branding
 */
export const CodiarTechCredit: React.FC<{ variant?: 'footer' | 'compact' }> = () => (
  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-slate-500 py-3">
    <span>تم تطوير الموقع من قبل</span>
    <a
      href="https://www.instagram.com/codiar_tech"
      target="_blank"
      rel="noopener noreferrer"
      className="font-bold text-[#b88628] hover:text-[#996d1c] transition-colors rounded px-1 focus:outline-none focus:ring-1 focus:ring-[#C99738]"
      title="حساب كوديار تك على انستغرام"
    >شركة كوديار تك</a>
  </div>
);
