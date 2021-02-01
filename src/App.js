import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Routes from './components/routing/Routes'


const App = () => {
  return (
  <Router>
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path= "/" component={Landing} />
        <Route component={Routes} />
      </Switch>
    </Fragment>
  </Router>
  )
}

export default App
