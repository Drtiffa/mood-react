import React, { Component } from 'react';
import ResultMessage from './ResultMessage';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    confirmedPassword: '',
    resultType: '',
    resultMessage: ''
  }

  // je recupere l'info rentré dans l'input 
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  // j'envoie les infos remplis dans mes input à mon back pour les rentrer dans ma BDD
  postSignUp = (email, password, confirmedPassword) => {
    var body = JSON.stringify({ email, password, confirmedPassword })
    const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
        }
    fetch('https://mood-avatar.herokuapp.com/users', {
      method: 'POST',
      headers,
      body
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({ resultType: data.resultType, resultMessage: data.resultMessage}, () => {
        if (data.resultType === 'success') {
          this.setState({ email: '', password: '', confirmedPassword: '' });
        } 
      });
    })
    .catch(err => console.warn(err))
  }

  // fonction déclenché par le timeOut, qui fait que le composant ResultMessage n'apparait plus
  clearResult = () => {
    this.setState({ resultType: '', resultMessage: '' });
  }  

  render() {
    return (
      <>
        <div className="result_message">{this.state.resultMessage && <ResultMessage type={this.state.resultType} message={this.state.resultMessage} clearResult={this.clearResult} />}
        </div>
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
                        <input type="password" id="confirmedPassword" name="confirmedPassword" required placeholder="Confirmed password" value={this.state.confirmedPassword} onChange={this.handleChange}></input>
                    </div>
                </form>
                <div className="sign-up_button">
                    <button className="sign-up_submit" value="Signup" onClick={() => this.postSignUp(this.state.email, this.state.password, this.state.confirmedPassword)}>Sign up</button>
                </div>
            </div>
        </div>
      </>
    )
  }
}  

export default SignUp