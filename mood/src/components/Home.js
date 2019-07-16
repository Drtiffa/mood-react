import React, { Component } from 'react';
import CreateAvatar from './CreateAvatar';
import ButtonDownload from './ButtonDownload';
import ResultAvatar from './ResultAvatar';

class Home extends Component {
    state = {
        params : [],
        categories : ['shape', 'face', 'hair', 'accessorie'],
        display : '',
        avatar_elements : [1, 4, 12, 19]
      }
    
      componentDidMount() {
        fetch('http://localhost:3001/')
        .then(res => res.json())
        .then(params => this.setState( { params } ))
        .catch(err => console.log(err))
    
        this.setState({ display: this.state.categories[0] })
      }
    
      display = (part) => {
        this.setState({ display: part })
      } 
    
      handleOptionChange = (changeEvent) => {
        this.setState({
          selectedOption: changeEvent.target.value
        });
      };

      selectAvatar = (elementNumber) => {
          var new_avatar_elements = [...this.state.avatar_elements]
          //recuper la category correspondant a elementNumber
          var element_category = this.state.params.find(x => x.element === 'element_' + elementNumber).categorie
          var category_index = this.state.categories.findIndex(x => x === element_category)
          new_avatar_elements[category_index] = elementNumber
          this.setState( {
              avatar_elements : new_avatar_elements
          })
      }

    render() {
        return (
        <div className="mood_home">
            <CreateAvatar state={this.state} 
            display={this.display}
            handleOptionChange={this.handleOptionChange} 
            selectAvatar={this.selectAvatar} />
            <ResultAvatar state={this.state} />
            <ButtonDownload />  
        </div>
    )
    }
}

export default Home