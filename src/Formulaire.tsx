import React, { useState } from 'react';

interface Article {
  nom: string;
  prix: string;
  magasin: string;
}

interface FormulaireProps {
  onAddArticle: (article: Article) => void;
}

const Formulaire: React.FC<FormulaireProps> = ({ onAddArticle }) => {
  const [nom, setNom] = useState('');
  const [prix, setPrix] = useState('');
  const [magasin, setMagasin] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const article = { nom, prix, magasin };
    onAddArticle(article); // Appelle la fonction pour ajouter l'article
    setNom(''); // Réinitialiser les champs
    setPrix('');
    setMagasin('');
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
