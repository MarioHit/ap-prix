// src/Formulaire.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Formulaire = () => {
  const [nom, setNom] = useState('');
  const [prix, setPrix] = useState('');
  const [magasin, setMagasin] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const article = { nom, prix, magasin };
    // Naviguer vers la page des résultats avec l'état
    navigate('/resultats', { state: article });
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
      <button type="submit">Ajouter l'article</button>
    </form>
  );
};

export default Formulaire;
