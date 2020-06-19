import React from "react";
import { Router } from "@reach/router";
import Home from "./Views/Home";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Performerevents from "./Components/Performerevents";
import Performers from "./Components/Performers";
import Venues from "./Components/Venues";
import Venueevents from "./Components/Venueevents";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Home path="/" />
          <Performers path="/Performers" />
          <Venues path="/Venues" />
          <Venueevents path="/Venueevents" />
          <Performerevents path="/Performerevents" />
        </Router>
      </Provider>
    </>
  );
};

export default App;
