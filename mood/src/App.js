import React from 'react';
import './App.scss';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
        <div id="background"></div>
        <div className="mood_main">
            <div className="mood_col-main">
                <div className="mood_container">
                  <Header />
                </div>
            </div> 
        </div>  
      </div>     
  );
}

export default App;
