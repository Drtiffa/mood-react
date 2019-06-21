import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <div className="mood_nav">
            <div className="mood_logo">
                <Link to='/'><span>Mood</span></Link>
            </div>
            <div className="mood_text-intro">
                <h1>Create your avatar</h1>
            </div>
            <div className="mood_login">
                <Link to='/login'><button className="mood_login-button">Login</button></Link>
            </div>
        </div>
    );
  }
}

export default Header;