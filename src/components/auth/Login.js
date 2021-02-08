import React, { Fragment, useState } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { setAlert } from '../../actions/alert';


const Login = ({ setAlert, login, isAuthenticated, isAdmin }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const onChange = e => 
        setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()
        login(email, password)
    }
    
    if (isAuthenticated) {
        console.log('isAuthenticated via login')
        return <Redirect to="/" />;
    }

    if (isAdmin) {
        console.log('isAdmin via login')
        return <Redirect to="/" />;
    }
        
        
    return (
        <Fragment>
        <h1>Login</h1>
        <form className='form' onSubmit={e => onSubmit(e)}>
            <div className='form-group'>
                <input type='text' placeholder='Email Address' name='email' value={email} onChange={e => onChange(e)} required />
            </div>
            {/* <div className='form-group'>
                <input type='text' placeholder='Staff Number' name='staffNumber' value={staffNumber} onChange={e => onChange(e)} required />
            </div> */}
            <div className='form-group'>
                <input type='text' placeholder='Password' name='password' value={password} onChange={e => onChange(e)} required />
            </div>
            <input type="submit" className="btn btn-primary" value="Login"/>
        </form>
        </Fragment>
    )
}


Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    isAdmin: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    isAdmin: state.auth.isAdmin
});

export default connect(mapStateToProps, { setAlert, login })(Login);
