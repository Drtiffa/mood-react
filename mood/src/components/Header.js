import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

class Header extends Component {
  render() {
    return (
    <Router>
        <div className="mood_nav">
            <div className="mood_logo">
            <Link to={'/'}><span>Mood</span></Link>
            </div>
            <div className="mood_text-intro">
                <h1>Create your avatar</h1>
            </div>
            <div className="mood_login">
            <Link to={'/login'}><button className="mood_login-button">Login</button></Link>
            </div>
        </div>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/login' component={Login} />
          </Switch>
      </Router>
    );
  }
}

export default Header;