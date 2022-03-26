import React from "react";
import "./style.css";
import images from "../../images/maveric-logo-white.png";

const Footer = () => {
  return (
    <footer className="footer">
    <div  className="App-FooterImage">
      <img src={images} alt="Maveric" />
      <div className="App-footer" >
        <p>@Copyright, Maveric Systems Ltd 2022</p>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
