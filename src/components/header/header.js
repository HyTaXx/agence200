'use client'
import React, { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex flex-row justify-around items-center p-6 bg-[#252422]">
        <button className="md:hidden" onClick={toggleMenu}>
            <img src="./images/burger.png" alt="Menu" width={30}/>
        </button>
        <div>
            <img src="./images/logo.svg" alt="logo agence200"/>
        </div>
        <div className={`fixed top-0 left-0 h-full w-64 bg-white transform transition-all md:relative md:flex md:items-center md:gap-x-6 md:w-auto md:bg-transparent ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
            <button className="absolute top-0 right-0 m-6 md:hidden" onClick={toggleMenu}>
              <img src="./images/close.png" alt="Close" width={30}/>
            </button>
            <ul className="flex flex-col gap-y-6 p-6 text-black md:flex-row md:gap-x-6 md:p-0 md:text-white md:ml-auto md:mr-auto">
                <li><a href="/">Accueil</a></li>
                <li><a href="/about-us">Qui sommes-nous ?</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact" className="bg-[#EB5E28] rounded-full px-4 py-3 md:hidden">Nous contacter</a></li>
            </ul>
        </div>
        <div>
            <a href="#" className="bg-[#EB5E28] rounded-full px-4 py-3 hidden md:block">Nous contacter</a>
        </div>
    </header>
  )
}