import React from "react";
import "./HomeService.css";
import { CgEditBlackPoint } from "react-icons/cg";
import { GrStatusGood } from "react-icons/gr";
import { Link } from "react-router-dom";

const HomeService = () => {
  return (
    <div className="HomeServiceContainer">
      <div className="serviceImgWrapper">
        {/* <img
          src="https://iaseicra.com/images/services/parallel-education.jpg"
          alt=""
          className="lowerImgright"
        />{" "} */}
        <img
          src="https://iaseicra.com/images/services/civil-service.jpg"
          alt=""
          className="Mainimg"
        />
        {/* <img
          src="https://iaseicra.com/images/services/instruments.jpg"
          alt=""
          className="lowerImgleft"
        /> */}
      </div>
      <div className="serviceDetails">
        <span className="head">Why IAS EICRA ?</span>
        <span className="serviceDetailsPara">
          The International Academy for Sports Education, Inter Cultural
          Relations & Arts (IAS-EICRA) is a hub for performing arts, dance, and
          sports education, fostering creativity and physical fitness. With a
          proven track record in Qatar and UAE, it empowers youth through
          rigorous training and high-quality programs. IAS-EICRA is a beacon for
          aspiring artists, dancers, and athletes
        </span>
        <div className="listWrapper">
          <div className="homeservicebullets">
            <GrStatusGood className="hsicon" />
            <span>vocal music</span>
          </div>{" "}
          <div className="homeservicebullets">
            <GrStatusGood className="hsicon" />
            <span>dance</span>
          </div>{" "}
          <div className="homeservicebullets">
            <GrStatusGood className="hsicon" />
            <span>Musical Instruments</span>
          </div>{" "}
          <div className="homeservicebullets">
            <GrStatusGood className="hsicon" />
            <span>Parallel School Education</span>
          </div>
          <div className="homeservicebullets">
            <GrStatusGood className="hsicon" />
            <span>sports</span>
          </div>{" "}
          <div className="homeservicebullets">
            <GrStatusGood className="hsicon" />
            <span>Painting and Pencil Drawing</span>
          </div>
        </div>
        <Link to={"/contact"}>
          <button>Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeService;
