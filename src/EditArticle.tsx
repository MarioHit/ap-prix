// src/EditArticle.tsx
import React, { useState, useEffect } from 'react';
import { Article } from './types';

interface EditArticleProps {
  articleToEdit: Article;
  onSave: (updatedArticle: Article) => void;
}

const EditArticle: React.FC<EditArticleProps> = ({ articleToEdit, onSave }) => {
  const [article, setArticle] = useState<Article>(articleToEdit);

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
      } else {
        console.error("Erreur lors de la mise à jour de l'article :", response.statusText);
      }
    } catch (error) {
      console.error("Erreur lors de la requête :", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Modifier l'Article</h2>
      {/* Formulaire similaire à celui pour l'ajout, pré-rempli avec les valeurs de 'article' */}
      <button type="submit" className="btn btn-success">Sauvegarder</button>
    </form>
  );
};

export default EditArticle;
