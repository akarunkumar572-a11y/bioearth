import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { to: '/', label: 'Home' },
  {
    label: 'About',
    dropdown: [
      { to: '/about', label: 'About Us' },
      { to: '/why-choose-us', label: 'Why Choose Us' }
    ]
  },
  {
    label: 'Services',
    dropdown: [
      { to: '/clinical-trial-services', label: 'Clinical Trials' },
      { to: '/therapeutic-areas', label: 'Therapeutic Areas' },
      { to: '/ongoing-studies', label: 'Ongoing Studies' }
    ]
  },
  {
    label: 'Network',
    dropdown: [
      { to: '/infrastructure', label: 'Infrastructure' },
      { to: '/investigators', label: 'Investigators' },
      { to: '/associated-hospitals', label: 'Hospitals' }
    ]
  },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.nav
      className="fixed top-0 w-full z-50 glass-nav"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src="/logo.png"
              alt="Bioearth"
              className="h-25 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        </Link>
        <div className="hidden lg:flex gap-8 items-center">
          {navItems.map(item => (
            item.dropdown ? (
              <div key={item.label} className="relative group py-2">
                <button className="flex items-center gap-1 text-xs font-black uppercase tracking-widest text-brand-primary/70 group-hover:text-brand-primary transition-colors cursor-pointer">
                  {item.label}
                  <FiChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 p-2 flex flex-col gap-1 z-50">
                  {item.dropdown.map(subItem => (
                    <NavLink
                      key={subItem.to}
                      to={subItem.to}
                      className={({ isActive }) => `block px-4 py-3 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors ${isActive ? 'bg-brand-primary/5 text-brand-primary' : 'text-slate-500 hover:bg-slate-50 hover:text-brand-primary'}`}
                    >
                      {subItem.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-xs font-black uppercase tracking-widest transition-all duration-300 relative py-2 hover:text-brand-primary ${isActive ? 'text-brand-primary' : 'text-brand-primary/70'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <motion.div
                      layoutId="nav-underline"
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-primary rounded-full ${isActive ? 'opacity-100' : 'opacity-0'}`}
                    />
                  </>
                )}
              </NavLink>
            )
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/login" className="text-xs font-black uppercase tracking-widest text-brand-primary/70 hover:text-brand-primary transition-colors py-3 px-4">Login</Link>
          <Link to="/contact" className="btn-eyecatching !py-3 !px-6 !text-xs">Inquiry</Link>
        </div>
        <button className="lg:hidden p-3 rounded-2xl bg-brand-primary/5 text-brand-primary cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white px-6 pb-6 pt-4 flex flex-col gap-4 shadow-xl max-h-[80vh] overflow-y-auto"
          >
            {navItems.map(item => (
              <div key={item.label} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                {item.dropdown ? (
                  <>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 pl-2">{item.label}</div>
                    <div className="flex flex-col gap-2 pl-2">
                      {item.dropdown.map(subItem => (
                        <NavLink
                          key={subItem.to}
                          to={subItem.to}
                          onClick={() => setOpen(false)}
                          className={({ isActive }) =>
                            `block font-bold text-sm py-2 px-3 rounded-xl transition-all ${isActive ? 'bg-brand-primary/5 text-brand-primary' : 'text-slate-600 hover:bg-slate-50'}`
                          }
                        >
                          {subItem.label}
                        </NavLink>
                      ))}
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block font-black text-sm uppercase tracking-widest py-2 px-3 rounded-xl transition-all ${isActive ? 'bg-brand-primary text-white' : 'text-brand-primary hover:bg-slate-50'}`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
