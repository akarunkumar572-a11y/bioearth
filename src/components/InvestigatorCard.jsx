import { motion } from 'framer-motion';
import { FiUser } from 'react-icons/fi';

export default function InvestigatorCard({ name, qualification, department, designation, hospital }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group glass-card rounded-[3rem] p-10 hover:bg-brand-primary transition-all duration-500"
    >
      <div className="w-20 h-20 bg-brand-secondary/10 rounded-3xl flex items-center justify-center text-brand-secondary mb-10 group-hover:bg-brand-secondary group-hover:text-brand-primary transition-all duration-500">
        <FiUser size={36} />
      </div>
      
      <h3 className="font-heading font-black text-3xl text-brand-primary mb-3 leading-tight group-hover:text-white transition-colors">{name}</h3>
      <p className="text-brand-secondary font-black text-[10px] uppercase tracking-[0.3em] mb-8">{qualification}</p>
      
      <div className="space-y-6 pt-8 border-t border-slate-100 group-hover:border-white/10 transition-colors">
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 group-hover:text-white/40">Department</span>
          <span className="text-sm font-bold text-slate-700 group-hover:text-white transition-colors">{department}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 group-hover:text-white/40">Designation</span>
          <span className="text-sm font-bold text-slate-700 group-hover:text-white transition-colors">{designation}</span>
        </div>
      </div>
      
      <div className="mt-10 pt-6 flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-brand-accent animate-glow" />
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-white/40 transition-colors">{hospital}</span>
      </div>
    </motion.div>
  );
}
