"use client"; // Required in a component using client-side interactivity

import React from 'react';
import Link from "next/link";
import Paper from '../components/Paper/Paper'
import { FaFontAwesome, FaChevronLeft } from 'react-icons/fa';
import Image from 'next/image';
import bg from '../Assets/bg-3.png';
import Footer from '../components/Footer/Footer';

const Main = () => {
  return (
    <div>
      {/* Background Image */}
      <div className="absolute top-0 left-0 h-full w-full -z-10">
        <Image 
          className='object-cover object-center h-full w-full' 
          src={bg} 
          alt="bg" 
          layout="fill" 
          style={{ objectFit: 'cover', objectPosition: 'center', mixBlendMode: 'darken' }}
        />
      </div>

      {/* Back Button */}
      <div>
        <Link href="/">
          <div className="mt-20 fixed top-2 left-2 pt-2">
            <button className='p-1 md:p-2 ml-2 text-black text-2xl border border-gray-400 hover:bg-gray-100 font-black rounded-md'>
              <FaChevronLeft />
            </button>
          </div>
        </Link>
      </div>
      
      {/* Paper Component */}
      <div className="mx-[8%]">
        <Paper />
      </div>
      <div className="-mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
