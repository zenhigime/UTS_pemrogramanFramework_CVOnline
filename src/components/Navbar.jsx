import React from 'react'; // Import React
import { AppBar, Toolbar, Typography, Button } from '@mui/material'; // Import komponen dari Material-UI
import { Link } from 'react-router-dom'; // Import Link dari react-router-dom untuk navigasi
import '../styles/Navbar.css'; // Import CSS untuk Navbar

const Navbar = () => { // Komponen Navbar
  return (
    <AppBar position="fixed" color="primary"> {/* AppBar dengan posisi fixed artinya akan tetap berada di atas saat scroll, warna primer dari tema Material-UI adalah biru, dengan warna teks putih */}
      <Toolbar> {/* Toolbar untuk mengatur tata letak konten di dalam AppBar */}
        <Typography variant="h6" className="navbar-title"> {/* Typography untuk judul Navbar, dengan variant h6 untuk ukuran teks yang lebih besar */}
          CV Online
        </Typography> 
        <div className="navbar-links"> {/* Div untuk mengelompokkan link-link navigasi */}
          <Button color="inherit"> {/* Button dengan warna inherit artinya akan mengikuti warna teks dari tema Material-UI */} 
            <Link to="/" className="navbar-link">Home</Link> {/* Link untuk navigasi ke halaman Home yaitu root path "/", dengan className navbar-link untuk styling */}
          </Button>
          <Button color="inherit"> 
            <Link to="/about" className="navbar-link">About</Link> {/* Link untuk navigasi ke halaman About dengan path "/about" */}
          </Button>
        </div>
      </Toolbar> 
    </AppBar>
  );
};

export default Navbar;
