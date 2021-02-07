import React, { useState, useEffect } from 'react'
import ReadableDate from './ReadableDate'
import {
    Jumbotron
} from 'reactstrap'
import { useHistory } from "react-router-dom"


// The end point of the flow for the user wanting to look at a climb 
// This component is where the user is directed with the climb's QR code 
const SingleClimb = (props) => {

    let history = useHistory()

    // TODO: Look into memoization 
    // If a climb is being passed as a prop we dont need to fetch
    const API_ENDPOINT = "http://localhost:8000"
    const { gym, colour, climbId } = props.match.params

    console.log("inside single climb")

    const url = `${API_ENDPOINT}/climbs/${gym}/${colour}/${climbId}`

    const [climb, setClimb] = useState([])

    useEffect(() => {
        console.log("Single Climb Mounted")

        fetch(url)
        .then(res => res.json())
        .then(data => { 
            setClimb(data)
            console.log(data)
        })
        .catch(e => history.push('/'))


       
        return () => {
            // console.log("Unmounted")
        }
    }, [])
    
    return (
        <>
        <div  className="climbs">
        <br />
            <Jumbotron>
                <div className="yt-container">
                    <iframe class="responsive-iframe" src={`https://www.youtube.com/embed/${climb.video}`}>   </iframe>
                </div>

                    <h1 className="display-3">{climb.wall}</h1>
                    <p className="lead">Colour: {climb.colour} </p>
                    <p className="lead">Location: {climb.gym} </p>
                    <p className="lead">Date Set: <ReadableDate date={climb.createdAt}/> </p>
                    <hr className="my-2" />
                    <p className="lead">
        
                    </p>
             </Jumbotron>

        </div>
        </>

      )

} 

export default SingleClimb