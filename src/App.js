
import React, { useState, useEffect, Fragment } from 'react'
import { Switch, Route } from "react-router-dom";

import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Search from './components/layout/Search'
import Schedule from './components/layout/Schedule'
import Login from './components/layout/Login'
import Help from './components/layout/Help'

import CreateClimbForm  from './components/forms/CreateClimbForm.js'


const App = () => {

  return (

    <>
      <Navbar />

      <Switch>

        <Route path='/'>
          <Landing />
        </Route> 

        <Route path='/search'>
          <Search />
        </Route> 

        <Route path='/schedule'>
          <Schedule />
        </Route> 

        <Route path='/login'>
          <Login />
        </Route> 

        <Route path='/help'>
          <Help />
        </Route> 

        {/* exact component={Landing}
            Route path='/search' component={Search}
            Route path='/schedcule' component={Schedule}
            Route path='staff_login' component={Staff_login}
            Route path='help' component={Help} */}
      </Switch>
    </>
  
  )
}

export default App
