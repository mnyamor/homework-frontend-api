import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from '../constants/index';
import { browserHistory } from 'react-router';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('data');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}

export function login(data) {
  return dispatch => {
    return axios.post('http://127.0.0.1:3000/login', data).then(res => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
      return fetchData(data);
    });
  }
}

export default function fetchData(data) {
  var output = [];
  if (localStorage.getItem("jwtToken")) { 
    return axios.get('http://127.0.0.1:3000/documents', data).then(res => {
       return localStorage.setItem("data", JSON.stringify(res.data));
    });
  }
}


export function redirectToRoute(route) {
    return () => {
        browserHistory.push(route);
    };
}

export function loginUserSuccess(token) {
    localStorage.setItem('jwtToken', token);
    return {
        type: LOGIN_USER_SUCCESS,
        payload: {
            token,
        },
    };
}

export function loginUserFailure(error) {
    localStorage.removeItem('jwtToken');
    return {
        type: LOGIN_USER_FAILURE,
        payload: {
            status: error.status,
            statusText: error.statusText,
        },
    };
}

export function logoutAndRedirect() {
    return (dispatch) => {
        dispatch(logout());
        browserHistory.push('/');
    };
}
