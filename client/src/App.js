import React, { useState, useEffect } from 'react';

import './App.scss';
import PoemCard from './components/poemCard/PoemCard';

export const POEM_API_URL = process.env.REACT_APP_API_URL;


const App = () => {


  // like componentDidMount or componentDidUpdate
  // pass two parameters
  // first param - function gets passed through useEffect
  // function gets called everytime the page finishes rendering
  // second param - empty array (componentDidMount effect)
  useEffect(() => {

    getPoems();
    
  }, []);

  const getPoems = async () => {
      const response = await fetch (`${POEM_API_URL}/poems`);
      const data = await response.json();
      console.log(data);
  }

  return(
    <div>
      <PoemCard />
    </div>
  )
}

export default App;

