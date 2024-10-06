import { useLocation } from 'react-router-dom';

const Resultats = () => {
  const location = useLocation();
  const { nom, prix, magasin } = location.state as { nom: string; prix: string; magasin: string };

  return (
    <div>
      <h2>Détails de l'Article ok </h2>
      <p><strong>Nom :</strong> {nom}</p>
      <p><strong>Prix :</strong> {prix} €</p>
      <p><strong>Magasin :</strong> {magasin}</p>
    </div>
  );
};

export default Resultats;
