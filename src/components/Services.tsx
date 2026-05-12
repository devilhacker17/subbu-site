import { motion } from 'framer-motion';
import { FiHeart, FiStar, FiScissors, FiBook } from 'react-icons/fi';

const servicesList = [
  { icon: FiHeart, title: 'BRIDAL MAKEUP', desc: 'Timeless looks for your special day' },
  { icon: FiStar, title: 'PARTY MAKEUP', desc: 'Glam looks for parties & receptions' },
  { icon: FiScissors, title: 'HAIR STYLING', desc: 'Elegant hairstyles for every occasion' },
  { icon: FiBook, title: 'MAKEUP CLASSES', desc: 'Learn professional tips from expert' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const Services = () => {
  return (
    <section id="services" className="py-24 min-h-screen flex flex-col justify-center bg-brand-dark border-t border-brand-rose/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-[1px] w-12 bg-brand-rose/50"></div>
          <h2 className="text-xl md:text-2xl font-heading text-brand-white tracking-[0.2em] uppercase">Our Services</h2>
          <div className="h-[1px] w-12 bg-brand-rose/50"></div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {servicesList.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group bg-brand-dark-light border border-brand-rose/30 hover:border-brand-rose transition-all duration-500 cursor-pointer flex flex-col items-center text-center p-10 h-full"
            >
              <div className="mb-6">
                <service.icon className="text-5xl text-brand-rose font-light transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h3 className="text-sm font-heading text-brand-rose mb-3 tracking-[0.15em] uppercase">{service.title}</h3>
              <p className="text-brand-white/60 font-light text-xs leading-relaxed max-w-[200px]">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
