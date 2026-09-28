import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex justify-between items-center shadow-lg">
      
      {/* Logo / Nom à gauche */}
      <div className="text-xl font-bold tracking-tight">
        <Link to="/" className="text-white hover:text-blue-400 transition-colors decoration-transparent">
          Paul Bellanger
        </Link>
      </div>
      
      {/* Liens de navigation à droite */}
      <div className="flex gap-6">
        <Link 
          to="/projets/pro" 
          className="text-slate-300 hover:text-blue-400 transition-colors font-medium text-sm md:text-base decoration-transparent"
        >
          Projets Pro
        </Link>
        <Link 
          to="/projets/perso" 
          className="text-slate-300 hover:text-purple-400 transition-colors font-medium text-sm md:text-base decoration-transparent"
        >
          Projets Perso
        </Link>
        <Link 
          to="/experiences" 
          className="text-slate-300 hover:text-emerald-400 transition-colors font-medium text-sm md:text-base decoration-transparent"
        >
          Expériences
        </Link>
        <Link 
          to="/documents" 
          className="text-slate-300 hover:text-amber-400 transition-colors font-medium text-sm md:text-base decoration-transparent"
        >
          Documents
        </Link>
      </div>
    </nav>
  );
}