import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Register from '../auth/Register'
import Login from '../auth/Login'
import NotFound from '../layout/NotFound'

export const Routes = () => {
    return (
        <section className="container">
            <Switch>
                <Route exact path="/staff-register" component={Register} />
                <Route exact path="/staff-login" component={Login} />
                <Route component={NotFound} />
            </Switch>
        </section>
    )
}

export default Routes