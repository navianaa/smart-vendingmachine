import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar-admin">
      
      {/* Bagian Bawah */}
      <div className="navbar-bottom">
        <button>CRUD</button>
        <button>Stok Barang</button>
        <button>Data Barang</button>
        <button>Transaksi</button>
      </div>
    </nav>
  )
}
