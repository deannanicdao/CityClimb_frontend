import React, { useState, useEffect } from 'react'
import ClimbRowCol from '../climbs/ClimbRowCol'

const Schedule = () => {

    const [climbs, setClimbs] = useState([])

    useEffect(() => {

        // Gets all climbs 
        fetch("http://localhost:8000/schedule/")
            .then(res => res.json())
            .then(data => {
                setClimbs(data)
            })
            .catch(e => console.log(e))

        return () => {
            console.log('Unmounted (inside schedule)')
        }
    }, [])
<<<<<<< HEAD

    return (
        
        <div className='container'>

=======

    // startDate is equal to 14 days before today
    const startDate = (Date.now() - (12096e5))

    // endDate is equal to 14 days before today
    const endDate = (Date.now() + 12096e5)

    // Create arrays of all climbs leaving and all climbs newly created
    let climbsLeaving = climbs.filter(climb => { return (Date.parse(climb.removalDate) < endDate) })
    let climbsNew = climbs.filter(climb => { return (Date.parse(climb.createdAt) > startDate) })

    // TODO: DRY this up  

    // Create arrays for each gym for climbs leaving and climbs newly created    
    let miltonLeaving = climbsLeaving.filter(climb => climb.gym == "milton")
    let miltonNew = climbsNew.filter(climb => climb.gym == "milton")

    let newsteadLeaving = climbsLeaving.filter(climb => climb.gym == "newstead")
    let newsteadNew = climbsNew.filter(climb => climb.gym == "newstead")

    let westendLeaving = climbsLeaving.filter(climb => climb.gym == "westend")
    let westendNew = climbsNew.filter(climb => climb.gym == "westend")

    return (
        <>
>>>>>>> df8943a1e9afae83f7b91916fafacfa315b3438a
            <br />
            <details>
                <summary>Leaving Soon</summary>
                <h3>Milton</h3>
                <ClimbRowCol climbs={miltonLeaving} showRemovalDate={true} />

                <h3>Newstead</h3>
                <ClimbRowCol climbs={newsteadLeaving} showRemovalDate={true} />

                <h3>West End</h3>
                <ClimbRowCol climbs={westendLeaving} showRemovalDate={true} />

            </details>

            <details>
                <summary>New Climbs</summary>
                <h3>Milton</h3>
                <ClimbRowCol climbs={miltonNew} showCreatedDate={true} />

<<<<<<< HEAD
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
       </div>
        
      );
    };
=======
                <h3>Newstead</h3>
                <ClimbRowCol climbs={newsteadNew} showCreatedDate={true} />

                <h3>West End</h3>
                <ClimbRowCol climbs={westendNew} showCreatedDate={true} />
            </details>
        </>
    )
}
>>>>>>> df8943a1e9afae83f7b91916fafacfa315b3438a

export default Schedule
