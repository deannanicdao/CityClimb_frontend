
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
    console.log('Form data:')
    console.log(formData)
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

    if (name && email && password && staffNumber !== "") {
      register({ name, email, password, staffNumber });
      console.log('User registered')
    }
    
  };

  if (isAuthenticated) {
    console.log('isAuthenticated in Register')
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
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
    </Fragment>
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

export default connect(mapStateToProps, { setAlert, register })(Register);
// import React, { Fragment, useState, useRef } from 'react'
// import { connect } from 'react-redux'
// import { useForm } from 'react-hook-form'
// import { setAlert } from '../../actions/alert'


// const Register = (props) => {
//     const { register, handleSubmit, errors, watch } = useForm()
//     const password = useRef({})
//     password.current = watch("password", "")
    
//     const onSubmit = (data) => {
//         e.preventDefault();
//         if (password !== confirmPassword) {
//           setAlert('Passwords do not match', 'danger');
//         } else {
//           const formData = new FormData()
//           const name = `${data.firstName} ${data.lastName}`
  
//           formData.append("name", name)
//           formData.append("email", data.email)
//           formData.append("staffNumber", data.staffNumber)
//           formData.append("password", data.password)
//           formData.append("image", data.image[0])
  
//           console.log(formData)
  
//           fetch('http://localhost:8000/users', {
//               method: 'POST',
//               body: formData,
//               // headers: {
  
//               // }
//           })
//         }

//         console.log(data)
//         props.setAlert(`This is the data: ${data}`)

//     }
    


//     return (
//         <Fragment>
//             <h1>Register</h1>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <div className='form-group'>
//                     <input type='text' ref={register({ required: true })} placeholder='First Name' name='firstName' />
//                 </div>
//                 <div className='form-group'>
//                     <input type='text' ref={register({ required: true })} placeholder='Last Name' name='lastName' />
//                 </div>
//                 <div className='form-group'>
//                     <input type='text' ref={register({ required: true })} placeholder='Email Address' name='email' />
//                 </div>
//                 <div className='form-group'>
//                     <input type='text' ref={register({ required: true })} placeholder='Staff Number' name='staffNumber' />
//                 </div>
//                 <div className='form-group'>
//                     {/* <input type='password' ref={register({ required: true })} placeholder='Password' name='password' /> */}
//                     <input
//                         type="password"
//                         name="password"
//                         placeholder="Password"
//                         ref={register({
//                         required: "You must specify a password",
//                         minLength: {
//                             value: 8,
//                             message: "Password must have at least 8 characters"
//                         }
//                         })}
//                     />
//                 </div>
//                 {errors.password && <p>{errors.password.message}</p>}
//                 <div className='form-group'>
//                     {/* <input type='password' placeholder='Confirm Password' name='confirmPassword' ref={register({
//                         required: true,
//                         validate: value => 
//                             value === password.current || "Passwords must match"
//                     })} /> */}
//                     <input
//                         name="confirmPassword"
//                         type="password"
//                         placeholder="Confirm password"
//                         // ref={register({
//                         // validate: value =>
//                         //     value === password.current || "The passwords do not match"
//                         // })}
//                     />
//                 </div>
//                 {/* {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>} */}

//                 <input ref={register} type="file" name="image" />

//                 <input type="submit" className="btn btn-primary" value="Register"/>
//             </form>
//         </Fragment>
//     )
// }

// export default connect(null, { setAlert })(Register) // connect takes in state, actions - this allows us to send through props
