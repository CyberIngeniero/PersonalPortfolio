import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Greeting {
  text: string;
  lang: string;
}

interface TypewriterTextProps {
  greetings: Greeting[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function TypewriterText({
  greetings,
  className = '',
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000
}: TypewriterTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!greetings || greetings.length === 0) return;

    const currentGreeting = greetings[currentIndex];
    if (!currentGreeting) return;

    const fullText = currentGreeting.text;

    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % greetings.length);
        }
      } else {
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        } else {
          setIsPaused(true);
        }
      }
    }, isPaused ? pauseDuration : isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentIndex, greetings, typingSpeed, deletingSpeed, pauseDuration]);

  // Fallback si no hay greetings
  if (!greetings || greetings.length === 0) {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <span className="text-white">Hola, Soy CyberIngeniero</span>
        <motion.span
          className="ml-1 w-0.5 h-8 bg-purple-400"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center w-full ${className}`}>
      <div className="bg-gradient-to-r from-white via-purple-400 to-blue-500 bg-clip-text text-transparent leading-tight w-full text-center">
        <span className="inline-flex items-baseline min-h-[1.2em] justify-center w-full">
          <span className="text-center block">{currentText}</span>
          <motion.span
            className="inline-block w-0.5 h-[0.8em] bg-purple-400 ml-1 flex-shrink-0"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          />
        </span>
      </div>
    </div>
  );
}
