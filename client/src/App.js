import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
// import WelcomePage from './pages/welcomePage/WelcomePage';
import DiscoverPoetry from './pages/discoverPoetry/DiscoverPoetry';

import './App.scss';



const App = () => {

  return(

    <>
      <Router>
        {/* <WelcomePage /> */}
        <DiscoverPoetry />
      </Router>
    </>

  )
}

export default App;

