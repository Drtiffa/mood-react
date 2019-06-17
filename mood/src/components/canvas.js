import React, { Component } from 'react';

class Canvas extends Component {
  state = {
    params : [],
  }

  componentDidMount() {
    fetch('http://localhost:3001/params')
    .then(res => res.json())
    .then(params => this.setState( { params } ))
    .then(() => {

      const canvas = document.getElementById('test');
      const ctx = canvas.getContext('2d');
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 1;
      ctx.fillStyle = '#000';
    
      console.log(canvas);
      console.log(this.state.params);
      this.state.params.map((x) => {
        if(typeof x.path === 'string') {

          const path = new Path2D(x.path);
          ctx.stroke(path);
          ctx.fill(path);
        }
      });

      console.log(canvas.toDataURL());
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
        <canvas id="test"></canvas>     
    );
  }  
}

export default Canvas;
