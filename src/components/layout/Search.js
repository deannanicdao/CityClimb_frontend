import React, { Fragment }  from 'react'
import { useForm } from "react-hook-form"

const Search = () => {
    const { register, watch, errors, handleSubmit } = useForm()

    const watchShowGyms = watch("showGyms", true)
    // const watchShowGreen = watch("green", false)
    // const watchShowBlue = watch("blue", false)
    // const watchShowRed = watch("red", false)

    const onSubmit = data => console.log(data);
    


    return (
        <Fragment>
            <p className='large'>Search</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="checkbox" name="showGyms" ref={register} hidden />
                {watchShowGyms && <div>
                <input type="submit" className="btn btn-primary" value="Milton" name="milton"   ref={register}/>
                <input type="submit" className="btn btn-primary" value="Newstead" name="newstead"   ref={register}/>
                <input type="submit" className="btn btn-primary" value="West End" name="westend"    ref={register}/>
                </div>
            }
            </form>
        </Fragment>
    )
}

export default Search
