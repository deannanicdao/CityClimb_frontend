import React, { Fragment }  from 'react'
import { useForm } from "react-hook-form"
import GymView from './GymView'

const Search = () => {
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