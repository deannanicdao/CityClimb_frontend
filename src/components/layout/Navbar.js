import React, { Fragment } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

export const Navbar = () => {
    const authLinks = (
        <ul>
            <li>
                <Link to="/staff-login">Staff Login</Link>
            </li>
            <li>Staff Register</li>
            <li>Climb Dashboard</li>
            <li>Staff Dashboard</li>
            <li>Logout</li>
        </ul>
    )

    const guestLinks = (
        <ul>
            <li>Search Climbs</li>
            <li>Setting Schedule</li>
            <li>Help</li>
        </ul>
    )

    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">LOGO</Link> &nbsp; - &nbsp;
            Current Page &nbsp; - &nbsp;
            {/* <Fragment>
                { isAuthenticated ? authLinks : guestLinks }
            </Fragment> */}
            <Fragment>
                <Link to="/staff-login">Staff Login</Link> &nbsp; - &nbsp;
                <Link to="/staff-register">Staff Register</Link> &nbsp; - &nbsp;
                <Link to="/staff-dashboard">Staff Dashboard</Link>
            </Fragment>
        </nav>   
    )
}

export default Navbar
