import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      {/* Favorite Icon */}
      <button className="favorite-icon">⭐</button>
      {/* Image Placeholder */}
      <div className="product-image"></div>
      {/* Product Info */}
      <h3 className="product-name">{product.name}</h3>
      <p className="product-category">{product.category}</p>
      <p className="product-price">Rp.{product.price.toLocaleString('id-ID')}</p>
      {/* Add to Cart Button */}
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
}
// #API NEEDED
function DaftarProduk() {
  const products = [
    { name: 'Kitkat', category: 'Snacks', price: 7000 },
    { name: 'Milo Mini', category: 'Snacks', price: 7000 },
    { name: 'Sprite Mini', category: 'Snacks', price: 7000 },
    { name: 'Coca Cola Mini', category: 'Snacks', price: 7000 },
    { name: 'Kitkat', category: 'Snacks', price: 7000 },
    { name: 'Kitkat', category: 'Snacks', price: 7000 },
    { name: 'Kitkat', category: 'Snacks', price: 7000 },
    { name: 'Kitkat', category: 'Snacks', price: 7000 },
  ];

  return (
    <div className="container">
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default DaftarProduk;
