import React from 'react'
import { useParams } from "react-router-dom"

const Climb = () => {
    // const fetchClimb = climbId => {
    //     fetch(`http://localhost:8000/climbs/${climbId}`)
    //     .then(res => res.json())
    //     // .then(data => setClimbData(data))
    //     .catch(e => console.log(e))
    // }
    const params = useParams()
    return (
        <>
            <div>
                hello
            </div>
    
        </>
    )
}



// fetchClimb()

export default Climb