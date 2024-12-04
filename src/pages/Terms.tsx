import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '../config/site';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Header />
      <motion.div 
        className="flex-grow container mx-auto pt-32 pb-20 px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </motion.div>
        
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Terms of Service</h1>
        {/* Rest of the content remains the same */}
      </motion.div>
      <Footer />
    </div>
  );
}