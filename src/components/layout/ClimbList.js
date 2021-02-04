import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Climb from '../climbs/Climb'


const ClimbList = (props) => {

    const API_ENDPOINT = "http://localhost:8000"
    const { gym, colour } = props.match.params

    // console.log(props)

    const url = `${API_ENDPOINT}/climbs/${gym}/${colour}`

    // console.log(url)

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
            Hello
            <br />


            <Row gutter={40}>
                {(climbs).map(climb => 

                    <Col // Responsive settings. Each row has a span of 12
                    xs={{ span: 6 }} sm={{ span: 6 }} md={{ span: 6 }} // 2 cards per row
                    lg={{ span: 4 }} xl={{ span: 4 }} // 3 cards per row
                    >

                        <Climb climb={climb} />
                    
                    <br />
                    </Col>
                )}
            </Row>

        </>
      );

} 

export default ClimbList