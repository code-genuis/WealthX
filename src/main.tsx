import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Header from "./common/Header";
import Footer from "./common/Footer";
import OnlineOfflineStatus from "./components/OnlineOfflineStatus";
import "./index.css";

// Register Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(() => {
      console.log("✅ Service Worker Registered");
    })
    .catch((err) => console.error("❌ Service Worker Error:", err));
}

// Ensure "root" exists before rendering
const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Header />
      <OnlineOfflineStatus />
      <App />
      <Footer />
    </StrictMode>
  );
} else {
  console.error("❌ Root element not found!");
}
