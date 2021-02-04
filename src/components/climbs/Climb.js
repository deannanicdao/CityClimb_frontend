import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
 CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Climb = (props) => {
    const climb = props.climb

    return (
        <Card> 
            <CardImg top width="100%" src={"http://res.cloudinary.com/coderacademy/image/upload"+climb.image} alt="Card image cap" />
            <CardBody>
            <CardTitle tag="h5">{climb.wall.toUpperCase()}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{climb.colour}</CardSubtitle>
            <CardText>{climb._id}</CardText>
            <Button>Button</Button>
            </CardBody>
        </Card>
)
}


export default Climb 