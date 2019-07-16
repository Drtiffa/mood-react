import React, { Component } from 'react';

class ResultAvatar extends Component {
  displayParam = (param) => {
    
    return <img src={param && param.image} alt={param && param.element}/>
  }

  render() {
   


    return(
      <div>
       {this.props.state.avatar_elements.map(y => {
         var param = this.props.state.params.find(x => x.element === 'element_'+ y)
         return this.displayParam(param)
       } )
         }

      </div>
    );
  }
}

export default ResultAvatar;
