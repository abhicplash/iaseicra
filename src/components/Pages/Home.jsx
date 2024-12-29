import React from "react";
import Layout from "../Layout/Layout";
import HomeBanner from "../Layout/HomeBanner";
// import SwiperComponent from "../Layout/SwiperComponent";
import Carousel from "../Layout/Carousel";
// import CircularDemo from "../Layout/CircularDemo";

const Home = () => {
  return (
    <Layout>
      <HomeBanner />
      <Carousel/>
    </Layout>
  );
};

export default Home;
// Carousel