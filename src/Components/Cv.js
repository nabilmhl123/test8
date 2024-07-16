import React from 'react';
import CV from '../assets/img/CV.pdf'; // Assurez-vous que le fichier CV.pdf se trouve dans le bon répertoire

const Cv = () => {
  return (
    <section className='min-h-[146px] bg-tertiary flex items-center'>
      <div className='container mx-auto flex md:justify-between items-center flex-wrap justify-evenly'>
        <a 
          href={CV} 
          download 
          className='bg-primary text-white py-2 px-4 rounded-lg shadow-lg hover:bg-secondary transition duration-300'>
          Télécharger mon CV
        </a>
      </div>
    </section>
  );
}

export default Cv;