import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import './styles/App.css';

const App = () => {
  return (
    <>
      <Navbar /> {/* memanggil komponen Navbar */}
      <div className="app-container"> {/* Menambahkan className untuk styling */}
        <Routes> {/* Routes untuk mengelompokkan route */}
          <Route path="/" element={<Home />} /> {/* Route untuk halaman Home, element Home akan ditampilkan saat path "/", atau dengan kata lain file Home.jsx akan ditampilkan saat path "/", karena dalam file home.jsx kita inisialisasi komponen Home */}
          <Route path="/about" element={<About />} /> {/* Route untuk halaman About */}
        </Routes>
      </div>
    </>
  );
};

export default App;
