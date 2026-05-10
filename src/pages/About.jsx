
import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';

export default function About() {
  return (
    <>
      <SEO
        title="About Us | Bioearth – A Clinical Research Services"
        description="Learn about Bioearth, a leading Clinical Research Organization (CRO) at GSVM Medical College, Kanpur, India. Discover our experience, infrastructure, and commitment to medical excellence."
        canonical="https://bioearth.example.com/about"
      />
      <div className="bg-white min-h-screen flex flex-col relative overflow-hidden">
        {/* Background Blobs */}
        <div className="blob w-96 h-96 bg-brand-secondary/20 top-0 -left-20" />
        <div className="blob w-[500px] h-[500px] bg-brand-accent/10 bottom-0 -right-40" />

        <Navbar />
        
        <section className="section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-1 bg-brand-secondary rounded-full" />
                 <span className="text-brand-secondary font-black uppercase tracking-[0.4em] text-[10px]">Pioneering Clinical Research</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tight text-brand-primary mb-10 leading-[1.1]">
                Excellence That <span className="text-brand-secondary">Defines</span> The Future.
              </h2>
              <p className="text-xl text-slate-500 mb-12 font-medium leading-relaxed">
                Bioearth operates at the intersection of medical innovation and clinical expertise. Located at the historic GSVM Medical College, we provide the infrastructure and brilliance required for high-stakes clinical research.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                {[
                  { val: "8+", lab: "Years Exp." },
                  { val: "25+", lab: "Trials" },
                  { val: "4", lab: "Sites" },
                  { val: "1k+", lab: "Beds" }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-4xl font-black text-brand-primary">{stat.val}</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.lab}</span>
                  </div>
                ))}
              </div>
              
              <button className="btn-eyecatching group">
                Download Portfolio
                <FiChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="absolute -inset-10 bg-brand-secondary/10 rounded-full blur-[120px]" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-8 border-white group">
                <img 
                  src="/hero1.png" 
                  alt="Research" 
                  className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
                   <p className="text-white font-bold text-xl">World-Class Research Facilities</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
}
