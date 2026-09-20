import { useParams, useNavigate } from 'react-router-dom';
// Import du fichier de données
import { projectsData } from '../data/projects';

export default function ProjetsList() {
  const { typeProjet } = useParams();
  const navigate = useNavigate();

  // On utilise projectsData au lieu de l'ancien MOCK_PROJECTS
  const projectsToDisplay = projectsData[typeProjet] || [];
  const pageTitle = typeProjet === 'pro' ? 'Mes Projets Professionnels' : 'Mes Projets Personnels';

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
      
      {/* Remplacement par navigate(-1) pour le retour intelligent */}
      <button 
        onClick={() => navigate(-1)}
        style={{ display: 'inline-block', marginBottom: '2rem', color: '#3b82f6', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold', padding: 0 }}
      >
        ← Retour
      </button>

      <h1 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '2rem' }}>
        {pageTitle}
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
        {projectsToDisplay.map((project) => (
          <div 
            key={project.id}
            style={{ padding: '1.5rem', backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '6px', cursor: 'pointer' }}
            onClick={() => navigate(`/projet/${project.id}`)}
          >
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#1e293b' }}>{project.title}</h3>
            <span style={{ fontSize: '0.875rem', color: '#64748b', backgroundColor: '#f1f5f9', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
              {project.tech}
            </span>
          </div>
        ))}
      </div>

    </div>
  )
}