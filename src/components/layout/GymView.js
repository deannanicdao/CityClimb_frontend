import React from 'react'
import { useForm } from "react-hook-form"
import ClimbList from './ClimbList'

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
        <p>{gym}</p>
        <form>
            <label>
                <input type="checkbox" name="green" ref={register} />
                Green
            </label>

            <label>
                <input type="checkbox" name="blue" ref={register} />
                Blue
            </label>

            <label>
                <input type="checkbox" name="red" ref={register} />
                Red
            </label>

            <label>
                <input type="checkbox" name="orange" ref={register} />
                Orange
            </label>

            <label>
                <input type="checkbox" name="black" ref={register} />
                Black
            </label>

            <label>
                <input type="checkbox" name="white" ref={register} />
                White
            </label>

            <label>
                <input type="checkbox" name="purple" ref={register} />
                Purple
            </label>

            <label>
                <input type="checkbox" name="yellow" ref={register} />
                Yellow
            </label>
        </form>


        {watchShowGreen && <ClimbList gym={gym} colour={"green"} />}
        {watchShowBlue && <ClimbList gym={gym} colour={"blue"} />}
        {watchShowRed && <ClimbList gym={gym} colour={"red"} />}
        {watchShowOrange && <ClimbList gym={gym} colour={"orange"} />}
        {watchShowBlack && <ClimbList gym={gym} colour={"black"} />}
        {watchShowWhite && <ClimbList gym={gym} colour={"white"} />}
        {watchShowPurple && <ClimbList gym={gym} colour={"purple"} />}
        {watchShowYellow && <ClimbList gym={gym} colour={"yellow"} />}

        </>
    )


}


export default GymView