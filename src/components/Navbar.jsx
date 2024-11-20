import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-link">Products</Link>
      </div>
      <div className="navbar-center">
        <input type="text" className="search-bar" placeholder="Search..." />
      </div>
      <div className="navbar-right">
        <img src={'/images/userDefault.png'} alt="Profile" className="profile-pic" />
        <Link to="/profile" className="username">Arya</Link>
        <div className="cart-icon">
          <img src={'/icons/cart.svg'} alt="Cart" />
        </div>
        <Link to="/cart" className="navbar-link">Cart</Link>
      </div>
    </nav>
  );
}

export default Navbar;
