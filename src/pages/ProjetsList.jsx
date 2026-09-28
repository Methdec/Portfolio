import { useParams, useNavigate, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

export default function ProjetsList() {
  const { typeProjet } = useParams();
  const navigate = useNavigate();

  // On utilise projectsData au lieu de l'ancien MOCK_PROJECTS
  const projectsToDisplay = projectsData[typeProjet] || [];
  const pageTitle = typeProjet === 'pro' ? 'Mes Projets Professionnels' : 'Mes Projets Personnels';

  return (
    <div 
      className="min-h-screen bg-slate-950 px-4 md:px-8 py-12"
      style={{
        backgroundImage: `radial-gradient(rgba(${typeProjet === 'pro' ? '59, 130, 246' : '168, 85, 247'}, 0.15) 1px, transparent 1px)`,
        backgroundSize: '24px 24px'
      }}
    >
      <div className="max-w-6xl mx-auto">
        
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 mb-12 text-slate-400 font-bold hover:text-white transition-colors"
        >
          ← Retour à l'accueil
        </Link>

        <h1 className="text-4xl text-white font-bold mb-12 text-center">
          {typeProjet === 'pro' ? 'Projets Professionnels' : 'Projets Personnels'}
        </h1>

        {projectsToDisplay.length === 0 ? (
          <div className="text-center py-20 bg-slate-900/50 rounded-xl border border-slate-800">
            <p className="text-slate-400 text-lg">Aucun projet de ce type pour le moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsToDisplay.map((project) => (
              
              <div 
                key={project.id} 
                className={`flex flex-col p-6 bg-slate-900/60 backdrop-blur-sm rounded-xl border border-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  typeProjet === 'pro' ? 'hover:border-blue-500/50 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)]' : 'hover:border-purple-500/50 hover:shadow-[0_8px_30px_rgba(168,85,247,0.15)]'
                }`}
              >
                
                {/* En-tête de la carte : Badges technos à gauche, Date à droite */}
                <div className="flex justify-between items-start mb-5 gap-4">
                  
                  {/* Conteneur des badges technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split('/').map((techItem, index) => (
                      <span 
                        key={index} 
                        className={`text-xs font-bold px-2.5 py-1 rounded-md ${
                          typeProjet === 'pro' 
                            ? 'bg-blue-900/40 text-blue-300 border border-blue-800/50' 
                            : 'bg-purple-900/40 text-purple-300 border border-purple-800/50'
                        }`}
                      >
                        {techItem.trim()}
                      </span>
                    ))}
                  </div>

                  {/* Date avec whitespace-nowrap pour éviter qu'elle ne soit écrasée par les badges */}
                  <span className="text-sm font-medium text-slate-400 mt-1 whitespace-nowrap">
                    {project.date}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white mb-8">
                  {project.title}
                </h2>

                <Link 
                  to={`/projet/${project.id}`}
                  className={`mt-auto text-center py-3 rounded-lg font-bold text-sm transition-colors ${
                    typeProjet === 'pro' 
                      ? 'bg-blue-600 text-white hover:bg-blue-500' 
                      : 'bg-purple-600 text-white hover:bg-purple-500'
                  }`}
                >
                  Voir le projet en détail
                </Link>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}