import React from "react";
import "./TeamCard.css";

const TeamCard = ({ image, name, post, desc }) => {
  return (
    <div className="teamCardWrapper">
      <img src={image} alt="" />
      <div className="memberDetails">
        <span className="memberName">{name}</span>
        {/* <span className="memberPost">{post}</span> */}
        <span className="memberDesc">{desc}</span>
      </div>
    </div>
  );
};

export default TeamCard;
