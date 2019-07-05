import React, { Component } from 'react';

class CreateAvatar extends Component {
  state = {
    params : [],
    display : 'shape',
    selectedOption: 'element_1'
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

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

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
            {this.state.params.map((x, i)  => { if(x.categorie === "shape") {
              return (
                <div key={i} className={`choice_element ${x.element}`}>
                  <input type="radio" id={x.element} value={x.element} checked={this.state.selectedOption === `${x.element}`} onChange={this.handleOptionChange} />
						      <label for={x.element}><img src={`${x.image}`} alt={x.element}/></label>
                </div>
            )}})}
          </div>}
          {this.state.display === 'face' &&  <div className="mood_create-avatar-wrapper">
            {this.state.params.map((x, i) => { if(x.categorie === "face") {
              return (
                <div key={i} className={`choice_element ${x.element}`}>
                  <input type="radio" id={x.element} value={x.element} checked={this.state.selectedOption === `${x.element}`} onChange={this.handleOptionChange} />
						      <label for={x.element}><img src={`${x.image}`} alt={x.element}/></label>
                </div>
              )}})}
          </div>}
          {this.state.display === 'hair' &&  <div className="mood_create-avatar-wrapper">
            {this.state.params.map((x, i) => { if(x.categorie === "hair") {
              return (
                <div key={i} className={`choice_element ${x.element}`}>
                  <input type="radio" id={x.element} value={x.element} checked={this.state.selectedOption === `${x.element}`} onChange={this.handleOptionChange} />
						      <label for={x.element}><img src={`${x.image}`} alt={x.element}/></label>
                </div>
              )}})}
          </div>}
          {this.state.display === 'accessorie' &&  <div className="mood_create-avatar-wrapper">
            {this.state.params.map((x, i) => { if(x.categorie === "accessorie") {
              return (
                <div key={i} className={`choice_element ${x.element}`}>
                  <input type="radio" id={x.element} value={x.element} checked={this.state.selectedOption === `${x.element}`} onChange={this.handleOptionChange} />
						      <label for={x.element}><img src={`${x.image}`} alt={x.element}/></label>
                </div>
              )}})}
          </div>}
        </div>    
    );
  }  
}

export default CreateAvatar;
