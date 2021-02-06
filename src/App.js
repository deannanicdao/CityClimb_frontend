import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Routes from './components/routing/Routes'
import { LOGOUT } from './actions/types';
import Alert from './components/layout/Alert'

// Connext redux and react
import { Provider } from 'react-redux'

// Redux
import { loadUser } from './actions/auth';
import store from './store'
import setAuthToken from './utils/setAuthToken';


const App = () => {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar/>
                <Alert />
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route component={Routes} />
              </Switch>
        </Router>
      </Provider>
    </>
  )
}

export default App
