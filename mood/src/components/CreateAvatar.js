import React, { Component } from 'react';

class CreateAvatar extends Component {
  render() {
    return (
        <div className="mood_create-avatar">
          <div className="mood_create-avatar-nav">
              <ul className="mood_create-nav-list">
                {this.props.state.categories.map(category => 
                  <li onClick={() => this.props.display(category)} className="mood_create-nav-option">{category}</li>)
                }
              </ul>
          </div>
          {this.props.state.categories.map(category => 
            this.props.state.display === category &&  
            <div className="mood_create-avatar-wrapper">
              {this.props.state.params.map((x, i)  => { if(x.categorie === category) {
                return (
                  <div key={i} className={`choice_element ${x.element}`}>
                    <input type="radio" id={x.element} value={x.element} checked={this.props.state.avatar_elements.some(x => x === i+1)} onChange={this.props.handleOptionChange} />
                    {/* fonction callback pour eviter que la fonction selectAvatar se lance toute seule au chargement du component */}
                    <label for={x.element}><img src={`${x.image}`} alt={x.element} onClick={() => this.props.selectAvatar(i+1)}/></label>
                  </div>
              )}})}
            </div>
          )}
        </div>    
    );
  }  
}

export default CreateAvatar;
