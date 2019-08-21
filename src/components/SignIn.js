import React, { Component } from 'react';
import ResultMessage from './ResultMessage';
	
class SignIn extends Component {
    state = {
        email: '',
        password: '',
        resultType: '',
        resultMessage: '',
        redirect: false
    }

    // allows the refresh of the app to reconnect with Local Storage
    checkLocalStorage = () => {
    var email = localStorage.getItem("email");
        if (email) {
            this.setState({ email });
        }
    }

    // collect the info entered in the input
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    // send the information filled in my input to my database
    postSignIn = (email, password) => {
        var body = JSON.stringify({ email, password })
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        fetch('https://mood-avatar.herokuapp.com/users/auth', {
            method: 'POST',
            headers,
            body
        })
        .then(res => res.json())
        .then(data => {
        this.setState({ resultType: data.resultType, resultMessage: data.resultMessage });

        if (data.resultType === 'success') {
            localStorage.setItem("token",data.token)
            localStorage.setItem("email",email)
            // after verification, if login returned to the Home after one second
            setTimeout(() => {
                window.location.href = '/';
            }, 1000)
        }
    })
        .catch(err => console.warn(err))
    }

    // function triggered by the timeOut, which makes the component ResultMessage hidden
    clearResult = () => {
        this.setState({ resultType: '', resultMessage: '' });
    }  

    render() {
        return (
            <>
                <div className="result_message">{this.state.resultMessage && <ResultMessage type={this.state.resultType} message={this.state.resultMessage} clearResult={this.clearResult} />}</div>
                <div className="login_sign-in">
                    <div className="sign-in_content">
                        <div className="sign-in_title">
                            <h2>Sign in</h2>
                        </div>
                        <form className="sign-in_form">
                            <div className="sign-in_form-element sign-in_form-email">
                                <label>Email</label>
                                <input type="text" id="email" name="email" required placeholder="Enter email" value={this.state.email} onChange={this.handleChange}></input>
                            </div>
                            <div className="sign-in_form-element sign-in_form-password">
                                <label>Password</label>
                                <input type="password" id="password" name="password" required placeholder="Enter password" value={this.state.password} onChange={this.handleChange}></input>
                            </div>
                        </form>
                        <div className="sign-in_button">
                            <button className="sign-in_submit" value="Signin" onClick={() => this.postSignIn(this.state.email, this.state.password)}>Sign in</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }    
}

export default SignIn