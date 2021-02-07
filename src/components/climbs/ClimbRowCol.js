import React from 'react'
import ClimbCard from '../climbs/ClimbCard'
import { Row, Col } from 'react-bootstrap'
import ReadableDate from '../layout/ReadableDate'


// Take in an array of climbs and output with 
const ClimbRowCol = ({climbs, showRemovalDate, showCreatedDate }) => {

    return (
        <Row gutter={40}>
                {(climbs).map(climb => 
                    <div key={climb._id}>
                    <Col // Responsive settings. Each row has a span of 12
                    xs={{ span: 6 }} sm={{ span: 6 }} md={{ span: 6 }} // 2 cards per row
                    lg={{ span: 4 }} xl={{ span: 4 }} // 3 cards per row
                    >
                        {(showRemovalDate) && <>Leaving - <ReadableDate date={climb.removalDate} /></>}
                        {(showCreatedDate) && <>Set on - <ReadableDate date={climb.createdAt} /></>}
                        
                        <ClimbCard climb={climb} />

                    <br />
                    </Col>
                    </div>
                )}
            </Row>
    )
}

export default ClimbRowCol