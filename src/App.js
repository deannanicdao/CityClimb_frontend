
import React, { useState, useEffect, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


import Navbar from './components/layout/Navbar'
import Dropdown from './components/layout/Dropdown'
import Landing from './components/layout/Landing'

import CreateClimbForm  from './components/forms/CreateClimbForm.js'
import Routes from './components/routing/Routes'



const App = () => {

  // Burger menu functions
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (

    <>
      <Router>
        <Navbar toggle={toggle}/>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route component={Routes} />
            </Switch>
      </Router>
    </>
  
  )
}

export default App
