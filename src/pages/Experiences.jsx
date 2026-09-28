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
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-8">
      
      <Link 
        to="/" 
        className="inline-block mb-8 text-blue-500 font-bold hover:text-blue-600 transition-colors"
      >
        ← Retour à l'accueil
      </Link>

      <h1 className="text-4xl text-slate-900 font-bold mb-16 text-center">
        Parcours & Expériences
      </h1>
      
      <div className="relative">
        
        {/* LIGNE VERTICALE : À gauche sur mobile (left-8), au centre sur PC (md:left-1/2) */}
        <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-0.5 bg-slate-200 transform md:-translate-x-1/2"></div>

        {experiencesData.map((exp) => {
          const isEdu = exp.type === 'edu';
          
          return (
            <div key={exp.id} className="relative mb-12 w-full">
              
              {/* LA PUCE (POINT) : S'aligne sur la ligne verticale */}
              <div className={`absolute top-0 left-8 md:left-1/2 transform -translate-x-1/2 mt-6 w-4 h-4 rounded-full border-4 border-white shadow-<0_0_0_2px_#e2e8f0> z-10 ${isEdu ? 'bg-purple-500' : 'bg-blue-500'}`}>
              </div>

              {/* CONTENEUR DE LA CARTE : Gestion du positionnement Gauche/Droite sur PC */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${isEdu ? 'md:pr-12 md:mr-auto' : 'md:pl-12 md:ml-auto'}`}>
                
                {/* LA CARTE EN ELLE-MÊME */}
                <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  
                  {/* En-tête de la carte */}
                  <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-4 mb-4">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 mb-1">
                        {exp.title}
                      </h2>
                      <h3 className="text-base text-slate-500 font-normal m-0">
                        {exp.organization}
                      </h3>
                    </div>
                    
                    <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap w-fit">
                      {exp.date}
                    </span>
                  </div>

                  {/* Description avec respect des sauts de ligne */}
                  <p className="text-slate-600 leading-relaxed whitespace-pre-line m-0">
                    {exp.description}
                  </p>

                  {/* Bouton de projet associé (si existant) */}
                  {exp.relatedProjects && exp.relatedProjects.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-3">
                      {exp.relatedProjects.map((projet) => (
                        <Link 
                          key={projet.id}
                          to={`/projet/${projet.id}`}
                          className="inline-block bg-sky-100 text-sky-800 px-4 py-2 rounded-md font-bold text-sm border border-sky-200 hover:bg-sky-200 transition-colors"
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
  );
}