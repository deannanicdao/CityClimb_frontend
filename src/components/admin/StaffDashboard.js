import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap';

const StaffDashboard = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {

        fetch(`${process.env.REACT_APP_BACKEND_URL}/users`)
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
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Staff Number</th>
                <th>Staff ID</th>
                {/* <th>Options</th> */}
                </tr>
            </thead>
            {(users).map(user =>
            <>
                <tbody>
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.staffNumber}</td>
                        <td>{user._id}</td>
                        {/* <td>
                            <EditStaffButton name={user.name} email={user.email} staffNumber={user.staffNumber} id={user._id} />

                            <button>Delete</button>
                        </td> */}
                    </tr>
                </tbody>
            </>
            )}
        </Table>
    )
}

export default StaffDashboard
