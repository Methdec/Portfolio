import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjetsList from './pages/ProjetsList';
import Experiences from './pages/Experiences';
// 1. Import du nouveau composant
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projets/:typeProjet" element={<ProjetsList />} />
      <Route path="/experiences" element={<Experiences />} />
      
      {/* 2. Remplacement de la div temporaire par le composant ProjectDetail */}
      <Route path="/projet/:projetId" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;