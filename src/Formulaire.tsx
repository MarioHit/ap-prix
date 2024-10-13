// src/Formulaire.tsx
import React, { useState } from 'react';
import './Formulaire.css'; // Importer le CSS
import { Article } from './types'; // Importer l'interface

interface FormulaireProps {
  onAddArticle: (article: Article) => void;
}

const Formulaire: React.FC<FormulaireProps> = ({ onAddArticle }) => {
  const [nom, setNom] = useState('');
  const [prix, setPrix] = useState('');
  const [magasin, setMagasin] = useState('');
  const [quantite, setQuantite] = useState('');
  const [prixAuKgLitre, setPrixAuKgLitre] = useState('');
  const [enPromo, setEnPromo] = useState('');
  const [utilisateur, setUtilisateur] = useState(''); // Nouveau champ

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const article: Article = { nom, prix, magasin, quantite, prixAuKgLitre, enPromo, utilisateur };
    onAddArticle(article); // Appelle la fonction pour ajouter l'article
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
