import api from '../utils/api'

import { LOGIN } from './types'

// Login User
export const login = (email, password) => async dispatch => {
    const body = { email, password };
  
    try {
      const res = await api.post('/auth', body);
  
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
  
      dispatch(loadUser());
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