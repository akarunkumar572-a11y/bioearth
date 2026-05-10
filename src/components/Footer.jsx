import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiLinkedin, FiMapPin, FiArrowRight } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white pt-32 pb-12 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-secondary/10 blur-[120px] rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-accent/5 blur-[100px] rounded-full -ml-48 -mb-48" />
      
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24 relative z-10">
        <div className="col-span-1 lg:col-span-1">
          <Link to="/" className="flex items-center gap-5 mb-10 group">
            <div className="bg-white p-2.5 rounded-2xl shadow-xl transition-transform group-hover:rotate-6">
               <img src="/logo.png" alt="Bioearth" className="h-9 w-auto brightness-0" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-heading font-black tracking-tighter leading-none">BIOEARTH</span>
              <span className="text-[10px] text-brand-secondary font-black uppercase tracking-[0.4em] mt-2">Next Gen Research</span>
            </div>
          </Link>
          <p className="text-white/40 text-sm font-medium leading-relaxed mb-10">
            Pioneering the future of clinical research through strategic site management and medical excellence at GSVM Medical College, Kanpur.
          </p>
          <div className="flex gap-4">
             <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-secondary hover:text-brand-primary transition-all duration-300 shadow-xl border border-white/5"><FiLinkedin size={20} /></a>
             <a href="mailto:bioearth.research@gmail.com" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-secondary hover:text-brand-primary transition-all duration-300 shadow-xl border border-white/5"><FiMail size={20} /></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-black text-xs uppercase tracking-[0.4em] mb-10 flex items-center gap-3">
             <div className="w-8 h-1 bg-brand-secondary rounded-full" />
             Navigation
          </h4>
          <ul className="space-y-5 text-white/40 text-sm font-bold uppercase tracking-widest">
            <li><Link to="/about" className="hover:text-brand-secondary flex items-center gap-2 transition-all group"><FiArrowRight className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> About Us</Link></li>
            <li><Link to="/clinical-trial-services" className="hover:text-brand-secondary flex items-center gap-2 transition-all group"><FiArrowRight className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Services</Link></li>
            <li><Link to="/infrastructure" className="hover:text-brand-secondary flex items-center gap-2 transition-all group"><FiArrowRight className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Infrastructure</Link></li>
            <li><Link to="/contact" className="hover:text-brand-secondary flex items-center gap-2 transition-all group"><FiArrowRight className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /> Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-black text-xs uppercase tracking-[0.4em] mb-10 flex items-center gap-3">
             <div className="w-8 h-1 bg-brand-secondary rounded-full" />
             Capabilities
          </h4>
          <ul className="space-y-5 text-white/40 text-sm font-bold uppercase tracking-widest">
            <li className="hover:text-white transition-colors cursor-default">Site Management</li>
            <li className="hover:text-white transition-colors cursor-default">Regulatory Submission</li>
            <li className="hover:text-white transition-colors cursor-default">Patient Recruitment</li>
            <li className="hover:text-white transition-colors cursor-default">Data Integrity</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-black text-xs uppercase tracking-[0.4em] mb-10 flex items-center gap-3">
             <div className="w-8 h-1 bg-brand-secondary rounded-full" />
             Location
          </h4>
          <ul className="space-y-8 text-white/40 text-sm font-medium">
            <li className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 text-brand-secondary shadow-xl border border-white/5"><FiMapPin size={22} /></div>
              <span className="leading-relaxed">GSVM Medical College Campus, Kanpur, UP, India</span>
            </li>
            <li className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 text-brand-secondary shadow-xl border border-white/5"><FiPhone size={22} /></div>
              <span className="font-bold">+91 8687066092</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-10 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">
        <p>&copy; {new Date().getFullYear()} Bioearth Clinical Research Services. All Rights Reserved.</p>
        <div className="flex gap-10">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Compliance</a>
          <a href="#" className="hover:text-white transition-colors">Ethics</a>
        </div>
      </div>
    </footer>
  );
}
