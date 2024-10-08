// src/Resultats.tsx
import React from 'react';
import { Article } from './types'; // Importer l'interface depuis types.ts
import './Resultats.css'; // Importer le CSS

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
            <p><strong>Quantité :</strong> {article.quantite}</p>
            <p><strong>Prix au kg/Litre :</strong> {article.prixAuKgLitre} €</p>
            <p><strong>Article en promo :</strong> {article.enPromo}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default Resultats;
