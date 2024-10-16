// src/Resultats.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate pour la navigation
import { Article } from './types';

interface ResultatsProps {
  onEdit: (article: Article) => void; // Fonction appelée lors de la modification
}

const Resultats: React.FC<ResultatsProps> = ({ onEdit }) => {
  const [fetchedArticles, setFetchedArticles] = useState<Article[]>([]);
  const navigate = useNavigate(); // Hook pour la navigation

  const fetchArticles = async () => {
    try {
      const url = `${import.meta.env.VITE_API_BASE_URL}?action=lire&chemin=v2`;
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

  const handleEditClick = (article: Article) => {
    onEdit(article); // Appeler la fonction de modification pour définir l'article à modifier
    navigate('/modifier'); // Naviguer vers la page de modification
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Détails des Articles</h2>
      {fetchedArticles.length === 0 ? (
        <p className="text-center text-muted">Aucun article n'a été ajouté.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Nom</th>
                <th scope="col">Prix (€)</th>
                <th scope="col">Magasin</th>
                <th scope="col">Quantité</th>
                <th scope="col">Prix au kg/Litre (€)</th>
                <th scope="col">Article en promo</th>
                <th scope="col">Utilisateur</th>
                <th scope="col">Actions</th>
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
                  <td>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handleEditClick(article)} // Utiliser handleEditClick
                    >
                      Modifier
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Resultats;
