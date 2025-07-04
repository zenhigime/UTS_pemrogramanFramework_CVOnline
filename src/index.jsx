import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// Import CSS global
import "./styles/App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render( // Merender komponen App ke dalam elemen root
	<React.StrictMode>
		<BrowserRouter> {/* BrowserRouter untuk mengelola navigasi di aplikasi */}
			<App /> {/* Komponen App */}
		</BrowserRouter>
	</React.StrictMode>,
);
