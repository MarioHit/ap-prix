// src/App.tsx
import { Routes, Route, Link } from 'react-router-dom';
import Formulaire from './Formulaire';
import Resultats from './Resultats';
import { useState } from 'react';
import './App.css'; // Assure-toi d'avoir des styles pour ta page

function App() {
  const [articles, setArticles] = useState<{ nom: string; prix: string; magasin: string; }[]>([]);

  const handleAddArticle = (article: { nom: string; prix: string; magasin: string; }) => {
    setArticles((prevArticles) => [...prevArticles, article]); // Ajouter l'article à l'état
  };

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
        <Route path="/ajouter" element={<Formulaire onAddArticle={handleAddArticle} />} />
        <Route path="/resultats" element={<Resultats articles={articles} />} />
      </Routes>
    </>
  );
}

const Accueil = () => {
  return (
    <div className="accueil">
      <h2>Bienvenue sur la Coopérative de Bons Prix !</h2>
      <p>Partagez et découvrez les meilleurs prix pour économiser ensemble.</p>
      <p>Rejoignez notre communauté et commencez à partager vos bonnes affaires.</p>
      <img src="https://via.placeholder.com/400" alt="Coopérative" className="image-accueil" />
    </div>
  );
};

export default App;
