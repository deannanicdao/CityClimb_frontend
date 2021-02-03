
import React from 'react'
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

    <div>
      <Navbar />

      {/* Can move this Switch into its own 
      commitment to tidy things up  */}
      <Switch>

        <Route path="/help">
          <Help />
        </Route>

        <Route path="/create_climb">
          <CreateClimbForm />
        </Route>
        
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/schedule">
          <Schedule />
        </Route>

<<<<<<< HEAD
    <>
      <Router>
        <Navbar toggle={toggle}/>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route component={Routes} />
            </Switch>
      </Router>
    </>
=======
        <Route path="/search">
          <Search />
        </Route>

        <Route path="/">
          <Landing />
        </Route>

      </Switch>

    </div>
>>>>>>> 185adc50a99f2dfd0663e63a51f05c3313b90edf
  
  )
}

export default App
