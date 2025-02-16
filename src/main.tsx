import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Header from "./common/Header.tsx";
import Footer from "./common/Footer.tsx";
import "./index.css";

// ✅ Service Worker Register Karne Ka Code
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((reg) => console.log("✅ Service Worker Registered", reg))
      .catch((err) => console.log("❌ Service Worker Registration Failed", err));
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <App />
    <Footer />
  </StrictMode>
);
