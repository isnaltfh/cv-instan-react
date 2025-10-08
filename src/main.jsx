import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

// (opsional) font UI
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/merriweather/700.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
