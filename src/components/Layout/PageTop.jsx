import React from "react";
import "./PageTop.css";

const PageTop = ({ pageName }) => {
  return (
    <div className="PageTop-container">
      <div className="bgPageTopShadow">
        <h1>{pageName}</h1>
      </div>
    </div>
  );
};

export default PageTop;
