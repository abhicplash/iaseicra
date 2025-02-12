import React from "react";
import "./MissionAndVision.css";
import { BsEyeFill } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import { Link } from "react-router-dom";

const MissionAndVision = () => {
  return (
    <div className="mission-vision-container">
      <div className="about-img">
        <div className="smallimages">
          <img
            className="images"
            src="https://iaseicra.com/images/services/sports.jpg"
            alt=""
          />
          <img
            className="images"
            src="https://iaseicra.com/images/services/vocal-music.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="right-side-details">
        {/* <div className="aboutus">About Us</div> */}
        <div className="about-heading">
          A Knowledge Hub Where Wisdom merges with Civil Service Training, Art,
          Music, Dance & Sports
        </div>
        <p className="about-para">
          a robust educational network extending from Qatar and the Middle East
          to the UAE. We are a unique blend of IAS coaching, performing arts,
          culture, sports, and education, dedicated to fostering creativity,
          talent, and physical fitness.
        </p>
        <div className="mission-vision">
          <div className="vision-icon">
            <BsEyeFill className="vision" />
          </div>
          <p className="vision-para">
            {" "}
            To be the leading centre for nurturing artistic, creative and
            athletic excellence.
          </p>
        </div>
        <div className="mission-vision">
          <div className="mission-icon">
            <TbTargetArrow className="vision" />
          </div>
          <p className="vision-para">
            {" "}
            Empower individuals to express themselves through art, dance and
            sports while promoting physical and mental well being
          </p>
        </div>
        <Link to={"/contact"}>
          <button className="about-btn">Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default MissionAndVision;
