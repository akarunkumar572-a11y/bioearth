import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const slides = [
  {
    title: "Innovating the Future of Research",
    subtitle: "Advanced Clinical Solutions",
    description: "Transforming the landscape of clinical research with cutting-edge technology and unparalleled medical expertise.",
    image: "/hero1.png",
    accent: "#00E5FF",
    cta: "Start Exploring",
    link: "/clinical-trial-services"
  },
  {
    title: "Precision in Every Protocol",
    subtitle: "Global Quality Standards",
    description: "Delivering world-class research outcomes through international ICH-GCP compliance and rigorous quality control.",
    image: "/hero2.png",
    accent: "#00FFA3",
    cta: "Infrastructure",
    link: "/infrastructure"
  },
  {
    title: "Expertise You Can Trust",
    subtitle: "Medical Excellence",
    description: "Our world-class team of investigators at GSVM Medical College leads with integrity and clinical brilliance.",
    image: "/hero3.png",
    accent: "#FF007A",
    cta: "Meet Our Team",
    link: "/investigators"
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative w-full h-[700px] md:h-[850px] bg-brand-primary overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 overflow-hidden">
             <img 
               src={slides[current].image} 
               alt={slides[current].title} 
               className="w-full h-full object-cover transform scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-primary/80 to-transparent z-10" />
          </div>
          
          <div className="max-w-7xl mx-auto px-8 w-full h-full relative z-20 flex items-center">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-1 rounded-full" style={{ background: slides[current].accent }} />
                  <h3 className="font-bold uppercase tracking-[0.4em] text-xs text-white/70">
                    {slides[current].subtitle}
                  </h3>
                </div>
                <h1 className="text-6xl md:text-8xl font-heading font-black mb-8 leading-[1] tracking-tighter text-white">
                  {slides[current].title.split(' ').map((word, i) => (
                    <span key={i} className={i === 2 ? "text-brand-secondary" : ""}>{word} </span>
                  ))}
                </h1>
                <p className="text-xl text-white/60 mb-12 max-w-lg leading-relaxed font-medium">
                  {slides[current].description}
                </p>
                <div className="flex gap-6">
                  <a href={slides[current].link} className="btn-eyecatching group">
                    {slides[current].cta}
                    <FiChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Modern Controls */}
      <div className="absolute bottom-12 right-12 flex gap-4 z-30">
        <button onClick={prev} className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center hover:bg-brand-secondary hover:text-brand-primary transition-all duration-300 shadow-2xl">
          <FiChevronLeft size={28} />
        </button>
        <button onClick={next} className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center hover:bg-brand-secondary hover:text-brand-primary transition-all duration-300 shadow-2xl">
          <FiChevronRight size={28} />
        </button>
      </div>

      {/* Line Indicators */}
      <div className="absolute bottom-16 left-12 flex gap-4 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-500 ${current === i ? 'w-24 bg-brand-secondary' : 'w-8 bg-white/20'}`}
          />
        ))}
      </div>
    </div>
  );
}
