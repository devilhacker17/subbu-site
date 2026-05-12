import { FaInstagram, FaWhatsapp, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-brand-dark pt-20 pb-10 border-t border-brand-rose/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-heading text-3xl font-bold text-brand-white tracking-widest uppercase mb-4">Elegance</span>
            <p className="text-brand-nude/80 font-light text-center md:text-left max-w-xs mb-6">
              Enhancing beauty and empowering you with luxury bridal and party makeup services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-brand-rose/50 flex items-center justify-center text-brand-rose hover:bg-brand-rose hover:text-brand-dark transition-all duration-300">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-rose/50 flex items-center justify-center text-brand-rose hover:bg-brand-rose hover:text-brand-dark transition-all duration-300">
                <FaWhatsapp size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-rose/50 flex items-center justify-center text-brand-rose hover:bg-brand-rose hover:text-brand-dark transition-all duration-300">
                <FaFacebookF size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-heading text-xl text-brand-white mb-6 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3 text-brand-nude/80 font-light text-center md:text-left">
              <li><a href="#home" className="hover:text-brand-rose transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-rose transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-brand-rose transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-brand-rose transition-colors">Portfolio</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-heading text-xl text-brand-white mb-6 uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-4 text-brand-nude/80 font-light text-center md:text-left">
              <li>
                <strong className="block text-brand-rose text-sm mb-1 uppercase tracking-wider">Studio Location</strong>
                123 Luxury Avenue, Fashion District<br/>
                Mumbai, Maharashtra 400001
              </li>
              <li>
                <strong className="block text-brand-rose text-sm mb-1 uppercase tracking-wider">Phone / WhatsApp</strong>
                +91 98765 43210
              </li>
              <li>
                <strong className="block text-brand-rose text-sm mb-1 uppercase tracking-wider">Email</strong>
                hello@elegancebeauty.com
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-brand-white/10 pt-8 text-center flex flex-col md:flex-row justify-between items-center text-sm text-brand-nude/50">
          <p>&copy; {new Date().getFullYear()} Elegance Beauty Parlour. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with luxury in mind.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
