import { Link } from 'react-router-dom'

export default function Experiences() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
      
      <Link to="/" style={{ display: 'inline-block', marginBottom: '2rem', color: '#3b82f6', textDecoration: 'none', fontWeight: 'bold' }}>
        ← Retour à l'accueil
      </Link>

      <h1 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '2rem' }}>
        Éducation & Expériences
      </h1>
      
      <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        <p style={{ color: '#64748b' }}>
          Ici se trouvera la frise chronologique de votre parcours.
        </p>
      </div>
      
    </div>
  )
}