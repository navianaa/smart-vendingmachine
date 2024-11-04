import React from 'react';
import Navbar from '../components/Navbar';
import DaftarProduk from './DaftarProduk';
import Carousel from '../components/Carousel';

function Home() {
  return (
    <div className="container">
      <Navbar />
      
      <Carousel />
      
      <DaftarProduk />
    </div>
  );
}

export default Home;
