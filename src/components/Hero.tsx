import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 lg:pt-0 min-h-screen lg:h-screen flex items-center bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full h-full">
          
          {/* Text Content */}
          <div className="z-20 text-left pt-10 pb-10 lg:py-0">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading text-brand-white mb-2 leading-tight"
            >
              Enhancing Beauty.
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-[1px] bg-brand-rose"></div>
              <span className="font-['Great_Vibes'] text-5xl md:text-7xl text-brand-rose pr-4 py-2">Empowering You.</span>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-sm md:text-base text-brand-white/80 font-medium tracking-[0.2em] uppercase max-w-md mb-10 leading-relaxed"
            >
              Professional makeup artistry for every occasion
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-4 bg-brand-nude text-brand-dark font-semibold uppercase tracking-widest text-xs hover:bg-brand-white transition-all duration-300 shadow-lg"
              >
                Book Your Look
              </button>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="relative h-[50vh] lg:h-full w-full flex justify-end items-center"
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-dark via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-brand-dark" />
            <img 
              src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1000&auto=format&fit=crop" 
              alt="Bridal Makeup Portrait" 
              className="w-full h-full object-cover object-top lg:object-center max-h-[85vh] lg:max-h-screen"
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
