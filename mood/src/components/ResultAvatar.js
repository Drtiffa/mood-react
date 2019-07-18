import React, { Component } from 'react';

class ResultAvatar extends Component {
  render() {
    return(
      <div className="mood_result-avatar">
        {/* je compare les tableaux avatar_elements et params afin de retrouver le même element dans mes deux tableaux */}
        {this.props.state.avatar_elements.map(y => {
         var param = this.props.state.params.find(x => x.element === 'element_'+ y)
        // si je trouve le même element dans mes deux tableaux alors j'injecte le param dans src et alt
         return <img className="mood_result-image" src={param && param.image} alt={param && param.element}/>
         })
        }
      </div>
    );
  }
}

export default ResultAvatar;
