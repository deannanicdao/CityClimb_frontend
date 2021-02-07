import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  //LOGIN_FAIL,
  LOGOUT,
  ACCOUNT_DELETED
} from '../actions/types';

console.log('before initialState in reducers/auth')
const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
};

function authReducer(state = initialState, action) {
  console.log('inside authReducer in reducers/auth')
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      console.log('Inside REGISTER_SUCCESS/LOGIN_SUCCESS')
      // localStorage.setItem('token', payload.token)
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };
    case REGISTER_FAIL:
      // localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      };
    case ACCOUNT_DELETED:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null
      };
    case AUTH_ERROR:
    case LOGOUT:
      console.log('Inside LOGOUT')
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null
      };
    default:
      return state;
  }
}

export default authReducer;
