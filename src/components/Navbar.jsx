import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  if (location.pathname === '/') {
    return null;
  }

  // Fonction utilitaire pour surligner le lien actif
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          
          <Link to="/" onClick={closeMenu} className="text-white font-bold text-xl tracking-wide">
            Paul Bellanger
          </Link>
          
          {/* Menu Desktop */}
          <div className="hidden md:flex gap-8">
            <Link 
              to="/projets/pro" 
              className={`font-medium transition-colors ${isActive('/projets/pro') ? 'text-white' : 'text-slate-400 hover:text-white'}`}
            >
              Projets Pro
            </Link>
            <Link 
              to="/projets/perso" 
              className={`font-medium transition-colors ${isActive('/projets/perso') ? 'text-white' : 'text-slate-400 hover:text-white'}`}
            >
              Projets Perso
            </Link>
            <Link 
              to="/experiences" 
              className={`font-medium transition-colors ${isActive('/experiences') ? 'text-white' : 'text-slate-400 hover:text-white'}`}
            >
              Expériences
            </Link>
            <Link 
              to="/documents" 
              className={`font-medium transition-colors ${isActive('/documents') ? 'text-white' : 'text-slate-400 hover:text-white'}`}
            >
              Documents
            </Link>
          </div>

          {/* Bouton Burger Mobile */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              className="text-slate-300 hover:text-white focus:outline-none p-2"
              aria-label="Menu principal"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 shadow-xl absolute w-full">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link 
              to="/projets/pro" 
              onClick={closeMenu} 
              className={`block px-4 py-3 rounded-lg font-medium transition-colors ${isActive('/projets/pro') ? 'bg-slate-800 text-white' : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'}`}
            >
              Projets Pro
            </Link>
            <Link 
              to="/projets/perso" 
              onClick={closeMenu} 
              className={`block px-4 py-3 rounded-lg font-medium transition-colors ${isActive('/projets/perso') ? 'bg-slate-800 text-white' : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'}`}
            >
              Projets Perso
            </Link>
            <Link 
              to="/experiences" 
              onClick={closeMenu} 
              className={`block px-4 py-3 rounded-lg font-medium transition-colors ${isActive('/experiences') ? 'bg-slate-800 text-white' : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'}`}
            >
              Expériences
            </Link>
            <Link 
              to="/documents" 
              onClick={closeMenu} 
              className={`block px-4 py-3 rounded-lg font-medium transition-colors ${isActive('/documents') ? 'bg-slate-800 text-white' : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'}`}
            >
              Documents
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}