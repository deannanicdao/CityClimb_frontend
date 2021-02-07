import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Register from '../auth/Register'
import Login from '../auth/Login'
import Climbs from './../layout/Climbs'
import Schedule from './../layout/Schedule'
import StaffDashboard from './../admin/StaffDashboard'
import CreateClimbForm from './../climbs/forms/CreateClimbForm'
import EditClimbForm from '../climbs/forms/EditClimbForm'
import SingleClimb from './../layout/SingleClimb'


export const Routes = () => {
    return (
        <section className="container">
            <Switch>
                <Route exact path="/staff_register" component={Register} />
                <Route exact path="/staff_login" component={Login} />
                <Route exact path="/climbs" component={Climbs} />
                <Route exact path="/schedule" component={Schedule} />
                <Route exact path="/staff_dashboard" component={StaffDashboard} />
                <Route exact path="/create_climb" component={CreateClimbForm} />
                <Route exact path="/climbs/:gym/:colour/:climbId" component={SingleClimb} />
                <Route exact path="/climbs/:gym/:colour/:climbId/edit" component={EditClimbForm} />
                <Redirect to="/" />
            </Switch>
        </section>
    )
}

export default Routes
