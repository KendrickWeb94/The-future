import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/navbar";
import Footer1 from "../components/Footer";

const Usage = () => {
  return (
    <div>
      <Helmet>
        <title>Product Usage</title>
      </Helmet>
      <Navbar />
      <Footer1 />
    </div>
  );
};

export default Usage;
