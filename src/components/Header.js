import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    // disconnect me and send me back to the Login page
    logout = () => {
	    localStorage.removeItem("token");
        localStorage.removeItem("email");
        this.forceUpdate();
    }

    // if I am not login the button LOGIN is visible, the opposite will be the button LOGOUT
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
                {/* at the click I am sent back to my Home at the root of my project */}
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