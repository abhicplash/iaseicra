import React, { useState } from "react";
import "./Carousel.css";
import TeamCard from "./TeamCard";
import teamList from "../../utils/TeamList.json";

// const teamList = [
//   { id: 1, image: "path-to-image1", name: "Name 1" },
//   { id: 2, image: "path-to-image2", name: "Name 2" },
//   { id: 3, image: "path-to-image3", name: "Name 3" },
//   { id: 4, image: "path-to-image4", name: "Name 4" },
//   { id: 5, image: "path-to-image5", name: "Name 5" },
//   { id: 6, image: "path-to-image6", name: "Name 6" },
// ];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamList.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="carousel-btn prev" onClick={handlePrev}>
        &lt;
      </button>
      <div className="carousel-wrapper">
        <div
          className="carousel-content"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}
        >
          {teamList.map((team) => (
            <div className="carousel-item" key={team.id}>
              <TeamCard image={team.image} name={team.name} desc={team.desc} />
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-btn next" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
