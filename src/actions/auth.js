import api from '../utils/api';
// import axios from 'axios'
import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  ADMIN_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from './types';

// Load User
export const loadUser = () => async dispatch => {
  try {
    console.log('inside loadUser - before GET req to /auth')
    const res = await api.get('/auth');
    console.log("inside loadUser after GET req to /auth")

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });

    console.log('inside loadUser - after dispatch of USER_LOADED')
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Load Admin
export const loadAdmin = () => async dispatch => {
  try {
    console.log('inside loadAdmin - before GET req to /auth')
    const res = await api.get('/auth');
    console.log("inside loadAdmin after GET req to /auth")

    dispatch({
      type: ADMIN_LOADED,
      payload: res.data
    });

    console.log('inside loadAdmin - after dispatch of ADMIN_LOADED')
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register User
export const register = formData => async dispatch => {
  try {
    console.log('Inside actions/auth/register')
    const res = await api.post('/auth/register', formData);
    // const res = await axios.post('auth/register', body, config)
    
    console.log("inside Register Success")
    console.log(res.data)
    
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    // dispatch(loadUser());

  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User
export const login = (email, password ) => async dispatch => {
  const body = { email, password }

  try {
    const res = await api.post('/auth/login', body)
    console.log("inside Login Success")
    console.log(res.data)

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    })
    
    const user = res.data.user

    if (user.admin == true) {
      dispatch(loadAdmin())
    } else {
      dispatch(loadUser())
    }

  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout
export const logout = () => ({ type: LOGOUT });
