import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';

class App extends Component {
  state = {
    params : [],
  }

  componentDidMount() {
    fetch('http://localhost:3001/params')
    .then(res => res.json())
    .then(params => this.setState( { params } ))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
          <div id="background"></div>
          <div className="mood_main">
              <div className="mood_col-main">
                  <div className="mood_container">
                    <Header />
                    <div id="params">
                      {this.state.params.map((x) => <div className={`choice_element ${x.element}`}>
                      <img src={x.image} alt="test"></img>
                      </div>)}
                    </div>
                  </div>
              </div> 
          </div>  
        </div>     
    );
  }  
}

export default App;
