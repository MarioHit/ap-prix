// src/Formulaire.tsx
import React, { useState } from 'react';
import './Formulaire.css'; // Importer le CSS
import { Article } from './types'; // Importer l'interface

const Formulaire: React.FC = () => {
  const [id, setId] = useState('');
  const [nom, setNom] = useState('');
  const [prix, setPrix] = useState('');
  const [magasin, setMagasin] = useState('');
  const [quantite, setQuantite] = useState('');
  const [prixAuKgLitre, setPrixAuKgLitre] = useState('');
  const [enPromo, setEnPromo] = useState('');
  const [utilisateur, setUtilisateur] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const article: Article = { id, nom, prix, magasin, quantite, prixAuKgLitre, enPromo, utilisateur
    };

    // Appel à l'API pour ajouter un article
    try {
        const url = `${import.meta.env.VITE_API_BASE_URL}`;

        console.log("url ecrire", url);
        // const url = process.env.VITE_API_BASE_URL;

      if (!url) {
        console.error("Erreur : l'URL de l'API n'est pas définie");
        return;
      }
      const params = new URLSearchParams({
        action: 'ecrire',
        chemin: 'v2',
        nom: article.nom,
        prix: article.prix,
        magasin: article.magasin,
        quantite: article.quantite,
        prixAuKgLitre: article.prixAuKgLitre,
        enPromo: article.enPromo,
        utilisateur: article.utilisateur,
      });

      const response = await fetch(`${url}?${params.toString()}`, {
        method: 'POST',
      });

      if (response.ok) {
        const resultat = await response.text();
        console.log(resultat);
      } else {
        console.error('Erreur lors de la requête API:', response.statusText);
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'article :", error);
    }

    // Réinitialiser les champs
    setNom('');
    setPrix('');
    setMagasin('');
    setQuantite('');
    setPrixAuKgLitre('');
    setEnPromo('');
    setUtilisateur('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter un Article</h2>
      <input
        type="text"
        placeholder="Nom de l'article"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Prix"
        value={prix}
        onChange={(e) => setPrix(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Magasin"
        value={magasin}
        onChange={(e) => setMagasin(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Quantité"
        value={quantite}
        onChange={(e) => setQuantite(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Prix au kg/Litre"
        value={prixAuKgLitre}
        onChange={(e) => setPrixAuKgLitre(e.target.value)}
        required
      />
      <select value={enPromo} onChange={(e) => setEnPromo(e.target.value)} required>
        <option value="">Article en promo ?</option>
        <option value="oui">Oui</option>
        <option value="non">Non</option>
      </select>
      <input
        type="text"
        placeholder="Utilisateur"
        value={utilisateur}
        onChange={(e) => setUtilisateur(e.target.value)}
        required
      />
      <button type="submit">Ajouter l'article</button>
    </form>
  );
};

export default Formulaire;
