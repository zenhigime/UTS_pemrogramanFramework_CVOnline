import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  Link,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import "../styles/About.css";

const GITHUB_USERNAME = "zenhigime"; 
const VIDEO_URL = "https://www.youtube.com/watch?v=VIDEO_ID"; 
const GITHUB_REPO_LINK = "https://github.com/zenhigime/UTS_pemrogramanFramework_CVOnline";

const About = () => { // Komponen About
  const [repos, setRepos] = useState([]); // State untuk menyimpan data repositori
  const [error, setError] = useState(false); // State untuk menyimpan status error

  useEffect(() => { // useEffect untuk memuat data repositori saat komponen dimount
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`) // Fetch data repositori dari GitHub API
      .then((res) => { // Menangani respons dari API
        if (!res.ok) { // Jika respons tidak OK, lempar error
          throw new Error("GitHub API error");
        }
        return res.json(); // Mengembalikan data dalam format JSON
      })
      .then((data) => { // Menangani data dari API
        const userRepos = data.filter((repo) => !repo.fork); // Filter repositori yang bukan fork
        setRepos(userRepos); // Menyimpan data repositori ke state
      })
      .catch((err) => { // Menangani error
        console.error("Error fetching repos:", err); // Menampilkan error di console
        setError(true); // Menyimpan status error ke state
      });
  }, []); // useEffect hanya dijalankan sekali saat komponen dimount, array kosong sebagai dependensi

  return ( // mengembalikan JSX untuk menampilkan konten
    <Box className="about-container"> {/* Box untuk mengelompokkan konten */}
      <Card className="about-card"> {/* Card untuk mengelompokkan konten */}
        <CardContent> {/* CardContent untuk mengatur tata letak konten di dalam card */}
          <Typography variant="h5" gutterBottom>
            📺 Video Penjelasan Tugas
          </Typography>
          <Typography>
            Anda dapat menonton penjelasan lengkap saya di video berikut:
            <br /> {/* br digunakan untuk membuat baris baru */}
            <Link href={VIDEO_URL} target="_blank" rel="noopener"> {/* Link untuk membuka video di tab baru */}
              [Klik di sini untuk menonton video penjelasan saya] {/* Teks link */}
            </Link> 
          </Typography>
        </CardContent>
      </Card>

      <Card className="about-card"> {/* Card untuk mengelompokkan konten */}
        <CardContent>
          <Typography variant="h5" gutterBottom>
            📁 Repository GitHub Saya
          </Typography>

          {error ? ( /* Jika terjadi error, tampilkan pesan error */
            <>
              <Typography color="error"> {/* Typography untuk menampilkan pesan error, dengan warna merah */}
                Gagal memuat repositori dari GitHub API.
              </Typography>
              <Typography> {/* Typography untuk menampilkan pesan tambahan */}
                Anda masih bisa mengakses source code saya di:{" "}
                <Link href={GITHUB_REPO_LINK} target="_blank" rel="noopener"> {/* Link untuk membuka repositori di tab baru */}
                  {GITHUB_REPO_LINK}
                </Link>
              </Typography>
            </>
          ) : repos.length === 0 ? ( /* Jika data repositori belum dimuat, tampilkan pesan loading */
            <Typography>Sedang memuat data repositori...</Typography>
          ) : ( /* Jika data repositori sudah dimuat, tampilkan daftar repositori jika error tidak terjadi */
            <List> {/* List untuk menampilkan daftar repositori */}
              {repos.map((repo) => ( /* Map data repositori ke komponen ListItem */
                <ListItem key={repo.id} disablePadding> {/* ListItem untuk menampilkan item dalam daftar, dengan key untuk identifikasi unik */}
                  <ListItemText /* ListItemText untuk menampilkan teks dalam item */
                    primary={ /* primary untuk menampilkan teks utama, yaitu nama repositori */
                      <Link href={repo.html_url} target="_blank" rel="noopener"> {/* Link untuk membuka repositori di tab baru */}
                        {repo.name} {/* Teks link */}
                      </Link>
                    }
                    secondary={repo.description || "Tanpa deskripsi"} // secondary untuk menampilkan teks sekunder, yaitu deskripsi repositori, jika tidak ada deskripsi, tampilkan "Tanpa deskripsi"
                  />
                </ListItem>
              ))}
            </List>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default About;
