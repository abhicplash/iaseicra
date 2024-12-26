import React, { useState } from "react";
import "./Navbar.css";
import logoPic from "../../assets/white.png";
import logowrit from "../../assets/whitewrit.png";
import { HiBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const [view, setView] = useState(false);
  return (
    <div className="navContainer">
      <Link to={"/"}>
        <div className="logoWrapper">
          <img src={logoPic} alt="" className="logoPic" />
          {/* <img src={logoWri} alt="" className="logoWrit" /> */}
        </div>
      </Link>
      <HiBars3
        className="navIcon"
        onClick={() => {
          setView(!view);
        }}
      />
      {view ? (
        <ul className="listmobile">
          <Link to={"/"} className="navMainIcon">
            <li className="item">home</li>
          </Link>{" "}
          <Link to={"/about"} className="navMainIcon">
            <li className="item">about us</li>
          </Link>{" "}
          <Link to={"/programs"} className="navMainIcon">
            <li className="item">Programs</li>
          </Link>{" "}
          <Link to={"/media"} className="navMainIcon">
            <li className="item">Media</li>
          </Link>{" "}
          <Link to={"/contact"} className="navMainIcon">
            <li className="item">Contact us</li>
          </Link>
          <div className="NavlogoWrapper">
            <img src={logoPic} alt="" className="logolistImg" />
            <img src={logowrit} alt="" className="logolistwrit" />
          </div>
          <div className="navsocioLinks">
            <FaInstagram />
            <FaYoutube />
            <FaFacebookSquare />
          </div>
        </ul>
      ) : null}
      <ul className="listLarger">
        <Link to={"/"}>
          <li className="item">home</li>
        </Link>
        <Link to={"/about"}>
          <li className="item">about us</li>
        </Link>{" "}
        <Link to={"/programs"}>
          <li className="item">Programs</li>
        </Link>{" "}
        <Link to={"/media"}>
          <li className="item">Media</li>
        </Link>{" "}
        <Link to={"/contact"}>
          <li className="item">contact us</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
