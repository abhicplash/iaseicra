import React from "react";
import "./Service.css";
import { RiComputerLine } from "react-icons/ri";
import { allServices } from "../../utils/ServicesList";
import PageTop from "../Layout/PageTop";
import Layout from "../Layout/Layout";
// import { allServices } from "../../Utils/ServicesList";

const Service = () => {
  return (
  <Layout> <PageTop/>
  <div className="service-container">
 <div className="main-head"> Our Service</div>
 <div className="service-para">
   Lorem ipsum is a dummy or placeholder text commonly used in graphic
   design, publishing, and web development.
 </div>
 <div className="service-box">
   <div className="service-box-rowone">
     {allServices.map((list) => (
       <div className="services">
         <img src={list.icon} alt="" />
         {/* <div className="icon">
           {list.icon} 
         </div> */}
         <div className="service-one-head">{list.servicename}</div>
         <div className="service-box-para">
           Lorem ipsum is a dummy or placeholder text commonly used in
           graphic design, publishing, and web development.
         </div>
       </div>
     ))}
   </div>
 </div>
</div></Layout>
  );
};

export default Service;