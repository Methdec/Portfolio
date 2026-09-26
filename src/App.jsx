import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjetsList from './pages/ProjetsList';
import Experiences from './pages/Experiences';
import Documents from './pages/Documents';
import ProjectDetail from './pages/ProjectDetail';

import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets/:typeProjet" element={<ProjetsList />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/projet/:projetId" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;