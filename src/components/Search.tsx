import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search as SearchIcon, X } from 'lucide-react';
import { content } from '../config/content';
import { projects } from '../config/projects';
import { successCases } from '../config/cases';

interface SearchResult {
  title: string;
  description: string;
  sectionId: string;
  keywords?: string[];
}

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  // Build comprehensive search index from all content
  const searchIndex: SearchResult[] = [
    // Services
    ...content.services.map(service => ({
      title: service.title,
      description: service.shortDesc,
      sectionId: 'services',
      keywords: [...service.features, service.title.toLowerCase(), service.shortDesc.toLowerCase()]
    })),
    // Education
    ...content.education.map(edu => ({
      title: edu.title,
      description: `${edu.organization} - ${edu.year}`,
      sectionId: 'education',
      keywords: [edu.title.toLowerCase(), edu.organization.toLowerCase(), edu.description.toLowerCase()]
    })),
    // Experience
    ...content.experience.map(exp => ({
      title: exp.title,
      description: `${exp.organization} - ${exp.year}`,
      sectionId: 'education',
      keywords: [exp.title.toLowerCase(), exp.organization.toLowerCase(), exp.description.toLowerCase()]
    })),
    // Projects
    ...projects.map(project => ({
      title: project.title,
      description: project.description,
      sectionId: 'projects',
      keywords: [...project.technologies, project.title.toLowerCase(), project.description.toLowerCase()]
    })),
    // Success Cases
    ...successCases.map(case_ => ({
      title: case_.title,
      description: case_.description,
      sectionId: 'cases',
      keywords: [...case_.technologies, case_.title.toLowerCase(), case_.description.toLowerCase(), case_.client.toLowerCase()]
    }))
  ];

  const searchResults = searchIndex.filter(result => {
    const searchQuery = query.toLowerCase();
    return (
      result.title.toLowerCase().includes(searchQuery) ||
      result.description.toLowerCase().includes(searchQuery) ||
      result.keywords?.some(keyword => keyword.includes(searchQuery))
    );
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelect = (result: SearchResult) => {
    setIsOpen(false);
    setQuery('');
    const element = document.getElementById(result.sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-gray-600 hover:text-gray-900 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
        title="Search (⌘K)"
      >
        <SearchIcon size={20} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-lg z-50"
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
                <div className="relative">
                  <SearchIcon 
                    size={20} 
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Search... (Esc to close)"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-transparent border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none"
                    autoFocus
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                {searchResults.length > 0 && (
                  <div className="max-h-96 overflow-y-auto py-2">
                    {searchResults.map((result, index) => (
                      <motion.button
                        key={`${result.title}-${index}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ 
                          opacity: 1, 
                          y: 0,
                          transition: { delay: index * 0.05 }
                        }}
                        onClick={() => handleSelect(result)}
                        className="w-full px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
                      >
                        <h3 className="text-gray-900 dark:text-white font-medium">
                          {result.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {result.description}
                        </p>
                        <span className="text-xs text-purple-500 mt-1 block">
                          {result.sectionId.charAt(0).toUpperCase() + result.sectionId.slice(1)}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                )}
                
                {query && searchResults.length === 0 && (
                  <div className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                    No results found for "{query}"
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}