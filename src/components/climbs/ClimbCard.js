import React from 'react'
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
 CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Climb = (props) => {
    // console.log(props)

    let { _id, wall, colour, image, gym } = props.climb


    return (
        <Link to={`/climbs/${gym}/${colour}/${_id}`}> 
            <Card> 
                <CardImg top width="100%" src={"http://res.cloudinary.com/coderacademy/image/upload"+image} alt="Card image cap" />
                <CardBody>
                <CardTitle tag="h5">{wall}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{colour}</CardSubtitle>
                <CardText>{_id}</CardText>
                <Button>Button</Button>
                </CardBody>
            </Card>
        </Link>
)
}


export default Climb 