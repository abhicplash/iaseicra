import React, { useState, useEffect } from "react";
import "./SwiperComponent.css";

const SwiperComponent = () => {
  const slides = [
    { id: 1, title: "Slide 1", content: "This is Slide 1" },
    { id: 2, title: "Slide 2", content: "This is Slide 2" },
    { id: 3, title: "Slide 3", content: "This is Slide 3" },
    { id: 1, title: "Slide 1", content: "This is Slide 1" },
    { id: 2, title: "Slide 2", content: "This is Slide 2" },
    { id: 3, title: "Slide 3", content: "This is Slide 3" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="custom-swiper">
      <div
        className="slides-container"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`
        }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <h3>{slide.title}</h3>
            <p>{slide.content}</p>
          </div>
        ))}
      </div>
      <button className="prev-btn" onClick={handlePrev}>
        &#8249;
      </button>
      <button className="next-btn" onClick={handleNext}>
        &#8250;
      </button>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SwiperComponent;
