import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './index.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/admin/HomeAdmin';
import CheckOut from './pages/CheckOut';
import Produk from './pages/Produk';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}
export default App
