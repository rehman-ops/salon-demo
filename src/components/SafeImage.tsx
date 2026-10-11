import React, { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackCategory?: string;
  aspectRatioClass?: string;
  containerClassName?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt = 'Luxury Bridal & Beauty Artistry',
  fallbackTitle,
  fallbackCategory,
  aspectRatioClass = 'aspect-[4/3]',
  containerClassName = '',
  className = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const showFallback = hasError || !src;

  return (
    <div className={`relative overflow-hidden bg-[#E8DCCB]/40 ${aspectRatioClass} ${containerClassName}`}>
      {!showFallback ? (
        <>
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover transition-opacity duration-700 ease-out ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } ${className}`}
            {...props}
          />
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E8DCCB]/60 via-[#F8F5EF]/80 to-[#E8DCCB]/40 animate-pulse flex items-center justify-center">
              <span className="font-serif italic text-xs tracking-widest text-[#B79A68]">L'AURA ATELIER</span>
            </div>
          )}
        </>
      ) : (
        /* Zero-Broken-Image Policy: High-end editorial fallback container */
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#F8F5EF] to-[#E8DCCB] text-[#30231F] border border-[#B79A68]/20 select-none">
          <div className="w-12 h-12 rounded-full border border-[#B79A68]/40 flex items-center justify-center mb-3 bg-[#FFFFFF]/70 shadow-xs">
            <svg
              className="w-6 h-6 text-[#B79A68]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
            </svg>
          </div>
          {fallbackCategory && (
            <span className="text-[11px] uppercase tracking-widest text-[#9A8878] mb-1 font-sans">
              {fallbackCategory}
            </span>
          )}
          <p className="font-serif text-center text-sm md:text-base text-[#30231F] max-w-[220px] line-clamp-2">
            {fallbackTitle || alt || 'Editorial Bridal Visual'}
          </p>
          <div className="mt-3 flex items-center gap-1.5 opacity-60">
            <span className="h-[1px] w-6 bg-[#B79A68]"></span>
            <span className="text-[10px] uppercase tracking-widest text-[#B79A68] font-serif italic">Atelier</span>
            <span className="h-[1px] w-6 bg-[#B79A68]"></span>
          </div>
        </div>
      )}
    </div>
  );
};
