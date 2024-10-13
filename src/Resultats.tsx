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
        <table className="resultats-table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prix (€)</th>
              <th>Magasin</th>
              <th>Quantité</th>
              <th>Prix au kg/Litre (€)</th>
              <th>Article en promo</th>
              <th>Utilisateur</th> {/* Nouvelle colonne */}
            </tr>
          </thead>
          <tbody>
            {articles.map((article, index) => (
              <tr key={index}>
                <td>{article.nom}</td>
                <td>{article.prix}</td>
                <td>{article.magasin}</td>
                <td>{article.quantite}</td>
                <td>{article.prixAuKgLitre}</td>
                <td>{article.enPromo}</td>
                <td>{article.utilisateur}</td> {/* Afficher l'utilisateur */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Resultats;
