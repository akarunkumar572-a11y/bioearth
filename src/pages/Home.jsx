
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMail, FiChevronRight } from 'react-icons/fi';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StatCounter from '../components/StatCounter';
import SectionTitle from '../components/SectionTitle';
import { stats } from '../data/stats';
import { therapeuticAreas } from '../data/therapeuticAreas';
import { investigators } from '../data/investigators';
import { hospitals } from '../data/hospitals';
import { contacts } from '../data/contacts';
import InvestigatorCard from '../components/InvestigatorCard';
import HospitalCard from '../components/HospitalCard';
import TherapeuticAreaCard from '../components/TherapeuticAreaCard';
import ContactCard from '../components/ContactCard';
import ScrollToTopButton from '../components/ScrollToTopButton';

import HeroCarousel from '../components/HeroCarousel';

export default function Home() {

  return (
    <>
      <SEO
        title="Bioearth – A Clinical Research Services | Clinical Research Organization India"
        description="Bioearth is a leading Clinical Research Organization (CRO) at GSVM Medical College, Kanpur, India. We provide world-class clinical trial infrastructure, government medical collaboration, and international standards in clinical research."
        keywords="Clinical Research Organization, CRO, Clinical Trials, Medical Research, GSVM Medical College, Kanpur, India, Bioearth"
        canonical="https://bioearth.example.com/"
      />
      <div className="bg-white min-h-screen flex flex-col relative overflow-hidden">
        {/* Background Blobs for Visual Interest */}
        <div className="blob w-[600px] h-[600px] bg-brand-secondary/10 -top-40 -right-40" />
        <div className="blob w-[800px] h-[800px] bg-brand-accent/5 -bottom-80 -left-40" />

        <Navbar />
        
        {/* Hero Carousel Section */}
        <HeroCarousel />

        {/* Dynamic Stats Section */}
        <div className="relative z-10 -mt-20 max-w-7xl mx-auto px-8 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="glass-card p-10 rounded-[2.5rem] text-center group hover:bg-brand-primary hover:text-white transition-all duration-500"
              >
                <div className="text-5xl font-black mb-2 flex items-center justify-center text-brand-primary group-hover:text-brand-secondary transition-colors">
                  <StatCounter value={stat.value} />
                  <span className="text-brand-secondary ml-1">{stat.suffix}</span>
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 group-hover:text-white/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

      {/* About Preview Section */}
      <section id="about" className="section-padding relative z-10">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-1 bg-brand-accent rounded-full" />
               <span className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px]">Medical Excellence</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tight text-brand-primary mb-10 leading-[1.1]">
              Bridging The Gap Between <span className="text-brand-secondary">Discovery</span> & Care.
            </h2>
            <p className="text-xl text-slate-500 mb-12 font-medium leading-relaxed">
              Bioearth provides end-to-end clinical research operations at GSVM Medical College. We ensure that every study is conducted with precision, integrity, and international quality standards.
            </p>
            <Link to="/about" className="btn-eyecatching">Discover Our Legacy</Link>
          </motion.div>
          <div className="relative">
            <div className="absolute -inset-10 bg-brand-secondary/20 rounded-full blur-[100px]" />
            <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white">
               <img src="/hero2.png" alt="Branding" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-1000" />
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Highlights */}
      <div className="bg-brand-primary py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <motion.section
          className="max-w-7xl mx-auto px-10 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-24">
            <h2 className="text-white text-6xl font-black mb-6 tracking-tighter">Elite Infrastructure.</h2>
            <p className="text-white/40 max-w-2xl mx-auto text-lg font-medium">Powering the next generation of medical breakthroughs with state-of-the-art clinical facilities.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "1000+ Bedded Hospital", desc: "Unrivaled access to clinical data and patient demographics." },
              { title: "Advanced ICU Units", desc: "Critically monitored environments for specialized research." },
              { title: "24/7 Support", desc: "Round-the-clock operational medical services and support." },
              { title: "Modern Labs", desc: "Cutting-edge pathology and radiology diagnostic facilities." },
              { title: "Blood Bank", desc: "Fully certified storage and transfusion infrastructure." },
              { title: "Super-Specialists", desc: "Access to a global network of medical super-specialists." }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all duration-500 group">
                <div className="w-14 h-14 bg-brand-secondary/20 rounded-2xl flex items-center justify-center text-brand-secondary mb-8 group-hover:bg-brand-secondary group-hover:text-brand-primary transition-all">
                   <FiChevronRight size={28} />
                </div>
                <h3 className="text-white text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/40 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
      {/* Therapeutic Areas */}
      <section className="py-32 relative">
        <motion.div 
          className="max-w-7xl mx-auto px-10 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-1 bg-brand-secondary rounded-full" />
                 <span className="text-brand-secondary font-black uppercase tracking-[0.4em] text-[10px]">Medical Frontiers</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tight text-brand-primary leading-[1.1]">
                Specialized <span className="text-brand-secondary">Domain</span> Expertise.
              </h2>
            </div>
            <p className="text-slate-400 font-medium max-w-sm">Covering a wide spectrum of therapeutic areas with clinical precision and expertise.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {therapeuticAreas.map((area) => (
              <TherapeuticAreaCard key={area} area={area} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Investigators */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="blob w-[500px] h-[500px] bg-brand-secondary/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <motion.div 
          className="max-w-7xl mx-auto px-10 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-24">
            <h2 className="text-6xl font-black text-brand-primary tracking-tighter mb-6">World-Class Minds.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium">Meet the expert investigators leading clinical excellence at Bioearth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {investigators.map((inv) => (
              <InvestigatorCard key={inv.name} {...inv} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-brand-primary py-32 relative">
        <motion.div 
          className="max-w-7xl mx-auto px-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-24">
            <h2 className="text-white text-6xl font-black tracking-tighter mb-6">The Bioearth Advantage.</h2>
            <div className="w-24 h-2 bg-brand-secondary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "Trust & Integrity", desc: "Foundation of ethical clinical research and medical honesty." },
              { title: "Global Compliance", desc: "Rigorous adherence to international ICH-GCP standards." },
              { title: "Elite Alliance", desc: "Exclusive collaboration with GSVM Medical College, Kanpur." },
              { title: "Future Infrastructure", desc: "State-of-the-art labs and specialized critical care units." },
              { title: "Data Precision", desc: "Uncompromised accuracy in every clinical observation." },
              { title: "Patient Priority", desc: "Safety-first protocols and ethical participant management." }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-12 rounded-[3rem] hover:scale-105 transition-all duration-500 group">
                <div className="text-4xl font-black text-brand-secondary mb-8 opacity-20 group-hover:opacity-100 transition-opacity">0{i+1}</div>
                <h3 className="text-white text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/40 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Associated Hospitals */}
      <section className="py-32 relative overflow-hidden">
        <div className="blob w-96 h-96 bg-brand-accent/10 -bottom-20 -right-20" />
        <motion.div 
          className="max-w-7xl mx-auto px-10 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <h2 className="text-5xl font-black text-brand-primary tracking-tighter">Strategic Partners.</h2>
            <div className="w-32 h-1 bg-brand-secondary rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hospitals.map((h) => (
              <HospitalCard key={h.name} name={h.name} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="bg-brand-primary rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-20 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/10 blur-[100px] -mr-32 -mt-32" />
               <h2 className="text-6xl font-black mb-10 tracking-tighter">Ready for <br/><span className="text-brand-secondary">Excellence?</span></h2>
               <p className="text-white/40 mb-16 text-xl font-medium leading-relaxed">Collaborate with Bioearth for industry-leading clinical research and strategic site management.</p>
               <div className="space-y-10">
                 {contacts.map((c) => (
                   <div key={c.email} className="flex items-center gap-6 group">
                      <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-brand-primary transition-all duration-300 shadow-xl"><FiMail size={28} /></div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">{c.role}</p>
                        <p className="text-lg font-bold">{c.email}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
            <div className="lg:w-1/2 bg-white p-20 flex flex-col justify-center items-center text-center relative">
                <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                <h3 className="text-brand-primary text-4xl font-black mb-10 tracking-tight relative z-10 leading-tight">Let's build the future <br/>of healthcare together.</h3>
                <a href="mailto:bioearth.research@gmail.com" className="btn-neon text-xl px-16 py-6 relative z-10">Send an Inquiry</a>
                <p className="mt-12 text-slate-400 text-sm font-bold uppercase tracking-widest relative z-10">24-48h Response Guarantee</p>
            </div>
          </div>
        </motion.div>
      </section>
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
}
