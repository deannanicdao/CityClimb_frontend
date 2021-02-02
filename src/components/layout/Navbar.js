<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ toggle }) => {
    return (
      <nav
      className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm'
      role='navigation'
      >
        <Link to='/' className='pl-8'>
          <img src="./icon.png" alt="logo" width="50px" height="50px"></img>
        </Link>

      {/* Burger menu */}
      <div className='px-4 cursor-pointer lg:hidden' onClick={toggle}>
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
        <div className="pr-8 lg:block hidden"> 
          <Link className="p-4" to="/">Home</Link>
          <Link className="p-4" to="/">Search Climbs</Link>
          <Link className="p-4" to="/">Setting Schedule</Link>
          <Link className="p-4" to="/">Staff Login</Link>
          <Link className="p-4" to="/">Help</Link>
        </div>
      
      </nav>
      
=======
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
>>>>>>> User
    )
}

export default Navbar
