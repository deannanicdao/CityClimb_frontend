import React, { Fragment }  from 'react'
import { useForm } from "react-hook-form"
import GymView from '../climbs/GymView'

// Component for the view when users click the 'Climbs' link in the navbar
const Climbs = () => {
    const { register, watch } = useForm()

    const selectedGym = watch("gym", false)

    

    return (
        <Fragment>
            <p className='large'>Select Gym</p>
            <form>
                <input type="radio" name="gym" value="milton" ref={register}/>Milton
                <input type="radio" name="gym" value="newstead" ref={register}/>Newstead
                <input type="radio" name="gym" value="westend" ref={register}/>West End
            </form>

            {selectedGym == "milton" && <GymView gym={"milton"}/>}
            {selectedGym == "newstead" && <GymView gym={"newstead"}/>}
            {selectedGym == "westend" && <GymView gym={"westend"}/>}
        </Fragment>
    )
}

export default Climbs
