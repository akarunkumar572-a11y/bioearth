import { FiPlusSquare } from 'react-icons/fi';

export default function HospitalCard({ name }) {
  return (
    <div className="glass-card rounded-[2.5rem] p-8 flex flex-col gap-6 group hover:!bg-brand-primary transition-all duration-500">
      <div className="w-16 h-16 bg-brand-secondary/10 rounded-2xl flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-brand-primary transition-all">
        <FiPlusSquare size={32} />
      </div>
      <span className="text-brand-primary group-hover:text-white font-black text-lg leading-tight transition-colors">{name}</span>
      <div className="h-1.5 w-12 bg-brand-secondary rounded-full" />
    </div>
  );
}
