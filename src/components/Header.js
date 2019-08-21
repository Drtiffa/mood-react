import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    // me deconnecte  et me renvoi sur la page Login
    logout = () => {
	    localStorage.removeItem("token");
        localStorage.removeItem("email");
        this.forceUpdate();
    }

    // si je ne suis pas loger le boutton LOGIN est visible, a l'inverse se sera le boutton LOGOUT 
    displayLogin = () => {
        if (localStorage.getItem("token")) {
            return (
                <Link to='/login'><button className="mood_logout-button" onClick={this.logout}>Logout</button></Link>
            )
        } else {
            return (
                <Link to='/login'><button className="mood_login-button">Login</button></Link>
            )
        }
    }

  render() {
    return (
        <div className="mood_nav">
            <div className="mood_logo">
                {/* au click je suis renvoyé sur ma Home à la racine de mon projet */}
                <Link to='/'><span>Mood</span></Link>
            </div>
            <div className="mood_text-intro">
                <h1>Create your avatar</h1>
            </div>
            <div className="mood_login">
                { this.displayLogin() }
            </div>
        </div>
    );
  }
}

export default Header;