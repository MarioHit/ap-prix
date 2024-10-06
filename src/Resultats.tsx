import React from 'react';
import { Article } from './App'; // Assurez-vous que ce chemin est correct.

interface ResultatsProps {
  articles: Article[];
}

const Resultats: React.FC<ResultatsProps> = ({ articles }) => {
  return (
    <div>
      <h2>Détails des Articles</h2>
      {articles.length === 0 ? (
        <p>Aucun article n'a été ajouté.</p>
      ) : (
        articles.map((article, index) => (
          <div key={index}>
            <p><strong>Nom :</strong> {article.nom}</p>
            <p><strong>Prix :</strong> {article.prix} €</p>
            <p><strong>Magasin :</strong> {article.magasin}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default Resultats;
