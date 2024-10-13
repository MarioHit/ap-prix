// src/App.tsx
import { Routes, Route, Link } from 'react-router-dom';
import Formulaire from './Formulaire';
import Resultats from './Resultats';
// import Accueil from './Accueil'; // On va séparer Accueil dans son propre fichier
import './App.css'; // Assure-toi d'avoir des styles pour ta page
import Accueil from './Accueil';

function App() {
  return (
    <>
      <header>
        <h1>Coopérative de Bons Prix</h1>
        <nav>
          <Link to="/">Accueil</Link> | <Link to="/ajouter">Ajouter un Article</Link> | <Link to="/resultats">Voir les Résultats</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/ajouter" element={<Formulaire />} />
        <Route path="/resultats" element={<Resultats />} />
      </Routes>
    </>
  );
}

export default App;
