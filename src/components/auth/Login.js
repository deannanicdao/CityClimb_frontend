import React, { Fragment, useState } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';


const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const onChange = e => 
        setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault()
        login(email, password)
    }
    
    if (isAuthenticated) {
        return <Redirect to="/staff_dashboard" />;
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
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
