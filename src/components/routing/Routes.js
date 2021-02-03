import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Register from '../auth/Register'
import Login from '../auth/Login'
import StaffDashboard from '../admin/StaffDashboard'
import CreateClimbForm from '../forms/CreateClimbForm'
import NotFound from '../layout/NotFound'

export const Routes = () => {
    return (
        <section className="container">
            <Switch>
                <Route exact path="/staff-register" component={Register} />
                <Route exact path="/staff-login" component={Login} />
                <Route exact path="/staff-dashboard" component={StaffDashboard} />
                <Route exact path="/create-climb" component={CreateClimbForm} />
                <Route component={NotFound} /> 
            </Switch>
        </section>
    )
}

export default Routes