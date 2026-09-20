import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  // Voici votre tableau de catégories (à l'intérieur de la fonction)
  const categories = [
    {
      id: 'pro',
      title: 'Projets Pro',
      description: 'Réalisations développées en entreprise ou pour des clients.',
      color: '#3b82f6',
      path: '/projets/pro'
    },
    {
      id: 'perso',
      title: 'Projets Perso',
      description: 'Expérimentations, side-projects et contributions open-source.',
      color: '#10b981',
      path: '/projets/perso'
    },
    {
      id: 'experiences',
      title: 'Éducation & Expériences',
      description: 'Mon parcours scolaire, diplômes et expériences professionnelles.',
      color: '#8b5cf6',
      path: '/experiences'
    }
  ];

  // C'est ce bloc 'return' qui dessine la page à l'écran
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
      
      <header style={{ textAlign: 'center', marginBottom: '4rem', marginTop: '2rem' }}>
        {/* On peut faire le test Tailwind ici si vous voulez : */}
        {/* className="text-5xl font-bold mb-4 text-slate-900" */}
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#0f172a' }}>
          Bonjour, je suis [Votre Nom]
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#64748b', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
          Développeur passionné par la création d'interfaces intuitives. 
          Bienvenue sur mon portfolio où vous pourrez découvrir mon parcours et mes réalisations.
        </p>
      </header>

      <section>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem' }}>
          Mes Domaines d'Expertise
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {categories.map((category) => (
            <div 
              key={category.id} 
              style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                borderTop: `4px solid ${category.color}`,
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              onClick={() => navigate(category.path)}
            >
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: category.color }}>
                {category.title}
              </h3>
              <p style={{ color: '#64748b', lineHeight: '1.5' }}>
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}