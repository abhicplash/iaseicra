import React from "react";
import Layout from "../Layout/Layout";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <Layout>
      <div className="page-container">
        <div className="image-shadow">
          <div className="mainhead">404</div>
          <h2 className="pagenotfound">Page not found</h2>
          <para className="para">
            The page you are looking for was moved,removed,renamed or never
            existed
          </para>
          <button className="button">Back to home</button>
        </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
