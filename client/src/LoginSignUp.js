import React from 'react';
import Login from './LoginForm';
import Signup from './Signup';

class LoginSignUp extends React.Component {
  render() {
    return (
      <div>
      <div className="signup-login-wrapper">
        <div className="login">
          <h3 className="login-page-header">Login to your Account</h3>
          <Login />
        </div>
        <div className="signup">
        <h3 className="login-page-header">Create an Account</h3>
          <Signup />
        </div>
      </div>
      </div>
    )
  }
}

export default LoginSignUp