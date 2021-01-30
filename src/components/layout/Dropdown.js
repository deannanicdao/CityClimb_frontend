import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <div
        className={
          isOpen
            ? 'grid grid-rows-4 text-center items-center bg-gray-400'
            : 'hidden'
        }
        onClick={toggle}
        >
            
        <Link className="p-4" to="/">Home</Link> 
        <Link className="p-4" to="/">Search Climbs</Link>
        <Link className="p-4" to="/">Setting Schedule</Link>
        <Link className="p-4" to="/">Staff Login</Link>
        <Link className="p-4" to="/">Help</Link> 
            
        </div>
    )
}

export default Dropdown
