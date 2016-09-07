// import axios from 'axios';

// const tokenConfig = (token) => ({
//     headers: {
//         'Authorization': token, 
//     },
// });


// export function get_token(username, password) {
//     return axios.post('http://127.0.0.1:3000/login', {
//         username,
//         password,
//     });
// }

import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export function createConstants(...constants) {
    return constants.reduce((acc, constant) => {
        acc[constant] = constant;
        return acc;
    }, {});
}

export function createReducer(initialState, reducerMap) {
    return (state = initialState, action) => {
        const reducer = reducerMap[action.type];


        return reducer
            ? reducer(state, action.payload)
            : state;
    };
}


export function parseJSON(response) {
    return response.data;
}


// Form Validation

export default function validateInput(data) {
  let errors = {};

  if (Validator.isNull(data.username)) {
    errors.username = 'This field is required';
  }

  if (Validator.isNull(data.password)) {
    errors.password = 'This field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}