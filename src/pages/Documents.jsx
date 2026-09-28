import { Link } from 'react-router-dom';

export default function Documents() {
  const documentsList = [
    {
      id: 'cv ft',
      title: 'CV Paul Bellanger Full Stack',
      description: 'Mon parcours complet, mes compétences techniques et mes formations au format PDF.',
      fileUrl: '/documents/CVPaulBellanger.pdf',
      downloadName: 'CV Paul Bellanger.pdf'
    },
    {
      id: 'cv iot',
      title: 'CV Paul Bellanger IoT',
      description: 'Mon parcours complet, mes compétences techniques et mes formations au format PDF.',
      fileUrl: '/documents/CVPaulBellangerIoT.pdf',
      downloadName: 'CV Paul Bellanger IoT.pdf'
    },
    {
      id: 'reco1',
      title: 'Lettre de recommandation DRH',
      description: 'Recommandation professionnelle attestant de mon travail et de mes compétences.',
      fileUrl: '/documents/LettreRecoDRH.pdf',
      downloadName: 'LettresRecoDRH.pdf'
    },
    {
      id: 'reco2',
      title: 'Lettre de recommandation Manager',
      description: 'Recommandation professionnelle attestant de mon travail et de mes compétences.',
      fileUrl: '/documents/LettreReco.pdf',
      downloadName: 'LettresRecoManager.pdf'
    }
  ];

  return (
    <div 
      className="min-h-screen bg-slate-950 px-4 md:px-8 py-12"
      style={{
        backgroundImage: 'radial-gradient(rgba(245, 158, 11, 0.15) 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}
    >
      <div className="max-w-5xl mx-auto">
        
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 mb-12 text-slate-400 font-bold hover:text-white transition-colors"
        >
          ← Retour à l'accueil
        </Link>

        <h1 className="text-4xl text-white font-bold mb-12 text-center">
          Documents & CV
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documentsList.map((doc) => (
            <div 
              key={doc.id} 
              className="bg-slate-900/60 backdrop-blur-sm p-6 rounded-xl border border-slate-800 hover:border-amber-500/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              
              <div className="mb-8">
                <h2 className="text-xl font-bold text-white mb-3">
                  {doc.title}
                </h2>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {doc.description}
                </p>
              </div>

              {/* mt-auto permet de toujours pousser les boutons en bas de la carte */}
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
                  className="flex-1 text-center bg-amber-600 text-white py-2.5 rounded-lg font-bold text-sm hover:bg-amber-500 transition-colors shadow-<0_0_15px_rgba(217,119,6,0.3)>"
                >
                  Télécharger
                </a>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}