import React, { Component } from 'react';
import CreateAvatar from './CreateAvatar';
import ButtonDownload from './ButtonDownload';
import ResultAvatar from './ResultAvatar';

class Home extends Component {
    state = {
        params : [],
        categories : ['shape', 'face', 'hair', 'accessory'],
        display : '',
        avatar_elements : [1, 4, 12, 19],
        selectedMenuIndex : 0
      }
    
      // make the link with my back by making an HTTP call to the root
      componentDidMount() {
        fetch('https://mood-avatar.herokuapp.com/')
        .then(res => res.json())
        .then(params => this.setState( { params } ))
        .catch(err => console.log(err))

        // when opening the app my category shape is visible
        this.setState({ display: this.state.categories[0] })
      }
    
      // show my category on click
      display = (category, index) => {
        this.setState({ display: category })
        this.setState({ selectedMenuIndex: index })
      } 

      // select the elements at the click to compose the avatar
      selectAvatar = (elementNumber) => {
        // create a copy of avatar_elements table
        var new_avatar_elements = [...this.state.avatar_elements]
        // get the category corresponding to elementNumber
        var element_category = this.state.params.find(x => x.element === 'element_' + elementNumber).category
        // get the index of my category in my categories table
        var category_index = this.state.categories.findIndex(x => x === element_category);
        // we replace the index of the element selected for its category
        new_avatar_elements[category_index] = elementNumber
        this.setState( {
          // the avatar_elements table is replaced by its copy new_avatar_elements
          avatar_elements : new_avatar_elements
        })
      }

      // canvas that allows the dowload of the image of my avatar
      componentDidUpdate() { 
        if(this.state.params.length > 0) {
          var canvas = document.getElementById("canvas");
          var ctx = canvas.getContext("2d");
          var image = new Image();
          
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0,0, canvas.width, canvas.height);
    
          const base = this.state.avatar_elements.map(y => {
            var param = this.state.params.find(x => x.element === 'element_'+ y)
            return param && param.image
          });
          
          base.forEach(function(element) {
            image.src = element;
            ctx.drawImage(image,0,0,500,500);
          });
        }
      }

    render() {
      return (
        <div className="mood_home">
            <CreateAvatar state={this.state} 
            display={this.display} 
            selectAvatar={this.selectAvatar} />
            <ResultAvatar state={this.state} 
            componentDidUpdate={this.componentDidUpdate} />
            <ButtonDownload componentDidUpdate={this.componentDidUpdate} />  
        </div>
      )
    }
}

export default Home;