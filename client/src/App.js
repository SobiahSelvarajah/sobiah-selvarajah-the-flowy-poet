import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import WelcomePage from './pages/welcomePage/WelcomePage';
import DiscoverPoetry from './pages/discoverPoetry/DiscoverPoetry';
import PoemForm from './pages/poemForm/PoemForm';

import './App.scss';




const App = () => {

  return(

    <>
      <Router>
        
        <Switch>
        <Route exact path='/' component={WelcomePage} />
        <Route path='/discoverPoetry' component={DiscoverPoetry} />
        <Route path='/poemForm' component={PoemForm} />
        </Switch>
      </Router>
    </>

  )
}

export default App;

