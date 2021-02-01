import React, { Fragment, useState } from 'react'
import axios from 'axios'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        staffNumber: '',
        password: ''
    })

    const { email, staffNumber, password } = formData

    const onChange = e => 
        setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault()
        console.log(formData)

        const loggedInUser = {
            email, 
            staffNumber,
            password
        }

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const body = JSON.stringify(loggedInUser)

            // const res = await axios.get('/users', body, config)
            // console.log(res.data)
        } catch (err) {
            console.error(err.message)
        }
    }


    return (
        <Fragment>
            <h1>Login</h1>
            <form className='form' onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input type='text' placeholder='Email Address' name='email' value={email} onChange={e => onChange(e)} required />
                </div>
                <div className='form-group'>
                    <input type='text' placeholder='Staff Number' name='staffNumber' value={staffNumber} onChange={e => onChange(e)} required />
                </div>
                <div className='form-group'>
                    <input type='text' placeholder='Password' name='password' value={password} onChange={e => onChange(e)} required />
                </div>
                <input type="submit" className="btn btn-primary" value="Login"/>
            </form>
        </Fragment>
    )
}

export default Login
