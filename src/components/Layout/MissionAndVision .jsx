import React from "react";
import "./MissionAndVision.css";
import { BsEyeFill } from "react-icons/bs";


const MissionAndVision = () => {
  return (
    <div className="mission-vision-container">
      <div className="about-img">
        <div className="smallimages">
          <img
            className="images"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <img
            className="images"
            src="https://thumbs.dreamstime.com/b/company-s-mission-vision-values-purposeful-business-idea-hand-holds-wooden-cube-symbols-purpose-contemporary-346800107.jpg"
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
        a robust educational network extending from Qatar and the Middle East to the UAE. We are a unique blend of IAS coaching, performing arts, culture, sports, and education, dedicated to fostering creativity, talent, and physical fitness.
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
            <img
              className="mission-img-icon"
              src="https://banner2.cleanpng.com/20210417/pqq/transparent-goal-icon-crowdfunding-icon-607b793fa61bb2.6214138416187047036804.jpg"
              alt=""
            />
          </div>
          <p className="vision-para">
            {" "}
            Empower individuals to express themselves through art, dance and
            sports while promoting physical and mental well being
          </p>
        </div>
        <button className="about-btn">Contact Us</button>
      </div>
    </div>
  );
};

export default MissionAndVision;