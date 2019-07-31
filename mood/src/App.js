import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="background"></div>
        <div className="mood_main">
            <div className="mood_col-main">
                <div className="mood_container">
                  <Router>
                    <Header />
                    {/* je dis que tel route renvoi a tel component */}
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/login' component={Login} />
                    </Switch>
                  </Router>
                </div>    
            </div> 
        </div>  
      </div>     
    ); 
  }  
}  

export default App;