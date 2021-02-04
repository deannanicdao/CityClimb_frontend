import React, { Fragment }  from 'react'
import { useForm } from "react-hook-form"

const Search = () => {

    const { register, watch, errors, handleSubmit } = useForm()

    const watchShowGyms = watch("showGyms", false)
    // const watchShowGreen = watch("green", false)
    // const watchShowBlue = watch("blue", false)
    // const watchShowRed = watch("red", false)

    const onSubmit = data => console.log(data);

    return (
        <Fragment>
            <p className='large'>Search</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="checkbox" name="showGyms" ref={register} />
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

// import React from "react";
// import { useForm } from "react-hook-form";

// function App() {
//   const { register, watch, errors, handleSubmit } = useForm();
//   const watchShowAge = watch("showAge", false); // you can supply default value as second argument
//   const watchAllFields = watch(); // when pass nothing as argument, you are watching everything
//   const watchFields = watch(["showAge", "number"]); // you can also target specific fields by their names

//   const onSubmit = data => console.log(data);

//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input type="checkbox" name="showAge" ref={register} />
        
//         {/* based on yes selection to display Age Input*/}
//         {watchShowAge && <input type="number" name="age" ref={register({ min: 50 })} />}
        
//         <input type="submit" />
//       </form>
//     </>
//   );
// }