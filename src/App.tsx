import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, MapPin, MessageCircle, ChevronRight, ChevronLeft, CheckCircle2, 
  Star, Clock, ShieldCheck, ArrowUp, Menu, X, ChevronDown 
} from 'lucide-react';
import { COMPANY_NAME, ADDRESS, PRIMARY_PHONE, SECONDARY_PHONE, WHATSAPP_NUMBER, SERVICES } from './constants';
import { BannerSlider } from './components/BannerSlider';

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
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden flex items-center justify-center transition-all hover:scale-105 group/logo">
              <img 
                src="images/logo.jpeg" 
                alt="VN Logo" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/clean/100/100';
                }}
              />
            </div>
            <div className="block">
              <h1 className="text-sm sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">
                Sparkling Purity
              </h1>
              <p className="text-[9px] sm:text-[10px] font-semibold text-rose-600 dark:text-rose-400 tracking-wider uppercase">
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
            className="flex flex-col items-center sm:items-start text-center sm:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-900/20 border border-rose-100 dark:border-rose-800 text-rose-600 dark:text-rose-400 text-xs sm:text-sm font-semibold mb-6">
              <Star className="w-4 h-4 fill-rose-600 dark:fill-rose-400" />
              <span>#1 Cleaning Service in Chennai</span>
            </div>
            <h2 className="text-3xl sm:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1] mb-6">
              Experience the Joy of a <span className="gradient-text">Sparkling Clean</span> Space
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
              Professional, reliable, and thorough cleaning services for your home and office. We bring the sparkle back to your environment with our expert team.
            </p>
            
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 mb-8">
              {['Same Day Service', 'Affordable Price', 'Verified Professionals', 'Doorstep Service'].map((badge) => (
                <span key={badge} className="px-3 py-1 rounded-lg bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 text-[10px] sm:text-xs font-bold border border-rose-100 dark:border-rose-800">
                  {badge}
                </span>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
              <a 
                href={`tel:9710912592`}
                className="w-fit sm:w-auto flex items-center gap-4 px-5 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md group/call"
              >
                <div className="w-10 h-10 rounded-full bg-rose-50 dark:bg-rose-900/30 flex items-center justify-center shrink-0 group-hover/call:bg-rose-600 transition-colors">
                  <Phone className="w-5 h-5 text-rose-600 dark:text-rose-400 group-hover/call:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">Primary No</p>
                  <p className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">9710912592</p>
                </div>
              </a>
              <div className="w-fit sm:w-auto flex items-center gap-4 px-5 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-rose-50 dark:bg-rose-900/30 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">Contact Us</p>
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
              <div className="w-full h-[350px] sm:h-[550px]">
                <BannerSlider />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                <div className="glass-card p-4 sm:p-6 rounded-2xl sm:rounded-3xl">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-rose-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shrink-0">
                      <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-900 dark:text-white font-bold text-base sm:text-lg">Premium Quality</p>
                      <p className="text-rose-600 dark:text-rose-300 text-xs sm:text-sm font-medium">Professional Grade Equipment</p>
                    </div>
                  </div>
                </div>
              </div>
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
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800/10 shadow-xl flex flex-col w-full max-w-[320px] mx-auto group h-fit"
    >
      <div className="relative aspect-[1.4/1] overflow-hidden bg-slate-100 dark:bg-slate-800/20 shrink-0">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover object-top block transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/' + service.id + '/800/600?blur=10';
          }}
        />
      </div>
      
      {/* Constant Price Bar to ensure uniform look across all cards */}
      <div className="bg-rose-600 py-3 text-center border-b border-rose-700/20 flex-shrink-0">
        <span className="text-[11px] font-black text-white uppercase tracking-[0.2em]">
          {service.price || 'Price Based on Work'}
        </span>
      </div>
      
      <div className="p-6 flex flex-col text-center items-center justify-start bg-white dark:bg-slate-900">
        <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight mb-2 flex items-center justify-center">
          {service.title}
        </h3>
        <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold leading-relaxed line-clamp-3 px-1 mb-6">
          {service.description}
        </p>

        <div className="w-full">
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#1AD03F] hover:bg-[#15b035] text-white py-4 rounded-xl font-black flex items-center justify-center gap-2 transition-all active:scale-95 text-[10px] uppercase tracking-widest shadow-lg shadow-green-100 dark:shadow-none"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            Book Service
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-rose-600 dark:text-rose-400 font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs mb-3">Our Expertise</h2>
          <h3 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4 leading-tight">
            Premium Cleaning <span className="gradient-text">Solutions</span>
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
            Professional cleaning services tailored for your home, office, and industrial spaces. We bring the sparkle back.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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

const TESTIMONIALS = [
  {
    name: "Ravi",
    role: "Home Owner",
    content: "Fantastic service! My house is sparkling clean now. Highly recommended!",
    rating: 5
  },
  {
    name: "Priya",
    role: "Apartment Resident",
    content: "Very neat work. They arrived on time and finished everything perfectly without any supervision.",
    rating: 5
  },
  {
    name: "Manikandan",
    role: "Business Owner",
    content: "I am very satisfied with their cleaning. Their professional approach is impressive.",
    rating: 5
  },
  {
    name: "Deepa",
    role: "Office Manager",
    content: "My office is so clean now. The team was very efficient and thorough. Thank you!",
    rating: 5
  },
  {
    name: "Karthik",
    role: "Home Owner",
    content: "Excellent experience. The staff was very polite and professional throughout the process.",
    rating: 5
  },
  {
    name: "Anitha",
    role: "Villa Owner",
    content: "True value for money. They did a very thorough cleaning of every corner of my villa.",
    rating: 5
  },
  {
    name: "Suresh",
    role: "Restaurant Owner",
    content: "Hired them for a family function, they did a great job. Very reliable team.",
    rating: 5
  },
  {
    name: "Lakshmi",
    role: "Apartment Resident",
    content: "The sofa cleaning is amazing. It looks brand new again. Very happy with the result.",
    rating: 5
  },
  {
    name: "Vignesh",
    role: "IT Professional",
    content: "Definitely the best cleaning service in Chennai. Professional grade equipment and great service.",
    rating: 5
  },
  {
    name: "Meena",
    role: "Home Maker",
    content: "They were very responsible and did a great job cleaning. The house feels fresh and neat.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#020617] overflow-hidden border-t border-slate-100 dark:border-slate-800/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            What Our <span className="gradient-text">Happy Clients</span> Say
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Real feedback from our valued customers across Chennai who have experienced our premium cleaning services.
          </p>
        </div>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div 
          animate={{ x: [0, -2500] }}
          transition={{ 
            duration: 60, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-6 whitespace-nowrap"
        >
          {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <div 
              key={i} 
              className="w-[320px] sm:w-[450px] flex-shrink-0 bg-slate-50 dark:bg-slate-900/50 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex gap-1 mb-4 text-amber-400">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-200 text-lg sm:text-xl font-medium leading-relaxed mb-6 whitespace-normal italic">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-600 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-rose-200 dark:shadow-none">
                  {t.name[0]}
                </div>
                <div>
                  <h6 className="font-bold text-slate-900 dark:text-white text-base">{t.name}</h6>
                  <p className="text-[10px] text-rose-600 dark:text-rose-400 font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const BeforeAfter = () => {
  const [isPaused, setIsPaused] = useState(false);
  const results = Array.from({ length: 14 }, (_, i) => `images/results/${i + 1}.png`);

  return (
    <section className="py-24 bg-white dark:bg-[#020617] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h2 className="text-rose-600 dark:text-rose-400 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4">Our Transformations</h2>
          <h3 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
            Before & <span className="gradient-text">After</span>
          </h3>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed px-4">
            Witness the difference our professional cleaning makes. From deep-seated dust to sparkling surfaces.
          </p>
        </div>
      </div>

      <div 
        className="relative flex overflow-hidden select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <motion.div 
          drag="x"
          dragConstraints={{ left: -350 * 14, right: 0 }}
          animate={isPaused ? undefined : { x: [0, -350 * 14] }}
          transition={{ 
            duration: 50, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-6 whitespace-nowrap cursor-grab active:cursor-grabbing"
        >
          {[...results, ...results, ...results].map((img, i) => (
            <div 
              key={i} 
              className="w-[280px] sm:w-[350px] flex-shrink-0 pointer-events-none"
            >
              <div className="aspect-square rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-xl bg-slate-50 pointer-events-auto">
                <img 
                  src={img} 
                  alt={`Clean Result ${i + 1}`}
                  className="w-full h-full object-cover pointer-events-none"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Equipment = () => {
  const [isPaused, setIsPaused] = useState(false);
  const equipmentImages = [
    'images/equipment/15.png',
    'images/equipment/16.png',
  ];

  const scrollRef = useState(0); // Using this to trigger re-renders if needed for manual nav

  return (
    <section id="equipment" className="py-20 sm:py-24 bg-white dark:bg-[#020617] border-t border-slate-100 dark:border-slate-800/10 block overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          
          {/* Text Content */}
          <div className="w-full text-center lg:text-left block opacity-100 visible">
            <h2 className="text-rose-600 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 block">
              Professional Gear
            </h2>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight block">
              Equipment's We <span className="text-rose-600">Used For</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium block">
              We invest in high-grade professional equipment from leading brands to ensure the most effective and thorough cleaning results. From heavy-duty scrubbers to high-suction vacuums, we use the best tools for optimal hygiene.
            </p>
            
            <div className="space-y-4 max-w-sm mx-auto lg:mx-0 text-left block">
              {[
                "Industrial Grade Floor Scrubbers",
                "High-Suction Dry & Wet Vacuums",
                "Professional Steam Sanitizers",
                "Deep Extraction Upholstery Cleaners"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 shadow-md flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                    <CheckCircle2 className="w-6 h-6 text-rose-600" />
                  </div>
                  <span className="text-slate-900 dark:text-white font-bold text-xs sm:text-sm uppercase tracking-widest leading-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Column */}
          <div 
            className="w-full relative mt-12 lg:mt-0 block overflow-hidden select-none"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <div className="overflow-hidden mb-0 cursor-grab active:cursor-grabbing w-full">
              <motion.div 
                drag="x"
                dragConstraints={{ left: -1500, right: 0 }}
                animate={isPaused ? undefined : { x: [0, -2000] }}
                transition={{ 
                  duration: 40, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="flex gap-6 w-max"
              >
                {[...equipmentImages, ...equipmentImages, ...equipmentImages, ...equipmentImages].map((img, i) => (
                  <div key={i} className="flex-shrink-0 w-[260px] sm:w-[450px] pointer-events-none">
                    <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800 p-6 sm:p-10 pointer-events-auto">
                      <img 
                        src={img} 
                        alt="Cleaning Equipment"
                        className="w-full h-auto object-contain rounded-2xl pointer-events-none"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <footer id="contact" className="bg-slate-900 dark:bg-[#020617] text-white pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="sm:col-span-2">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-8 text-center sm:text-left">
              <div className="w-14 h-14 rounded-xl overflow-hidden flex items-center justify-center transition-all hover:scale-110">
                <img 
                  src="images/logo.jpeg" 
                  alt="VN Logo" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/clean/100/100';
                  }}
                />
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-bold leading-tight">{COMPANY_NAME}</h4>
                <p className="text-xs sm:text-sm text-rose-400 font-semibold tracking-wider uppercase">Sparkling Purity</p>
              </div>
            </div>
            <p className="text-slate-400 text-base sm:text-lg mb-10 max-w-md mx-auto sm:mx-0 leading-relaxed">
              Your trusted partner for professional cleaning services in Chennai. We are committed to delivering excellence and ensuring your spaces are spotless and hygienic.
            </p>
          </div>

          <div className="relative">
            <div 
              className="flex items-center justify-between mb-6 sm:mb-8 cursor-pointer group"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <h5 className="text-lg sm:text-xl font-bold group-hover:text-rose-400 transition-colors">Quick Links</h5>
              <button 
                className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-rose-600 transition-all"
                aria-label="Toggle age keywords"
              >
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
            
            <ul className="space-y-3 sm:space-y-4 text-slate-400 mb-8">
              <li><a href="#" className="hover:text-rose-400 transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Home</a></li>
              <li><a href="#about" className="hover:text-rose-400 transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> About Us</a></li>
              <li><a href="#services" className="hover:text-rose-400 transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Services</a></li>
              <li><a href="#contact" className="hover:text-rose-400 transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Contact</a></li>
            </ul>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 shadow-2xl backdrop-blur-sm"
                >
                  <div className="space-y-3">
                    <p className="text-xs font-bold text-rose-400 uppercase tracking-widest border-b border-slate-700 pb-2">Age Identity</p>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 mt-0.5 shrink-0" />
                        <p className="text-[11px] text-slate-300 leading-tight">Professional cleaning solutions catering to all age groups.</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 mt-0.5 shrink-0" />
                        <p className="text-[11px] text-slate-300 leading-tight">Specialized sanitization for kids and elderly-friendly environments.</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 mt-0.5 shrink-0" />
                        <p className="text-[11px] text-slate-300 leading-tight">Advanced agents safe for multi-generational homes.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
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

        <div className="border-t border-slate-800/10 pt-12">
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-1 text-slate-500 text-sm font-medium justify-center">
              <span>designed with care by</span>
              <a 
                href="https://share.google/UEdnMPbQAsCSNWyfi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-rose-400 hover:text-rose-300 transition-colors flex items-center justify-center gap-1"
              >
                my-dp.digital
                <div className="w-1 h-1 rounded-full bg-rose-400 animate-pulse"></div>
              </a>
            </div>
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
        className="w-16 h-16 bg-[#FFD700] text-slate-900 rounded-full shadow-[0_0_20px_rgba(255,215,0,0.6)] hover:shadow-[0_0_30px_rgba(37,211,102,0.8)] hover:bg-[#25D366] hover:text-white transition-all hover:-translate-y-1 active:scale-95 group relative border-2 border-[#FFD700] hover:border-[#25D366] flex items-center justify-center font-bold"
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
        <section id="about" className="py-16 sm:py-24 bg-white dark:bg-slate-950 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-20 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-6">
                  <div className="space-y-6 sm:space-y-6">
                    <div className="p-8 sm:p-8 rounded-[2.5rem] bg-rose-50 dark:bg-rose-900/20 border border-rose-100 dark:border-rose-800 text-center sm:text-left shadow-sm">
                      <div className="w-14 h-14 bg-rose-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-rose-200 dark:shadow-none mx-auto sm:mx-0">
                        <Star className="w-7 h-7 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Expert Team</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Trained professionals with years of experience in deep cleaning.</p>
                    </div>
                    <div className="p-8 sm:p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center sm:text-left shadow-sm">
                      <div className="w-14 h-14 bg-slate-900 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto sm:mx-0">
                        <ShieldCheck className="w-7 h-7 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Safe & Secure</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Eco-friendly products and safe cleaning methods for your family.</p>
                    </div>
                  </div>
                  <div className="space-y-6 sm:space-y-6 lg:mt-12">
                    <div className="p-8 sm:p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center sm:text-left shadow-sm">
                      <div className="w-14 h-14 bg-slate-900 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto sm:mx-0">
                        <Clock className="w-7 h-7 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">On Time</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">We value your time and always arrive exactly as scheduled.</p>
                    </div>
                    <div className="p-8 sm:p-8 rounded-[2.5rem] bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 text-center sm:text-left shadow-sm">
                      <div className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-200 dark:shadow-none mx-auto sm:mx-0">
                        <CheckCircle2 className="w-7 h-7 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Best Prices</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Competitive pricing with no hidden charges or surprises.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 text-center lg:text-left px-4 sm:px-0">
                <h2 className="text-rose-600 dark:text-rose-400 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4">About Our Company</h2>
                <h3 className="text-2xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 sm:mb-8 leading-tight">
                  We Don't Just Clean, We <span className="gradient-text">Care</span> For Your Space
                </h3>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Our mission is to provide a clean and healthy environment for our customers. We use the latest technology and high-quality cleaning agents to ensure the best results every time.
                </p>
                <div className="space-y-4 sm:space-y-6 max-w-md mx-auto lg:mx-0">
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
        
        <BeforeAfter />
        
        <Equipment />
        
        <Testimonials />

        {/* CTA Section */}
        <section className="py-16 bg-slate-50 dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-rose-600 dark:bg-rose-700 rounded-[2.5rem] p-10 sm:p-16 text-center relative overflow-hidden shadow-2xl shadow-rose-200 dark:shadow-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/20 rounded-full -ml-48 -mb-48 blur-3xl"></div>
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-10 leading-relaxed tracking-wide">
                  Experience the best professional cleaning service in Chennai today.
                </h2>
                <div className="flex justify-center">
                  <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit bg-[#FFD700] text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-[0_0_20px_rgba(255,215,0,0.6)] hover:shadow-[0_0_30px_rgba(37,211,102,0.8)] hover:bg-[#25D366] hover:text-white transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 whitespace-nowrap border-2 border-[#FFD700] hover:border-[#25D366]"
                  >
                    <MessageCircle className="w-5 h-5 shrink-0" />
                    Chat on WhatsApp
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
