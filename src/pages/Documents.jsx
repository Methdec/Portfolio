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
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
      
      <Link to="/" style={{ display: 'inline-block', marginBottom: '2rem', color: '#3b82f6', textDecoration: 'none', fontWeight: 'bold' }}>
        ← Retour à l'accueil
      </Link>

      <h1 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '2rem' }}>
        Documents & CV
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {documentsList.map((doc) => (
          <div key={doc.id} style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            
            <div>
              <h2 style={{ fontSize: '1.3rem', color: '#0f172a', marginBottom: '0.75rem' }}>
                {doc.title}
              </h2>
              <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                {doc.description}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href={doc.fileUrl} target="_blank" rel="noopener noreferrer" style={{ flex: 1, textAlign: 'center', backgroundColor: '#f1f5f9', color: '#334155', padding: '0.6rem 1rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem' }}>
                Consulter
              </a>

              <a href={doc.fileUrl} download={doc.downloadName} style={{ flex: 1, textAlign: 'center', backgroundColor: '#3b82f6', color: 'white', padding: '0.6rem 1rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem' }}>
                Télécharger
              </a>
            </div>
            
          </div>
        ))}
      </div>

    </div>
  );
}