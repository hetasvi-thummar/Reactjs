import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Events from "../Components/Events";
import { Router } from "@reach/router";

import {
  Title,
  FooterOne,
  Performers,
  Performerevents,
  Venues,
  Venueevents,
} from "../Components";

const Home = (props) => {
  return (
    <>
      <Title image={props.image}></Title>
      <Router>
        <Events path="/Events" />
        <Events path="/" />
        <Performers path="/Performers" />
        <Venues path="/Venues" />
        <Venueevents path="/venueevents/:state" />
        <Performerevents path="/performerevents/:slug" image={props.image} />
      </Router>
      <FooterOne></FooterOne>
    </>
  );
};

export default Home;
