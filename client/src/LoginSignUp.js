import React from 'react';
import Login from './LoginForm';
import Signup from './Signup';

class LoginSignUp extends React.Component {
  render() {
    return (
      <div>
      <div className="signup-login-wrapper">
        <div className="login">
          <Login />
        </div>
        <div className="signup">
          <Signup />
        </div>
      </div>
      </div>
    )
  }
}

export default LoginSignUp