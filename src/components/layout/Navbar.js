import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">LOGO</Link> &nbsp; - &nbsp;
            Current Page &nbsp; - &nbsp;
            <Link to="/" className="nav-link">Search Climbs</Link> &nbsp; - &nbsp;
            <Link to="/" className="nav-link">Setting Schedule</Link> &nbsp; - &nbsp;
            <Link to="/" className="nav-link">Staff Login</Link> &nbsp; - &nbsp;
            <Link to="/" className="nav-link">Help</Link> 
        </nav>   
    )
}

export default Navbar