import React, { Component } from 'react';
	
class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    checkLocalStorage = () => {
    var email = localStorage.getItem("email");
        if (email) {
            this.setState({ email });
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    postSignIn = (email, password) => {
        var body = JSON.stringify({ email, password })
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        fetch('http://localhost:3001/users/signin', {
            method: 'POST',
            headers,
            body
        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem("token",data.token)
            localStorage.setItem("email",email)
            this.setState({ email });
        })
        .catch(err => console.warn(err))
    }

    logOut = () => {
	    this.setState({ email: '' });
	    localStorage.removeItem("token");
	    localStorage.removeItem("email");
	  }

    render() {
        return (
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
        )
    }    
}

export default SignIn