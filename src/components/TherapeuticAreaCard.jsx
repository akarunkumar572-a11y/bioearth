import { motion } from 'framer-motion';

export default function TherapeuticAreaCard({ area }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05, y: -5 }}
      className="glass-card rounded-3xl px-6 py-8 text-brand-primary font-black uppercase tracking-widest text-[10px] text-center flex items-center justify-center min-h-[120px] shadow-xl hover:shadow-brand-secondary/20 hover:border-brand-secondary/30 transition-all duration-300"
    >
      {area}
    </motion.div>
  );
}
