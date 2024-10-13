// src/Accueil.tsx
import React from 'react';
//import './Accueil.css'; // Importer le CSS pour Accueil (facultatif)

const Accueil: React.FC = () => {
  return (
    <div className="accueil">
      <h2>Bienvenue sur la Coopérative de Bons Prix !</h2>
      <p>Partagez et découvrez les meilleurs prix pour économiser ensemble.</p>
      <p>Rejoignez notre communauté et commencez à partager vos bonnes affaires.</p>
      <img src="https://via.placeholder.com/400" alt="Coopérative" className="image-accueil" />
    </div>
  );
};

export default Accueil;
