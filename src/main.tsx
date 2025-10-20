import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "@/components/ThemeProvider.tsx";
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="toolifybox-ui-theme">
      <App />
      <Analytics />
    </ThemeProvider>
  </StrictMode>
);

// Register Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(() => console.log("Service Worker registered"))
    .catch((err) => console.log("Service Worker registration failed:", err));
}
