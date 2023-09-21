import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-column">
        <h4>Nos horaires</h4>
        <span>Du lundi au vendredi de 8h00 à 18h00</span>
      </div>
      <div className="footer-column">
        <h4>Prendre rendez-vous</h4>
        <button>Réserver en ligne</button>
        <span>Par téléphone dès Mars 2024</span>
      </div>
      <div className="footer-column">
        <h4>Accéder au centre</h4>
        <span>- Bus n°1, 20 et 21 ; arrêt Blécherette</span>
        <span>- Axe autoroutier, sortie Blécherette;</span>
        <span>parking des Plaines du Loup</span>
        <button>Aller sur Google</button>
      </div>
      < div className="footer-column">
        <h4>Nous joindre</h4>
        <span>Plaines du loup 55</span>
        <span>1018 Lausanne</span>
        <span>+41 21 123 45 67</span>
        <span>info@ellie-sante.ch</span>
      </div>
    </footer>
  );
};

export default Footer;

