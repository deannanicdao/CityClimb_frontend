import React, { useState, useEffect } from 'react'
// import { Row, Col } from 'react-bootstrap';

const StaffDashboard = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {

        fetch("http://localhost:8000/users")
        .then(res => res.json())
        .then(data => { 
            console.log(data)
            setUsers(data)
        })
        .catch(e => console.log(e))
       
        return () => {
            console.log('Unmounted (inside schedule)')
        }
    }, [])

    return (
        <div>
            Dashboard for Staff
            <p>Users: {(users).map(user => user.name)}</p>
        </div>
    )
}

export default StaffDashboard
