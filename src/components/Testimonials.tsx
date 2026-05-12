import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  {
    id: 1,
    name: "- Priya S.",
    text: "Amutha ma'am is truly amazing! She made me look my best on my big day. Everyone loved the look!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "- Ananya R.",
    text: "Professional, punctual, and incredibly talented. She understood exactly what I wanted for my reception.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "- Meera I.",
    text: "The best makeup artist I've ever worked with. Her attention to detail and the quality of products is truly premium.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-24 min-h-screen flex flex-col justify-center bg-[#110e10] border-t border-brand-rose/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] w-8 bg-brand-rose/50"></div>
          <h2 className="text-xl md:text-2xl font-heading text-brand-white tracking-[0.2em] uppercase">Testimonials</h2>
          <div className="h-[1px] w-8 bg-brand-rose/50"></div>
        </div>

        <div className="text-center mb-8">
          <span className="font-heading text-6xl text-brand-rose leading-none block">“</span>
        </div>

        <div className="relative h-[200px] md:h-[150px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
            >
              <p className="text-sm md:text-base font-light text-brand-white/80 mb-6 leading-relaxed max-w-xl">
                {reviews[current].text}
              </p>
              <div className="flex items-center gap-3">
                <img src={reviews[current].image} alt={reviews[current].name} className="w-8 h-8 rounded-full object-cover grayscale-[20%]" />
                <h4 className="font-heading text-brand-white/90 text-sm tracking-wider">{reviews[current].name}</h4>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-4">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                current === index ? 'bg-brand-white w-4' : 'bg-brand-white/30 hover:bg-brand-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
