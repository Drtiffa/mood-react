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
    
      // je fais le lien avec mon back en faisant un appel HTTP a la racine
      componentDidMount() {
        fetch('https://mood-avatar.herokuapp.com/')
        .then(res => res.json())
        .then(params => this.setState( { params } ))
        .catch(err => console.log(err))

        // à l'ouverture de l'app ma catégorie shape est visible de base
        this.setState({ display: this.state.categories[0] })
      }
    
      // affiche ma categorie au click
      display = (category, index) => {
        this.setState({ display: category })
        this.setState({ selectedMenuIndex: index })
      } 

      // selectionne les elements au click pour composer l'avatar
      selectAvatar = (elementNumber) => {
        // on créer une copie du tableau avatar_elements
        var new_avatar_elements = [...this.state.avatar_elements]
        // recuper la category correspondant a elementNumber
        var element_category = this.state.params.find(x => x.element === 'element_' + elementNumber).category
        // on recupere l'index de ma category dans mon tableau categories
        var category_index = this.state.categories.findIndex(x => x === element_category);
        // on remplace l'index de l'element seclectionné pour sa category
        new_avatar_elements[category_index] = elementNumber
        this.setState( {
          // le tableau avatar_elements est remplacé par sa copie new_avatar_elements
          avatar_elements : new_avatar_elements
        })
      }

      // canvas qui me permet le dowload de l'image de mon avatar
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