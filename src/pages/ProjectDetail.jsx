import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects'; 

export default function ProjectDetail() {
  const { projetId } = useParams();

  // 1. Détection du projet et de son type (Pro ou Perso)
  let isPro = true;
  let project = projectsData.pro.find(p => p.id === projetId);
  
  if (!project) {
    project = projectsData.perso?.find(p => p.id === projetId);
    isPro = false;
  }

  // Si le projet n'existe pas
  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 flex justify-center items-center">
        <h2 className="text-2xl text-white font-bold">Projet introuvable</h2>
      </div>
    );
  }

  // 2. Variables de couleurs dynamiques
  const themeColorRGB = isPro ? '59, 130, 246' : '168, 85, 247'; // Bleu ou Violet
  const themeBadgeBg = isPro ? 'bg-blue-900/40 text-blue-300 border-blue-800/50' : 'bg-purple-900/40 text-purple-300 border-purple-800/50';

  return (
    <div 
      className="min-h-screen bg-slate-950 px-4 md:px-8 py-12"
      style={{
        backgroundImage: `radial-gradient(rgba(${themeColorRGB}, 0.15) 1px, transparent 1px)`,
        backgroundSize: '24px 24px'
      }}
    >
      <div className="max-w-4xl mx-auto">
        
        {/* BOUTON RETOUR */}
        <Link 
          onClick={() => window.history.back()} 
          className="inline-flex items-center gap-2 mb-12 text-slate-400 font-bold hover:text-white transition-colors cursor-pointer decoration-transparent"
        >
          ← Retour
        </Link>

        {/* EN-TÊTE DU PROJET */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-4 items-center mb-8">
            <span className={`px-4 py-1.5 rounded-md text-sm font-bold border ${themeBadgeBg}`}>
              {project.tech}
            </span>
            <span className="text-slate-400 font-medium flex items-center gap-2">
              Date : {project.date}
            </span>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {project.githubLink && (
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 py-2.5 bg-slate-800 text-white font-bold rounded-lg border border-slate-700 hover:bg-slate-700 transition-colors shadow-sm"
              >
                Code Source (GitHub)
              </a>
            )}
            {project.demoLink && (
              <a 
                href={project.demoLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 py-2.5 bg-emerald-900/40 text-emerald-400 font-bold rounded-lg border border-emerald-800/50 hover:bg-emerald-800/60 transition-colors shadow-sm"
              >
                Lien vers le projet
              </a>
            )}
          </div>
        </header>

        {/* CONTENU DU PROJET (Texte + Images) */}
        <section className="mb-16">
          {project.content.map((paragraph, index) => {
            const cleanParagraph = paragraph.trim();
            
            if (cleanParagraph.startsWith('[IMAGE]')) {
              const imageUrl = cleanParagraph.replace('[IMAGE]', '').trim();
              return (
                <img 
                  key={index} 
                  src={imageUrl} 
                  alt={`Illustration ${index}`} 
                  className="w-full rounded-xl border border-slate-800 shadow-2xl my-12 object-cover" 
                />
              );
            }
            
            if (cleanParagraph.startsWith('[GALLERY_MEDIUM]')) {
              const urls = cleanParagraph.replace('[GALLERY_MEDIUM]', '').split(',');
              return (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                  {urls.map((url, i) => (
                    <img 
                      key={i} 
                      src={url.trim()} 
                      alt={`Illustration moyenne ${i}`} 
                      className="w-full h-auto rounded-xl border border-slate-800 shadow-xl object-cover" 
                    />
                  ))}
                </div>
              );
            }

            if (cleanParagraph.startsWith('[GALLERY_SMALL]')) {
              const urls = cleanParagraph.replace('[GALLERY_SMALL]', '').split(',');
              return (
                <div key={index} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-12">
                  {urls.map((url, i) => (
                    <img 
                      key={i} 
                      src={url.trim()} 
                      alt={`Illustration petite ${i}`} 
                      className="w-full h-auto rounded-xl border border-slate-800 shadow-xl object-cover" 
                    />
                  ))}
                </div>
              );
            }

            return (
              <p 
                key={index} 
                className="text-slate-300 text-lg leading-relaxed mb-6 whitespace-pre-line"
              >
                {paragraph}
              </p>
            );
          })}
        </section>

        {/* DOCUMENTS ASSOCIÉS */}
        {project.documents && project.documents.length > 0 && (
          <section className="mt-16 pt-12 border-t border-slate-800/50">
            <h3 className="text-2xl font-bold text-white mb-8">
              Documents associés
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.documents.map((doc) => (
                <div 
                  key={doc.id} 
                  className="bg-slate-900/60 backdrop-blur-sm p-6 rounded-xl border border-slate-800 flex flex-col hover:border-amber-500/50 transition-colors shadow-sm"
                >
                  <h4 className="text-xl font-bold text-white mb-2">{doc.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{doc.description}</p>
                  
                  <div className="flex gap-3 mt-auto">
                    <a 
                      href={doc.fileUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 text-center bg-slate-800 text-slate-300 py-2.5 rounded-lg font-bold text-sm hover:bg-slate-700 hover:text-white transition-colors border border-slate-700"
                    >
                      Consulter
                    </a>
                    <a 
                      href={doc.fileUrl} 
                      download={doc.downloadName} 
                      className="flex-1 text-center bg-amber-600 text-white py-2.5 rounded-lg font-bold text-sm hover:bg-amber-500 transition-colors shadow-[0_0_15px_rgba(217,119,6,0.3)]"
                    >
                      Télécharger
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}