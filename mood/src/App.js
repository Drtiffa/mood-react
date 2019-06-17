import React from 'react';
import './App.scss';
import Header from './components/Header';
import CreateAvatar from './components/CreateAvatar';
import ButtonDownload from './components/ButtonDownload';
import Canvas from './components/canvas';

function App() {
  
  return (
    <div className="App">
        <div id="background"></div>
        <div className="mood_main">
            {/* <div className="mood_col-test">
              <Canvas />
            </div> */}
            <div className="mood_col-main">
                <div className="mood_container">
                  <Header />
                  <CreateAvatar />
                  <ButtonDownload />
                </div>
            </div> 
        </div>  
      </div>     
  ); 
}  

export default App;
