import React from "react";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="footer">
      <div>
        <img src={logo} alt="logo" width="100px" />
      </div>
      <div className="madeBy">
        <p>Made by: Marcos, Sheyla & Michelle</p>
        <a href="https://github.com/Sheylare/doggyInn-app-client">
          Github Link
        </a>
      </div>
    </div>
  );
}

export default Footer;
