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
import ClimbList from './../layout/ClimbList'
import Climb from './../climbs/Climb'
import SingleClimb from './../layout/SingleClimb'

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
                {/* <Route path="/climbs/:gym/:colour" component={ClimbList} /> */}
                <Route exact path="/climbs/:gym/:colour" render={(props) => <ClimbList {...props} />} />
                <Route exact path="/climbs/:gym/:colour/:climbId" component={SingleClimb} />
                <Route exact path="/help" component={Help} />
                <Route component={NotFound} /> 
            </Switch>
        </section>
    )
}

export default Routes

//             <Route exact path="/jobs/:id" render={(props) => <EditJobPage {...props} loggedInUser={loggedInUser}/>} />
//           <Route exact path="/gallery" render={() => <GalleryPage />} />
//           <Route exact path="/about" render={() => <AboutPage />} />