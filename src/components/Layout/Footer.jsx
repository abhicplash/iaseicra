import React from "react";
import "./Footer.css";
import logoPic from "../../assets/white.png";
import logowrit from "../../assets/whitewrit.png";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerLogoWrapper">
        <img src={logoPic} alt="" className="footLogoImg" />
        <img src={logowrit} alt="" className="footLogowrit" />
      </div>
      <div className="footerLinkWrapper">
        <Link to={"/"} className="FootLink">
          home
        </Link>
        <Link to={"/"} className="FootLink">
          About us
        </Link>
        <Link to={"/"} className="FootLink">
          Programs
        </Link>
        <Link to={"/"} className="FootLink">
          Academics
        </Link>
        <Link to={"/"} className="FootLink">
          Contact us
        </Link>
      </div>
      {/* <div className="FootSocioLinks">
        <a href="">
          <BsInstagram />
        </a>
        <a href="">
          <BsYoutube />
        </a>{" "}
        <a href="">
          <FaFacebookSquare />
        </a>
      </div> */}
      <div className="footerLinkWrapper">
        <h3>Al Rawda 2 Ajman -UAE</h3>
      </div>
    </div>
  );
};

export default Footer;
