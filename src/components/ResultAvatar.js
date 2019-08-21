import React, { Component } from 'react';

class ResultAvatar extends Component {
  render() {
    return(
      <>
        <div className="mood_result-avatar">
          {/* compare the avatar_elements and params tables to find the same element in my two tables */}
          {this.props.state.avatar_elements.map(y => {
            var param = this.props.state.params.find(x => x.element === 'element_'+ y)
            // if find the same element in my two arrays then I inject the param into src and alt
            return <img key={y} id="image_svg" className="mood_result-image" src={param && param.image} alt={param && param.element}/>
          })}
        </div>
        <canvas id="canvas" width="500" height="500"></canvas>
      </>
    );
  }
}

export default ResultAvatar;