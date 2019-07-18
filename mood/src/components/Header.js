import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
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
                {/* au click je suis renvoyé sur la page Login */}
                <Link to='/login'><button className="mood_login-button">Login</button></Link>
            </div>
        </div>
    );
  }
}

export default Header;