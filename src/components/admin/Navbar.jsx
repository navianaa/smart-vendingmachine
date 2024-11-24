import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar-admin">
      {/* Bagian Bawah */}
      <div className="navbar-bottom">
        <Link to="/admin">
          <button>Stok Barang</button>
        </Link>
        <Link to="/data-barang">
          <button>Data Barang</button>
        </Link>
        <Link to="/transaksi">
          <button>Transaksi</button>
        </Link>
        <Link to="/logout">
          <button>Logout</button>
        </Link>
      </div>
    </nav>
  );
}
