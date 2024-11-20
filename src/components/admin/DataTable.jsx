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

  return (
    <div style={{ marginTop: '20px', width: '100%' , height:'350px'}}>
      <table style={{ width: '1160px', borderCollapse: 'collapse', textAlign: 'left', margin: '0 auto',}}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0', borderBottom: '2px solid #ddd' }}>
            <th style={{ padding: '10px', width: '50px' }}>ID</th>
            <th style={{ padding: '10px', width: '200px' }}>Nama</th>
            <th style={{ padding: '10px', width: '100px' }}>Usia</th>
            <th style={{ padding: '10px', width: '150px' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '10px', width: '50px' }}>{item.id}</td>
              <td style={{ padding: '10px', width: '200px' }}>{item.name}</td>
              <td style={{ padding: '10px', width: '100px' }}>{item.age}</td>
              <td style={{ padding: '10px', width: '150px' }}>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
