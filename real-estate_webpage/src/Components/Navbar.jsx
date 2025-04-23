import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/h_logo.svg';

const Navbar = () => {
  useEffect(() => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    const toggleMenu = () => {
      mobileMenu.classList.toggle('hidden');
    };

    menuBtn.addEventListener('click', toggleMenu);

    return () => {
      menuBtn.removeEventListener('click', toggleMenu);
    };
  }, []);

  return (
    <div className='navbar w-full h-[90px] flex items-center justify-center bg-white shadow-sm'>
      <div className='relative w-full max-w-[1200px] h-[48px] flex items-center justify-between px-4 md:px-6'>
        <Link to="/">
          <div className='logo w-[85px] h-[30px] cursor-pointer'>
            <img src={logo} alt="Logo" className='w-full h-full object-contain' />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex navLinks w-auto lg:w-[493px] h-[30px] font-medium justify-between items-center text-[#0C0407] space-x-6'>
          <Link to="/" className='hover:text-gray-600 transition-colors'>Home</Link>
          <Link to="/About" className='hover:text-gray-600 transition-colors'>About Us</Link>
          <Link to="/Pages" className='hover:text-gray-600 transition-colors'>Pages</Link>
          <Link to="/Blog" className='hover:text-gray-600 transition-colors'>Blog</Link>
          <Link to="/Cart" className='hover:text-gray-600 transition-colors'>Cart(0)</Link>
        </nav>
        <Link to="/Exploreall" className='hidden md:block'>
          <button className='explore w-[135px] h-[48px] bg-black text-white font-semibold rounded-[10px] cursor-pointer flex items-center justify-center hover:bg-black/80 transition-all duration-200'>
            Explore all
          </button>
        </Link>

        {/* Hamburger icon */}
        <button
          id="menu-btn"
          className='md:hidden text-2xl text-black focus:outline-none'
        >
          <i className="ri-menu-line"></i>
        </button>

        {/* Mobile Navigation - hidden by default */}
        <div
          id="mobile-menu"
          className='hidden absolute top-[60px] left-0 right-0 bg-white shadow-lg rounded-b-lg md:hidden z-50'
        >
          <nav className='flex flex-col py-4 px-6 space-y-4'>
            <Link to="/" className='hover:text-gray-600 transition-colors'>Home</Link>
            <Link to="/About" className='hover:text-gray-600 transition-colors'>About Us</Link>
            <Link to="/Pages" className='hover:text-gray-600 transition-colors'>Pages</Link>
            <Link to="/Blog" className='hover:text-gray-600 transition-colors'>Blog</Link>
            <Link to="/Cart" className='hover:text-gray-600 transition-colors'>Cart(0)</Link>
            <Link to="/Exploreall" className='mt-4'>
              <button className='w-full h-[48px] bg-black text-white font-semibold rounded-[10px] cursor-pointer flex items-center justify-center hover:bg-black/80 transition-all duration-200'>
                Explore all
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

