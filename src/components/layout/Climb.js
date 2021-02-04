import React from 'react'
import {
    Jumbotron
} from 'reactstrap';

const Climb = () => {

    let dummyClimb = {
        "name": "The Demigorgon",
        "colour": "Red",
        "location": "West End",
        "setter": "Brad Pitt",
        "date": "12/01/2021",
        "description": "Known as the Prince of Demons, a self-proclaimed title, but one that is acknowledged by mortals and even his fellow demons because of his power and influence.",
        "video": "tgbNymZ7vqY"
    }

    return (
        <div  className="climbs">
        <br />
            <Jumbotron>
                <div class="yt-container">
                    <iframe class="responsive-iframe" src={"https://www.youtube.com/embed/"+dummyClimb.video}>   </iframe>
                </div>

                    <h1 className="display-3">{dummyClimb.name}</h1>
                    <p className="lead">Colour: {dummyClimb.colour} </p>
                    <p className="lead">Location: {dummyClimb.location} </p>
                    <p className="lead">Setter: {dummyClimb.setter} </p>
                    <p className="lead">Date Set: {dummyClimb.date} </p>
                    <hr className="my-2" />
                    <p>Description maybe baybe?</p>
                    <p className="lead">
        
                    </p>
             </Jumbotron>

        </div>
      );
    };

export default Climb
