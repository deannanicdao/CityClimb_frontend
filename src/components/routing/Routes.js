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
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';

export const Routes = () => {
    return (
        <section>
            <Switch>
                <AdminRoute exact path="/staff_register" component={Register} />
                <Route exact path="/staff_login" component={Login} />
                <Route exact path="/climbs" component={Climbs} />
                <Route exact path="/schedule" component={Schedule} />
                <AdminRoute exact path="/staff_dashboard" component={StaffDashboard} />
                <PrivateRoute exact path="/create_climb" component={CreateClimbForm} />
                <Route exact path="/climbs/:gym/:colour/:climbId" component={SingleClimb} />
                <PrivateRoute exact path="/climbs/:gym/:colour/:climbId/edit" component={EditClimbForm} />
                <Redirect to="/" />
            </Switch>
        </section>
    )
}

export default Routes
