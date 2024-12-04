import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Sparkles } from 'lucide-react';
import Header from '../components/Header';
import Timeline from '../components/Timeline';
import ContactForm from '../components/ContactForm';
import AnimatedBackground from '../components/AnimatedBackground';
import ServiceCard from '../components/ServiceCard';
import ServiceModal from '../components/ServiceModal';
import ProjectsSection from '../components/ProjectsSection';
import TechStack from '../components/TechStack';
import SuccessCases from '../components/SuccessCases';
import Footer from '../components/Footer';
import { siteConfig } from '../config/site';
import { content } from '../config/content';
import { contactConfig } from '../config/contact';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="relative bg-white dark:bg-slate-900 transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen relative overflow-hidden pt-24 flex items-center justify-center">
        <AnimatedBackground />
        <motion.div 
          className="z-10 text-center px-4"
          {...fadeInUp}
        >
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">{siteConfig.name}</h1>
          <p className="text-2xl text-gray-600 dark:text-purple-200 mb-12">{siteConfig.title}</p>
          
          <div className="flex gap-4 justify-center">
            <motion.a 
              href="#contact"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare size={20} />
              Contact Me
            </motion.a>
            <motion.a
              href="#services"
              className="bg-transparent border-2 border-purple-400 text-purple-600 dark:text-purple-200 hover:bg-purple-50 dark:hover:bg-purple-800/30 px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles size={20} />
              View Services
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Main content sections */}
      <div className="flex flex-col gap-0">
        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-6">
            <motion.h2 
              className="text-4xl font-bold text-gray-900 dark:text-white mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Services
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {content.services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack" className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
          <TechStack />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <ProjectsSection />
        </section>

        {/* Success Cases Section */}
        <section id="cases" className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
          <SuccessCases />
        </section>

        {/* Education & Experience Section */}
        <section id="education" className="py-20">
          <div className="container mx-auto px-6">
            <motion.h2 
              className="text-4xl font-bold text-gray-900 dark:text-white mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Professional Journey
            </motion.h2>
            <Timeline />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
          <div className="container mx-auto px-6 flex items-center justify-center">
            <ContactForm config={contactConfig} />
          </div>
        </section>
      </div>

      <Footer />
      <ServiceModal />
    </div>
  );
}