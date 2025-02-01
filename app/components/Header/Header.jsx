import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import './Header.css'

const Header = ({ main }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='w-full min-h-20 fixed top-0 left-0 px-8 py-4 flex items-center justify-between bg-opacity-50 backdrop-blur-lg shadow-md z-10 bg-white'>
      <div className='text-[1.3rem] text-pink-600 hover:text-blue-600'>
        <a href="#home">Deadline Disco</a>
      </div>

      {/* Desktop Menu */}
      <div className='navbar-nav hidden md:flex gap-5 text-[1.1rem] items-center'>
        <a href="#home" className='hover:text-blue-500'>Home</a>
        <a href="#product" className='hover:text-blue-500'>Product</a>
        <a href="#about" className='hover:text-blue-500'>About</a>
        <a href="#team" className='hover:text-blue-500'>Team</a>
      </div>

      <div className='hidden md:block'>
        <Link href='/Main'>
          <button
            onClick={main}
            className='border border-pink-600 p-3 px-6 rounded-md text-[0.9rem] text-pink-600 hover:bg-pink-100'>
            Get Started
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className='md:hidden'>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='navbar-nav absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden'>
          <a href="#home" className='py-2' onClick={() => setIsOpen(false)}>Home</a>
          <a href="#product" className='py-2' onClick={() => setIsOpen(false)}>Product</a>
          <a href="#about" className='py-2' onClick={() => setIsOpen(false)}>About</a>
          <a href="#contact" className='py-2' onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Header;