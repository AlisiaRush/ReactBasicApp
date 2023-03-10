import React from "react"; // manditory in older React Apps only. Good practice to include anyway
import ReactDOM from "react-dom/client";
import App from "./app.js";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
