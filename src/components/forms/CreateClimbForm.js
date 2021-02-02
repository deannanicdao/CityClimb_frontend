import React from 'react'
import { useForm } from 'react-hook-form'


const CreateClimbForm = () => {

    const { register, handleSubmit, errors } = useForm()

    const onSubmit = (data) => {
        const formData = new FormData()

        formData.append("gym", data.gym)
        formData.append("wall", data.wall)
        formData.append("colour", data.colour)
        formData.append("youtubeUrl", data.youtubeUrl)
        formData.append("image", data.image[0])


        console.log(formData)


        fetch('http://localhost:8000/climbs', {
            method: 'POST',
            body: formData,
            // headers: {
            //     "Content-Type": "multipart/form-data"
            // }
        })
    }

    console.log(errors)

    const youtubeRegex = /(?:https?:\/\/)?(?:(?:(?:www\.?)?youtube\.com(?:\/(?:(?:watch\?.*?(v=[^&\s]+).*)|(?:v(\/.*))|(channel\/.+)|(?:user\/(.+))|(?:results\?(search_query=.+))))?)|(?:youtu\.be(\/.*)?))/

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <label className="text-gray-700">
                    Gym
              {/* <span className="text-red-500 required-dot">*</span> */}
                    <select name="gym" ref={register({ required: true })} className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                        <option value="Milton">Milton</option>
                        <option value="Newstead">Newstead</option>
                        <option value="West End">West End</option>
                    </select>
                </label>
                <label className="text-gray-700">
                    Wall
      <select name="wall" ref={register({ required: true })} className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                        <option value="Dungeon">Dungeon</option>
                        <option value="Zepellin">Zepellin</option>
                        <option value="Cave">Cave</option>
                    </select>
                </label>
                <label className="text-gray-700">
                    Colour
      <select name="colour" ref={register({ required: true })} className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                        <option value="black">black</option>
                        <option value="blue">blue</option>
                        <option value="green">green</option>
                        <option value="orange">orange</option>
                        <option value="purple">purple</option>
                        <option value="red">red</option>
                        <option value="white">white</option>
                        <option value="yellow">yellow</option>
                    </select>
                </label>
                <br></br>

                <input type="url" placeholder="Youtube URL" name="youtubeUrl" ref={register({ required: true, pattern: youtubeRegex })} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-1/6 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />

                <br></br>
                <br></br>
                {/* https://tailwindcomponents.com/component/tailwind-file-upload */}
               
                    <input ref={register} type="file" name="image" />

                <br></br>

                <button type="submit" className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-1/6 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Create Climb
                </button>
            </form>
        </div>
    )
}

export default CreateClimbForm

