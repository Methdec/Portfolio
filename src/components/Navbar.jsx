import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  // On récupère l'adresse actuelle de la page
  const location = useLocation();

  // Si on est sur la page d'accueil (chemin "/"), on ne renvoie rien (null)
  if (location.pathname === '/') {
    return null;
  }

  const navStyle = {
    backgroundColor: '#1e293b',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  };

  const linkContainerStyle = {
    display: 'flex',
    gap: '1.5rem'
  };

  const linkStyle = {
    color: '#f8fafc',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '1rem'
  };

  return (
    <nav style={navStyle}>
      {/* Clic sur "Mon Portfolio" = Retour à l'accueil */}
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          Mon Portfolio
        </Link>
      </div>
      
      {/* Le lien Accueil a été supprimé ici */}
      <div style={linkContainerStyle}>
        <Link to="/projets/pro" style={linkStyle}>Projets Pro</Link>
        <Link to="/projets/perso" style={linkStyle}>Projets Perso</Link>
        <Link to="/experiences" style={linkStyle}>Expériences</Link>
        <Link to="/documents" style={linkStyle}>Documents</Link>
      </div>
    </nav>
  );
}