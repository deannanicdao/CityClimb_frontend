import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Register from '../auth/Register'
import Login from '../auth/Login'
import Search from './../layout/Search'
import Schedule from './../layout/Schedule'
import StaffDashboard from './../admin/StaffDashboard'
import CreateClimbForm from './../climbs/CreateClimbForm'
import Help from './../layout/Help'
import NotFound from '../layout/NotFound'

export const Routes = () => {
    return (
        <section className="container">
            <Switch>
                <Route exact path="/staff_register" component={Register} />
                <Route exact path="/staff_login" component={Login} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/schedule" component={Schedule} />
                <Route exact path="/staff_dashboard" component={StaffDashboard} />
                <Route exact path="/create_climb" component={CreateClimbForm} />
                <Route exact path="/help" component={Help} />
                <Route component={NotFound} /> 
            </Switch>
        </section>
    )
}

export default Routes