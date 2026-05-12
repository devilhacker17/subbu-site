import { motion } from 'framer-motion';
import { FiShield, FiHeart, FiStar } from 'react-icons/fi';
import { GiSparkles } from 'react-icons/gi';

const features = [
  { icon: GiSparkles, text: "PREMIUM QUALITY PRODUCTS" },
  { icon: FiShield, text: "HYGIENIC & SAFE ENVIRONMENT" },
  { icon: FiHeart, text: "CUSTOMISED LOOKS FOR YOU" },
  { icon: FiStar, text: "100% CLIENT SATISFACTION" }
];

const About = () => {
  return (
    <section id="about" className="py-24 min-h-screen flex flex-col justify-center bg-brand-dark border-t border-brand-rose/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full flex justify-center lg:justify-end pr-0 lg:pr-8"
          >
            <div className="aspect-[4/5] w-full max-w-[320px] md:max-w-[380px] overflow-hidden border border-brand-rose/20 p-2">
              <img 
                src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop" 
                alt="Amutha - Makeup Artist" 
                className="w-full h-full object-cover grayscale-[30%] contrast-125"
              />
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 mb-2">
              <h2 className="text-sm md:text-base font-heading text-brand-white tracking-[0.2em] uppercase">About Me</h2>
              <div className="h-[1px] w-8 bg-brand-rose/50"></div>
            </div>
            
            <h3 className="font-['Great_Vibes'] text-5xl md:text-6xl text-brand-rose mb-6">Amutha</h3>
            
            <p className="text-brand-white/70 leading-relaxed font-light text-sm md:text-base max-w-lg">
              A passionate and certified makeup artist with years of experience in bridal, party and editorial makeup. My mission is to enhance your natural beauty and make you feel the most confident version of yourself.
            </p>

            <div className="pt-8">
              <p className="font-['Great_Vibes'] text-3xl text-brand-white/50">Amutha <span className="text-brand-rose text-xl ml-2">♡</span></p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-brand-rose/10">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left"
            >
              <feature.icon className="text-3xl text-brand-rose flex-shrink-0" />
              <p className="text-[10px] sm:text-xs font-semibold text-brand-white/80 uppercase tracking-[0.1em]">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
