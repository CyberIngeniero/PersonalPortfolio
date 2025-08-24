import React from 'react';
import { motion } from 'framer-motion';
import { Download, Rocket } from 'lucide-react';
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
import SEO from '../components/shared/SEO';
import TypewriterText from '../components/TypewriterText';
import ScrollIndicator from '../components/ScrollIndicator';
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
    <div className="relative bg-black min-h-screen">
      <SEO />
      <Header />

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative overflow-hidden pt-24 flex flex-col items-center justify-center">
        <AnimatedBackground />
        <motion.div
          className="z-10 text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Typewriter Text */}
          <div className="mb-12 h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40 flex items-center justify-center text-center w-full px-4">
            <TypewriterText
              greetings={siteConfig.hero.greetings}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold w-full"
            />
          </div>

          {/* Subtitle */}
          <motion.h2
            className="text-2xl md:text-3xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {siteConfig.hero.subtitle}
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            {siteConfig.hero.description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <motion.a
              href={siteConfig.hero.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download CV
            </motion.a>
            <motion.a
              href={siteConfig.hero.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-transparent border-2 border-gray-600 text-white hover:border-purple-500 hover:text-purple-400 hover:bg-purple-500/10 px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Rocket
                size={20}
                className="group-hover:rotate-12 group-hover:scale-110 group-hover:text-purple-400 transition-all duration-300"
              />
              Let's Build Together
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <ScrollIndicator />
        </motion.div>
      </section>

      {/* Main content sections */}
      <div className="flex flex-col gap-0 bg-black">
        {/* Services Section */}
        <section id="services" className="py-20 bg-black">
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-4xl font-bold text-white mb-16 text-center"
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
        <section id="tech-stack" className="py-20 bg-gray-900/30">
          <TechStack />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-black">
          <ProjectsSection />
        </section>

        {/* Success Cases Section */}
        <section id="cases" className="py-20 bg-gray-900/30">
          <SuccessCases />
        </section>

        {/* Education & Experience Section */}
        <section id="education" className="py-20 bg-black">
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-4xl font-bold text-white mb-16 text-center"
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
        <section id="contact" className="py-20 bg-gray-900/30">
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
