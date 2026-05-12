import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const allImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop", category: "BRIDAL" },
  { id: 2, src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop", category: "PARTY" },
  { id: 3, src: "https://images.unsplash.com/photo-1516975080661-46bce05915d5?q=80&w=800&auto=format&fit=crop", category: "ENGAGEMENT" },
  { id: 4, src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop", category: "HAIR STYLES" },
  { id: 5, src: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=800&auto=format&fit=crop", category: "BRIDAL" },
  { id: 6, src: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=800&auto=format&fit=crop", category: "PARTY" }
];

const categories = ["BRIDAL", "PARTY", "ENGAGEMENT", "HAIR STYLES"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("BRIDAL");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = allImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-24 min-h-screen flex flex-col justify-center bg-[#110e10] border-t border-brand-rose/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="flex items-center justify-center gap-4 mb-10">
          <h2 className="text-xl md:text-2xl font-heading text-brand-white tracking-[0.2em] uppercase">Gallery</h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-6 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-[10px] sm:text-xs font-semibold tracking-[0.15em] transition-colors duration-300 ${
                activeCategory === cat 
                  ? 'bg-brand-rose/20 text-brand-rose border border-brand-rose' 
                  : 'text-brand-white/50 hover:text-brand-white border border-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[3/4] overflow-hidden cursor-pointer border border-brand-white/5"
                onClick={() => setSelectedImage(img.src)}
              >
                <img 
                  src={img.src} 
                  alt={img.category} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-brand-rose/10 border border-brand-rose text-brand-rose text-xs tracking-widest uppercase hover:bg-brand-rose hover:text-brand-dark transition-colors duration-300">
            View More
          </button>
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-brand-dark/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          >
            <button 
              className="absolute top-8 right-8 text-brand-white hover:text-brand-rose transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <FiX size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              src={selectedImage}
              alt="Selected Portfolio"
              className="max-h-[90vh] max-w-full object-contain border-2 border-brand-rose/30 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
