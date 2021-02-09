import React, { useState, useEffect } from 'react'
import ClimbRowCol from './ClimbRowCol'

// This component fetches and displays the climbs for a gym/colour combo
const ListByColour = (props) => {

    // const API_ENDPOINT = "http://localhost:8000"
    const { gym, colour } = props


    const url = `${process.env.REACT_APP_BACKEND_URL}/climbs/${gym}/${colour}`


    const [climbs, setClimbs] = useState([])

    useEffect(() => {
        console.log("Mounted")
        console.log(climbs)

        fetch(url)
        .then(res => res.json())
        .then(data => { 
            console.log(data)

            setClimbs(data)
        })
        .catch(e => console.log(e))
       
        return () => {
            console.log("Unmounted")
        }
    }, [])
    
    return (
        <>
            {colour.toUpperCase()}
            <br />
            <ClimbRowCol climbs={climbs}/>
        </>
      );

} 

export default ListByColour