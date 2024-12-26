import React from "react";
import Layout from "../Layout/Layout";
import PageTop from "../Layout/PageTop";
import AboutTeam from "../Layout/AboutTeam";
import AboutBanner from "../Layout/AboutBanner";

const About = () => {
  return (
    <Layout>
      <PageTop pageName={"about us"} />
      <AboutBanner/>
      <AboutTeam/>
    </Layout>
  );
};

export default About;
