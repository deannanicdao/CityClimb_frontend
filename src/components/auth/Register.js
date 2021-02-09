
import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated, isAdmin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    staffNumber: ''
  });

  console.log("Start register")

  const { name, email, password, confirmPassword, staffNumber } = formData;
  
  const onChange = (e) =>
  setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setAlert('Passwords do not match', 'danger');
      console.log('Passwords error')
    }

    if (!email) {
      setAlert('Please enter a valid email', 'danger');
      console.log('Email error')
    }
    if (!name) {
      setAlert('Please enter a valid name', 'danger');
      console.log('Name blank')
    }
    if (!staffNumber) {
      setAlert('Please enter a valid staff number', 'danger');
      console.log('Staff number blank')
    }
    if (staffNumber < 6) {
      setAlert('Please enter a valid staff number', 'danger');
      console.log('Staff number too less than 6 characters')
    }

    if (name && email && password && staffNumber !== "") {
      register({ name, email, password, staffNumber });
      console.log('User registered')
    }
    
    <Redirect to="/staff_dashboard" />
    
  };
  


  return (
    <div className="hero-container">
      <h1 className="large text-primary">City Climb</h1>
      <p className="lead">
        <i className="fas fa-user" /> Staff Register
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Staff Number"
            name="staffNumber"
            value={staffNumber}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register)