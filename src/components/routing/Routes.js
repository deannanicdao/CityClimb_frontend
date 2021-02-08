import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Register from '../auth/Register'
import Login from '../auth/Login'
import Climbs from './../layout/Climbs'
import Schedule from './../layout/Schedule'
import StaffDashboard from './../admin/StaffDashboard'
import CreateClimbForm from './../climbs/CreateClimbForm'
import EditClimbForm from './../climbs/EditClimbForm'
import Help from './../layout/Help'
import NotFound from '../layout/NotFound'
import ClimbList from './../layout/ClimbList'
// import Climb from './../climbs/Climb'
import SingleClimb from './../layout/SingleClimb'
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';

export const Routes = () => {
    return (
        <section className="container">
            <Switch>
                <AdminRoute exact path="/staff_register" component={Register} />
                <Route exact path="/staff_login" component={Login} />
                <Route exact path="/climbs" component={Climbs} />
                <Route exact path="/schedule" component={Schedule} />
                <AdminRoute exact path="/staff_dashboard" component={StaffDashboard} />
                <PrivateRoute exact path="/create_climb" component={CreateClimbForm} />
                {/* <Route path="/climbs/:gym/:colour" component={ClimbList} /> */}
                <Route exact path="/climbs/:gym/:colour" render={(props) => <ClimbList {...props} />} />
                <Route exact path="/climbs/:gym/:colour/:climbId" component={SingleClimb} />
                {/* <Route exact path="/climbs/:gym/:colour/:climbId/edit" render={(props) => <EditClimbForm {...props} />} /> */}
                <PrivateRoute exact path="/climbs/:gym/:colour/:climbId/edit" component={EditClimbForm} />
                <Route exact path="/help" component={Help} />
                {/* <Route exact path="/climb_template" component={Climb} /> */}
                <Route component={NotFound} /> 
            </Switch>
        </section>
    )
}

export default Routes

//             <Route exact path="/jobs/:id" render={(props) => <EditJobPage {...props} loggedInUser={loggedInUser}/>} />
//           <Route exact path="/gallery" render={() => <GalleryPage />} />
//           <Route exact path="/about" render={() => <AboutPage />} />