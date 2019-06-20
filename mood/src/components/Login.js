import React, { Component } from 'react';
import SignIn from './SignIn'
import SignUp from './SignUp'

class Login extends Component {
  state = {
    
  }

  componentDidMount() {
    fetch('http://localhost:3001/users')
    .then(res => res.json())
    .catch(err => console.log(err))
  }

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