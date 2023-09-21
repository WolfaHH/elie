import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-white text-black font-light my-10'>
    < div className="container mx-auto flex justify-center">
      <div className="w-1/4 mx-auto mt-2 px-10">
        <h4 className='text-lg font-light mb-2'>Nos horaires</h4>
        <span className='font-extralight text-xs'>Du lundi au vendredi <br></br>de 8h00 à 18h00</span>
      </div>
      <div className="w-1/4 mx-auto mt-2 px-10">
        <h4 className='text-lg font-light mb-2'>Prendre rendez-vous</h4>
        <button className='bg-yellow-button text-white py-2 my-2 px-4 rounded-full hover:bg-blue-600 text-xs cursor-pointer'>Réserver en ligne</button><br></br>
        <span className='font-extralight text-xs'>Par téléphone dès Mars 2024</span>
      </div>
      <div className="container text-center w-1/4 mx-auto mt-2 px-10">
        <h4 className='text-lg font-light mb-2'>Accéder au centre</h4>
        <span className='font-extralight text-xs'>- Bus n°1, 20 et 21 ; arrêt Blécherette</span><br></br>
        <span className='font-extralight text-xs'>- Axe autoroutier, sortie Blécherette;</span><br></br>
        <span className='font-extralight text-xs'>parking des Plaines du Loup</span><br></br>
        <button className='cursor-pointer bg-green-button text-white py-2 my-2 px-4 rounded-full hover:bg-blue-600 text-xs'>Aller sur Google</button>
      </div>
      < div className="container text-center w-1/4 mx-auto mt-2 px-10">
        <h4 className='text-lg font-light mb-2'>Nous joindre</h4>
        <span className='font-extralight text-xs'>Plaines du loup 55</span><br></br>
        <span className='font-extralight text-xs'>1018 Lausanne</span><br></br>
        <span className='font-extralight text-xs'>+41 21 123 45 67</span><br></br>
        <span className='font-extralight text-xs'>info@ellie-sante.ch</span>
      </div>
    </div>
    </footer>
  );
};

export default Footer;

