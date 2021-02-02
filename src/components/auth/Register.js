import React, { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'


const Register = () => {
    const { register, handleSubmit, errors } = useForm()

    const onSubmit = (data) => {
        const formData = new FormData()

        // formData.append("name", data.name)
        formData.append("email", data.email)
        formData.append("staffNumber", data.staffNumber)
        formData.append("password", data.password)
        // formData.append("password2", data.password2)
        formData.append("image", data.image[0])

        console.log(formData)

        fetch('http://localhost:8000/users', {
            method: 'POST',
            body: formData,
            // headers: {

            // }
        })
    }

    console.log(errors)
    
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     staffNumber: '',
    //     password: '',
    //     password2: ''
    // })

    // const { email, staffNumber, password } = formData

    // const onChange = e => 
    //     setFormData({ ...formData, [e.target.name]: e.target.value })

    // const onSubmit = async e => {
    //     e.preventDefault()
    //     console.log(formData)

    //     const loggedInUser = {
    //         email, 
    //         staffNumber,
    //         password
    //     }

    //     try {
    //         const config = {
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         }

    //         const body = JSON.stringify(loggedInUser)

    //         // const res = await axios.get('/users', body, config)
    //         // console.log(res.data)
    //     } catch (err) {
    //         console.error(err.message)
    //     }


    return (
        <Fragment>
            <h1>Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-group'>
                    <input type='text' ref={register({ required: true })} placeholder='Email Address' name='email' />
                </div>
                <div className='form-group'>
                    <input type='text' ref={register({ required: true })} placeholder='Staff Number' name='staffNumber' />
                </div>
                <div className='form-group'>
                    <input type='text' ref={register({ required: true })} placeholder='Password' name='password' />
                </div>

                <input ref={register({ required: true })} type="file" name="image" />

                <input type="submit" className="btn btn-primary" value="Register"/>
            </form>
        </Fragment>
    )
}

export default Register
