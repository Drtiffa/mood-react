import React, { Component } from 'react';

class CreateAvatar extends Component {
  state = {
    params : [],
    categories : ['shape', 'face', 'hair', 'accessorie'],
    display : '',
    selectedOption: 'element_1'
  }

  componentDidMount() {
    fetch('http://localhost:3001/')
    .then(res => res.json())
    .then(params => this.setState( { params } ))
    .catch(err => console.log(err))

    this.setState({ display: this.state.categories[0] })
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
                {this.state.categories.map(category => 
                  <li onClick={() => this.display(category)} className="mood_create-nav-option">{category}</li>)
                }
              </ul>
          </div>
          {this.state.categories.map(category => 
            this.state.display === category &&  
            <div className="mood_create-avatar-wrapper">
              {this.state.params.map((x, i)  => { if(x.categorie === category) {
                return (
                  <div key={i} className={`choice_element ${x.element}`}>
                    <input type="radio" id={x.element} value={x.element} checked={this.state.selectedOption === `${x.element}`} onChange={this.handleOptionChange} />
                    <label for={x.element}><img src={`${x.image}`} alt={x.element}/></label>
                  </div>
              )}})}
            </div>
          )}
        </div>    
    );
  }  
}

export default CreateAvatar;
