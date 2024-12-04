import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Card from './shared/Card';
import Modal from './shared/Modal';
import { successCases } from '../config/cases';

export default function SuccessCases() {
  const [selectedCase, setSelectedCase] = useState<typeof successCases[0] | null>(null);

  return (
    <div className="container mx-auto px-6">
      <motion.h2
        className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Success Cases
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {successCases.map((case_, index) => (
          <motion.div
            key={case_.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card
              image={case_.image}
              title={case_.title}
              description={case_.description}
              tags={case_.technologies}
              onClick={() => setSelectedCase(case_)}
            />
          </motion.div>
        ))}
      </div>

      <Modal
        isOpen={!!selectedCase}
        onClose={() => setSelectedCase(null)}
      >
        {selectedCase && (
          <>
            <div className="aspect-video w-full rounded-lg overflow-hidden mb-6">
              <img
                src={selectedCase.image}
                alt={selectedCase.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {selectedCase.title}
            </h2>
            <p className="text-gray-600 dark:text-purple-200 mb-6">
              {selectedCase.client}
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Challenge
                </h3>
                <p className="text-gray-600 dark:text-purple-200">
                  {selectedCase.challenge}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Solution
                </h3>
                <p className="text-gray-600 dark:text-purple-200">
                  {selectedCase.solution}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Results
                </h3>
                <ul className="space-y-2">
                  {selectedCase.results.map((result, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-600 dark:text-purple-200"
                    >
                      <ChevronRight size={16} className="text-purple-500" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {selectedCase.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
}