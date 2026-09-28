import { Link } from 'react-router-dom';

export default function Home() {
  const menuCards = [
    {
      title: 'Projets Pros',
      description: 'Découvrez mes réalisations en entreprise, stages et Projet de fin d\'année.',
      link: '/projets/pro',
      // Couleurs adaptées au dark mode : fond gris très foncé, bordure qui s'éclaire au survol
      color: 'bg-slate-800/50 hover:bg-slate-800 border-slate-700 hover:border-blue-500/50',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-blue-400 mb-4">
          <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      )
    },
    {
      title: 'Projets Persos',
      description: 'Mes expérimentations, projets IoT et code en autonomie.',
      link: '/projets/perso',
      color: 'bg-slate-800/50 hover:bg-slate-800 border-slate-700 hover:border-purple-500/50',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-purple-400 mb-4">
          <rect width="16" height="16" x="4" y="4" rx="2" ry="2"/>
          <rect width="6" height="6" x="9" y="9" rx="1" ry="1"/>
          <path d="M15 2v2 M15 20v2 M2 15h2 M2 9h2 M20 15h2 M20 9h2 M9 2v2 M9 20v2"/>
        </svg>
      )
    },
    {
      title: 'Mon Parcours',
      description: 'Frise chronologique de mes formations et expériences.',
      link: '/experiences',
      color: 'bg-slate-800/50 hover:bg-slate-800 border-slate-700 hover:border-emerald-500/50',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-emerald-400 mb-4">
          <circle cx="6" cy="19" r="3"/>
          <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/>
          <circle cx="18" cy="5" r="3"/>
        </svg>
      )
    },
    {
      title: 'Documents & CV',
      description: 'Téléchargez mon CV et mes lettres de recommandation.',
      link: '/documents',
      color: 'bg-slate-800/50 hover:bg-slate-800 border-slate-700 hover:border-amber-500/50',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-amber-400 mb-4">
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
          <path d="M14 2v4a2 2 0 0 0 2 2h4 M10 9H8 M16 13H8 M16 17H8"/>
        </svg>
      )
    }
  ];

  return (
    
    <div 
      className="min-h-screen relative flex flex-col justify-center items-center px-4 py-16 overflow-hidden bg-slate-950"
      style={{
        backgroundImage: 'radial-gradient(rgba(59, 130, 246, 0.25) 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}
    >
      
      <style>
        {`
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-slide-up {
            /* Durée réduite à 0.5s pour plus de dynamisme */
            animation: slideUp 0.5s ease-out forwards;
            opacity: 0;
          }
        `}
      </style>

      {/* Blobs adaptés pour le mode sombre : opacité réduite (20-30%) et grand flou (blur-3xl) */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl opacity-20" style={{ animation: 'blob 7s infinite' }}></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-600 rounded-full filter blur-3xl opacity-20" style={{ animation: 'blob 7s infinite', animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-600 rounded-full filter blur-3xl opacity-20" style={{ animation: 'blob 7s infinite', animationDelay: '4s' }}></div>

      <div className="max-w-6xl w-full mx-auto text-center relative z-10">
        
        {/* BADGE VERT ÉMERAUDE */}
        <div className="animate-slide-up" style={{ animationDelay: '0s' }}>
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-emerald-500/30 mb-8 shadow-sm">
            <span className="relative flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-bold text-emerald-400">
              À la recherche d'une alternance (Sept. 2026) - Master Informatique
            </span>
          </div>
        </div>

        {/* Textes en blanc et gris clair pour ressortir sur le fond noir */}
        <h1 className="animate-slide-up text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight" style={{ animationDelay: '0.1s' }}>
          Bonjour, je suis <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Paul Bellanger</span>
        </h1>
        
        <p className="animate-slide-up text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10" style={{ animationDelay: '0.2s' }}>
          Passionné par le développement web, la programmation objet et l'Internet des Objets (IoT). 
          Je conçois des solutions mêlant logiciels et matériels pour répondre à des problématiques concrètes.
        </p>

        {/* Boutons adaptés au thème sombre */}
        <div className="animate-slide-up flex flex-wrap justify-center gap-4 mb-20" style={{ animationDelay: '0.3s' }}>
          <Link 
            to="/documents" 
            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-transform hover:scale-105 shadow-<0_0_15px_rgba(37,99,235,0.4)>"
          >
            Consulter mon CV
          </Link>
          <a 
            href="https://github.com/Methdec" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 bg-slate-800/80 backdrop-blur-sm text-white font-bold rounded-lg border border-slate-600 hover:bg-slate-700 transition-transform hover:scale-105 shadow-sm"
          >
            Mon GitHub
          </a>
        </div>

        {/* Grille de cartes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {menuCards.map((card, index) => (
            <div 
              key={index} 
              className="animate-slide-up" 
              style={{ animationDelay: `${0.4 + (index * 0.1)}s` }}
            >
              <Link 
                to={card.link}
                className={`block h-full p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-<0_8px_30px_rgb(0,0,0,0.5)> backdrop-blur-md ${card.color}`}
              >
                {card.icon}
                {/* Titre blanc, description grise */}
                <h2 className="text-xl font-bold text-white mb-2">{card.title}</h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {card.description}
                </p>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}