import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import ReadableDate from '../layout/ReadableDate'
import EditClimbButton from './EditClimbButton'
import { useHistory } from "react-router-dom"




const EditClimbForm = (props) => {
    const { register, handleSubmit, errors } = useForm()
    let history = useHistory()
    const API_ENDPOINT = "http://localhost:8000"

    let { gym, colour, climbId } = props.match.params

    let url = `${API_ENDPOINT}/climbs/${gym}/${colour}/${climbId}`

    const [climb, setClimb] = useState([])

    useEffect(() => {
        console.log("Edit Climb useEffect Mounted")

        fetch(url)
        .then(res => res.json())
        .then(data => { 
            // console.log(data)

            setClimb(data)
        })
        .catch(e => console.log(e))
       
        return () => {
            console.log("Unmounted")
        }
    }, [])


    useEffect(() => {
        console.log("Edit Climb useEffect Rendered on Climb change")
        console.log(climb)
        wall = climb.wall
        image = climb.image
        video = climb.video

        return () => {
            console.log("Unmounted")
        }
    }, [climb])

    let { wall, image, video} = climb

    const youtubeUrl = `https://www.youtube.com/embed/${climb.video}`


    const onSubmit = (data) => {
        const formData = new FormData()
        formData.append("gym", data.gym)
        formData.append("wall", data.wall)
        formData.append("colour", data.colour)
        formData.append("youtubeUrl", data.youtubeUrl)
        formData.append("image", data.image[0])

        
        fetch(`${url}/edit`, {
            method: 'PATCH',
            body: formData,
        }).then(res => res.json()).then((results) => setClimb(results.result))
            // res.json()).then((results) => console.log(results.result))


        history.push(`/climbs/${data.gym}/${data.colour}/${climbId}/edit`)
    }


    console.log(errors)

    const youtubeRegex = /(?:https?:\/\/)?(?:(?:(?:www\.?)?youtube\.com(?:\/(?:(?:watch\?.*?(v=[^&\s]+).*)|(?:v(\/.*))|(channel\/.+)|(?:user\/(.+))|(?:results\?(search_query=.+))))?)|(?:youtu\.be(\/.*)?))/
    // onChange={value => props.input.onChange(value)}
    return (
        <div>
            <h2>Edit Climb with id: {climbId}</h2>

            <h5>Current Details</h5>
            <ul>
                <li><b>Gym:</b> {gym}</li>
                <li>Wall: {wall}</li>
                <li>Colour: {colour}</li>
                <li>Youtube ID: {video}</li>
                <li>Image ID: {image}</li>
                {climb.removalDate && <li> Removal Date: {<ReadableDate date={climb.removalDate} year={true}/>}</li>}
                
            </ul>

            <form onSubmit={handleSubmit(onSubmit)}>
            <label className="text-gray-700">
                    Gym
              {/* <span className="text-red-500 required-dot">*</span> */}
                    <select name="gym" ref={register({ required: true })} className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                        <option value="milton">Milton</option>
                        <option value="newstead">Newstead</option>
                        <option value="westend">West End</option>
                    </select>
                </label>
                <label className="text-gray-700">
                    Wall
      <input type="text" name="wall" placeholder="Wall name" ref={register({ required: true })} className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                        {/* <option value="Dungeon">Dungeon</option>
                        <option value="Zepellin">Zepellin</option>
                        <option value="Cave">Cave</option> */}
                    </input>
                </label>
                <label className="text-gray-700">
                    Colour
      <select name="colour" ref={register({ required: true })} className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                        <option value="black">Black</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="orange">Orange</option>
                        <option value="purple">Purple</option>
                        <option value="red">Red</option>
                        <option value="white">White</option>
                        <option value="yellow">Yellow</option>
                    </select>
                </label>
                <br></br>

                <input type="url" placeholder={youtubeUrl} name="youtubeUrl" ref={register({ required: true, pattern: youtubeRegex })} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-1/6 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />

                <br></br>
                <br></br>
                {/* https://tailwindcomponents.com/component/tailwind-file-upload */}
               
                    <input ref={register} type="file" name="image" />

                <br></br>
                <button type="submit" className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-1/6 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Edit Climb
                </button>

                {/* <EditClimbButton gym={gym} colour={colour} climbId={climbId} /> */}
            </form>
            <button type="submit" className="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-1/6 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Remove Climb
            </button>
        </div>
    )
}

export default EditClimbForm
