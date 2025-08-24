import { motion } from 'framer-motion';
import { Code, Github, Linkedin, Twitter, Download } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import Search from './Search';
import { siteConfig } from '../config/site';

const menuItems = [
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#cases', label: 'Success Cases' }
];

export default function Header() {
  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-gray-800/50"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center gap-2 text-white"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection('#home')}
        >
          <Code size={24} />
          <span className="font-bold text-lg">{siteConfig.name}</span>
        </motion.a>

        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <motion.button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-gray-300 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              {item.label}
            </motion.button>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <Search />

          <ThemeToggle />

          <div className="h-6 w-px bg-gray-600/50" />

          <div className="flex items-center gap-4">
            {siteConfig.socials.map((social) => (
              <motion.a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 p-2 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.platform === 'GitHub' && <Github size={20} />}
                {social.platform === 'LinkedIn' && <Linkedin size={20} />}
                {social.platform === 'Twitter' && <Twitter size={20} />}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
