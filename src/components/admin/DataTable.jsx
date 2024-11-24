import React from 'react';

export default function DataTable() {
  // Data dummy untuk tabel
  const data = [
    { id: 1, name: 'John Doe', age: 25, status: 'Active' },
    { id: 2, name: 'Jane Smith', age: 30, status: 'Inactive' },
    { id: 3, name: 'Michael Brown', age: 22, status: 'Active' },
    { id: 4, name: 'Alice Johnson', age: 29, status: 'Pending' },
    { id: 4, name: 'Alice Johnson', age: 29, status: 'Pending' },
    { id: 4, name: 'Alice Johnson', age: 29, status: 'Pending' },
    { id: 4, name: 'Alice Johnson', age: 29, status: 'Pending' },
    { id: 4, name: 'Alice Johnson', age: 29, status: 'Pending' },
  ];

  // Fungsi untuk aksi tombol
  const handleUpdate = (id) => {
    alert(`Update data dengan ID: ${id}`);
  };

  const handleDelete = (id) => {
    alert(`Hapus data dengan ID: ${id}`);
  };

  return (
    <div style={{ marginTop: '20px', width: '100%', height: '350px' }}>
      <table
        style={{
          width: '1160px',
          borderCollapse: 'collapse',
          textAlign: 'left',
          margin: '0 auto',
        }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: '#f0f0f0',
              borderBottom: '2px solid #ddd',
            }}
          >
            <th style={{ padding: '10px', width: '50px' }}>ID</th>
            <th style={{ padding: '10px', width: '200px' }}>Nama</th>
            <th style={{ padding: '10px', width: '100px' }}>Usia</th>
            <th style={{ padding: '10px', width: '150px' }}>Status</th>
            <th style={{ padding: '10px', width: '100px' }}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '10px', width: '50px' }}>{item.id}</td>
              <td style={{ padding: '10px', width: '200px' }}>{item.name}</td>
              <td style={{ padding: '10px', width: '100px' }}>{item.age}</td>
              <td style={{ padding: '10px', width: '150px' }}>{item.status}</td>
              <td style={{ padding: '10px', width: '100px', textAlign: 'center' }}>
                {/* Button Update */}
                <button
                  style={{
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    marginRight: '10px',
                  }}
                  onClick={() => handleUpdate(item.id)}
                  title="Update"
                >
                  <i className="fas fa-edit" style={{ color: 'blue', fontSize: '18px' }}></i>
                </button>
                {/* Button Delete */}
                <button
                  style={{
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleDelete(item.id)}
                  title="Delete"
                >
                  <i className="fas fa-trash" style={{ color: 'red', fontSize: '18px' }}></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
