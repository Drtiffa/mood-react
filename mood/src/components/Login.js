import React, { Component } from 'react';
import SignIn from './SignIn'
import SignUp from './SignUp'

class Login extends Component {
  render() {
    return (
        <div className="login_content">
            <SignIn />
            <SignUp />
        </div>
    )
  }
}

export default Login