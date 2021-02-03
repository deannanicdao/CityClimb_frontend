import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
<<<<<<< HEAD
import Search from './components/layout/Search'
import Schedule from './components/layout/Schedule'
import Login from './components/auth/Login'
import Help from './components/layout/Help'

import CreateClimbForm  from './components/forms/CreateClimbForm.js'
=======
import Routes from './components/routing/Routes'
>>>>>>> bc1f6c46bb5849c2d73c96b8760c5eeb59be3628


const App = () => {

  return (
    <>
      <Router>
        <Navbar/>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route component={Routes} />
            </Switch>
      </Router>
    </>
  )
}

export default App
