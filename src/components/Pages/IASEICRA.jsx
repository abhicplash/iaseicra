import React from "react";
import Layout from "../Layout/Layout";
import PageTop from "../Layout/PageTop";
// import UPSCprogramList from "../../utils/UpscProgramList";
import UpscCard from "../Layout/UpscCard";
import "./IASEICRA.css";
import { UPSCprogramList } from "../../utils/UpscProgramList";

const IASEICRA = () => {
  return (
    <Layout>
      <PageTop pageName={"UPSC "} />
      <div className="IASEICRA-container">
        {UPSCprogramList.map((list) => (
          <UpscCard image={list.image} program={list.program} key={list.id} />
        ))}
      </div>
    </Layout>
  );
};

export default IASEICRA;
