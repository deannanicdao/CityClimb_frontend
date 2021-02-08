import React, { Fragment }  from 'react'
import { useForm } from "react-hook-form"
import GymView from '../climbs/GymView'
import './Climbs.css'


// Component for the view when users click the 'Climbs' link in the navbar
const Climbs = () => {
    const { register, watch } = useForm()

    const selectedGym = watch("gym", false)

    
    return (
        <div className="main-container">
            <h1>Select Gym</h1>
            <p> 
            <form>
            <input className="radio-buttons" type="radio" name="gym" value="milton" ref={register}/> Milton <br />
                <input type="radio" name="gym" value="newstead" ref={register}/> Newstead <br />
                <input type="radio" name="gym" value="westend" ref={register}/> West End <br />
            </form>
            </p>

            {selectedGym == "milton" && <GymView gym={"milton"}/>}
            {selectedGym == "newstead" && <GymView gym={"newstead"}/>}
            {selectedGym == "westend" && <GymView gym={"westend"}/>}
            
        </div>
    )
}

export default Climbs
