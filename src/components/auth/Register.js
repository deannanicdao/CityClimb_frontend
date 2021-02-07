import React, { Fragment, useState, useRef } from 'react'
import { useForm } from 'react-hook-form'


const Register = () => {
    const { register, handleSubmit, errors, watch } = useForm()
    const password = useRef({})
    password.current = watch("password", "")
    
    const onSubmit = (data) => {

        console.log(data)

        const formData = new FormData()
        const name = `${data.firstName} ${data.lastName}`

        formData.append("name", name)
        formData.append("email", data.email)
        formData.append("staffNumber", data.staffNumber)
        formData.append("password", data.password)
        formData.append("image", data.image[0])

        console.log(formData)

        fetch('http://localhost:8000/users', {
            method: 'POST',
            body: formData,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    }
    


    return (
        <Fragment>
            <h1>Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-group'>
                    <input type='text' ref={register({ required: true })} placeholder='First Name' name='firstName' />
                </div>
                <div className='form-group'>
                    <input type='text' ref={register({ required: true })} placeholder='Last Name' name='lastName' />
                </div>
                <div className='form-group'>
                    <input type='text' ref={register({ required: true })} placeholder='Email Address' name='email' />
                </div>
                <div className='form-group'>
                    <input type='text' ref={register({ required: true })} placeholder='Staff Number' name='staffNumber' />
                </div>
                <div className='form-group'>
                    {/* <input type='password' ref={register({ required: true })} placeholder='Password' name='password' /> */}
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        ref={register({
                        required: "You must specify a password",
                        minLength: {
                            value: 8,
                            message: "Password must have at least 8 characters"
                        }
                        })}
                    />
                </div>
                {errors.password && <p>{errors.password.message}</p>}
                <div className='form-group'>
                    {/* <input type='password' placeholder='Confirm Password' name='confirmPassword' ref={register({
                        required: true,
                        validate: value => 
                            value === password.current || "Passwords must match"
                    })} /> */}
                    <input
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm password"
                        // ref={register({
                        // validate: value =>
                        //     value === password.current || "The passwords do not match"
                        // })}
                    />
                </div>
                {/* {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>} */}

                <input ref={register} type="file" name="image" />

                <input type="submit" className="btn btn-primary" value="Register"/>
            </form>
        </Fragment>
    )
}

export default Register