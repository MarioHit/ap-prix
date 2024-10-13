// src/Resultats.tsx
import React, { useEffect, useState } from 'react';
import { Article } from './types'; // Importer l'interface depuis types.ts
import './Resultats.css'; // Importer le CSS

const Resultats: React.FC = () => {
  const [fetchedArticles, setFetchedArticles] = useState<Article[]>([]);

  const fetchArticles = async () => {
    try {
        
        const url = `${import.meta.env.VITE_API_BASE_URL}?action=lire&chemin=v2`;
        //const url = `${process.env}?action=lire&chemin=v2`;
        console.log("url lire", url);
        if (!url) {
            console.error("Erreur : l'URL de l'API n'est pas définie");
            return;
          }

      const response = await fetch(url);
      const data = await response.json();
      setFetchedArticles(data.donnees); // Assurez-vous que l'API renvoie une liste d'articles dans "donnees"
    } catch (error) {
      console.error("Erreur lors de la récupération des articles :", error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div>
      <h2>Détails des Articles</h2>
      {fetchedArticles.length === 0 ? (
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
              <th>Utilisateur</th>
            </tr>
          </thead>
          <tbody>
            {fetchedArticles.map((article, index) => (
              <tr key={index}>
                <td>{article.nom}</td>
                <td>{article.prix}</td>
                <td>{article.magasin}</td>
                <td>{article.quantite}</td>
                <td>{article.prixAuKgLitre}</td>
                <td>{article.enPromo}</td>
                <td>{article.utilisateur}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Resultats;
