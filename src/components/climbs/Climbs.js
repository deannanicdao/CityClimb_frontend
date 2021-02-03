import React, { useState, useEffect } from 'react'

const Climbs = () => {
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
    
    
    // const params = useParams()
    return (
        <>
            <div>
                {JSON.stringify(climbs)}
            </div>
    
        </>
    )
}

export default Climbs