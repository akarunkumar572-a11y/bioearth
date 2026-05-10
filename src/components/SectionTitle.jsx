const SectionTitle = ({ children, dark = false }) => {
  return (
    <div className="mb-12 relative">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-1 bg-brand-secondary rounded-full" />
        <span className={`text-[10px] font-black uppercase tracking-[0.4em] ${dark ? 'text-brand-accent' : 'text-brand-secondary'}`}>
          Bioearth Innovation
        </span>
      </div>
      <h2 className={`text-4xl md:text-5xl font-heading font-black tracking-tighter ${dark ? 'text-white' : 'text-brand-primary'}`}>
        {children}
      </h2>
    </div>
  );
};

export default SectionTitle;
