import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import WelcomePage from './pages/welcomePage/WelcomePage';
import DiscoverPoetry from './pages/discoverPoetry/DiscoverPoetry';
import DictionaryPage from './pages/dictionaryPage/DictionaryPage';
// import PoemForm from './pages/poemForm/PoemForm';

import './App.scss';
import AboutMe from './pages/aboutMe/AboutMe';



const App = () => {

  return(

    <>
      <Router>
        <NavBar />
        <Switch>
        <Route exact path='/' component={WelcomePage} />
        <Route path='/discoverPoetry' component={DiscoverPoetry} />
        <Route path='/dictionary' component={DictionaryPage} />
        <Route path='/aboutMe' component={AboutMe} />
        {/* <Route path='/poemForm' component={PoemForm} /> */}
        </Switch>
      </Router>
    </>

  )
}

export default App;

