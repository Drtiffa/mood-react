import React, { Component } from 'react';

class CreateAvatar extends Component {
  state = {
    params : [],
    display : 'shape'
  }

  componentDidMount() {
    fetch('http://localhost:3001/')
    .then(res => res.json())
    .then(params => this.setState( { params } ))
    .catch(err => console.log(err))
  }

  display = (part) => {
    this.setState({ display: part })
  } 

  render() {
    return (
        <div id="params" className="mood_create-avatar">
          <div className="mood_create-avatar-nav">
              <ul className="mood_create-nav-list">
                <li onClick={() => this.display('shape')} className="mood_create-nav-option">shape</li>
                <li onClick={() => this.display('face')} className="mood_create-nav-option">face</li>
                <li onClick={() => this.display('hair')} className="mood_create-nav-option">hair</li>
                <li onClick={() => this.display('accessorie')} className="mood_create-nav-option">details</li>
              </ul>
          </div>
          {this.state.display === 'shape' &&  <div className="mood_create-avatar-wrapper">
            {this.state.params.map(x => { if(x.categorie === "shape") {
              return (<div className={`choice_element ${x.element}`}>
              <img src={`${x.image}`} alt="test"/>
            </div>)}})}
          </div>}
          {this.state.display === 'face' &&  <div className="mood_create-avatar-wrapper">
            {this.state.params.map(x => { if(x.categorie === "face") {
              return (<div className={`choice_element ${x.element}`}>
              <img src={`${x.image}`} alt="test"/>
            </div>)}})}
          </div>}
          {this.state.display === 'hair' &&  <div className="mood_create-avatar-wrapper">
            {this.state.params.map(x => { if(x.categorie === "hair") {
              return (<div className={`choice_element ${x.element}`}>
              <img src={`${x.image}`} alt="test"/>
            </div>)}})}
          </div>}
          {this.state.display === 'accessorie' &&  <div className="mood_create-avatar-wrapper">
            {this.state.params.map(x => { if(x.categorie === "accessorie") {
              return (<div className={`choice_element ${x.element}`}>
              <img src={`${x.image}`} alt="test"/>
            </div>)}})}
          </div>}
        </div>    
    );
  }  
}

export default CreateAvatar;
