import React, { useState, useEffect } from 'react'
import ClimbRowCol from '../climbs/ClimbRowCol'

const Schedule = () => {

    console.log()
    const [climbs, setClimbs] = useState([])

    useEffect(() => {

        // Gets all climbs 
        fetch(`${process.env.REACT_APP_BACKEND_URL}/schedule/`)
            .then(res => res.json())
            .then(data => {
                setClimbs(data)
            })
            .catch(e => console.log(e))

        return () => {
            console.log('Unmounted (inside schedule)')
        }
    }, [])

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

                <h3>Newstead</h3>
                <ClimbRowCol climbs={newsteadNew} showCreatedDate={true} />

                <h3>West End</h3>
                <ClimbRowCol climbs={westendNew} showCreatedDate={true} />
            </details>
        </>
    )
}

export default Schedule
