import React from 'react';
import Navbar from '../../components/admin/Navbar';
import '../../css/admin.css';
import Chart from '../../components/admin/Chart'; // Adjust the import path as needed

export default function HomeAdmin() {
  return (
    <div className="container">
      <Navbar />
      <div className="admin-profile">
        <h1>Admin</h1>
      </div>
      <div className="top-section">
        <div className="chart-box">
          <Chart />
        </div>
        <div className="chart-box">
          <Chart />
        </div>
        <div className="chart-box">
          <Chart />
        </div>
      </div>
    </div>
  );
}
