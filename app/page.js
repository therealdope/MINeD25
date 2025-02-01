"use client";

import React, { useState, useEffect } from 'react';
import Loader from './components/Loader/Loader';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Team from './components/Team/Team';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Product from './components/Product/Product'

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main>
          <Header />
          <Hero />
          <Product/>
          <About />
          <Team />
          <Footer />
        </main>
      )}
    </>
  );
}
