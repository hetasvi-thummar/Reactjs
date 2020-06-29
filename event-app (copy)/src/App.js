import React from "react";
import { Router } from "@reach/router";
import Home from "./Views/Home";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Performerevents from "./Components/Performerevents";
import Performers from "./Components/Performers";
import Venues from "./Components/Venues";
import Venueevents from "./Components/Venueevents";
import Events from "./Components/Events";
import { Title, FooterOne } from "./Components";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Home></Home>
      </Provider>
    </>
  );
};

export default App;
