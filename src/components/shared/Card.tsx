import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  image: string;
  title: string;
  description: string;
  tags?: string[];
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function Card({
  image,
  title,
  description,
  tags,
  onClick,
  children
}: CardProps) {
  return (
    <motion.div
      onClick={onClick}
      className="group cursor-pointer h-full"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <div className="relative overflow-hidden rounded-xl bg-white dark:bg-purple-900/20 border border-gray-200 dark:border-purple-500/20 h-full flex flex-col">
        <div className="aspect-video flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-purple-200 mb-4 flex-grow">
            {description}
          </p>
          
          {tags && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          {children}
        </div>
      </div>
    </motion.div>
  );
}