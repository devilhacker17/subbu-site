import { useState } from 'react';
import { motion } from 'framer-motion';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    mobile: '',
    place: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Hello Amutha! I would like to book an appointment.%0A%0A*Name:* ${formData.name}%0A*Mobile:* ${formData.mobile}%0A*Place:* ${formData.place}%0A*Date:* ${formData.date}`;
    const whatsappNumber = "919080986643";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 min-h-screen flex flex-col justify-center bg-[#110e10] border-t border-brand-rose/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-heading text-brand-white tracking-[0.1em] uppercase mb-2">Book An Appointment</h2>
              <p className="text-brand-white/50 text-xs font-light tracking-wide">Let's create your perfect look</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-brand-white/20 focus:border-brand-rose py-3 px-4 text-brand-white outline-none transition-colors text-xs"
                  placeholder="Name"
                />

                <input
                  type="tel"
                  name="mobile"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-brand-white/20 focus:border-brand-rose py-3 px-4 text-brand-white outline-none transition-colors text-xs"
                  placeholder="Mobile Number"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="place"
                  required
                  value={formData.place}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-brand-white/20 focus:border-brand-rose py-3 px-4 text-brand-white outline-none transition-colors text-xs"
                  placeholder="Place/Location"
                />

                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-brand-white/20 focus:border-brand-rose py-3 px-4 text-brand-white/50 outline-none transition-colors text-xs"
                  style={{ colorScheme: 'dark' }}
                />
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full md:w-1/2 py-3 bg-brand-nude text-brand-dark text-xs font-semibold uppercase tracking-wider hover:bg-brand-white transition-colors duration-300"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:flex justify-end"
          >
            <div className="h-48 w-48 relative">
              <img
                src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=400&auto=format&fit=crop"
                alt="Makeup Brushes"
                className="w-full h-full object-cover rounded-full grayscale-[50%] brightness-75 border-4 border-brand-dark-light shadow-2xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Booking;
