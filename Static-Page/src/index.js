import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./Navbar.js";
import MainContent from "./MainContent.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <div className="container">
    <NavBar />
    <MainContent />
  </div>
)
