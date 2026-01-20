import React, { useState } from 'react';
import { FaPhoneAlt, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from './assets/logo.jpg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);  
  };

  const navItems = [
    { link: 'Home', path: '/' }, 
    { link: 'About', path: '/about' },
    { link: 'Properties', path: '/properties' },
    { link: 'Services', path: '/services' },
    { link: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="flex justify-between items-center gap-4 lg:px-20 px-4 py-3 sticky top-0 z-30 bg-[#F5F5F7]">
      <div id="logo">
        <img src={logo} alt="Logo" className="lg:w-[85px] h-[80px] cursor-pointer" />
      </div>
      <ul className="lg:flex justify-center items-center gap-8 hidden">
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            className="text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 rounded-lg hover:bg-red-500 hover:text-white"
            to={path}>
            {link}
          </Link>
        ))}
      </ul>
      <div className="flex justify-center items-center lg:hidden" onClick={toggleMenu}>
        {/* {menuOpen ? (
          <FaXmark className="text-black text-2xl cursor-pointer" aria-label="Close Menu" />
        ) : (
          <FaBars className="text-black text-2xl cursor-pointer" aria-label="Open Menu" />
        )} */}
      </div>
      <div className={`${menuOpen ? 'flex' : 'hidden'} w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0`} onClick={closeMenu}>
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-700 hover:text-black w-full text-center"
              to={path}
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center lg:gap-8 gap-2">
        <div className="flex justify-center items-center lg:gap-3 gap-1">
          <FaPhoneAlt className="text-red-500" />
          <h1 className="lg:text-xl text-sm text-black font-semibold">9368312086</h1>
        </div>
        <FaUserCircle className="text-blue-600 text-2xl cursor-pointer hover:bg-red" />
      </div>
    </nav>
  );
};

export default Header;
