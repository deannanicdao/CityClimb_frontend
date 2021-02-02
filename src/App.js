import React, { useState, useEffect, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Dropdown from './components/layout/Dropdown'
import Landing from './components/layout/Landing'
import CreateClimbForm  from './components/forms/CreateClimbForm.js'


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
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Landing />
      {/* <CreateClimbForm /> */}
      <Switch>
        {/* Route path='/' exact component={Landing}
            Route path='/search' component={Search}
            Route path='/schedcule' component={Schedule}
            Route path='staff_login' component={Staff_login}
            Route path='help' component={Help}
        */}
      </Switch>
    </>
  
  )
}

export default App
