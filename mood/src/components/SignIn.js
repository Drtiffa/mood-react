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

    // permet au raffraichissement de l'app de se reconnecter grace au Local Storage
    checkLocalStorage = () => {
    var email = localStorage.getItem("email");
        if (email) {
            this.setState({ email });
        }
    }

    // je recupere l'info rentré dans l'input 
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    // j'envoie les infos remplis dans mes input à mon back pour les rentrer dans ma BDD
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
            // apres verification, si je suis bien loger je suis renvoyé sur la Home au bout d'une seconde
            setTimeout(() => {
                window.location.href = '/';
            }, 1000)
        }
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