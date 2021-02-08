import React from 'react'
import { useForm } from "react-hook-form"
import ListByColour from './ListByColour'

import './GymnView.css'

// At this point of the flow the user has selected a gym 
// This component provides them with a checkbox for each colour 
// When they tick a checkbox the ListByColour component renders with the corresponding climbs
const GymView = (props) => {
    
    const { gym } = props
    const { register, watch } = useForm()

    const watchShowGreen = watch("green", false)
    const watchShowBlue = watch("blue", false)
    const watchShowRed = watch("red", false)
    const watchShowOrange = watch("orange", false)
    const watchShowBlack = watch("black", false)
    const watchShowWhite = watch("white", false)
    const watchShowPurple = watch("purple", false)
    const watchShowYellow = watch("yellow", false)

    return(
        <>
       
        <form >

            <div className="radio-buttons">
                <label>
                    <input type="checkbox" name="green" ref={register} />
                    Green &nbsp; &nbsp;
                </label>

                <label>
                    <input type="checkbox" name="blue" ref={register} />
                    Blue &nbsp; &nbsp;
                </label>

                <label>
                    <input type="checkbox" name="red" ref={register} />
                    Red &nbsp; &nbsp;
                </label>

                <label>
                    <input type="checkbox" name="orange" ref={register} />
                    Orange &nbsp; &nbsp;
                </label>

            </div>
            <div className="radio-buttons">

                <label>
                    <input type="checkbox" name="black" ref={register} />
                    Black &nbsp; &nbsp;
                </label>

                <label>
                    <input type="checkbox" name="white" ref={register} />
                    White &nbsp; &nbsp;
                </label>

                <label>
                    <input type="checkbox" name="purple" ref={register} />
                    Purple &nbsp; &nbsp;
                </label>

                <label>
                    <input type="checkbox" name="yellow" ref={register} />
                    Yellow 
                </label>

            </div>
           
        </form>

        {watchShowGreen && <ListByColour gym={gym} colour={"green"} />}
        {watchShowBlue && <ListByColour gym={gym} colour={"blue"} />}
        {watchShowRed && <ListByColour gym={gym} colour={"red"} />}
        {watchShowOrange && <ListByColour gym={gym} colour={"orange"} />}
        {watchShowBlack && <ListByColour gym={gym} colour={"black"} />}
        {watchShowWhite && <ListByColour gym={gym} colour={"white"} />}
        {watchShowPurple && <ListByColour gym={gym} colour={"purple"} />}
        {watchShowYellow && <ListByColour gym={gym} colour={"yellow"} />}

        </>
    )


}


export default GymView