import React from "react";
import "./Service.css";
import allServices from "../../utils/allservices.json";
import PageTop from "../Layout/PageTop";
import Layout from "../Layout/Layout";
// import { allServices } from "../../Utils/ServicesList";

const Service = () => {
  return (
    <Layout>
      {" "}
      <PageTop />
      <div className="service-container">
        <div className="main-head"> IAS EICRA</div>
        <div className="service-para">
          dynamic educational network across the Middle East blending IAS
          coaching, performing arts, culture, and sports. We provide
          comprehensive Civil Services Exam preparation and support for higher
          studies. Our academy offers top-tier training for artists, dancers,
          and athletes. We also provide supplementary tuition for children of
          visitors, ensuring seamless education. Empowering students to reach
          their full potential through academic and personal growth.
        </div>
        <div className="service-box">
          <div className="service-box-rowone">
            {allServices.map((list) => (
              <div className="services">
                <img src={list.icon} alt="" />
                <div className="service-one-head">{list.servicename}</div>
                <div className="service-box-para">{list.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Service;
