import React from "react";

export default function Profile() {
  const history = [
    { name: "Kitkat", qty: "1pcs", date: "29 Oktober 2024", price: "Rp.9.000" },
    { name: "Milo Mini", qty: "1pcs", date: "28 Oktober 2024", price: "Rp.10.000" },
    { name: "Sprite Mini", qty: "3pcs", date: "27 Oktober 2024", price: "Rp.14.000" },
    { name: "Kitkat", qty: "2pcs", date: "26 Oktober 2024", price: "Rp.16.000" },
  ];

  return (
      <div>
      {/* Header */}
      {/* Bio Section */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        {/* Profile Picture */}
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          style={{ borderRadius: "10px", width: "150px", height: "150px", objectFit: "cover" }}
        />
        {/* Bio Info */}
        <div style={{ flex: 1 }}>
          <h2>Bio</h2>
          <p>Nama: <strong>Aryaw.</strong></p>
          <p>No Telp.: <strong>+62 4145915512</strong></p>
          <p>Email: <strong>wardhana1903@gmail.com</strong></p>
          <p>Password: <strong>*********</strong></p>
          <button
            style={{
              marginTop: "10px",
              marginRight: "1000px",
              padding: "10px 20px",
              backgroundColor: "#d7ebda",
              border: "1px solid #4caf50",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Edit Profile
          </button>
          <a href="/"
            style={{
              padding: "10px 20px",
              backgroundColor: "#FBFBFB",
              border: "1px solid #FFDDAE",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Kembali
          </a>
        </div>
      </div>

      {/* History and Favorites Section */}
      <div style={{ display: "flex", gap: "20px" }}>
        {/* History */}
        <div style={{ flex: 1, backgroundColor: "#f0f9f1", padding: "30px", borderRadius: "10px" }}>
          <h3 style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
            History <span style={{ fontSize: "14px", cursor: "pointer" }}>Lihat Detail</span>
          </h3>
          {history.map((item, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <p>
                <strong>{item.name}</strong> ({item.qty})<br />
                {item.date}<br />
                {item.price}
              </p>
            </div>
          ))}
        </div>

        {/* Favorites */}
        <div style={{ flex: 1, backgroundColor: "#f0f9f1", padding: "30px", borderRadius: "10px" }}>
          <h3 style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
            Favorites <span style={{ fontSize: "14px", cursor: "pointer" }}>Lihat Detail</span>
          </h3>
          <p>Belum ada favorit.</p>
        </div>
      </div>
    </div>
  );
}
