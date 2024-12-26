import React from "react";
import "./AboutTeam.css";
import OurTeam from "../../utils/TeamList.json";
import { Link } from "react-router-dom";
import TeamCard from "./TeamCard";

const AboutTeam = () => {
  return (
    <div className="AboutTeam-container">
      <div className="teamHead">
        <span className="ourteam">Our Team</span>
        <span className="meetteam">Meet the minds behind the magic</span> 
        <span className="teamIntro">
          A Symphony of Seasoned Professionals and Decades of Experience in
          Collaboration
        </span>
      </div>
      <div className="ourTeamWrapper">
        {OurTeam.map((member) => (
          <Link key={member.id}>
            <TeamCard
              image={member.image}
              name={member.name}
              desc={member.desc}
              post={member.post}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AboutTeam;
