import React from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
} from "@mui/material";
import "../styles/Home.css";

const Home = () => { // Komponen Home
  return (
    <Box className="home-container"> {/* Box untuk mengelompokkan konten */}
      <Typography variant="h4" gutterBottom> {/* Typography untuk judul halaman, dengan variant h4 untuk ukuran teks yang lebih besar */}
        Curriculum Vitae — Ahmad Walid Jamal
      </Typography>

      {/* Personal Information */}
      <Card className="cv-card"> {/* Card untuk mengelompokkan konten personal information */}
        <CardContent> {/* CardContent untuk mengatur tata letak konten di dalam card */}
          <Typography variant="h5" gutterBottom> 
            👤 Personal Information
          </Typography>
          <Typography>Name: Ahmad Walid Jamal</Typography>
          <Typography>
            Place/Date of Birth: Makassar / January 12th 2002
          </Typography>
          <Typography>Sex: Male</Typography>
          <Typography>Marital Status: Single</Typography>
          <Typography>Religion: Islam</Typography>
          <Typography>Nationality: Indonesian</Typography>
          <Typography>
            Address: Perumahan Dosen Unhas Blok GI No.10 A, Makassar, 90245,
            Sulawesi Selatan
          </Typography>
          <Typography>Telephone: +62 856 5718 7696</Typography>
          <Typography>Email: ahmadwalidjamal@gmail.com</Typography>
        </CardContent>
      </Card>

      <Divider className="section-divider" /> {/* Divider untuk pembatas antar bagian */}

      {/* Formal Education */}
      <Card className="cv-card"> {/* Card untuk mengelompokkan konten formal education */}
        <CardContent>
          <Typography variant="h5" gutterBottom>
            🎓 Formal Education
          </Typography>
          <TableContainer component={Paper}> {/* TableContainer untuk mengelompokkan tabel */}
            <Table> {/* Table untuk menampilkan data dalam bentuk tabel */}
              <TableHead> {/* TableHead untuk mengelompokkan header tabel */}
                <TableRow> {/* TableRow untuk mengelompokkan baris dalam tabel */}
                  <TableCell>Period (Years)</TableCell> {/* TableCell untuk mengelompokkan sel dalam tabel */}
                  <TableCell>School / Institute</TableCell>
                  <TableCell>Major</TableCell>
                  <TableCell>Education State</TableCell>
                </TableRow>
              </TableHead>
              <TableBody> {/* TableBody untuk mengelompokkan body tabel */}
                <TableRow> {/* TableRow untuk mengelompokkan baris dalam tabel */}
                  <TableCell>2008 - 2012</TableCell>
                  <TableCell>MI Ta‘alumul Huda</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>SD</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2012 - 2014</TableCell>
                  <TableCell>SD Inpres Kampus Unhas</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>SD</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2014 - 2016</TableCell>
                  <TableCell>SMPN 17 Makassar (Accel.)</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>SMP</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2016 - 2019</TableCell>
                  <TableCell>SMAN 2 Tinggimoncong</TableCell>
                  <TableCell>Science</TableCell>
                  <TableCell>SMA</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      <Divider className="section-divider" />

      {/* Non-Formal Education */}
      <Card className="cv-card">
        <CardContent>
          <Typography variant="h5" gutterBottom>
            📚 Non-Formal Education / Training
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Year</TableCell>
                  <TableCell>Organisation / Instance</TableCell>
                  <TableCell>Skills</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>2019</TableCell>
                  <TableCell>Briton TOEFL Training</TableCell>
                  <TableCell>English – TOEFL score 633</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2019</TableCell>
                  <TableCell>JILC Learning Center</TableCell>
                  <TableCell>Math & Basic Science</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2020</TableCell>
                  <TableCell>Amsterdam Institute</TableCell>
                  <TableCell>Math & Basic Science</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      <Divider className="section-divider" />

      {/* Language Mastery */}
      <Card className="cv-card"> {/* Card untuk mengelompokkan konten language mastery */}
        <CardContent>
          <Typography variant="h5" gutterBottom>
            🌐 Language Mastery
          </Typography>
          <TableContainer component={Paper}> {/* TableContainer untuk mengelompokkan tabel */}
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    rowSpan={2} /* rowSpan untuk menggabungkan sel secara vertikal */
                    align="center" /* align untuk mengatur posisi teks */
                    sx={{ verticalAlign: "middle", fontWeight: "bold" }} /* sx untuk menambahkan style secara inline */
                  >
                    Language
                  </TableCell>
                  <TableCell
                    colSpan={4} /* colSpan untuk menggabungkan sel secara horizontal */
                    align="center" /* align untuk mengatur posisi teks */
                    sx={{ fontWeight: "bold" }} /* sx untuk menambahkan style secara inline */
                  >
                    Mastery 
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">Reading</TableCell>
                  <TableCell align="center">Writing</TableCell>
                  <TableCell align="center">Speaking</TableCell>
                  <TableCell align="center">Listening</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Indonesian (Bahasa)</TableCell>
                  <TableCell align="center">Native</TableCell>
                  <TableCell align="center">Native</TableCell>
                  <TableCell align="center">Native</TableCell>
                  <TableCell align="center">Native</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>English</TableCell>
                  <TableCell align="center">Excellent</TableCell>
                  <TableCell align="center">Decent</TableCell>
                  <TableCell align="center">Suffice</TableCell>
                  <TableCell align="center">Good</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      <Typography variant="body2" align="right" sx={{ marginTop: 3 }}> 
        Makassar
      </Typography>
    </Box>
  );
};

export default Home;
