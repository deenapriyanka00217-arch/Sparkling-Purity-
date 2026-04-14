import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, MapPin, MessageCircle, ChevronRight, CheckCircle2, 
  Star, Clock, ShieldCheck, ArrowUp, Menu, X 
} from 'lucide-react';
import { COMPANY_NAME, ADDRESS, PRIMARY_PHONE, SECONDARY_PHONE, WHATSAPP_NUMBER, SERVICES } from './constants';

const Navbar = ({ isDark, toggleTheme }: { isDark: boolean, toggleTheme: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#020617]/80 backdrop-blur-lg h-20 flex items-center border-b border-slate-100 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg transition-transform hover:rotate-6 border border-slate-100 dark:border-slate-800">
              <img 
                src="https://storage.googleapis.com/firebasestorage.v0.appspot.com/o/applets%2F95e0c400-a2ae-410a-88fb-7992f531da9b%2Fattachments%2F1744631818224_logo.jpg?alt=media&token=e6638069-5f2c-4712-9844-3676878b273b" 
                alt="VN Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">
                Sparkling Purity
              </h1>
              <p className="text-[10px] font-semibold text-rose-600 dark:text-rose-400 tracking-wider uppercase">
                Cleaning Service
              </p>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a 
              href={`tel:${PRIMARY_PHONE}`}
              className="hidden sm:flex bg-rose-600 hover:bg-rose-700 text-white px-5 py-2.5 rounded-full font-bold text-sm items-center gap-2 shadow-lg shadow-rose-200 dark:shadow-none transition-all hover:scale-105 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>

            <button 
              className="md:hidden p-2 text-slate-600 dark:text-slate-300 active:scale-90 transition-transform"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 md:hidden bg-white/95 dark:bg-[#020617]/95 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800 shadow-2xl z-40"
          >
            <div className="px-4 py-8 space-y-6">
              {navLinks.map((link, idx) => (
                <motion.a 
                  key={link.name} 
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="block text-2xl font-bold text-slate-900 dark:text-white hover:text-rose-600 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a 
                  href={`tel:${PRIMARY_PHONE}`}
                  className="block w-full bg-rose-600 text-white text-center py-5 rounded-2xl font-bold text-lg shadow-xl shadow-rose-200 dark:shadow-none"
                >
                  Call Us Now
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-20 overflow-hidden bg-white dark:bg-[#020617]">
      {/* Background 3D Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            y: [0, 50, 0],
            x: [0, 30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 -left-20 w-64 h-64 sm:w-96 sm:h-96 bg-rose-400/10 dark:bg-rose-600/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            rotate: [360, 0],
            y: [0, -50, 0],
            x: [0, -30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 -right-20 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-400/10 dark:bg-cyan-600/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-900/20 border border-rose-100 dark:border-rose-800 text-rose-600 dark:text-rose-400 text-xs sm:text-sm font-semibold mb-6">
              <Star className="w-4 h-4 fill-rose-600 dark:fill-rose-400" />
              <span>#1 Cleaning Service in Chennai</span>
            </div>
            <h2 className="text-4xl sm:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1] mb-6">
              Experience the Joy of a <span className="gradient-text">Sparkling Clean</span> Space
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
              Professional, reliable, and thorough cleaning services for your home and office. We bring the sparkle back to your environment with our expert team.
            </p>
            
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
              {['Same Day Service', 'Affordable Price', 'Verified Professionals', 'Doorstep Service'].map((badge) => (
                <span key={badge} className="px-3 py-1 rounded-lg bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 text-[10px] sm:text-xs font-bold border border-rose-100 dark:border-rose-800">
                  {badge}
                </span>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#services"
                className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-xl shadow-rose-200 dark:shadow-none transition-all hover:-translate-y-1"
              >
                View Services
                <ChevronRight className="w-5 h-5" />
              </a>
              <div className="flex items-center gap-4 px-6 py-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-rose-50 dark:bg-rose-900/30 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Contact Us</p>
                  <p className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">{SECONDARY_PHONE}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative perspective-1000"
          >
            <motion.div 
              animate={{ 
                rotateY: [-5, 5, -5],
                rotateX: [2, -2, 2]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl preserve-3d"
            >
              <img 
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=1200" 
                alt="Professional Cleaning"
                className="w-full h-[350px] sm:h-[550px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                <div className="glass-card p-4 sm:p-6 rounded-2xl sm:rounded-3xl">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-rose-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                      <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-base sm:text-lg">Premium Quality</p>
                      <p className="text-rose-200 text-xs sm:text-sm">Professional Grade Equipment</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* 3D Floating Elements */}
            <motion.div 
              animate={{ 
                y: [0, -20, 0],
                rotateZ: [0, 5, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-4 sm:-top-10 sm:-right-10 z-20 glass-card p-3 sm:p-5 rounded-2xl sm:rounded-3xl shadow-2xl preserve-3d"
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-green-500 rounded-lg sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 shadow-lg shadow-green-200 dark:shadow-none">
                <CheckCircle2 className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </div>
              <p className="font-bold text-slate-900 dark:text-white text-[10px] sm:text-sm">100% Satisfaction</p>
              <p className="text-[8px] sm:text-xs text-slate-500 dark:text-slate-400">Guaranteed Result</p>
            </motion.div>

            <motion.div 
              animate={{ 
                y: [0, 20, 0],
                rotateZ: [0, -5, 0]
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-4 sm:-bottom-10 sm:-left-10 z-20 glass-card p-3 sm:p-5 rounded-2xl sm:rounded-3xl shadow-2xl preserve-3d"
            >
              <div className="flex items-center gap-0.5 sm:gap-1 mb-1 sm:mb-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="font-bold text-slate-900 dark:text-white text-[10px] sm:text-sm">4.9/5 Rating</p>
              <p className="text-[8px] sm:text-xs text-slate-500 dark:text-slate-400">Based on 500+ reviews</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: typeof SERVICES[0];
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const whatsappMessage = encodeURIComponent(`Hi, I am interested in your ${service.title} service. Please provide more details.`);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white dark:bg-slate-900 rounded-[1.25rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
    >
      <div className="relative h-44 overflow-hidden shrink-0">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-3 left-3">
          <div className="w-8 h-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg text-rose-600 dark:text-rose-400">
            <service.icon className="w-4 h-4" />
          </div>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
          {service.title}
        </h3>
        <p className="text-xs text-slate-600 dark:text-slate-400 mb-5 line-clamp-3 leading-relaxed">
          {service.description}
        </p>

        <div className="mt-auto">
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-2.5 rounded-lg font-bold flex items-center justify-center gap-2 transition-all neon-shadow-whatsapp text-xs"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Book Now
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-12 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-rose-600 dark:text-rose-400 font-bold tracking-widest uppercase text-[10px] mb-2">Our Expertise</h2>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            Services We Provide
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            We offer a wide range of professional cleaning solutions tailored to your specific needs. From residential to commercial, we handle it all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SERVICES.map((service, index) => (
            <div key={service.id}>
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-900 dark:bg-[#020617] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg border border-slate-800">
                <img 
                  src="https://storage.googleapis.com/firebasestorage.v0.appspot.com/o/applets%2F95e0c400-a2ae-410a-88fb-7992f531da9b%2Fattachments%2F1744631818224_logo.jpg?alt=media&token=e6638069-5f2c-4712-9844-3676878b273b" 
                  alt="VN Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-bold leading-tight">{COMPANY_NAME}</h4>
                <p className="text-xs sm:text-sm text-rose-400 font-semibold tracking-wider uppercase">Sparkling Purity</p>
              </div>
            </div>
            <p className="text-slate-400 text-base sm:text-lg mb-10 max-w-md leading-relaxed">
              Your trusted partner for professional cleaning services in Chennai. We are committed to delivering excellence and ensuring your spaces are spotless and hygienic.
            </p>
            <div className="flex gap-4">
              {[Star, Clock, ShieldCheck].map((Icon, i) => (
                <div key={i} className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center hover:bg-rose-600 transition-all cursor-pointer group">
                  <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8">Quick Links</h5>
            <ul className="space-y-3 sm:space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-rose-400 transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Home</a></li>
              <li><a href="#about" className="hover:text-rose-400 transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> About Us</a></li>
              <li><a href="#services" className="hover:text-rose-400 transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Services</a></li>
              <li><a href="#contact" className="hover:text-rose-400 transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8">Get In Touch</h5>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-rose-600/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-rose-500" />
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {ADDRESS}
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-rose-600/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-rose-500" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{PRIMARY_PHONE}</p>
                  <p className="text-white font-bold text-sm">{SECONDARY_PHONE}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Searches Section */}
        <div className="border-t border-slate-800/10 py-16">
          <h5 className="text-2xl font-bold mb-12">Popular Searches</h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {SERVICES.map((service) => (
              <div key={service.id} className="flex flex-col">
                <h6 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-600"></div>
                  {service.title}
                </h6>
                <ul className="space-y-2.5">
                  {service.keywords?.map((keyword, index) => (
                    <li 
                      key={index} 
                      className="text-[10px] text-slate-500 hover:text-rose-400 transition-colors cursor-default leading-relaxed"
                    >
                      {keyword}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-800/10 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex gap-2 text-slate-500 text-sm">
              <span>designed by</span>
              <a 
                href="https://share.google/UEdnMPbQAsCSNWyfi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-rose-400 transition-colors font-medium"
              >
                my-dp.digital
              </a>
            </div>
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingButtons = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-14 h-14 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl shadow-2xl flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-700 transition-all hover:-translate-y-1 active:scale-95 border border-slate-100 dark:border-slate-700"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
      
      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600 transition-all hover:-translate-y-1 active:scale-95 group relative"
      >
        <svg 
          viewBox="0 0 24 24" 
          className="w-8 h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="absolute right-full mr-4 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
      </motion.a>
    </div>
  );
};

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-[#020617]">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main className="pt-20">
        <Hero />
        
        {/* SEO Location Section (Hidden) */}
        <section className="sr-only">
          <h2>Cleaning Services in Chennai and Surrounding Areas</h2>
          <p>We serve Iyyappanthangal, Thundalam, Porur, Kattupakkam, Valasaravakkam, Anna Nagar, Poonamallee, and Kundrathur.</p>
          <p>Same day service Chennai, affordable price, verified professionals, doorstep service.</p>
        </section>
        <section id="about" className="py-16 sm:py-24 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-20 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] bg-rose-50 dark:bg-rose-900/20 border border-rose-100 dark:border-rose-800">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-rose-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-rose-200 dark:shadow-none">
                        <Star className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">Expert Team</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">Trained professionals with years of experience in deep cleaning.</p>
                    </div>
                    <div className="p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-900 dark:bg-slate-800 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                        <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">Safe & Secure</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">Eco-friendly products and safe cleaning methods for your family.</p>
                    </div>
                  </div>
                  <div className="space-y-4 sm:space-y-6 mt-8 sm:mt-12">
                    <div className="p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-900 dark:bg-slate-800 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                        <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">On Time</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">We value your time and always arrive exactly as scheduled.</p>
                    </div>
                    <div className="p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-green-200 dark:shadow-none">
                        <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">Best Prices</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">Competitive pricing with no hidden charges or surprises.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <h2 className="text-rose-600 dark:text-rose-400 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4">About Our Company</h2>
                <h3 className="text-3xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 sm:mb-8 leading-tight">
                  We Don't Just Clean, We <span className="gradient-text">Care</span> For Your Space
                </h3>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 sm:mb-10 leading-relaxed">
                  Our mission is to provide a clean and healthy environment for our customers. We use the latest technology and high-quality cleaning agents to ensure the best results every time.
                </p>
                <div className="space-y-4 sm:space-y-6">
                  {[
                    "Eco-friendly cleaning solutions",
                    "Customized cleaning plans",
                    "Fully insured and bonded team",
                    "100% satisfaction guarantee"
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 sm:gap-4 text-slate-700 dark:text-slate-300 font-semibold text-sm sm:text-base"
                    >
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-rose-100 dark:bg-rose-900/40 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-rose-600 dark:text-rose-400" />
                      </div>
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Services />
        
        {/* CTA Section */}
        <section className="py-16 bg-slate-50 dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-rose-600 dark:bg-rose-700 rounded-[2.5rem] p-10 sm:p-16 text-center relative overflow-hidden shadow-2xl shadow-rose-200 dark:shadow-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/20 rounded-full -ml-48 -mb-48 blur-3xl"></div>
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
                  Ready to Make Your Space Shine?
                </h2>
                <p className="text-rose-100 text-lg mb-8 leading-relaxed">
                  Contact us today for a free quote and experience the best cleaning service in Chennai.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-rose-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Chat on WhatsApp
                  </a>
                  <a 
                    href={`tel:${PRIMARY_PHONE}`}
                    className="bg-rose-800/50 text-white border border-rose-400/30 backdrop-blur-sm px-8 py-4 rounded-2xl font-bold text-lg hover:bg-rose-800 transition-all flex items-center justify-center gap-3"
                  >
                    <Phone className="w-6 h-6" />
                    Call Us Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
