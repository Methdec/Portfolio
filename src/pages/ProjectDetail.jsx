import { useParams, useNavigate } from 'react-router-dom';
// Import du fichier de données
import { projectsData } from '../data/projects';

export default function ProjectDetail() {
  const { projetId } = useParams();
  const navigate = useNavigate();

  // Fonction utilitaire pour chercher le projet dans toutes les catégories (pro et perso)
  const findProject = (id) => {
    const allProjects = [...projectsData.pro, ...projectsData.perso];
    return allProjects.find(p => p.id === id);
  };

  const project = findProject(projetId);

  if (!project) {
    return (
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', color: '#ef4444', marginBottom: '1rem' }}>Projet introuvable</h1>
        <button onClick={() => navigate('/')} style={{ color: '#3b82f6', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}>
          Retour à l'accueil
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
      
      {/* Bouton retour intelligent */}
      <button 
        onClick={() => navigate(-1)}
        style={{ display: 'inline-block', marginBottom: '2rem', color: '#3b82f6', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold', padding: 0 }}
      >
        ← Retour
      </button>

      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', color: '#0f172a', marginBottom: '0.5rem' }}>
          {project.title}
        </h1>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span style={{ backgroundColor: '#f1f5f9', color: '#475569', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 'bold' }}>
            {project.tech}
          </span>
          <span style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
            {project.date}
          </span>
        </div>
      </header>

      {/* Affichage conditionnel de la grande image principale si elle existe */}
      {project.images && project.images.length > 0 && (
        <img 
          src={project.images[0]} 
          alt={`Aperçu principal de ${project.title}`} 
          style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '2rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
        />
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
        
        <section style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#1e293b', marginBottom: '1.5rem' }}>Détails du projet</h2>
          
          {/* Affichage dynamique de chaque paragraphe */}
          {project.content.map((paragraph, index) => (
            <p key={index} style={{ color: '#475569', lineHeight: '1.7', marginBottom: '1rem' }}>
              {paragraph}
            </p>
          ))}

          {/* Affichage des autres images (sous forme de galerie) s'il y en a plus d'une */}
          {project.images && project.images.length > 1 && (
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              {project.images.slice(1).map((imgUrl, index) => (
                <img 
                  key={index}
                  src={imgUrl} 
                  alt={`Aperçu additionnel ${index + 2}`} 
                  style={{ width: 'calc(50% - 0.5rem)', borderRadius: '6px', objectFit: 'cover' }}
                />
              ))}
            </div>
          )}
        </section>

        <section style={{ display: 'flex', gap: '1rem' }}>
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#1e293b', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold' }}>
              Code Source (GitHub)
            </a>
          )}
          
          {project.demoLink && (
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold' }}>
              Voir la démo en ligne
            </a>
          )}
        </section>

      </div>
    </div>
  );
}