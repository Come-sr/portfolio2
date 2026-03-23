import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Layout() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? "bg-white text-[#111111]" : "text-[#a1a1aa] hover:text-white";
  };

  return (
    <div className="min-h-screen flex flex-col relative text-[#f4f4f5] bg-[#111111]">
      {/* Floating Pill Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 p-2 bg-[#1c1c1c]/80 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl"
        >
          <Link 
            to="/" 
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${isActive('/')}`}
          >
            Accueil
          </Link>
          <Link 
            to="/projets" 
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${isActive('/projets')}`}
          >
            Projets
          </Link>
          <Link 
            to="/experiences" 
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${isActive('/experiences')}`}
          >
            Expériences
          </Link>
          <Link 
            to="/a-propos" 
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${isActive('/a-propos')}`}
          >
            À Propos
          </Link>
        </motion.div>
      </nav>

      <main className="flex-1 pt-40 pb-28">
        <Outlet />
      </main>

      <footer className="py-12 px-6 text-center text-[#71717a] text-sm font-medium">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© 2026 Côme Servy.</p>
          <a href="mailto:pm@comesr.art" className="hover:text-white transition-colors">pm@comesr.art</a>
        </div>
      </footer>
    </div>
  );
}
