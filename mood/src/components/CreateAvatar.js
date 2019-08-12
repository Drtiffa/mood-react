import React, { Component } from 'react';

class CreateAvatar extends Component {
  render() {
    return (
        <div className="mood_create-avatar">
          <div className="mood_create-avatar-nav">
              <ul className="mood_create-nav-list">
                {/* je boucle dans mon tableau categories pour créer chaque li par categorie */}
                {this.props.state.categories.map((category, index) => {
                    // je rajoute la class active au li selectionné
                    var selectedIndex = this.props.state.selectedMenuIndex === index ? 'active' : '';
                    return <li onClick={() => this.props.display(category, index)} className={`mood_create-nav-option ${selectedIndex}`}>{category}</li>
                  })
                }
              </ul>
          </div>
          {/* je boucle dans mon tableau categories */}
          {this.props.state.categories.map(category => 
            this.props.state.display === category &&  
            <div className={`mood_create-avatar-wrapper ${category}`}>
              {/* pour chaque categorie je retrouve les elements dans mon tableau params qui on cette categorie */}
              {this.props.state.params.map((x, i)  => { if(x.categorie === category) {
                return (
                  // je return ensuite toutes mes images qui ont la même categorie
                  <div key={i} className={`choice_element ${x.element}`}>
                    <input type="radio" id={x.element} value={x.element} checked={this.props.state.avatar_elements.some(x => x === i+1)} />
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