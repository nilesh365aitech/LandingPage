import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/NavBar.jsx";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GOOGLE_CLIENT_ID } from "./contstant/URLS.js";

createRoot(document.getElementById("root")).render(

   <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
     <Navbar />
     <App />
   </GoogleOAuthProvider>
);
