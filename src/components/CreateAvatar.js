import React, { Component } from 'react';

class CreateAvatar extends Component {
  render() {
    return (
      <div className="mood_create-avatar">
        <div className="mood_create-avatar-nav">
          <ul className="mood_create-nav-list">
            {/* loop in my categories table to create each li by category */}
            {this.props.state.categories.map((category, index) => {
              // add the active class to the selected li
              var selectedIndex = this.props.state.selectedMenuIndex === index ? 'active' : '';
              return <li key={index} onClick={() => this.props.display(category, index)} className={`mood_create-nav-option ${selectedIndex}`}>{category}</li>
            })}
          </ul>
        </div>
        {/* loop in my categories table */}
        {this.props.state.categories.map(category => 
          this.props.state.display === category &&  
          <div key={category} className={`mood_create-avatar-wrapper ${category}`}>
            {/* for each category find the elements in my table params that this category */}
            {this.props.state.params.map((x, i)  => { 
              if(x.category === category) {
                return (
                  // then return all my images that have the same category
                  <div key={i} className={`choice_element ${x.element}`}>
                    <input type="radio" id={x.element} value={x.element} checked={this.props.state.avatar_elements.some(x => x === i+1)} readOnly />
                    {/* callback function to prevent the selectAvatar function launches itself to load the component */}
                    <label htmlFor={x.element}><img src={`${x.image}`} alt={x.element} onClick={() => this.props.selectAvatar(i+1)}/></label>
                  </div>
              )}
              else {
                return null;
              }
            })}
          </div>
        )}
      </div>    
    );
  }  
}

export default CreateAvatar;