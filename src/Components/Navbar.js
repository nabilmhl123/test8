import React from 'react';
import { navigation } from '../data';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav>
      <ul className='flex space-x-8 capitalize text-[15px]'>
        {navigation.map((item, index) => {
          return ( // Ajout du return ici
            <li className='text-white hover:text-accent cursor-pointer' key={index}>
              <Link 
                to={item.href}
                activeClass='active'
                spy={true}
                smooth={true}
                duration={500} // Vous avez mis true, mais ça devrait être une valeur numérique pour la durée
                offset={-70}
                className='transition-all duration-300'
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;