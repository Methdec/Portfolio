import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects'; 

export default function ProjectDetail() {
  const { projetId } = useParams();

  let project = projectsData.pro.find(p => p.id === projetId);
  if (!project) {
    project = projectsData.perso?.find(p => p.id === projetId);
  }

  if (!project) {
    return <div style={{ textAlign: 'center', padding: '4rem' }}><h2>Projet introuvable</h2></div>;
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      
      <Link onClick={() => window.history.back()} style={{ display: 'inline-block', marginBottom: '2rem', color: '#3b82f6', textDecoration: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
        ← Retour
      </Link>

      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '1rem' }}>
          {project.title}
        </h1>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          <span style={{ backgroundColor: '#f1f5f9', color: '#475569', padding: '0.4rem 1rem', borderRadius: '9999px', fontWeight: '500' }}>
            {project.tech}
          </span>
          <span style={{ color: '#64748b', display: 'flex', alignItems: 'center' }}>
            Date : {project.date}
          </span>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', fontWeight: 'bold', textDecoration: 'underline' }}>
              Code Source (GitHub)
            </a>
          )}
          {project.demoLink && (
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" style={{ color: '#10b981', fontWeight: 'bold', textDecoration: 'underline' }}>
              Lien vers le projet
            </a>
          )}
        </div>
      </header>

      <section style={{ marginBottom: '3rem' }}>
        {project.content.map((paragraph, index) => {
          const cleanParagraph = paragraph.trim();
          
          if (cleanParagraph.startsWith('[IMAGE]')) {
            const imageUrl = cleanParagraph.replace('[IMAGE]', '').trim();
            return (
              <img 
                key={index} 
                src={imageUrl} 
                alt={`Illustration ${index}`} 
                style={{ width: '100%', borderRadius: '8px', margin: '2rem 0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} 
              />
            );
          }
          
          
          if (cleanParagraph.startsWith('[GALLERY_MEDIUM]')) {
            const urls = cleanParagraph.replace('[GALLERY_MEDIUM]', '').split(',');
            return (
              <div key={index} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', margin: '2rem 0' }}>
                {urls.map((url, i) => (
                  <img 
                    key={i} 
                    src={url.trim()} 
                    alt={`Illustration moyenne ${i}`} 
                    style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} 
                  />
                ))}
              </div>
            );
          }

          // 3. GALERIE PETITE (3 images par ligne)
          if (cleanParagraph.startsWith('[GALLERY_SMALL]')) {
            const urls = cleanParagraph.replace('[GALLERY_SMALL]', '').split(',');
            return (
              <div key={index} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', margin: '2rem 0' }}>
                {urls.map((url, i) => (
                  <img 
                    key={i} 
                    src={url.trim()} 
                    alt={`Illustration petite ${i}`} 
                    style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} 
                  />
                ))}
              </div>
            );
          }


          return (
            <p 
              key={index} 
              style={{ color: '#334155', lineHeight: '1.8', marginBottom: '1.5rem', whiteSpace: 'pre-line', fontSize: '1.1rem' }}
            >
              {paragraph}
            </p>
          );
        })}
      </section>

      {/* La ligne borderTop et le paddingTop ont été retirés ici */}
      {project.documents && project.documents.length > 0 && (
        <section style={{ marginTop: '2rem' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#0f172a', marginBottom: '1.5rem' }}>
            Documents associés
          </h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {project.documents.map((doc) => (
              <div key={doc.id} style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <h4 style={{ fontSize: '1.1rem', color: '#0f172a', marginBottom: '0.5rem' }}>{doc.title}</h4>
                <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{doc.description}</p>
                
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <a href={doc.fileUrl} target="_blank" rel="noopener noreferrer" style={{ flex: 1, textAlign: 'center', backgroundColor: '#f1f5f9', color: '#334155', padding: '0.5rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.85rem' }}>
                    Consulter
                  </a>
                  <a href={doc.fileUrl} download={doc.downloadName} style={{ flex: 1, textAlign: 'center', backgroundColor: '#3b82f6', color: 'white', padding: '0.5rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.85rem' }}>
                    Télécharger
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}