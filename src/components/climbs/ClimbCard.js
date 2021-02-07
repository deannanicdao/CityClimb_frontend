import React from 'react'
import { Link } from 'react-router-dom';
import EditClimbButton from './EditClimbButton'
import SetRemovalDateButton from './SetRemovalDateButton'

import {
    Card, CardImg, CardText, CardBody,
 CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Climb = (props) => {
    // console.log(props)
    const climb = props.climb
    let { _id, wall, colour, image, gym } = climb
    console.log('inside climb card')
    console.log(props.climb)


    return (
            <Card> 
                <Link to={`/climbs/${gym}/${colour}/${_id}`}> 
                    <CardImg top width="100%" src={"http://res.cloudinary.com/coderacademy/image/upload"+image} alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h5">{wall}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{colour}</CardSubtitle>
                    <CardText>{_id}</CardText>
                    </CardBody>
                </Link>

                <EditClimbButton gym={gym} colour={colour} climbId={_id} />
                {/* <Button>Set Removal</Button> */}
                <SetRemovalDateButton climb={climb} />
            </Card>
)
}


export default Climb 