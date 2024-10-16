// src/EditArticle.tsx
import React, { useState, useEffect } from 'react';
import { Article } from './types';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate pour la navigation

interface EditArticleProps {
  articleToEdit: Article;
  onSave: (updatedArticle: Article) => void;
}

const EditArticle: React.FC<EditArticleProps> = ({ articleToEdit, onSave }) => {
  const [article, setArticle] = useState<Article>(articleToEdit);
  const navigate = useNavigate(); // Initialiser useNavigate

  useEffect(() => {
    setArticle(articleToEdit);
  }, [articleToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setArticle((prevArticle) => ({ ...prevArticle, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = `${import.meta.env.VITE_API_BASE_URL}?action=modifier&chemin=v2`;
    try {
      const params = new URLSearchParams({
        id: article.id, // Utilisation correcte de l'ID
        nom: article.nom,
        prix: article.prix,
        magasin: article.magasin,
        quantite: article.quantite,
        prixAuKgLitre: article.prixAuKgLitre,
        enPromo: article.enPromo,
        utilisateur: article.utilisateur,
      });

      const response = await fetch(`${url}&${params.toString()}`, {
        method: 'POST',
      });

      if (response.ok) {
        const result = await response.text();
        console.log("Article mis à jour :", result);
        onSave(article);
        navigate('/resultats'); // Rediriger vers la liste des articles après la modification
      } else {
        console.error("Erreur lors de la mise à jour de l'article :", response.statusText);
      }
    } catch (error) {
      console.error("Erreur lors de la requête :", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container my-4 p-4 border rounded">
      <h2 className="text-center mb-4">Modifier l'Article</h2>
      <div className="form-group mb-3">
        <label htmlFor="nom">Nom de l'article</label>
        <input
          type="text"
          className="form-control"
          id="nom"
          name="nom"
          value={article.nom}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="prix">Prix (€)</label>
        <input
          type="number"
          className="form-control"
          id="prix"
          name="prix"
          value={article.prix}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="magasin">Magasin</label>
        <input
          type="text"
          className="form-control"
          id="magasin"
          name="magasin"
          value={article.magasin}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="quantite">Quantité</label>
        <input
          type="text"
          className="form-control"
          id="quantite"
          name="quantite"
          value={article.quantite}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="prixAuKgLitre">Prix au kg/Litre (€)</label>
        <input
          type="text"
          className="form-control"
          id="prixAuKgLitre"
          name="prixAuKgLitre"
          value={article.prixAuKgLitre}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="enPromo">Article en promo</label>
        <select
          className="form-control"
          id="enPromo"
          name="enPromo"
          value={article.enPromo}
          onChange={handleChange}
          required
        >
          <option value="non">Non</option>
          <option value="oui">Oui</option>
        </select>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="utilisateur">Utilisateur</label>
        <input
          type="text"
          className="form-control"
          id="utilisateur"
          name="utilisateur"
          value={article.utilisateur}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-success">Sauvegarder</button>
    </form>
  );
};

export default EditArticle;
