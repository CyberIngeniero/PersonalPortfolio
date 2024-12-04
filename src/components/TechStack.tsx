import React from 'react';
import { motion } from 'framer-motion';
import { techStack } from '../config/stack';

export default function TechStack() {
  return (
    <div className="container mx-auto px-6">
      <motion.h2
        className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Technology Stack
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {techStack.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col h-full"
          >
            <div className="bg-white/50 dark:bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-blue-100 dark:border-blue-500/20 h-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <motion.span
                    key={item.name}
                    className="px-3 py-1 text-sm rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}