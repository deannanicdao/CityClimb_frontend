import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import ClimbCard from '../climbs/ClimbCard'
import ReadableDate from './ReadableDate'

const Schedule = () => {


    const [climbs, setClimbs] = useState([])

    // const newAtGym = (climbs, gym) => {
        
    // }

    function newAtGym(climbs, gym) {
        climbs.filter(climb => climb.gym == gym)
    }

    useEffect(() => {

        fetch("http://localhost:8000/schedule/")
        .then(res => res.json())
        .then(data => { 
            // console.log(data)
            setClimbs(data)
        })
        .catch(e => console.log(e))
       
        return () => {
            console.log('Unmounted (inside schedule)')
        }
    }, [])
    //TODO - change to startDate to two weeks (12096e5)
    //
    const startDate = (Date.now() - (12096e5))
    // console.log(startDate)
    const endDate = (Date.now() + 12096e5)
    // console.log(endDate)
    let climbsLeaving = climbs.filter(climb => {return(Date.parse(climb.removalDate) < endDate)})
    let climbsNew = climbs.filter(climb => {return (Date.parse(climb.createdAt) > startDate )} )
    // console.log("climb's leaving", climbsLeaving)
    // console.log('New climbs', climbsNew)

    // let miltonNew = newAtGym(climbsNew, "milton")

    let miltonNew = climbsNew.filter( climb => climb.gym == "milton")
    let newsteadNew = climbsNew.filter( climb => climb.gym == "newstead")
    let westendNew = climbsNew.filter( climb => climb.gym == "westend")

    let miltonLeaving = climbsLeaving.filter( climb => climb.gym == "milton")
    let newsteadLeaving = climbsLeaving.filter( climb => climb.gym == "newstead")
    let westendLeaving = climbsLeaving.filter( climb => climb.gym == "westend")


    console.log(miltonNew)

    return (
        <>

            <br />
            <details>
            <summary>Leaving Soon</summary>
            <h3>Milton</h3>
            <Row gutter={40}>
                {(miltonLeaving).map(climb => 

                    <Col // Responsive settings. Each row has a span of 12
                    xs={{ span: 6 }} sm={{ span: 6 }} md={{ span: 6 }} // 2 cards per row
                    lg={{ span: 4 }} xl={{ span: 4 }} // 3 cards per row
                    >
                        Leaving - <ReadableDate date={climb.removalDate} />
                        <ClimbCard climb={climb} />
                    <br />
                    </Col>
                )}
            </Row>

            <h3>Newstead</h3>
            <Row gutter={40}>
                {(newsteadLeaving).map(climb => 

                    <Col // Responsive settings. Each row has a span of 12
                    xs={{ span: 6 }} sm={{ span: 6 }} md={{ span: 6 }} // 2 cards per row
                    lg={{ span: 4 }} xl={{ span: 4 }} // 3 cards per row
                    >
                        Leaving - <ReadableDate date={climb.removalDate} year={false} />
                        <ClimbCard climb={climb} />
                    <br />
                    </Col>
                )}
            </Row>

            <h3>West End</h3>
            <Row gutter={40}>
                {(westendLeaving).map(climb => 

                    <Col // Responsive settings. Each row has a span of 12
                    xs={{ span: 6 }} sm={{ span: 6 }} md={{ span: 6 }} // 2 cards per row
                    lg={{ span: 4 }} xl={{ span: 4 }} // 3 cards per row
                    >
                        Leaving - <ReadableDate date={climb.removalDate} />
                        <ClimbCard climb={climb} />
                    <br />
                    </Col>
                )}
            </Row>
            </details>

            <details>
            <summary>New Climbs</summary>
            <h3>Milton</h3>
            <Row gutter={40}>
                {(miltonNew).map(climb => 

                    <Col // Responsive settings. Each row has a span of 12
                    xs={{ span: 6 }} sm={{ span: 6 }} md={{ span: 6 }} // 2 cards per row
                    lg={{ span: 4 }} xl={{ span: 4 }} // 3 cards per row
                    >
                        Set on - <ReadableDate date={climb.createdAt} />
                        <ClimbCard climb={climb} />
                    <br />
                    </Col>
                )}
            </Row>

            <h3>Newstead</h3>
            <Row gutter={40}>
                {(newsteadNew).map(climb => 

                    <Col // Responsive settings. Each row has a span of 12
                    xs={{ span: 6 }} sm={{ span: 6 }} md={{ span: 6 }} // 2 cards per row
                    lg={{ span: 4 }} xl={{ span: 4 }} // 3 cards per row
                    >
                        Set on - <ReadableDate date={climb.createdAt} />
                        <ClimbCard climb={climb} />
                    <br />
                    </Col>
                )}
            </Row>

            <h3>West End</h3>
            <Row gutter={40}>
                {(westendNew).map(climb => 

                    <Col // Responsive settings. Each row has a span of 12
                    xs={{ span: 6 }} sm={{ span: 6 }} md={{ span: 6 }} // 2 cards per row
                    lg={{ span: 4 }} xl={{ span: 4 }} // 3 cards per row
                    >
                        Set on - <ReadableDate date={climb.createdAt} />
                        <ClimbCard climb={climb} />
                    <br />
                    </Col>
                )}
            </Row>
            </details>
        </>
      );
    };

export default Schedule
