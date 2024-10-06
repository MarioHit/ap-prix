import { Routes, Route, Link } from 'react-router-dom';
import Formulaire from './Formulaire';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Resultats from './Resultats';

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <nav>
        <Link to="/">Ajouter un Article</Link> | <Link to="/resultats">Voir les Résultats</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Formulaire />} />
        <Route path="/resultats" element={<Resultats />} />
      </Routes>
    </>
  );
}

export default App;
