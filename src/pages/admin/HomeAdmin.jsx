import React from 'react';
import Navbar from '../../components/admin/Navbar';
import '../../css/admin.css';
import Chart from '../../components/admin/Chart';
import DataTable from '../../components/admin/DataTable';

export default function HomeAdmin() {
  return (
    <div className="admin">
    <div className="container">
      <Navbar />
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
      {/* Tambahkan Data Table di bawah chart */}
      <div className="data-table-section">
        <h2>Data Barang</h2>
        <DataTable />
      </div>
    </div>
    </div>
  );
}
