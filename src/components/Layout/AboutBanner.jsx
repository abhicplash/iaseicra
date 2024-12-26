import React from "react";
import "./AboutBanner.css";
import aboutImg from "../../assets/about/banner.jpg";

const AboutBanner = () => {
  return (
    <div className="AboutBanner-container">
      <div className="bannerTextwrapper">
        <span className="IASEICRA"> IAS-EICRA</span>
        <span className="bannerTextpara">
          Harmonizing Performing Arts, Culture, Sports & Education An integrated
          initiative
        </span>
      </div>
      <div className="aboutDetailsWrapper">
        <img src={aboutImg} alt="" />
        <div className="aboutDetails">
          <span className="whoarewe">
            why <span className="IASEICRA"> IAS-EICRA</span>{" "}
          </span>
          <span className="aboutboxes">
            The International Academy for Sports Education, Intercultural
            Relations & Arts (IAS-EICRA) excels in performing arts, dance, and
            sports education, fostering creativity and talent in Qatar and the
            UAE. It supports students affected by financial crises or
            overstaying families through supplementary coaching and quality
            education. Committed to academic and personal growth, IAS-EICRA
            empowers students to overcome challenges and achieve their full
            potential, inspiring future artists, dancers, and athletes.
          </span>
          <div className="btnWrapper">
            <button>Explore More</button>
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
