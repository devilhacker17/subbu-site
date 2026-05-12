import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const handleClick = () => {
    const whatsappNumber = "919080986643";
    const text = "Hello! I visited your website and would like to know more about your services.";
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, type: "spring" }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-colors duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 ease-in-out font-medium text-sm">
        Chat with us
      </span>
      
      {/* Pulse effect */}
      <span className="absolute flex h-full w-full inset-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-40"></span>
      </span>
    </motion.button>
  );
};

export default WhatsAppButton;
