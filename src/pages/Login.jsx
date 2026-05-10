import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Login() {
  return (
    <>
      <SEO
        title="Login | Bioearth – Next Gen Research"
        description="Login to the Bioearth Clinical Research Portal."
      />
      <div className="bg-white min-h-screen flex flex-col relative overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-secondary/10 blur-[150px] rounded-full -mr-[400px] -mt-[400px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-accent/5 blur-[120px] rounded-full -ml-[300px] -mb-[300px]" />
        
        <Navbar />
        
        <div className="flex-1 flex items-center justify-center pt-32 pb-20 px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md"
          >
            <div className="glass-card rounded-[3rem] p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 bg-white/80">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-brand-primary mb-6 shadow-xl relative group">
                  <div className="absolute inset-0 bg-brand-secondary/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
                  <img src="/logo.png" alt="Bioearth" className="h-10 w-auto invert relative z-10" />
                </div>
                <h1 className="text-3xl font-heading font-black tracking-tighter text-brand-primary mb-2">Welcome Back</h1>
                <p className="text-slate-500 font-medium text-sm">Sign in to your Bioearth portal.</p>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 pl-2">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-400">
                      <FiMail size={18} />
                    </div>
                    <input 
                      type="email" 
                      className="w-full bg-slate-50 border-0 text-brand-primary text-sm font-bold rounded-2xl py-4 pl-12 pr-5 focus:ring-2 focus:ring-brand-secondary transition-shadow outline-none placeholder:font-medium placeholder:text-slate-300" 
                      placeholder="researcher@bioearth.com" 
                      required
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2 pl-2 pr-1">
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400">Password</label>
                    <a href="#" className="text-[10px] font-black uppercase tracking-widest text-brand-secondary hover:text-brand-primary transition-colors">Forgot?</a>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-400">
                      <FiLock size={18} />
                    </div>
                    <input 
                      type="password" 
                      className="w-full bg-slate-50 border-0 text-brand-primary text-sm font-bold rounded-2xl py-4 pl-12 pr-5 focus:ring-2 focus:ring-brand-secondary transition-shadow outline-none placeholder:font-medium placeholder:text-slate-300" 
                      placeholder="••••••••" 
                      required
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full btn-eyecatching !py-4 group relative overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Sign In to Portal
                      <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                </div>
              </form>

              <p className="mt-8 text-center text-xs font-bold text-slate-400">
                Don't have an account? <Link to="/contact" className="text-brand-primary hover:text-brand-secondary transition-colors uppercase tracking-widest ml-1">Contact Admin</Link>
              </p>
            </div>
          </motion.div>
        </div>
        
        <Footer />
      </div>
    </>
  );
}
