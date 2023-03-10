import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.js";

const header = <h1>This is a basic React App</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
