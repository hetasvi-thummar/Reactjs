import React from 'react';
import { Router } from '@reach/router';
import Home1 from './views/Home1';
import { Provider } from "react-redux";
import { store } from './redux/store';


const App = () => {
  return (
    <><Provider store={store} >
      <Router>
        <Home1 path="/" />
      </Router>
    </Provider ></>
  )
}

export default App;