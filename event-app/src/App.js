import React from 'react';
import { Router } from '@reach/router';
import Home from './Views/Home';
import { Provider } from "react-redux";
import { store } from './Redux/store';
import Performer_events from './Components/Performer_events';
import Performers from './Components/Performers';
import Venues from './Components/Venues';
import Venue_events from './Components/Venue_events';


const App = () => {
  return (
    <><Provider store={store} >
      <Router>
        <Home path="/" />
        <Performers path="/Performers" />
        <Venues path="/Venues" />
        <Venue_events path="/Venue_events" />
        <Performer_events path="/Performer_events" />
      </Router>
    </Provider ></>
  )
}

export default App;