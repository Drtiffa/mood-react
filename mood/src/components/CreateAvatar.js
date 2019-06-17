import React, { Component } from 'react';

class CreateAvatar extends Component {
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
        <div id="params">
            {this.state.params.map((x) => <div className={`choice_element ${x.element}`}>
              <img src={`${x.image}`} alt="test"/>
            </div>)}
        </div>      
    );
  }  
}

export default CreateAvatar;
