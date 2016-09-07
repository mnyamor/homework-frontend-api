import React, { Component, PropTypes } from 'react';
import LoginForm from '../LoginForm/LoginForm.js';

export default class Login extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
            <LoginForm />
        </div>
      </div>
    );
  }
}
