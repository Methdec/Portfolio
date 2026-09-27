import { Link } from 'react-router-dom';

export default function Experiences() {
  // Vos données d'expériences (à personnaliser)
  const experiencesData = [
    {
      id: 1,
      title: 'Support IT N1-N2 (Alternance)',
      organization: 'Acensi, La Défence',
      date: 'Septembre 2025 - Septembre 2026',
      description: 'En tant que membre du support informatique mes missions étaient les suivantes : \n- Préparation et maintenance des postes informatiques.\n- Support technique aux utilisateurs.\n- Gestion des incidents et résolution des problèmes.\n- Mise à jour des systèmes et logiciels.\n- Documentation des procédures et des solutions.\n- Gestiondes tickets et suivi des demandes.\n- Gestion des droits d\'accès et des comptes utilisateurs. \nJ\'utilisais principalement des outils tels que Jira pour le suivi des tickets, Active Directory pour la gestion des comptes utilisateurs, et divers outils tel que Microsoft Exchange, Intune, Teams admin et autres.',
      type: 'pro'
    },
    {
      id: 2,
      title: 'Bachelor Informatique',
      organization: 'Hexagone, Versailles',
      date: '2022 - 2025',
      description: 'Formation général en informatique incluant un programme complet sur : \n- Le développement web (React)\n- La programmation orientée objet (Python, C, C++)\n- Les bases de données SQL et NoSQL\n- L\'IoT avec la modelisation et l\'impression 3D',
      type: 'edu'
    },
    {
      id: 3,
      title: 'Stage d\'été - Concepteur IoT',
      organization: 'Straway, Versailles',
      date: 'Juillet 2025 - Aout 2025',
      description: 'Conception d\'un pot connecté pour receullir les signaux bioelectrique d\'une plante pour en déduire son état.\nUtilisation de sondes et d\'éléctrodes pour mesurer les signaux émis par la plante selon différents stimulis (Ombre, lumière, choque termique, etc...).\nLe projet a été réalisé avec un microcontrôleur ESP32, en utilisant le langage C++ et la plateforme Arduino',
      type: 'pro',
      relatedProjectId: 'pot-connecte'
    },
    {
      id: 4,
      title: 'Baccalauréat Général',
      organization: 'Lycée XYZ',
      date: 'Obtenu en 2022',
      description: 'Spécialités Mathématiques et Numérique et Sciences Informatiques (NSI).',
      type: 'edu'
    }
  ];

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
      
      {/* Bouton de retour */}
      <Link 
        to="/" 
        style={{ 
          display: 'inline-block', 
          marginBottom: '2rem', 
          color: '#3b82f6', 
          textDecoration: 'none', 
          fontWeight: 'bold' 
        }}
      >
        ← Retour à l'accueil
      </Link>

      <h1 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '3rem', textAlign: 'center' }}>
        Parcours & Expériences
      </h1>
      
      {/* Conteneur principal de la frise chronologique */}
      <div style={{ position: 'relative', paddingLeft: '2rem' }}>
        
        {/* La ligne verticale de la frise */}
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          bottom: 0, 
          left: '11px', 
          width: '2px', 
          backgroundColor: '#e2e8f0' 
        }}></div>

        {/* Boucle pour afficher chaque expérience */}
        {experiencesData.map((exp) => (
          <div 
            key={exp.id} 
            style={{ 
              position: 'relative', 
              marginBottom: '3rem' 
            }}
          >
            
            {/* Le point (puce) sur la ligne */}
            <div style={{ 
              position: 'absolute', 
              left: '-2rem', 
              top: '0.25rem', 
              width: '16px', 
              height: '16px', 
              borderRadius: '50%', 
              backgroundColor: exp.type === 'pro' ? '#3b82f6' : '#8b5cf6', // Bleu pour le pro, violet pour l'éducation
              border: '4px solid white', 
              boxShadow: '0 0 0 2px #e2e8f0' 
            }}></div>

            {/* Le bloc de contenu de l'expérience */}
            <div style={{ 
              backgroundColor: 'white', 
              padding: '1.5rem', 
              borderRadius: '8px', 
              border: '1px solid #e2e8f0', 
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)' 
            }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.5rem' }}>
                <div>
                  <h2 style={{ fontSize: '1.25rem', color: '#0f172a', margin: '0 0 0.25rem 0' }}>
                    {exp.title}
                  </h2>
                  <h3 style={{ fontSize: '1rem', color: '#64748b', margin: 0, fontWeight: 'normal' }}>
                    {exp.organization}
                  </h3>
                </div>
                
                <span style={{ 
                  backgroundColor: '#f1f5f9', 
                  color: '#475569', 
                  padding: '0.25rem 0.75rem', 
                  borderRadius: '9999px', 
                  fontSize: '0.875rem', 
                  fontWeight: 'bold',
                  whiteSpace: 'nowrap'
                }}>
                  {exp.date}
                </span>
              </div>

              <p style={{ color: '#475569', lineHeight: '1.6', marginTop: '1rem', marginBottom: 0, whiteSpace: 'pre-line' }}>
                {exp.description}
              </p>

              {exp.relatedProjectId && (
                <div style={{ marginTop: '1.25rem' }}>
                  <Link 
                    to={`/projet/${exp.relatedProjectId}`}
                    style={{
                      display: 'inline-block',
                      backgroundColor: '#e0f2fe', // Fond bleu très clair
                      color: '#0369a1', // Texte bleu foncé
                      padding: '0.5rem 1rem',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      fontSize: '0.875rem',
                      border: '1px solid #bae6fd'
                    }}
                  >
                    Voir le projet associé →
                  </Link>
                </div>
              )}
              
            </div>
          </div>
        ))}

      </div>
      
    </div>
  );
}