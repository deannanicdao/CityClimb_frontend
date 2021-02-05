import React, { useState, useEffect } from 'react'
import Climb from './Climb'
// 

const SingleClimb = (props) => {

    const API_ENDPOINT = "http://localhost:8000"
    const { gym, colour, climbId } = props.match.params

    console.log(props)

    const url = `${API_ENDPOINT}/climbs/${gym}/${colour}/${climbId}`

    console.log(url)

    const [climb, setClimb] = useState([])

    useEffect(() => {
        console.log("Mounted")

        fetch(url)
        .then(res => res.json())
        .then(data => { 
            // console.log(data)

            setClimb(data)
        })
        .catch(e => console.log(e))
       
        return () => {
            console.log("Unmounted")
        }
    }, [])
    
    return (
        <> 
        hello single climb 
        {console.log(climb)} 
        <Climb climb={climb} />
        </>
      );

} 

export default SingleClimb