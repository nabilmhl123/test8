import { useState, useEffect } from "react";
import Navbar from './Navbar'
import Navmobile from "./Navmobile";
import Socials from "./Socials";
import LOGO from '../assets/img/logo2.svg';

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setBg(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`${
        bg ? 'bg-tertiary h-20' : 'h-24'
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex
      items-center justify-between">
        {/* logo*/}
        <a href="#">
            <p>Nabil Mahel</p> 
        </a>
        {/*nav*/}
        <div className="hidden lg:block">
            <Navbar/>
        </div>
        {/*Socials*/}
        <div className="hidden lg:block">
            <Socials/>
        </div>
        {/*nav*/}
        
        <div className="lg:hidden">
            <Navmobile/>
        </div>
      </div>
    </header>
  );
};

export default Header;