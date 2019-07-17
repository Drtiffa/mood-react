import React, { Component } from 'react';

class ResultAvatar extends Component {
  displayParam = (param) => {
    return <img className="mood_result-image" src={param && param.image} alt={param && param.element}/>
  }

  render() {
    return(
      <div className="mood_result-avatar">
        {this.props.state.avatar_elements.map(y => {
         var param = this.props.state.params.find(x => x.element === 'element_'+ y)
         return this.displayParam(param)
         })
        }
      </div>
    );
  }
}

export default ResultAvatar;
