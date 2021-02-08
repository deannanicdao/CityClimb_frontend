import React, { useState, useEffect } from 'react'
import ClimbRowCol from './ClimbRowCol'
import './GymnView.css'

// This component fetches and displays the climbs for a gym/colour combo
const ListByColour = (props) => {

    const API_ENDPOINT = "http://localhost:8000"
    const { gym, colour } = props


    const url = `${API_ENDPOINT}/climbs/${gym}/${colour}`


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
       
        <div className="colour-view-border">
            <h1>
                {colour.toUpperCase()}
            </h1>
            <br />
                <ClimbRowCol climbs={climbs}/>
        </div>
       
      );

} 

export default ListByColour