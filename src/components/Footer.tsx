import React from 'react';
import { motion } from 'framer-motion';
import { footerConfig } from '../config/footer';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-black/50 backdrop-blur-lg border-t border-gray-200 dark:border-purple-500/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {footerConfig.sections.slice(0, 3).map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-gray-900 dark:text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      className="text-gray-600 hover:text-gray-900 dark:text-purple-200 dark:hover:text-purple-400 transition-colors"
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <div className="border-t border-gray-200 dark:border-purple-500/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 dark:text-purple-200 text-sm">
            © {currentYear} {footerConfig.copyright}
          </p>
          <div className="flex gap-6">
            {footerConfig.bottomLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-gray-600 hover:text-gray-900 dark:text-purple-200 dark:hover:text-purple-400 text-sm transition-colors"
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}