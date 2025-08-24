import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  className?: string;
}

export default function ScrollIndicator({ className = '' }: ScrollIndicatorProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [hasAppeared, setHasAppeared] = useState(false);

  useEffect(() => {
    // Aparecer después de 2 segundos inicialmente
    const initialTimer = setTimeout(() => {
      setHasAppeared(true);
    }, 2000);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Ocultar cuando se haga scroll más de 50px para respuesta más rápida
      setIsVisible(scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(initialTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#services');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {hasAppeared && isVisible && (
        <motion.div
          className={`mt-8 flex flex-col items-center text-gray-400 cursor-pointer ${className}`}
          onClick={scrollToNext}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{
            duration: 0.15,
            ease: "easeOut"
          }}
        >
          <motion.div
            className="flex flex-col items-center"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm mb-2 font-medium">
              Scroll to explore
            </span>
            <div className="w-6 h-10 border-2 border-purple-400/30 rounded-full flex justify-center overflow-visible">
              <motion.div
                className="w-1 h-3 bg-purple-400 rounded-full mt-2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
