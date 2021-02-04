
import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import {
     Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Schedule = () => {


    const [climbs, setClimbs] = useState([])

    // const fetchClimbs = () => {
    //     fetch("http://localhost:8000/climbs/")
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    //     .catch(e => console.log(e))
    // }

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
    

    let climbList = [
        { "name": "Dungeon", "colour": "Red", "image": "https://imgur.com/RTFOOHR" },
        { "name": "Zeplin", "colour": "Blue", "image": "https://imgur.com/yln0oYC" },
        { "name": "Death Valley", "colour": "Green", "image": "https://imgur.com/ZHKnVr8" },
        { "name": "Reningar's Revenge", "colour": "Purple", "image": "https://imgur.com/Hrzbo49" },
        { "name": "In the Begins", "colour": "Black", "image": "https://imgur.com/Ld5Ux3g" },
        { "name": "Christmas Special", "colour": "ReGreen", "image": "https://imgur.com/rg7RAdm" },
        { "name": "Climb or Die", "colour": "Rainbow", "image": "https://imgur.com/aj9vfmu" },
        { "name": "Pleasures Peak", "colour": "Yellow", "image": "https://imgur.com/hTkpXvw" }
      ]

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
                        <CardTitle tag="h5">{climb.name}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{climb.colour}</CardSubtitle>
                        <CardText>{climb._id}</CardText>
                        <Button>Button</Button>
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
