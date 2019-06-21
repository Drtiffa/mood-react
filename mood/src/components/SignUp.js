import React, { Component } from 'react';
import ResultMessage from './ResultMessage';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    resultType: '',
    resultMessage: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  postSignUp = (email, password) => {
    var body = JSON.stringify({ email, password })
    const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
        }
    fetch('http://localhost:3001/users/signup', {
      method: 'POST',
      headers,
      body
    })
    .then(res => res.json())
    .then(data => {
      this.setState({ resultType: data.resultType, resultMessage: data.resultMessage });
      if (data.resultType === 'success') {
        this.setState({ email: '', password: '' });
      }
    })
    .catch(err => console.warn(err))
  }

  clearResult = () => {
    this.setState({ resultType: '', resultMessage: '' });
  }  

  render() {
    return (
        <>
        <div className="result_message">{this.state.resultMessage && <ResultMessage type={this.state.resultType} message={this.state.resultMessage} clearResult={this.clearResult} />}</div>
        <div className="login_sign-up">
            <div className="sign-up_content">
                <div className="sign-up_title">
                    <h2>Sign up</h2>
                </div>
                <form className="sign-up_form">
                    <div className="sign-up_form-element sign-up_form-email">
                        <label>Email</label>
                        <input type="text" id="email" name="email" required placeholder="Enter email" value={this.state.email} onChange={this.handleChange}></input>
                    </div>
                    <div className="sign-up_form-element sign-up_form-password">
                        <label>Password</label>
                        <input type="password" id="password" name="password" required placeholder="Enter password" value={this.state.password} onChange={this.handleChange}></input>
                    </div>
                    <div className="sign-up_form-element sign-up_form-password">
                        <label>Confirmed password</label>
                        <input type="password" id="confirmed_password" name="confirmed_password" required placeholder="Confirmed password"></input>
                    </div>
                </form>
                <div className="sign-up_button">
                    <button className="sign-up_submit" value="Signup" onClick={() => this.postSignUp(this.state.email, this.state.password)}>Sign up</button>
                </div>
            </div>
        </div>
        </>
    )
  }
}  

export default SignUp