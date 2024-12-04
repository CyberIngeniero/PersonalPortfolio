import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { useServiceModal } from '../hooks/useServiceModal';
import { iconMap } from '../config/icons';

export default function ServiceModal() {
  const { isOpen, service, closeModal } = useServiceModal();
  
  if (!service) return null;
  
  const Icon = iconMap[service.icon as keyof typeof iconMap];

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative bg-gradient-to-br from-purple-900/90 to-indigo-900/90 dark:from-purple-900/90 dark:to-indigo-900/90 rounded-xl border border-purple-500/20 p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <motion.button
              onClick={closeModal}
              className="absolute top-4 right-4 text-purple-200 hover:text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={24} />
            </motion.button>

            <div className="flex items-center gap-4 mb-6">
              {Icon && <Icon className="w-12 h-12 text-purple-400" />}
              <h2 className="text-2xl font-bold text-white">{service.title}</h2>
            </div>

            <p className="text-purple-100 mb-6">{service.longDesc}</p>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white mb-2">Key Features</h3>
              {service.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2 text-purple-200"
                >
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}