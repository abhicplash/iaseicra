import React from "react";
import "./AboutBanner.css";
import aboutImg from "../../assets/about/banner.jpg";

const AboutBanner = () => {
  return (
    <div className="AboutBanner-container">
      <span className="IASEICRA"> IAS-EICRA</span>
      <span className="bannerTextpara">
        Harmonizing Performing Arts, Culture, Sports & Education An integrated
        initiative
      </span>

      <span className="aboutboxes">
        The International Academy for Sports Education, Intercultural Relations
        & Arts (IAS-EICRA) excels in performing arts, dance, and sports
        education, fostering creativity and talent in Qatar and the UAE. It
        supports students affected by financial crises or overstaying families
        through supplementary coaching and quality education. Committed to
        academic and personal growth, IAS-EICRA empowers students to overcome
        challenges and achieve their full potential, inspiring future artists,
        dancers, and athletes.
      </span>
    </div>
  );
};

export default AboutBanner;
