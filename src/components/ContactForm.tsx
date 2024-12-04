import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Rocket, CheckCircle, AlertCircle } from 'lucide-react';
import axios from 'axios';
import { ContactConfig } from '../config/contact';

interface ContactFormProps {
  config: ContactConfig;
  className?: string;
}

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
  rocket: Rocket
};

export default function ContactForm({ config, className = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await axios.post(config.emailService.apiUrl, {
        sender: config.emailService.sender,
        to: [config.emailService.recipient],
        subject: `New Contact Form Message from ${formData.name}`,
        htmlContent: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message}</p>
        `
      }, {
        headers: {
          'accept': 'application/json',
          'api-key': config.emailService.apiKey,
          'content-type': 'application/json'
        }
      });

      if (response.status === 201) {
        setShowSuccess(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });

        setTimeout(() => {
          setIsSubmitting(false);
          setShowSuccess(false);
        }, config.form.submitButton.loadingDuration);
      }
    } catch (err) {
      console.error('Error sending message:', err);
      setError('Failed to send message. Please try again.');
      setIsSubmitting(false);
    }
  };

  const buttonContentVariants = {
    initial: { opacity: 1 },
    submitting: { opacity: 0, transition: { duration: 0.2 } },
    success: { opacity: 0 }
  };

  const rocketVariants = {
    initial: { x: 0, opacity: 1 },
    submitting: { x: 0, opacity: 1 },
    launch: { 
      x: config.animations.rocket.distance,
      y: -config.animations.rocket.height,
      rotate: config.animations.rocket.rotation,
      opacity: 0,
      transition: { 
        duration: config.animations.rocket.duration,
        ease: "easeOut"
      }
    }
  };

  const successVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: config.animations.success.duration }
    },
    exit: { 
      opacity: 0,
      transition: { duration: config.animations.success.duration }
    }
  };

  return (
    <motion.div 
      className={`max-w-4xl w-full bg-white dark:bg-white/5 shadow-lg dark:shadow-none backdrop-blur-lg rounded-2xl p-8 border border-gray-200 dark:border-purple-500/20 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">{config.title}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {Object.entries(config.socialLinks).map(([platform, link]) => {
            const Icon = iconMap[link.icon as keyof typeof iconMap];
            return Icon ? (
              <motion.div 
                key={platform}
                className="flex items-center gap-4 text-gray-600 dark:text-purple-200"
                whileHover={{ x: 10 }}
              >
                <Icon className="w-6 h-6" />
                <a 
                  href={platform === 'email' ? `mailto:${link.url}` : `https://${link.url}`}
                  className="hover:text-gray-900 dark:hover:text-purple-400 transition-colors"
                >
                  {link.url}
                </a>
              </motion.div>
            ) : null;
          })}
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-red-500 bg-red-100 dark:bg-red-900/20 p-3 rounded-lg"
            >
              <AlertCircle size={20} />
              <span>{error}</span>
            </motion.div>
          )}
          <input
            type="text"
            placeholder={config.form.fields.name.placeholder}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required={config.form.fields.name.required}
            className="w-full bg-gray-50 dark:bg-white/10 border border-gray-200 dark:border-purple-500/20 rounded-lg px-4 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-purple-300 focus:outline-none focus:border-purple-500"
          />
          <input
            type="email"
            placeholder={config.form.fields.email.placeholder}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required={config.form.fields.email.required}
            className="w-full bg-gray-50 dark:bg-white/10 border border-gray-200 dark:border-purple-500/20 rounded-lg px-4 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-purple-300 focus:outline-none focus:border-purple-500"
          />
          <textarea
            placeholder={config.form.fields.message.placeholder}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required={config.form.fields.message.required}
            rows={config.form.fields.message.rows}
            className="w-full bg-gray-50 dark:bg-white/10 border border-gray-200 dark:border-purple-500/20 rounded-lg px-4 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-purple-300 focus:outline-none focus:border-purple-500"
          />
          <motion.button 
            type="submit"
            disabled={isSubmitting}
            className="relative w-full h-12 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg overflow-hidden transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className="absolute inset-0 flex items-center justify-center gap-2"
              variants={buttonContentVariants}
              initial="initial"
              animate={isSubmitting ? "submitting" : showSuccess ? "success" : "initial"}
            >
              {iconMap[config.form.submitButton.icon] && 
                React.createElement(iconMap[config.form.submitButton.icon], { className: "w-5 h-5" })}
              <span>{config.form.submitButton.text}</span>
            </motion.div>

            {isSubmitting && !showSuccess && (
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  variants={rocketVariants}
                  initial="initial"
                  animate="launch"
                  className="flex items-center gap-2"
                >
                  <Rocket className="w-5 h-5" />
                </motion.div>
              </motion.div>
            )}

            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  variants={successVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute inset-0 flex items-center justify-center gap-2 bg-green-500"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>{config.form.submitButton.successText}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}