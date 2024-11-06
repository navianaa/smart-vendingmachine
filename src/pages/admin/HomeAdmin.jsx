import React from 'react'
import Navbar from '../../components/admin/Navbar'
import '../../css/admin.css';

export default function HomeAdmin() {
  return (
    <div className='container'>
        <Navbar />
        <div className="admin-profile">
            <h1>Admin</h1>
        </div>
    </div>
  )
}
