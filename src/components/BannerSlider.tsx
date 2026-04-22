import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const images = [
  'images/Banner_0.png',
  'images/Banner_1.png'
];

export const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-900">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 1.5,
            ease: "easeInOut"
          }}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Fallback to high-quality cleaning images if local files are missing
            const fallbacks = [
              'https://images.unsplash.com/photo-1581578731548-c64695ce6958?auto=format&fit=crop&q=80&w=1200',
              'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=1200'
            ];
            (e.target as HTMLImageElement).src = fallbacks[currentIndex % fallbacks.length];
          }}
        />
      </AnimatePresence>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-rose-600 w-4' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
