// src/App.tsx
import { Routes, Route, Link } from 'react-router-dom';
import Formulaire from './Formulaire';
import Resultats from './Resultats';
import EditArticle from './EditArticle';
import { useState } from 'react';
import { Article } from './types';
import './App.css';

function App() {
  const [articleToEdit, setArticleToEdit] = useState<Article | null>(null);

  const handleEditArticle = (article: Article) => {
    setArticleToEdit(article);
  };

  const handleSaveArticle = (updatedArticle: Article) => {
    // Logique à ajouter pour mettre à jour l'article en local si nécessaire
    setArticleToEdit(null);
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
        <Route path="/ajouter" element={<Formulaire />} />
        <Route
          path="/resultats"
          element={<Resultats onEdit={handleEditArticle} />}
        />
        {articleToEdit && (
          <Route
            path="/modifier"
            element={
              <EditArticle
                articleToEdit={articleToEdit}
                onSave={handleSaveArticle}
              />
            }
          />
        )}
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
    </div>
  );
};

export default App;
