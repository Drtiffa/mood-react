import React, { Component } from 'react';
import CreateAvatar from './CreateAvatar';
import ButtonDownload from './ButtonDownload';
import ResultAvatar from './ResultAvatar';

class Home extends Component {
    state = {
        params : [],
        categories : ['shape', 'face', 'hair', 'accessorie'],
        display : '',
        selectedOption: 'element_1',
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
    
      handleOptionChange = changeEvent => {
        this.setState({
          selectedOption: changeEvent.target.value
        });
      };

    render() {
        return (
        <div className="mood_home">
            <CreateAvatar state={this.state} 
            display={this.display}
            handleOptionChange={this.handleOptionChange} />
            <ResultAvatar state={this.state} />
            <ButtonDownload />  
        </div>
    )
    }
}

export default Home