import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['HOME', 'ABOUT', 'SERVICES', 'GALLERY', 'REVIEWS', 'CONTACT'];

  const handleNavClick = (link: string) => {
    setIsOpen(false);
    const element = document.getElementById(link.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/95 backdrop-blur-sm py-4 shadow-lg border-b border-brand-rose/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer gap-3" onClick={() => handleNavClick('HOME')}>
            <span className="font-heading text-4xl text-brand-rose italic">A</span>
            <div className="flex flex-col">
              <span className="font-heading text-xl text-brand-rose tracking-[0.2em] leading-none">AMUTHA</span>
              <div className="flex items-center gap-1 mt-1 opacity-70">
                <div className="h-[1px] w-4 bg-brand-rose"></div>
                <span className="text-[0.5rem] text-brand-rose tracking-[0.3em] uppercase">Makeover Artistry</span>
                <div className="h-[1px] w-4 bg-brand-rose"></div>
              </div>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            <div className="flex space-x-8">
              {links.map((link) => (
                <button
                  key={link}
                  onClick={() => handleNavClick(link)}
                  className="text-brand-white/70 hover:text-brand-white transition-colors duration-200 text-xs font-medium tracking-[0.15em]"
                >
                  {link}
                </button>
              ))}
            </div>
            
            <button 
              onClick={() => handleNavClick('CONTACT')}
              className="px-6 py-2.5 bg-brand-nude text-brand-dark text-xs font-semibold tracking-wider hover:bg-brand-white transition-colors duration-300"
            >
              BOOK APPOINTMENT
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-nude hover:text-brand-white focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="lg:hidden overflow-hidden bg-brand-dark/95 backdrop-blur-md border-b border-brand-rose/10"
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              className="block w-full text-left py-3 text-brand-nude hover:text-brand-white text-sm font-medium tracking-[0.15em]"
            >
              {link}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick('CONTACT')}
            className="w-full mt-4 px-6 py-3 bg-brand-nude text-brand-dark text-xs font-semibold tracking-wider hover:bg-brand-white transition-colors duration-300"
          >
            BOOK APPOINTMENT
          </button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
