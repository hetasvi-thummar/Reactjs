import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Events from "../Components/Events";
import Title from "../Components/Title";
import { FooterOne } from "../Components";

const Home = () => {
  return (
    <>
      <Title></Title>
      <Events></Events>
      <FooterOne></FooterOne>
    </>
  );
};

export default Home;
