import { Routes, Route, Link } from 'react-router-dom';
import Formulaire from './Formulaire';
import Resultats from './Resultats';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Exporter le type Article
export interface Article {
  nom: string;
  prix: string;
  magasin: string;
}

function App() {
  const [articles, setArticles] = useState<Article[]>([]);

  const handleAddArticle = (article: Article) => {
    setArticles((prevArticles) => [...prevArticles, article]); // Ajouter l'article à l'état
  };

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
        <Route path="/" element={<Formulaire onAddArticle={handleAddArticle} />} />
        <Route path="/resultats" element={<Resultats articles={articles} />} />
      </Routes>
    </>
  );
}

export default App;
