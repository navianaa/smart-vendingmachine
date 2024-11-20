import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      {/* Favorite Icon */}
      <button className="favorite-icon">⭐</button>
      {/* Image Placeholder */}
      <div className="product-image"><img src={product.image} alt="img" /></div>
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
    { image:'https://i.pinimg.com/736x/b7/ce/88/b7ce88958f260ac98d2036339eecade5.jpg' ,name: 'Kitkat', category: 'Snacks', price: 7000 },
    { image:'https://i.pinimg.com/736x/87/c7/4d/87c74dde15efaf3a29a6eca79f5ae299.jpg' ,name: 'Milo ', category: 'Snacks', price: 7000 },
    { image:'https://i.pinimg.com/736x/69/2e/ff/692eff503301cc9e98ec7621517d11ef.jpg' ,name: 'Sprite Mini', category: 'Snacks', price: 7000 },
    { image:'https://i.pinimg.com/736x/8a/10/00/8a100000f40a519cd068c7549f792f54.jpg' , name: 'Coca Cola Mini', category: 'Snacks', price: 7000 },
    { image:'https://i.pinimg.com/736x/44/ab/a0/44aba05078ecf6c0fd6a4bbfd117542d.jpg' ,name: 'Fanta', category: 'Snacks', price: 7000 },
    { image:'https://i.pinimg.com/736x/48/1c/d3/481cd3ab01a549065a3c512cd3f3f90a.jpg' ,name: 'Pepsi', category: 'Snacks', price: 7000 },
    { image:'https://i.pinimg.com/736x/4d/80/52/4d8052d068d3ec2449c01b56db2c8c54.jpg' ,name: 'Snickers', category: 'Snacks', price: 7000 },
    { image:'https://i.pinimg.com/236x/be/ee/82/beee82c575a1b66b9179e4368eb6187e.jpg' ,name: 'Coca Cola Zero', category: 'Snacks', price: 7000 },
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
