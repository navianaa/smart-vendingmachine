import React, { useState } from 'react';
import Navbar from '../../components/admin/Navbar';
import { Link } from 'react-router-dom';

export default function StokTambah() {
  const [formData, setFormData] = useState({
    nama: '',
    jumlah: '',
    harga: '',
    kategori: '',
    deskripsi: '',
    tanggalKedaluwarsa: '',
    lokasiPenyimpanan: '',
    gambar: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      gambar: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await fetch('/api/stok', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        alert('Data berhasil ditambahkan!');
        setFormData({
          nama: '',
          jumlah: '',
          harga: '',
          kategori: '',
          deskripsi: '',
          tanggalKedaluwarsa: '',
          lokasiPenyimpanan: '',
          gambar: null,
        });
      } else {
        alert('Gagal menambahkan data');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan');
    }
  };

  return (
    <div className="admin">
      <div className="container">
        <Navbar />
        <div className="form-container">
          <h2>Tambah Stok</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nama">Nama Barang</label>
              <input
                type="text"
                id="nama"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="jumlah">Jumlah</label>
              <input
                type="number"
                id="jumlah"
                name="jumlah"
                value={formData.jumlah}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="harga">Harga</label>
              <input
                type="number"
                id="harga"
                name="harga"
                value={formData.harga}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="kategori">Kategori Barang</label>
              <input
                type="text"
                id="kategori"
                name="kategori"
                value={formData.kategori}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="deskripsi">Deskripsi</label>
              <textarea
                id="deskripsi"
                name="deskripsi"
                value={formData.deskripsi}
                onChange={handleChange}
                rows="4"
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="tanggalKedaluwarsa">Tanggal Kedaluwarsa</label>
              <input
                type="date"
                id="tanggalKedaluwarsa"
                name="tanggalKedaluwarsa"
                value={formData.tanggalKedaluwarsa}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="gambar">Upload Gambar</label>
              <input
                type="file"
                id="gambar"
                name="gambar"
                onChange={handleFileChange}
              />
            </div>
            <div className="button-group">
            <button type="submit" className="btn">Tambah Stok</button>
            <Link to="/admin" className="btn-kembali">Kembali</Link>
          </div>

          </form>
        </div>
      </div>

      <style jsx>{`
        .form-container {
          position: fixed;
          right: 0;
          bottom: 0;
          height: 675px;
          width: 1200px;
          margin: 20px;
          padding: 20px;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        h2 {
          margin-bottom: 10px;
        }

        .form-group {
          margin-bottom: 14px;
        }

        .form-group label {
          display: block;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .btn {
          padding: 10px 15px;
          background: #007bff;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
         .button-group {
          display: flex;
          justify-content: space-between; /* Menempatkan tombol di ujung kiri dan kanan */
          margin-top: 20px; /* Memberikan jarak atas */
        }

        .btn-kembali {
          margin-left: auto; /* Menempatkan tombol Kembali di kanan */
          padding: 10px 15px;
          background: #ff0000;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .btn-kembali:hover {
          background: #cc0000;
        }
      `}</style>
    </div>
  );
}
