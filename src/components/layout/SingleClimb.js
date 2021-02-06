import React, { useState, useEffect } from 'react'
import {
    Jumbotron
} from 'reactstrap';

// import Climb from '../climbs/Climb'

const SingleClimb = (props) => {

    // Look into memoization 
    // If a climb is being passed as a prop we dont need to fetch
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
        <div  className="climbs">
        <br />
            <Jumbotron>
                <div class="yt-container">
                    <iframe class="responsive-iframe" src={"https://www.youtube.com/embed/"+climb.video}>   </iframe>
                </div>

                    <h1 className="display-3">{climb.wall}</h1>
                    <p className="lead">Colour: {climb.colour} </p>
                    <p className="lead">Location: {climb.gym} </p>
                    {/* <p className="lead">Setter: {dummyClimb.setter} </p> */}
                    <p className="lead">Date Set: {climb.createdAt} </p>
                    <hr className="my-2" />
                    <p>Description maybe baybe?</p>
                    <p className="lead">
        
                    </p>
             </Jumbotron>

        </div>


        // <> 
        // hello single climb 
        // {console.log(climb)} 
        // <Climb climb={climb} />
        // </>
      );

} 

export default SingleClimb