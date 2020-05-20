import React from 'react';
import { Router } from '@reach/router';
import Home from './views/Home';
import { Provider } from "react-redux";
import { store } from './redux/store';


const App = () => {
  return (<Provider store={store} >
    <Router>
      <Home path="/" />
    </Router>
  </Provider >
  )
}

export default App;