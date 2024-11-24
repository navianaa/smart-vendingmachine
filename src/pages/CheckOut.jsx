import React from 'react';

export default function Checkout() {
  return (
    <div className="checkout-container">
      <style jsx>{
      `
        .checkout-container {
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          padding: 20px;
          background-color: #f5f5f5;
          min-height: 100vh;
          width:210vh;
        }

        .checkout-main {
          display: flex;
          flex-direction: row;
          gap: 20px;
          background: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          max-width: 800px;
          width: 100%;
        }

        .cart-section, .summary-section {
          flex: 1;
        }

        .cart-section h3, .summary-section h3 {
          font-size: 1.5em;
          margin-bottom: 20px;
          color: #333;
        }

        .cart-item {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background: #fafafa;
        }

        .cart-item-image {
          width: 100px;
          height:100px;
          background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmxkF1oWkksCmBmvMYtUY8DbbRU0OCqUGjzQ&s'); 
          border-radius: 8px;
          margin-right: 15px;
          
        }
          .cart-item-image img {
            width: 100%;
            height: 100%;
            object-fit: fit;
            border-radius: 8px;
          }

        .cart-item-details h4 {
          margin: 0;
          font-size: 1.2em;
          color: #555;
        }

        .quantity-control {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 10px 0;
        }

        .quantity-control button {
          padding: 5px 10px;
          font-size: 1em;
          border: 1px solid #ddd;
          background: #fff;
          cursor: pointer;
          border-radius: 4px;
        }

        .quantity-control button:hover {
          background: #f0f0f0;
        }

        .promo-list {
          margin-top: 10px;
        }

        .promo-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background: #fafafa;
          margin-bottom: 10px;
        }

        .promo-item button {
          padding: 5px 10px;
          font-size: 0.9em;
          border: none;
          background: #007bff;
          color: #fff;
          cursor: pointer;
          border-radius: 4px;
        }

        .promo-item button:hover {
          background: #0056b3;
        }

        .summary-section {
          padding-left: 20px;
          border-left: 1px solid #ddd;
        }

        .summary-item, .summary-sub-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
          font-size: 1em;
        }

        .summary-item.total {
          font-weight: bold;
          font-size: 1.2em;
          border-top: 2px solid #ddd;
          padding-top: 10px;
          margin-top: 10px;
        }

        .pay-button {
          width: 100%;
          padding: 10px 0;
          font-size: 1.2em;
          font-weight: bold;
          color: #fff;
          background: #28a745;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        .pay-button:hover {
          background: #218838;
        }
      `}</style>
      <main className="checkout-main">
        <section className="cart-section">
          <h1>Barang yang dibeli</h1>
          <button style={{ margin: "10px 0px" , padding: "10px" , borderRadius: "10px" ,background: "#FF6969" , border: 'none' , color: '#fff'}} ><a href='/'>Kembali</a></button>
          <div className="cart-item">
            <div className="cart-item-image"></div>
            <div className="cart-item-details">
              <h4>Kitkat</h4>
              <div className="quantity-control">
                <button>-</button>
                <span>2pc</span>
                <button>+</button>
              </div>
              <p>Rp.6.700,00</p>
            </div>
          </div>

          <h4>Promo</h4>
          <div className="promo-list">
            <div className="promo-item">
              <span>Diskon Rp.2.000</span>
              <button>Lihat Detail</button>
            </div>
            <div className="promo-item">
              <span>Diskon Rp.1.000</span>
              <button>Lihat Detail</button>
            </div>
            <div className="promo-item">
              <span>Diskon Rp.1.000</span>
              <button>Lihat Detail</button>
            </div>
          </div>
        </section>

        <section className="summary-section">
          <h3>Ringkasan Belanja</h3>
          <div className="summary-item">
            <span>Total Belanja</span>
            <span>Rp.7.000</span>
          </div>
          <div className="summary-item">
            <span>Biaya Transaksi</span>
            <span></span>
          </div>
          <div className="summary-sub-item">
            <span>Biaya Layanan</span>
            <span>Rp.1.000</span>
          </div>
          <div className="summary-sub-item">
            <span>Biaya Jasa Aplikasi</span>
            <span>Rp.1.000</span>
          </div>
          <div className="summary-item total">
            <span>Total Tagihan</span>
            <span>Rp.9.000</span>
          </div>
          <button className="pay-button">Bayar</button>
        </section>
      </main>
    </div>
  );
}
