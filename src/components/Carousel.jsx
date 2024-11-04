// Carousel.js
import React, { useEffect, useState } from 'react';
import '../css/carousel.css'; // Pastikan untuk mengimport CSS

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/images/kitkat.jpg', // Ganti dengan path gambar Anda
    '/images/mountainDew.avif',
    '/images/sprite.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Ganti gambar setiap 3 detik

    return () => clearInterval(interval); // Membersihkan interval saat komponen unmount
  }, [images.length]);

  return (
    <div className="carousel">
      <div
        className="carousel-images"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img src={image} alt={`Slide ${index}`} key={index} className="carousel-image" />
        ))}
      </div>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
