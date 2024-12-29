import React from "react";
import "./UpscCard.css";
import { Link } from "react-router-dom";
// import h from '../../assets/ias/prelims.jpg'

const UpscCard = ({ image, program }) => {
  return (
    <div className="UpscCard-Container">
      <img src={image} alt="" />
      <h3>{program}</h3>
      <Link>
        <button>Read more</button>
      </Link>
    </div>
  );
};

export default UpscCard;
