import { Link } from 'react-router-dom';

export default function Experiences() {
  const experiencesData = [
    {
      id: 1,
      title: 'Master Informatique',
      organization: 'Epitech, Paris',
      date: '2026 - 2028',
      description: 'Spécialisation en architecture logicielle, gestion de projets complexes et DevOps. \n- Déploiement CI/CD\n- Architecture Microservices\n- Management d\'équipe agile',
      type: 'edu'
    },
    {
      id: 2,
      title: 'Support IT N1-N2 (Alternance)',
      organization: 'Acensi, La Défense',
      date: 'Septembre 2025 - Septembre 2026',
      description: 'En tant que membre du support informatique mes missions étaient les suivantes :\n- Préparation et maintenance des postes informatiques.\n- Support technique aux utilisateurs.\n- Gestion des incidents et résolution des problèmes.\n- Mise à jour des systèmes et logiciels.\n- Documentation des procédures et des solutions.\n- Gestion des tickets et suivi des demandes.\n- Gestion des droits d\'accès et des comptes utilisateurs.\n\nJ\'utilisais principalement des outils tels que Jira pour le suivi des tickets, Active Directory pour la gestion des comptes utilisateurs, et divers outils tel que Microsoft Exchange, Intune, Teams admin et autres.',
      type: 'pro'
    },
    {
      id: 3,
      
      title: 'Bachelor / Licence Informatique', 
      organization: 'Hexagone, Versailles',
      date: '2023 - 2026',
      description: 'Formation générale en informatique incluant un programme complet sur :\n- Le développement web (React)\n- La programmation orientée objet (Python, C, C++)\n- Les bases de données SQL et NoSQL\n- L\'IoT avec la modélisation et l\'impression 3D',
      type: 'edu',
      relatedProjects: [
        { id: 'tamagotchi', name: 'Projet IoT Tamagotchi' },
        { id: 'flow', name: 'Application WEB "Twitter like"' },
        { id: 'allscans', name: 'Projet de certification de fin d\'étude' }
      ]
    },
    {
      id: 4,
      title: 'Stage d\'été - Concepteur IoT',
      organization: 'Straway, Versailles',
      date: 'Juillet 2025 - Aout 2025',
      description: 'Conception d\'un pot connecté pour recueillir les signaux bioélectriques d\'une plante pour en déduire son état.\nUtilisation de sondes et d\'électrodes pour mesurer les signaux émis par la plante selon différents stimuli (Ombre, lumière, choc thermique, etc...).\nLe projet a été réalisé avec un microcontrôleur ESP32, en utilisant le langage C++ et la plateforme Arduino',
      type: 'pro',
      relatedProjects: [
        { id: 'pot-connecte', name: 'Voir le projet Pot Connecté' }
    ]
    },
    {
      id: 5,
      title: 'Baccalauréat Général',
      organization: 'Institution Notre Dame de Chartres',
      date: 'Obtenu en 2023',
      description: 'Spécialités Mathématiques et Numérique et Sciences Informatiques (NSI).',
      type: 'edu'
    }
  ];

  return (
    <div 
      className="min-h-screen bg-slate-950 px-4 md:px-8 py-8"
      style={{
        backgroundImage: 'radial-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Bouton retour adapté au thème sombre */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 mb-12 text-slate-400 font-bold hover:text-white transition-colors"
        >
          ← Retour à l'accueil
        </Link>

        {/* Titre principal */}
        <h1 className="text-4xl text-white font-bold mb-16 text-center">
          Parcours & Expériences
        </h1>
        
        <div className="relative">
          
          {/* LIGNE VERTICALE assombrie pour se fondre dans le décor */}
          <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-0.5 bg-slate-800 transform md:-translate-x-1/2"></div>

          {experiencesData.map((exp) => {
            const isEdu = exp.type === 'edu';
            
            return (
              <div key={exp.id} className="relative mb-12 w-full">
                
                {/* LA PUCE (POINT) avec des bordures adaptées au fond noir */}
                <div className={`absolute top-0 left-8 md:left-1/2 transform -translate-x-1/2 mt-6 w-4 h-4 rounded-full border-4 border-slate-950 shadow-<0_0_0_2px_#334155> z-10 ${isEdu ? 'bg-emerald-500' : 'bg-blue-500'}`}>
                </div>

                {/* CONTENEUR DE LA CARTE */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${isEdu ? 'md:pr-12 md:mr-auto' : 'md:pl-12 md:ml-auto'}`}>
                  
                  {/* LA CARTE : Fond semi-transparent, bordure subtile, et flou d'arrière-plan */}
                  <div className="bg-slate-900/60 backdrop-blur-sm p-6 rounded-xl border border-slate-800 hover:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300">
                    
                    <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-4 mb-4">
                      <div>
                        <h2 className="text-xl font-bold text-white mb-1">
                          {exp.title}
                        </h2>
                        <h3 className="text-base text-slate-400 font-normal m-0">
                          {exp.organization}
                        </h3>
                      </div>
                      
                      {/* Badge de date assombri */}
                      <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap w-fit border border-slate-700">
                        {exp.date}
                      </span>
                    </div>

                    {/* Texte de description gris clair pour une bonne lisibilité */}
                    <p className="text-slate-400 leading-relaxed whitespace-pre-line m-0">
                      {exp.description}
                    </p>

                    {/* Liens vers les projets associés (adaptés avec des tons bleus nuit) */}
                    {exp.relatedProjects && exp.relatedProjects.length > 0 && (
                      <div className="mt-6 flex flex-wrap gap-3">
                        {exp.relatedProjects.map((projet) => (
                          <Link 
                            key={projet.id}
                            to={`/projet/${projet.id}`}
                            className="inline-block bg-blue-950/50 text-blue-300 px-4 py-2 rounded-lg font-bold text-sm border border-blue-900/50 hover:bg-blue-900 hover:text-white transition-colors"
                          >
                            {projet.name} →
                          </Link>
                        ))}
                      </div>
                    )}
                    
                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}