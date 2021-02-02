import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <div
        className={
          isOpen
            ? 'position absolute grid grid-rows-4 text-center items-center bg-gray-400 w-full'
            : 'hidden'
        }
        onClick={toggle}
        >
            
        <Link className="p-6 sm:text-3xl text-xl font-extralight hover:bg-gray-500" to="/">Home</Link> 
        <Link className="p-6 sm:text-3xl text-xl font-extralight hover:bg-gray-500" to="/">Search Climbs</Link>
        <Link className="p-6 sm:text-3xl text-xl font-extralight hover:bg-gray-500" to="/">Setting Schedule</Link>
        <Link className="p-6 sm:text-3xl text-xl font-extralight hover:bg-gray-500" to="/">Staff Login</Link>
        <Link className="p-6 sm:text-3xl text-xl font-extralight hover:bg-gray-500" to="/">Help</Link> 
            
        </div>
    )
}

export default Dropdown
