import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import {
     Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Schedule = () => {


    const [climbs, setClimbs] = useState([])

    useEffect(() => {
        // let isMounted = true
        // fetchClimbs()
        fetch("http://localhost:8000/climbs/")
        .then(res => res.json())
        .then(data => { 
            console.log(data)
            // if (isMounted == true) 
            setClimbs(data)
        })
        .catch(e => console.log(e))
       
        return () => {
            // return () => { isMounted = false }
        }
    }, [])

    return (
        <>

            <br />

            {/* id gymn wall colour image video  */}

            <Row gutter={40}>
                {(climbs).map(climb => 

                    <Col // Responsive settings. Each row has a span of 12
                    xs={{ span: 6 }} sm={{ span: 6 }} md={{ span: 6 }} // 2 cards per row
                    lg={{ span: 4 }} xl={{ span: 4 }} // 3 cards per row
                    >
                        
                    <Card> 
                        <CardImg top width="100%" src={"http://res.cloudinary.com/coderacademy/image/upload"+climb.image} alt="Card image cap" />
                        <CardBody>
                        <CardTitle tag="h5">{climb.wall}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{climb.colour}</CardSubtitle>
                        <CardText>{climb.gym}</CardText>
                        <Button> View Climb </Button>
                           
                        </CardBody>
                    </Card>
                    
                    <br />
                    </Col>
                )}
            </Row>

        </>
      );
    };

export default Schedule
